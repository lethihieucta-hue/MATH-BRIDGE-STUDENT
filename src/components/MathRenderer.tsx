import React, { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

interface MathRendererProps {
  math: string;
  block?: boolean;
  className?: string;
}

/**
 * Normalizes informal math strings (like Unicode exponents, horizontal fractions,
 * informal limits) into standard KaTeX LaTeX syntax.
 */
export function formatMathFormula(raw: string): string {
  if (!raw) return "";
  let s = raw.trim();

  // Strip enclosing delimiters if present
  if ((s.startsWith("$") && s.endsWith("$")) || (s.startsWith("\\(") && s.endsWith("\\)"))) {
    s = s.replace(/^\$|^\\\(|\$$|\\\)$/g, "").trim();
  } else if ((s.startsWith("$$") && s.endsWith("$$")) || (s.startsWith("\\[") && s.endsWith("\\]"))) {
    s = s.replace(/^\$\$|^\\\[|\$\$$|\\\]$/g, "").trim();
  }

  // Normalize Unicode superscripts and common symbols
  s = s
    .replace(/⁰/g, "^0")
    .replace(/¹/g, "^1")
    .replace(/²/g, "^2")
    .replace(/³/g, "^3")
    .replace(/⁴/g, "^4")
    .replace(/⁵/g, "^5")
    .replace(/⁶/g, "^6")
    .replace(/⁷/g, "^7")
    .replace(/⁸/g, "^8")
    .replace(/⁹/g, "^9")
    .replace(/ⁿ/g, "^n")
    .replace(/⁻¹/g, "^{-1}")
    .replace(/⁻²/g, "^{-2}")
    .replace(/⁻³/g, "^{-3}")
    .replace(/→/g, " \\to ")
    .replace(/->/g, " \\to ")
    .replace(/∞/g, "\\infty")
    .replace(/±/g, "\\pm")
    .replace(/≠/g, "\\neq")
    .replace(/≤/g, "\\le")
    .replace(/≥/g, "\\ge")
    .replace(/∈/g, "\\in")
    .replace(/∉/g, "\\notin")
    .replace(/∪/g, "\\cup")
    .replace(/∩/g, "\\cap")
    .replace(/⊂/g, "\\subset")
    .replace(/⊆/g, "\\subseteq")
    .replace(/∅/g, "\\emptyset")
    .replace(/ℝ/g, "\\mathbb{R}")
    .replace(/ℤ/g, "\\mathbb{Z}")
    .replace(/ℕ/g, "\\mathbb{N}");

  // Fix informal limits: lim_{...} -> \lim_{...}
  s = s.replace(/(?<!\\)lim_\{([^}]+)\}/g, "\\lim_{$1}");

  // Convert (expression) / (expression) -> \frac{expression}{expression}
  s = s.replace(/\(([^()]+)\)\s*\/\s*\(([^()]+)\)/g, "\\frac{$1}{$2}");

  // Convert simple fractions: e.g. 4 / 3 -> \frac{4}{3}, 2/n^2 -> \frac{2}{n^2}, -1/7 -> -\frac{1}{7}
  s = s.replace(/([+-]?)\s*([0-9a-zA-Z^]+)\s*\/\s*([0-9a-zA-Z^]+)/g, "$1\\frac{$2}{$3}");

  // Ensure \displaystyle so fractions are full vertical height and limits have subscripts directly underneath
  if (!s.includes("\\displaystyle") && (s.includes("\\frac") || s.includes("\\lim") || s.includes("\\int") || s.includes("\\sum"))) {
    s = `\\displaystyle ${s}`;
  }

  return s;
}

/**
 * Detects if a short string (e.g. an option like "L = 4 / 3" or a parameter value)
 * is purely or primarily a math expression rather than prose.
 */
export function isPureMathExpression(str: string): boolean {
  const trimmed = str.trim();
  if (trimmed.startsWith("$") || trimmed.startsWith("\\(") || trimmed.startsWith("\\[")) return true;
  // If it contains typical math indicators and is relatively short
  const hasMathTokens = /\\(lim|frac|sqrt|vec|int|sum|alpha|beta|theta|pi|infty|pm|le|ge)|lim_|\^|([0-9a-zA-Z]\s*\/[0-9a-zA-Z])|(=|\+|-|<|>)\s*[0-9]/.test(trimmed);
  const isProse = /[a-zA-ZÀ-ỹ]{4,}\s+[a-zA-ZÀ-ỹ]{4,}\s+[a-zA-ZÀ-ỹ]{4,}/.test(trimmed);
  return hasMathTokens && !isProse;
}

export const MathRenderer: React.FC<MathRendererProps> = ({ math, block = false, className = "" }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cleanFormula = formatMathFormula(math);
      try {
        katex.render(cleanFormula, containerRef.current, {
          displayMode: block,
          throwOnError: false,
        });
      } catch (err) {
        if (containerRef.current) {
          containerRef.current.innerText = math;
        }
      }
    }
  }, [math, block]);

  return <span ref={containerRef} className={`${block ? "block my-2 text-center" : "inline-block align-middle mx-0.5"} ${className}`} />;
};

/**
 * Helper to render text containing LaTeX formulas, dollar-delimited math,
 * or informal math expressions with KaTeX.
 */
export const RichMathText: React.FC<{ text: string; className?: string; block?: boolean }> = ({
  text,
  className = "",
  block = false,
}) => {
  if (!text) return null;

  // Check if the entire string is a math expression (e.g. parameter value "lim_{n→∞}..." or option "L = 4 / 3")
  if (isPureMathExpression(text)) {
    return <MathRenderer math={text} block={block} className={className} />;
  }

  // Pre-process text to wrap obvious informal formulas like `lim_{...} (...) / (...)` in $...$
  let processedText = text.replace(
    /((?:\\lim|lim)_\{[^}]+\}\s*(?:\([^)]+\)|[a-zA-Z0-9^+-]+)\s*\/\s*(?:\([^)]+\)|[a-zA-Z0-9^+-]+))/g,
    "$$$1$$"
  );

  // Split by LaTeX delimiters ($$...$$, $...$, \[...\], \(...\))
  const parts = processedText.split(/(\$\$[\s\S]+?\$\$|\$[^\$]+?\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\))/g);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (!part) return null;

        // Block math: $$ ... $$ or \[ ... \]
        if ((part.startsWith("$$") && part.endsWith("$$")) || (part.startsWith("\\[") && part.endsWith("\\]"))) {
          return <MathRenderer key={index} math={part} block={true} />;
        }

        // Inline math: $ ... $ or \( ... \)
        if ((part.startsWith("$") && part.endsWith("$") && part.length > 2) ||
            (part.startsWith("\\(") && part.endsWith("\\)"))) {
          return <MathRenderer key={index} math={part} block={false} />;
        }

        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};
