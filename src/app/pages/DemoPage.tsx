import { useState, useRef, useCallback } from "react";

const API_BASE = "http://localhost:8000";

type Tab = "captions" | "vqa" | "multilingual";

interface VQAMessage {
  role: "user" | "ai";
  text: string;
}

export function DemoPage() {
  const [activeTab, setActiveTab] = useState<Tab>("captions");
  const [selectedTone, setSelectedTone] = useState("casual");
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(["english"]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [captions, setCaptions] = useState<string[]>([]);
  const [vqaQuestion, setVqaQuestion] = useState("");
  const [vqaMessages, setVqaMessages] = useState<VQAMessage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

const tones = [
    { id: "happy", label: "Happy", emoji: "😊" },
    { id: "sad", label: "Sad", emoji: "😢" },
    { id: "formal", label: "Formal", emoji: "🎩" },
    { id: "casual", label: "Casual", emoji: "😎" },
    { id: "funny", label: "Humorous", emoji: "😂" },
    { id: "romantic", label: "Romantic", emoji: "💕" },
    { id: "motivational", label: "Motivational", emoji: "💪" },
  ];

  const languages = [
    { id: "english", label: "English", native: "English" },
    { id: "hindi", label: "Hindi", native: "हिंदी" },
    { id: "bengali", label: "Bengali", native: "বাংলা" },
    { id: "punjabi", label: "Punjabi", native: "ਪੰਜਾਬੀ" },
  ];

  // Map language IDs to translation prompt suffixes sent to caption endpoint
  const langPromptMap: Record<string, string> = {
    english: "",
    hindi: " Translate to Hindi.",
    bengali: " Translate to Bengali.",
    punjabi: " Translate to Punjabi.",
  };

  const handleFileChange = useCallback((file: File) => {
    setUploadedImage(file);
    setPreviewUrl(URL.createObjectURL(file));
    setCaptions([]);
    setVqaMessages([]);
    setError(null);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith("image/")) handleFileChange(file);
    },
    [handleFileChange]
  );

  // ── Caption generation ──────────────────────────────────────────────────────
 const generateCaptions = async () => {
    if (!uploadedImage) return;
    setIsGenerating(true);
    setError(null);
    try {
      const fd = new FormData();
      fd.append("image", uploadedImage);
      fd.append("tone", selectedTone);
      const res = await fetch(`${API_BASE}/tone-caption`, { method: "POST", body: fd });
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
      // Backend returns single caption, wrap in array
      setCaptions([data.toned_caption, data.base_caption]);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Caption generation failed.");
    } finally {
      setIsGenerating(false);
    }
  };

  // ── Multilingual captions ───────────────────────────────────────────────────
  const [multiCaptions, setMultiCaptions] = useState<Record<string, string>>({});

 const generateMultilingual = async () => {
    if (!uploadedImage) return;
    setIsGenerating(true);
    setError(null);
    try {
      const results: Record<string, string> = {};
      await Promise.all(
        selectedLanguages.map(async (langId) => {
          const fd = new FormData();
          fd.append("image", uploadedImage);
          fd.append("tone", selectedTone);
          const res = await fetch(`${API_BASE}/tone-caption`, { method: "POST", body: fd });
          if (!res.ok) throw new Error(`Server error: ${res.status}`);
          const data = await res.json();
          results[langId] = data.toned_caption ?? "";
        })
      );
      setMultiCaptions(results);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Multilingual generation failed.");
    } finally {
      setIsGenerating(false);
    }
  };

  // ── VQA ────────────────────────────────────────────────────────────────────
  const askQuestion = async () => {
    if (!uploadedImage || !vqaQuestion.trim()) return;
    const question = vqaQuestion.trim();
    setVqaMessages((prev) => [...prev, { role: "user", text: question }]);
    setVqaQuestion("");
    setIsGenerating(true);
    setError(null);
    try {
      const fd = new FormData();
      fd.append("image", uploadedImage);
      fd.append("question", question);
      const res = await fetch(`${API_BASE}/vqa`, { method: "POST", body: fd });
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
      setVqaMessages((prev) => [...prev, { role: "ai", text: data.answer }]);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "VQA request failed.");
    } finally {
      setIsGenerating(false);
    }
  };

  // ── Unified generate handler ────────────────────────────────────────────────
  const handleGenerate = () => {
    if (!uploadedImage) {
      setError("Please upload an image first.");
      return;
    }
    if (activeTab === "captions") generateCaptions();
    else if (activeTab === "multilingual") generateMultilingual();
    else if (activeTab === "vqa") askQuestion();
  };

  const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] bg-clip-text text-transparent">
              Interactive Demo
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Upload an image and explore NeuroVision AI's capabilities
          </p>
        </div>

        <div className="grid lg:grid-cols-[30%_70%] gap-6">
          {/* ── Left Panel ── */}
          <div className="space-y-6">
            {/* Image Upload */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Upload Image</h3>
              <div
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-[#6C63FF]/50 transition-all cursor-pointer group"
              >
                <svg
                  className="w-12 h-12 mx-auto mb-3 text-gray-400 group-hover:text-[#6C63FF] transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="text-sm text-gray-400 group-hover:text-gray-300">
                  {uploadedImage ? uploadedImage.name : "Drag & drop or click to upload"}
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleFileChange(f);
                  }}
                />
              </div>

              {/* Preview */}
              <div className="mt-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg h-32 flex items-center justify-center overflow-hidden">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="h-full w-full object-cover rounded-lg"
                  />
                ) : (
                  <svg
                    className="w-16 h-16 text-white/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* Tone Selector */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Caption Tone</h3>
              <div className="grid grid-cols-2 gap-2">
                {tones.map((tone) => (
                  <button
                    key={tone.id}
                    onClick={() => setSelectedTone(tone.id)}
                    className={`p-3 rounded-lg border transition-all ${
                      selectedTone === tone.id
                        ? "bg-[#6C63FF]/20 border-[#6C63FF]"
                        : "bg-white/5 border-white/10 hover:border-white/30"
                    }`}
                  >
                    <div className="text-2xl mb-1">{tone.emoji}</div>
                    <div className="text-xs">{tone.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Language Selector */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Languages</h3>
              <div className="space-y-2">
                {languages.map((lang) => (
                  <label key={lang.id} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedLanguages.includes(lang.id)}
                      onChange={(e) => {
                        setSelectedLanguages((prev) =>
                          e.target.checked
                            ? [...prev, lang.id]
                            : prev.filter((l) => l !== lang.id)
                        );
                      }}
                      className="w-4 h-4 rounded border-white/20 bg-white/5"
                    />
                    <span className="text-sm group-hover:text-[#6C63FF] transition-colors">
                      {lang.label} ({lang.native})
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* VQA Input (shown when VQA tab is active) */}
            {activeTab === "vqa" && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Ask a Question</h3>
                <input
                  type="text"
                  value={vqaQuestion}
                  onChange={(e) => setVqaQuestion(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
                  placeholder="What's in this image?"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#6C63FF] transition-colors"
                />
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-sm text-red-400">
                ⚠️ {error}
              </div>
            )}

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !uploadedImage}
              className="w-full py-4 bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#6C63FF]/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isGenerating ? "Generating…" : "Generate"}
            </button>
          </div>

          {/* ── Right Panel ── */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-white/10">
              {(["captions", "vqa", "multilingual"] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 px-2 font-semibold transition-colors relative capitalize ${
                    activeTab === tab ? "text-[#6C63FF]" : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  {tab === "captions" ? "📝 Captions" : tab === "vqa" ? "❓ VQA" : "🌐 Multilingual"}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6C63FF]" />
                  )}
                </button>
              ))}
            </div>

            {/* ── Captions Tab ── */}
            {activeTab === "captions" && (
              <div className="space-y-4">
                {isGenerating ? (
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="bg-white/5 rounded-lg p-4 border border-white/10 animate-pulse"
                      >
                        <div className="h-4 bg-white/10 rounded w-3/4" />
                      </div>
                    ))}
                  </div>
                ) : captions.length > 0 ? (
                  <>
                    <div className="bg-gradient-to-r from-[#6C63FF]/20 to-[#2A5CFF]/20 rounded-lg p-6 border border-[#6C63FF]/30">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-xs text-[#6C63FF] font-semibold">PRIMARY CAPTION</span>
                        <button
                          onClick={() => copyToClipboard(captions[0])}
                          className="text-xs text-gray-400 hover:text-white transition-colors"
                        >
                          📋 Copy
                        </button>
                      </div>
                      <p className="text-lg">{captions[0]}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {captions.slice(1).map((caption, idx) => (
                        <div
                          key={idx}
                          className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/30 transition-all group"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <span className="text-xs text-gray-400">VARIANT {idx + 1}</span>
                            <button
                              onClick={() => copyToClipboard(caption)}
                              className="text-xs text-gray-400 group-hover:text-white transition-colors"
                            >
                              📋
                            </button>
                          </div>
                          <p className="text-sm">{caption}</p>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-48 text-gray-500">
                    <span className="text-4xl mb-3">📷</span>
                    <p className="text-sm">Upload an image and click Generate</p>
                  </div>
                )}
              </div>
            )}

            {/* ── VQA Tab ── */}
            {activeTab === "vqa" && (
              <div className="space-y-4">
                {vqaMessages.length === 0 && !isGenerating && (
                  <div className="flex flex-col items-center justify-center h-48 text-gray-500">
                    <span className="text-4xl mb-3">❓</span>
                    <p className="text-sm">Type a question in the left panel and click Generate</p>
                  </div>
                )}
                {vqaMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`rounded-lg p-4 max-w-md ${
                        msg.role === "user"
                          ? "bg-[#6C63FF]/20 border border-[#6C63FF]/30"
                          : "bg-white/5 border border-white/10"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </div>
                ))}
                {isGenerating && (
                  <div className="flex justify-start">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-[#6C63FF] rounded-full animate-bounce [animation-delay:0ms]" />
                        <span className="w-2 h-2 bg-[#6C63FF] rounded-full animate-bounce [animation-delay:150ms]" />
                        <span className="w-2 h-2 bg-[#6C63FF] rounded-full animate-bounce [animation-delay:300ms]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ── Multilingual Tab ── */}
            {activeTab === "multilingual" && (
              <div className="space-y-4">
                {isGenerating ? (
                  selectedLanguages.map((id) => (
                    <div
                      key={id}
                      className="bg-white/5 rounded-lg p-5 border border-white/10 animate-pulse"
                    >
                      <div className="h-4 bg-white/10 rounded w-1/3 mb-3" />
                      <div className="h-4 bg-white/10 rounded w-2/3" />
                    </div>
                  ))
                ) : Object.keys(multiCaptions).length > 0 ? (
                  selectedLanguages.map((langId) => {
                    const lang = languages.find((l) => l.id === langId);
                    return (
                      <div
                        key={langId}
                        className="bg-white/5 rounded-lg p-5 border border-white/10 hover:border-white/30 transition-all group"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-[#6C63FF]">
                              {lang?.native}
                            </span>
                            <span className="text-xs text-gray-400">({lang?.label})</span>
                          </div>
                          <button
                            onClick={() => copyToClipboard(multiCaptions[langId] ?? "")}
                            className="text-xs text-gray-400 group-hover:text-white transition-colors"
                          >
                            📋 Copy
                          </button>
                        </div>
                        <p className="text-base">{multiCaptions[langId]}</p>
                      </div>
                    );
                  })
                ) : (
                  <div className="flex flex-col items-center justify-center h-48 text-gray-500">
                    <span className="text-4xl mb-3">🌐</span>
                    <p className="text-sm">Select languages and click Generate</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}