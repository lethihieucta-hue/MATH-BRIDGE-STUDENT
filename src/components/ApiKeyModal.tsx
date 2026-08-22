import React, { useState, useEffect } from "react";
import {
  KeyRound,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  ShieldAlert,
  Loader2,
  Trash2,
  Check,
  Eye,
  EyeOff,
  Cpu,
} from "lucide-react";
import {
  AVAILABLE_MODELS,
  GeminiModelId,
  getStoredApiKey,
  getStoredModel,
  setStoredApiKey,
  setStoredModel,
  testGeminiApiKey,
} from "../services/geminiService";

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [apiKeyInput, setApiKeyInput] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<GeminiModelId>("gemini-3-flash-preview");
  const [showKey, setShowKey] = useState<boolean>(false);
  const [isTesting, setIsTesting] = useState<boolean>(false);
  const [testResult, setTestResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  useEffect(() => {
    if (isOpen) {
      setApiKeyInput(getStoredApiKey());
      setSelectedModel(getStoredModel());
      setTestResult(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (!apiKeyInput.trim()) {
      setTestResult({
        success: false,
        message: "Vui lòng nhập API Key trước khi lưu.",
      });
      return;
    }
    setStoredApiKey(apiKeyInput.trim());
    setStoredModel(selectedModel);
    if (onSuccess) onSuccess();
    onClose();
  };

  const handleClear = () => {
    setStoredApiKey("");
    setApiKeyInput("");
    setTestResult({
      success: true,
      message: "Đã xóa API Key thành công.",
    });
  };

  const handleTestConnection = async () => {
    if (!apiKeyInput.trim()) {
      setTestResult({
        success: false,
        message: "Vui lòng nhập API Key để kiểm tra.",
      });
      return;
    }

    setIsTesting(true);
    setTestResult(null);

    try {
      const isValid = await testGeminiApiKey(apiKeyInput.trim());
      if (isValid) {
        setTestResult({
          success: true,
          message: "Kết nối thành công! API Key hợp lệ và sẵn sàng hoạt động.",
        });
      } else {
        setTestResult({
          success: false,
          message: "API Key không hợp lệ hoặc đã hết hạn mức. Vui lòng kiểm tra lại.",
        });
      }
    } catch (err: any) {
      setTestResult({
        success: false,
        message: err.message || "Lỗi kiểm tra kết nối.",
      });
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95">
        {/* Header */}
        <div className="bg-linear-to-r from-indigo-600 to-indigo-700 p-6 text-white relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center">
              <KeyRound className="w-5 h-5 text-indigo-100" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg">Cấu hình Google Gemini AI</h3>
              <p className="text-xs text-indigo-100/90">
                Thiết lập API Key & Model để chạy toàn bộ các tính năng AI của Web App
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 text-white/70 hover:text-white p-1 rounded-lg text-lg font-bold"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Guide Alert */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-900 space-y-1 leading-relaxed">
              <p className="font-bold text-amber-950">Chưa có Google Gemini API Key?</p>
              <p>
                Khóa API được lưu an toàn trực tiếp trên trình duyệt của bạn (Local Storage) và không gửi tới bất kỳ máy chủ trung gian nào.
              </p>
              <a
                href="https://aistudio.google.com/api-keys"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-indigo-600 hover:text-indigo-800 underline mt-1"
              >
                <span>Nhấp vào đây để lấy API Key miễn phí tại Google AI Studio</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Model Selection Cards */}
          <div className="space-y-2.5">
            <label className="block text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-indigo-600" />
              <span>1. Chọn Model AI Ưu Tiên (Tự động Fallback khi lỗi)</span>
            </label>
            <div className="grid grid-cols-1 gap-2.5">
              {AVAILABLE_MODELS.map((model) => (
                <div
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                    selectedModel === model.id
                      ? "border-indigo-600 bg-indigo-50/50 shadow-xs"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-slate-900">
                        {model.name}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          model.isDefault
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {model.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      {model.description}
                    </p>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ml-3 ${
                      selectedModel === model.id
                        ? "border-indigo-600 bg-indigo-600 text-white"
                        : "border-slate-300 bg-white"
                    }`}
                  >
                    {selectedModel === model.id && <Check className="w-3 h-3" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* API Key Input */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-800 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <KeyRound className="w-4 h-4 text-indigo-600" />
                <span>2. Nhập Google Gemini API Key</span>
              </span>
              {apiKeyInput && (
                <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Đã nhập
                </span>
              )}
            </label>
            <div className="relative">
              <input
                type={showKey ? "text" : "password"}
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                placeholder="Dán mã API Key của bạn (AIzaSy...)"
                className="w-full px-4 py-2.5 text-xs font-mono rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pr-20 bg-slate-50/50"
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs flex items-center gap-1 p-1"
                title={showKey ? "Ẩn key" : "Hiện key"}
              >
                {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Test Status feedback */}
          {testResult && (
            <div
              className={`p-3 rounded-xl border text-xs flex items-start gap-2 ${
                testResult.success
                  ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                  : "bg-rose-50 border-rose-200 text-rose-900"
              }`}
            >
              {testResult.success ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              )}
              <span className="font-medium">{testResult.message}</span>
            </div>
          )}

          {/* Fallback note */}
          <div className="p-3 bg-slate-100 rounded-xl text-[11px] text-slate-600 space-y-1">
            <span className="font-bold text-slate-800">Cơ chế tự động phòng ngừa lỗi (Auto-Fallback):</span>
            <p>
              Nếu model đang chọn gặp tình trạng hết hạn mức (429 Quota Exceeded), hệ thống sẽ tự động thử lại ngay lập tức với các model dự phòng tiếp theo.
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {apiKeyInput && (
              <button
                type="button"
                onClick={handleClear}
                className="px-3 py-2 text-rose-600 hover:bg-rose-50 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                title="Xóa Key khỏi trình duyệt"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Xóa Key</span>
              </button>
            )}
            <button
              type="button"
              onClick={handleTestConnection}
              disabled={isTesting || !apiKeyInput.trim()}
              className="px-3.5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
            >
              {isTesting ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-indigo-600" />
                  <span>Đang test...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Kiểm tra kết nối</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              Đóng
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-200 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Lưu cấu hình</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
