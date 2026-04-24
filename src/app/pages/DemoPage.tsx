import { useState } from "react";

export function DemoPage() {
  const [activeTab, setActiveTab] = useState<"captions" | "vqa" | "multilingual">("captions");
  const [selectedTone, setSelectedTone] = useState("casual");
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(["english"]);
  const [isGenerating, setIsGenerating] = useState(false);

  const tones = [
    { id: "happy", label: "Happy", emoji: "😊" },
    { id: "sad", label: "Sad", emoji: "😢" },
    { id: "formal", label: "Formal", emoji: "🎩" },
    { id: "casual", label: "Casual", emoji: "😎" },
    { id: "humorous", label: "Humorous", emoji: "😂" },
  ];

  const languages = [
    { id: "english", label: "English", native: "English" },
    { id: "hindi", label: "Hindi", native: "हिंदी" },
    { id: "bengali", label: "Bengali", native: "বাংলা" },
    { id: "punjabi", label: "Punjabi", native: "ਪੰਜਾਬੀ" },
  ];

  const mockCaptions = [
    "A vibrant sunset casting golden hues over a peaceful mountain landscape.",
    "Mountains silhouetted against a dramatic orange and purple evening sky.",
    "Nature's masterpiece: stunning twilight colors painting the horizon.",
    "Serene mountain vista bathed in the warm glow of dusk.",
  ];

  const mockMultilingual = {
    english: "A beautiful sunset over mountains with vibrant colors.",
    hindi: "जीवंत रंगों के साथ पहाड़ों पर एक सुंदर सूर्यास्त।",
    bengali: "প্রাণবন্ত রঙের সাথে পাহাড়ের উপর একটি সুন্দর সূর্যাস্ত।",
    punjabi: "ਚਮਕਦਾਰ ਰੰਗਾਂ ਦੇ ਨਾਲ ਪਹਾੜਾਂ ਉੱਤੇ ਇੱਕ ਸੁੰਦਰ ਸੂਰਜ ਡੁੱਬਣਾ।",
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] bg-clip-text text-transparent">
              Interactive Demo
            </span>
          </h1>
          <p className="text-gray-400 text-lg">Upload an image and explore NeuroVision AI's capabilities</p>
        </div>

        <div className="grid lg:grid-cols-[30%_70%] gap-6">
          {/* Left Panel - Controls */}
          <div className="space-y-6">
            {/* Image Upload */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Upload Image</h3>
              <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-[#6C63FF]/50 transition-all cursor-pointer group">
                <svg className="w-12 h-12 mx-auto mb-3 text-gray-400 group-hover:text-[#6C63FF] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-sm text-gray-400 group-hover:text-gray-300">Drag & drop or click to upload</p>
              </div>

              {/* Preview Thumbnail */}
              <div className="mt-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg h-32 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
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
                        if (e.target.checked) {
                          setSelectedLanguages([...selectedLanguages, lang.id]);
                        } else {
                          setSelectedLanguages(selectedLanguages.filter((l) => l !== lang.id));
                        }
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

            {/* VQA Input */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Ask a Question</h3>
              <input
                type="text"
                placeholder="What's in this image?"
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#6C63FF] transition-colors"
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={() => {
                setIsGenerating(true);
                setTimeout(() => setIsGenerating(false), 2000);
              }}
              className="w-full py-4 bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#6C63FF]/50 transition-all duration-300 transform hover:scale-105"
            >
              {isGenerating ? "Generating..." : "Generate"}
            </button>
          </div>

          {/* Right Panel - Results */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-white/10">
              <button
                onClick={() => setActiveTab("captions")}
                className={`pb-3 px-2 font-semibold transition-colors relative ${
                  activeTab === "captions" ? "text-[#6C63FF]" : "text-gray-400 hover:text-gray-300"
                }`}
              >
                📝 Captions
                {activeTab === "captions" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6C63FF]"></div>
                )}
              </button>
              <button
                onClick={() => setActiveTab("vqa")}
                className={`pb-3 px-2 font-semibold transition-colors relative ${
                  activeTab === "vqa" ? "text-[#6C63FF]" : "text-gray-400 hover:text-gray-300"
                }`}
              >
                ❓ VQA
                {activeTab === "vqa" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6C63FF]"></div>
                )}
              </button>
              <button
                onClick={() => setActiveTab("multilingual")}
                className={`pb-3 px-2 font-semibold transition-colors relative ${
                  activeTab === "multilingual" ? "text-[#6C63FF]" : "text-gray-400 hover:text-gray-300"
                }`}
              >
                🌐 Multilingual
                {activeTab === "multilingual" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6C63FF]"></div>
                )}
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === "captions" && (
              <div className="space-y-4">
                {isGenerating ? (
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-white/5 rounded-lg p-4 border border-white/10 animate-pulse">
                        <div className="h-4 bg-white/10 rounded w-3/4"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <div className="bg-gradient-to-r from-[#6C63FF]/20 to-[#2A5CFF]/20 rounded-lg p-6 border border-[#6C63FF]/30">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-xs text-[#6C63FF] font-semibold">PRIMARY CAPTION</span>
                        <button className="text-xs text-gray-400 hover:text-white">📋 Copy</button>
                      </div>
                      <p className="text-lg">{mockCaptions[0]}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {mockCaptions.slice(1).map((caption, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/30 transition-all group">
                          <div className="flex items-start justify-between mb-2">
                            <span className="text-xs text-gray-400">VARIANT {idx + 1}</span>
                            <button className="text-xs text-gray-400 group-hover:text-white">📋</button>
                          </div>
                          <p className="text-sm">{caption}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {activeTab === "vqa" && (
              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="bg-[#6C63FF]/20 border border-[#6C63FF]/30 rounded-lg p-4 max-w-md">
                    <p className="text-sm">What colors are in this image?</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 max-w-md">
                    <p className="text-sm">The image features warm colors including orange, purple, and golden hues from the sunset, along with dark silhouettes of the mountains.</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-[#6C63FF]/20 border border-[#6C63FF]/30 rounded-lg p-4 max-w-md">
                    <p className="text-sm">Is there a person in the image?</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 max-w-md">
                    <p className="text-sm">No, there are no people visible in this image. It's a natural landscape scene.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "multilingual" && (
              <div className="space-y-4">
                {selectedLanguages.map((langId) => {
                  const lang = languages.find((l) => l.id === langId);
                  return (
                    <div key={langId} className="bg-white/5 rounded-lg p-5 border border-white/10 hover:border-white/30 transition-all group">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-[#6C63FF]">{lang?.native}</span>
                          <span className="text-xs text-gray-400">({lang?.label})</span>
                        </div>
                        <button className="text-xs text-gray-400 group-hover:text-white transition-colors">
                          📋 Copy
                        </button>
                      </div>
                      <p className="text-base">{mockMultilingual[langId as keyof typeof mockMultilingual]}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
