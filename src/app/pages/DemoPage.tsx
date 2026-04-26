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
  const [multiCaptions, setMultiCaptions] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const tones = [
    { id: "happy", label: "Happy", emoji: "😊" },
    { id: "formal", label: "Formal", emoji: "🎩" },
    { id: "casual", label: "Casual", emoji: "😎" },
    { id: "funny", label: "Humorous", emoji: "😂" },
    { id: "motivational", label: "Inspire", emoji: "💪" },
  ];

  const languages = [
    { id: "english", label: "English", native: "EN" },
    { id: "hindi", label: "Hindi", native: "HI" },
    { id: "bengali", label: "Bengali", native: "BN" },
    { id: "punjabi", label: "Punjabi", native: "PJ" },
    { id: "gujarati", label: "Gujarati", native: "GU" },
  ];

  const handleFileChange = useCallback((file: File) => {
    setUploadedImage(file);
    setPreviewUrl(URL.createObjectURL(file));
    setCaptions([]);
    setVqaMessages([]);
    setError(null);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) handleFileChange(file);
  }, [handleFileChange]);

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
      setCaptions([data.toned_caption, data.base_caption]);
    } catch (err: any) {
      setError(err.message || "Caption generation failed.");
    } finally {
      setIsGenerating(false);
    }
  };

  const generateMultilingual = async () => {
    if (!uploadedImage) return;
    setIsGenerating(true);
    try {
      const fd = new FormData();
      fd.append("image", uploadedImage);
      fd.append("tone", selectedTone);
      const res = await fetch(`${API_BASE}/tone-caption`, { method: "POST", body: fd });
      const data = await res.json();
      const baseCaption = data.toned_caption;
      const results: Record<string, string> = {};

      for (const lang of selectedLanguages) {
        if (lang === "english") { results[lang] = baseCaption; continue; }
        const fd2 = new FormData();
        fd2.append("text", baseCaption);
        fd2.append("language", lang);
        const r = await fetch(`${API_BASE}/translate`, { method: "POST", body: fd2 });
        const d = await r.json();
        results[lang] = d.text;
      }
      setMultiCaptions(results);
    } catch (err) {
      setError("Multilingual failed");
    } finally {
      setIsGenerating(false);
    }
  };

  const askQuestion = async () => {
    if (!uploadedImage || !vqaQuestion.trim()) return;
    const question = vqaQuestion.trim();
    setVqaMessages((prev) => [...prev, { role: "user", text: question }]);
    setVqaQuestion("");
    setIsGenerating(true);
    try {
      const fd = new FormData();
      fd.append("image", uploadedImage);
      fd.append("question", question);
      const res = await fetch(`${API_BASE}/vqa`, { method: "POST", body: fd });
      const data = await res.json();
      setVqaMessages((prev) => [...prev, { role: "ai", text: data.answer }]);
    } catch (err) {
      setError("VQA failed");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerate = () => {
    if (!uploadedImage) return setError("Upload an image first.");
    if (activeTab === "captions") generateCaptions();
    else if (activeTab === "multilingual") generateMultilingual();
    else if (activeTab === "vqa") askQuestion();
  };

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#6C63FF]/30 overflow-x-hidden relative">
      
      {/* --- FLOATING BACKGROUND ANIMATION --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#6C63FF]/10 rounded-full blur-[120px] animate-pulse duration-[8s]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#2A5CFF]/10 rounded-full blur-[120px] animate-pulse duration-[10s]" />
        {/* Animated accent orbs */}
        <div className="absolute top-1/4 left-1/2 w-32 h-32 bg-[#6C63FF]/20 rounded-full blur-3xl animate-bounce duration-[15s]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row items-center justify-between mb-16 gap-12">
          <div className="text-left flex-1">
            <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.2em] text-[#6C63FF] mb-6 uppercase">
              Vision Intelligence System
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
              Neuro<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] animate-gradient">Vision</span>
            </h1>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed font-medium">
              A high-performance multi-modal neural network for real-time visual reasoning and captioning.
            </p>
          </div>
          
          {/* DYNAMIC IMAGE CONTAINER */}
          <div 
            onClick={() => fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className="group relative cursor-pointer flex-shrink-0"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] rounded-3xl blur opacity-25 group-hover:opacity-60 transition duration-500"></div>
            <div className={`relative bg-[#0D0D0D] border border-white/10 rounded-3xl overflow-hidden transition-all duration-700 ease-in-out flex items-center justify-center 
              ${previewUrl ? 'w-auto max-w-[500px] h-auto p-2' : 'w-[320px] aspect-square'}`}>
              
              {previewUrl ? (
                <img src={previewUrl} className="max-w-full max-h-[450px] object-contain rounded-2xl shadow-2xl" alt="Preview" />
              ) : (
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-[#6C63FF]/20 transition-all">
                    <svg className="w-8 h-8 text-gray-400 group-hover:text-[#6C63FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4"></path></svg>
                  </div>
                  <p className="text-gray-500 text-sm font-mono tracking-widest uppercase">Load_Texture</p>
                </div>
              )}
              <input ref={fileInputRef} type="file" className="hidden" onChange={(e) => e.target.files?.[0] && handleFileChange(e.target.files[0])} />
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-[360px_1fr] gap-12 items-start">
          
          {/* Navigation & Controls Sidebar */}
          <aside className="space-y-6 bg-white/[0.03] border border-white/10 p-6 rounded-[2.5rem] backdrop-blur-3xl sticky top-12">
            <div className="space-y-2">
              {(["captions", "vqa", "multilingual"] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-500 ${
                    activeTab === tab 
                      ? "bg-[#6C63FF] text-white shadow-2xl shadow-[#6C63FF]/30 translate-x-2" 
                      : "bg-white/5 text-gray-500 hover:bg-white/10"
                  }`}
                >
                  <span className="font-bold uppercase tracking-widest text-xs">{tab}</span>
                  <div className={`w-1.5 h-1.5 rounded-full ${activeTab === tab ? "bg-white shadow-[0_0_8px_white]" : "bg-white/10"}`} />
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-white/5">
              <label className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] mb-4 block">Engine Tone</label>
              <div className="grid grid-cols-3 gap-2">
                {tones.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTone(t.id)}
                    className={`flex flex-col items-center gap-1 p-3 rounded-xl border transition-all duration-300 ${
                      selectedTone === t.id ? "bg-[#6C63FF]/10 border-[#6C63FF] text-[#6C63FF]" : "bg-white/5 border-transparent text-gray-500"
                    }`}
                  >
                    <span className="text-lg">{t.emoji}</span>
                    <span className="text-[10px] font-bold">{t.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* FIX: LANGUAGE SELECTION VISIBILITY */}
            {activeTab === "multilingual" && (
              <div className="pt-4 border-t border-white/5 animate-in fade-in slide-in-from-top-2">
                <label className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] mb-4 block">Translation Matrix</label>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((l) => (
                    <button
                      key={l.id}
                      onClick={() => setSelectedLanguages(prev => prev.includes(l.id) ? prev.filter(x => x !== l.id) : [...prev, l.id])}
                      className={`px-4 py-3 rounded-xl border text-left transition-all duration-300 ${
                        selectedLanguages.includes(l.id) ? "bg-[#2A5CFF]/10 border-[#2A5CFF] text-white shadow-inner" : "bg-white/5 border-transparent text-gray-500"
                      }`}
                    >
                      <div className="text-sm font-black">{l.native}</div>
                      <div className="text-[9px] font-bold opacity-40 uppercase tracking-tighter">{l.label}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !uploadedImage}
              className="group relative w-full py-5 rounded-2xl bg-white text-black font-black text-xs uppercase tracking-[0.3em] overflow-hidden transition-all active:scale-[0.98] disabled:opacity-20 mt-4"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative group-hover:text-white transition-colors">
                {isGenerating ? "Processing..." : "Execute_Task"}
              </span>
            </button>
          </aside>

          {/* Results Main Window */}
          <main className="min-h-[600px]">
            {activeTab === "vqa" ? (
              <div className="flex flex-col h-[550px] bg-white/[0.03] border border-white/10 rounded-[3rem] overflow-hidden backdrop-blur-xl">
                <div className="px-8 py-5 border-b border-white/5 bg-black/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                    <span className="font-mono text-[10px] tracking-[0.3em] text-gray-500 uppercase">Neural_Link_Stable</span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-700 uppercase">v1.0.4</span>
                </div>
                
                <div className="flex-1 p-8 space-y-6 overflow-y-auto custom-scrollbar">
                  {vqaMessages.length === 0 && (
                    <div className="h-full flex flex-col items-center justify-center opacity-20 grayscale">
                       <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                       <p className="text-xs font-mono uppercase tracking-[.2em]">Idle - Awaiting Input</p>
                    </div>
                  )}
                  {vqaMessages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2`}>
                      <div className={`max-w-[85%] px-5 py-3.5 rounded-2xl text-sm leading-relaxed font-medium ${
                        msg.role === "user" 
                          ? "bg-[#6C63FF] text-white rounded-tr-none shadow-xl shadow-[#6C63FF]/10" 
                          : "bg-white/5 text-gray-200 rounded-tl-none border border-white/5"
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-black/40 border-t border-white/5">
                  <div className="relative group">
                    <input
                      value={vqaQuestion}
                      onChange={(e) => setVqaQuestion(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && askQuestion()}
                      placeholder="Query visual context..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl pl-6 pr-14 py-4 text-sm focus:outline-none focus:border-[#6C63FF]/50 transition-all placeholder:text-gray-700"
                    />
                    <button onClick={askQuestion} className="absolute right-3 top-3 p-2 bg-[#6C63FF] rounded-xl hover:bg-[#5a52e6] transition-all active:scale-90">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid gap-4 animate-in fade-in duration-700">
                {isGenerating ? (
                  <div className="space-y-4">
                    {[1, 2, 3].map(n => <div key={n} className="h-24 bg-white/5 rounded-[2rem] animate-pulse border border-white/5" />)}
                  </div>
                ) : activeTab === "captions" ? (
                  captions.map((cap, i) => (
                    <div key={i} className="group relative bg-white/[0.02] border border-white/5 p-8 rounded-[2.5rem] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[9px] font-black text-[#6C63FF] uppercase tracking-[0.3em]">Variant_0{i+1}</span>
                        <button onClick={() => copyToClipboard(cap)} className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-lg">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                        </button>
                      </div>
                      <p className="text-xl font-bold tracking-tight text-gray-100 leading-snug">{cap}</p>
                    </div>
                  ))
                ) : (
                  Object.entries(multiCaptions).map(([lang, text]) => (
                    <div key={lang} className="bg-white/[0.02] border border-white/5 p-6 rounded-[2rem] flex items-center gap-8 group hover:border-[#2A5CFF]/20 transition-all duration-500">
                      <div className="w-16 h-16 rounded-2xl bg-[#2A5CFF]/10 flex flex-col items-center justify-center text-[#2A5CFF] group-hover:scale-110 transition-transform">
                        <span className="font-black text-sm uppercase">{lang.slice(0, 2)}</span>
                      </div>
                      <p className="flex-1 text-lg font-medium text-gray-300 leading-relaxed">{text}</p>
                    </div>
                  ))
                )}
                
                {!isGenerating && captions.length === 0 && Object.keys(multiCaptions).length === 0 && (
                   <div className="h-[400px] border-2 border-dashed border-white/5 rounded-[3rem] flex flex-col items-center justify-center opacity-20">
                      <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center mb-6">
                        <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                      </div>
                      <p className="font-mono text-[10px] tracking-[0.4em] uppercase">Matrix_System_Standby</p>
                   </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Modern Copy Toast */}
      {copied && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-[#6C63FF] text-white px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl z-50 animate-in slide-in-from-bottom-10 flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          Content Synced
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.05); border-radius: 10px; }
        .animate-gradient { background-size: 200% 200%; animation: gradient 5s ease infinite; }
        @keyframes gradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      `}</style>
    </div>
  );
}




