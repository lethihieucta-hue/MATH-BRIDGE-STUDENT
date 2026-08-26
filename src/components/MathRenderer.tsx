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
    .replace(/ℕ/g, "\\mathbb{N}")
    .replace(/⊥/g, "\\perp ")
    .replace(/·/g, "\\cdot ");

  // Fix informal limits: lim_{...} -> \lim_{...}
  s = s.replace(/(?<!\\)lim_\{([^}]+)\}/g, "\\lim_{$1}");

  // Convert (expression) / (expression) -> \frac{expression}{expression}
  s = s.replace(/\(([^()]+)\)\s*\/\s*\(([^()]+)\)/g, "\\frac{$1}{$2}");

  // Convert [expression] / [expression] -> \frac{expression}{expression}
  s = s.replace(/\[([^\[\]]+)\]\s*\/\s*\[([^\[\]]+)\]/g, "\\frac{$1}{$2}");

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
  const hasMathTokens = /\\(lim|frac|sqrt|vec|int|sum|alpha|beta|theta|pi|infty|pm|le|ge|perp|cdot)|lim_|\^|([0-9a-zA-Z]\s*\/[0-9a-zA-Z])|(=|\+|-|<|>|≤|≥|⊥)\s*[0-9a-zA-Z]/.test(trimmed);
  const isProse = /[a-zA-ZÀ-ỹ]{4,}\s+[a-zA-ZÀ-ỹ]{4,}\s+[a-zA-ZÀ-ỹ]{4,}/.test(trimmed);
  return hasMathTokens && !isProse;
}

/**
 * Automatically identifies mathematical formulas, equations, coordinates,
 * and LaTeX commands inside text that lack $...$ delimiters, and wraps them in $...$
 */
export function autoWrapMathInText(text: string): string {
  if (!text) return "";

  // If already pure math, wrap whole string if not already wrapped
  if (isPureMathExpression(text)) {
    if (!text.startsWith("$") && !text.startsWith("\\(") && !text.startsWith("\\[")) {
      return `$${text}$`;
    }
    return text;
  }

  // Handle multi-line text (e.g. essays, solution steps)
  const lines = text.split("\n");
  const processedLines = lines.map((line) => {
    const trimmed = line.trim();
    if (!trimmed) return line;

    // If line is already wrapped in $$ or $ or \[, keep it
    if (trimmed.startsWith("$") || trimmed.startsWith("\\[")) return line;

    // Check if line is a stand-alone display math equation
    // (starts with an equation or LaTeX command, with at most 2 long prose words)
    const longWords = trimmed.match(/[a-zA-ZÀ-ỹ]{4,}/g) || [];
    const isEquationLine =
      /^(\\(?:sum|int|lim|frac|sqrt|vec|prod|mathbf|rho|alpha|beta|theta|pi|partial|iff|implies|cos|sin|tan|ln|log|exp)|[a-zA-Z0-9_'^()]+\s*=\s*[-+]?[0-9a-zA-Z\\]+)/.test(
        trimmed
      ) && longWords.length <= 2;

    if (isEquationLine) {
      return `$$${trimmed}$$`;
    }

    // Split line by existing LaTeX delimiters ($$...$$, $...$, \[...\], \(...\))
    const tokens = line.split(/(\$\$[\s\S]+?\$\$|\$[^\$]+?\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\))/g);

    return tokens
      .map((part) => {
        // If already delimited, preserve as-is
        if (
          (part.startsWith("$") && part.endsWith("$") && part.length > 2) ||
          (part.startsWith("\\[") && part.endsWith("\\]")) ||
          (part.startsWith("\\(") && part.endsWith("\\)")) ||
          (part.startsWith("$$") && part.endsWith("$$"))
        ) {
          return part;
        }

        let p = part;

        // 1. Math formulas with LaTeX commands: e.g. \sum_{n=1}^\infty (1/2)^n = 1, \lim_{...}, \int..., \frac...
        p = p.replace(
          /(\\(?:sum|int|lim|frac|sqrt|prod|alpha|beta|theta|pi|infty|pm|le|ge|perp|cdot)(?:_\{[^}]+\}|\^[a-zA-Z0-9\\{}]+|\{[^}]+\})*(?:\s*(?:=|<|>|≤|≥|\+|-|\*|\/|\to)\s*(?:[a-zA-Z0-9_^{}\\/()[\]\s.+-]+))*)/g,
          (match) => `$${match.trim()}$`
        );

        // 2. Informal limits: e.g. lim_{n→∞} (4n³ - 2n + 1) / (3n³ + 5n² - 7)
        p = p.replace(
          /((?:\\lim|lim)_\{[^}]+\}\s*(?:\([^)]+\)|\[[^\]]+\]|[a-zA-Z0-9^+-]+)\s*\/\s*(?:\([^)]+\)|\[[^\]]+\]|[a-zA-Z0-9^+-]+))/g,
          (match) => `$${match.trim()}$`
        );

        // 3. Probability expressions: e.g. P(A_k | B) = [P(A_k) P(B | A_k)] / [\sum_{i=1}^n P(A_i) P(B | A_i)] or P(A ∩ B) = 0.56
        p = p.replace(
          /(P\([A-Za-z0-9_'\^| \t,+-∩∪\\]+\)(?:\s*(?:=|<|>|≤|≥)\s*[a-zA-Z0-9_^{}\\/()[\]\s.+-]+)?)/g,
          (match) => `$${match.trim()}$`
        );

        // 4. Equations of curves/lines: e.g. y = x^3 - 3x + 2, y = f'(x_0)(x - x_0) + y_0, f(x) = 2x³ - 5x² + 4x - 7
        p = p.replace(
          /\b((?:y|f\(x\)|s\(t\)|v\(t\)|h\(t\))\s*=\s*[-+]?[0-9a-zA-Z^_{}'()+-]+(?:\s*[-+*\/]\s*[0-9a-zA-Z^_{}'()+-]+)+)\b/g,
          (match) => `$${match.trim()}$`
        );

        // 5. Tangent slopes and derivative values: e.g. k = f'(2) = 8, f'(x) = 6x² - 10x + 4
        p = p.replace(
          /\b((?:k|f'\(x\)|f'\([0-9]+\))\s*=\s*[-+]?[0-9a-zA-Z^_{}'()+-]+(?:\s*[-+*\/]\s*[0-9a-zA-Z^_{}'()+-]+)*)\b/g,
          (match) => `$${match.trim()}$`
        );

        // 6. Coordinate points: e.g. M(2, 4), S(0, 0, 10), O(0, 0, 0)
        p = p.replace(
          /\b([A-Z]\([-+]?[0-9]+(?:\.[0-9]+)?,\s*[-+]?[0-9]+(?:\.[0-9]+)?(?:,\s*[-+]?[0-9]+(?:\.[0-9]+)?)?\))\b/g,
          (match) => `$${match.trim()}$`
        );

        // 7. Perpendicular relations: e.g. SA ⊥ AB, SA ⊥ AC, SA ⊥ (ABC)
        p = p.replace(
          /\b([A-Z]{1,3}\s*(?:⊥|\\perp)\s*(?:[A-Z]{1,3}|\([A-Z]{1,4}\)))\b/g,
          (match) => `$${match.trim()}$`
        );

        return p;
      })
      .join("");
  });

  return processedLines.join("\n");
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

  // Pre-process text to wrap untagged math formulas in $...$
  const processedText = autoWrapMathInText(text);

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
