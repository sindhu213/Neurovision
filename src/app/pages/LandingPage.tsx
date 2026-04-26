
import { Link } from "react-router";
import { useState, useEffect } from "react";


export function LandingPage() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [currentPreview, setCurrentPreview] = useState(0);
  
  // Rotate through different demo previews with actual image URLs
  const previews = [
    {
      image: "/images/img1.png",
      imageAlt: "Mountain peak at sunset",
      icon: "🏔️",
      caption: "A majestic mountain peak during golden hour, with clouds swirling around the summit",
      translation: "सुनहरे घंटे के दौरान एक राजसी पर्वत शिखर, बादल शिखर के चारों ओर घूम रहे हैं",
      vqa: "Mountain peak",
    },
    {
      image: "/images/img2.png",
      imageAlt: "Orange cat by window",
      icon: "🐱",
      caption: "An adorable orange cat sitting by the window, watching birds outside",
      translation: "एक प्यारी नारंगी बिल्ली खिड़की के पास बैठी, बाहर पक्षियों को देख रही है",
      vqa: "Orange cat",
    },
    {
      image: "/images/img3.png",
      imageAlt: "Pepperoni pizza",
      icon: "🍕",
      caption: "A delicious pepperoni pizza with melted cheese and fresh basil leaves",
      translation: "पिघला हुआ पनीर और ताजी तुलसी के पत्तों के साथ एक स्वादिष्ट पेपरोनी पिज़्ज़ा",
      vqa: "Pepperoni pizza",
    },
    {
      image: "/images/img4.png",
      imageAlt: "Forest path",
      icon: "🌲",
      caption: "A serene forest path covered in autumn leaves, with soft sunlight filtering through trees",
      translation: "शरद ऋतु के पत्तों से ढका एक शांत जंगल का रास्ता, पेड़ों से होकर नरम सूरज की रोशनी आ रही है",
      vqa: "Forest path",
    },
  ];

  // Auto-rotate previews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPreview((prev) => (prev + 1) % previews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#6C63FF]/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2A5CFF]/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-cyan-500/10 rounded-full blur-[80px] animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/2 w-56 h-56 bg-purple-500/10 rounded-full blur-[90px] animate-pulse delay-700"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 animate-fade-in">
            <span className="text-sm text-gray-300">🚀 Powered by BLIP-2 & Advanced AI</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#6C63FF] via-[#2A5CFF] to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              See Beyond Pixels
            </span>
            <br />
            <span className="text-white">AI That Understands Your Images</span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Generate intelligent captions, answer visual questions, and translate descriptions into 4+ Indic languages with NeuroVision AI's advanced multi-modal understanding.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-400">
            <Link
              to="/demo"
              className="px-8 py-4 bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#6C63FF]/50 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">Try Demo Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            </Link>
          </div>

          {/* Enhanced Demo Preview Section */}
          <div className="relative max-w-5xl mx-auto mb-16 animate-fade-in-up animation-delay-600">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6C63FF] via-[#2A5CFF] to-cyan-500 rounded-2xl blur-xl opacity-40 animate-pulse"></div>
            
            {/* Main container */}
            <div className="relative bg-gradient-to-br from-[#1A1A2E] to-[#0F0F1A] backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Preview Carousel Indicator */}
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                {previews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPreview(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentPreview === idx 
                        ? "w-8 bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF]" 
                        : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Preview Section */}
                <div className="relative bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6 border-r border-white/10">
                  <div className="relative group">
                    {/* Animated border */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                    
                    {/* Image container */}
                    <div className="relative rounded-2xl overflow-hidden backdrop-blur-sm cursor-pointer">
                      <img 
                        src={previews[currentPreview].image}
                        alt={previews[currentPreview].imageAlt}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Badge */}
                    <div className="absolute -top-2 -left-2 bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] rounded-full px-3 py-1 text-xs font-semibold shadow-lg z-10">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                        LIVE DEMO
                      </span>
                    </div>
                  </div>
                  
                  {/* Image metadata */}
                  <div className="mt-4 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      AI Processing Ready
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                <div className="p-6 space-y-4">
                  {/* Caption */}
                  <div className="group relative transform transition-all duration-300 hover:translate-x-1">
                    <div className="absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-[#6C63FF] to-[#2A5CFF] rounded-full"></div>
                    <div className="pl-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">📝</span>
                        <span className="text-xs font-semibold text-[#6C63FF] uppercase tracking-wider">AI Caption</span>
                      </div>
                      <p className="text-gray-200 text-sm leading-relaxed">
                        {previews[currentPreview].caption}
                      </p>
                    </div>
                  </div>

                  {/* Translation */}
                  <div className="group relative transform transition-all duration-300 hover:translate-x-1">
                    <div className="absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-[#2A5CFF] to-cyan-500 rounded-full"></div>
                    <div className="pl-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🌐</span>
                        <span className="text-xs font-semibold text-[#2A5CFF] uppercase tracking-wider">Hindi Translation</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed font-mono">
                        {previews[currentPreview].translation}
                      </p>
                    </div>
                  </div>

                  {/* VQA Answer - Now with max 2 words */}
                  <div className="group relative transform transition-all duration-300 hover:translate-x-1">
                    <div className="absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full"></div>
                    <div className="pl-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">❓</span>
                        <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Visual Q&A</span>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                        <div className="text-xs text-gray-400 mb-1 flex items-center gap-2">
                          <span>Question:</span>
                          <span className="text-cyan-400">"What's in this image?"</span>
                        </div>
                        <p className="text-gray-200 text-sm font-medium">
                          {previews[currentPreview].vqa}
                        </p>
                      </div>
                    </div>
                  </div>


                  {/* Real-time processing indicator */}
                  <div className="flex items-center justify-end gap-2 mt-2">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Processing in real-time
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentPreview((prev) => (prev - 1 + previews.length) % previews.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:scale-110"
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentPreview((prev) => (prev + 1) % previews.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:scale-110"
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              
            </div>

          
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-800">
            <div className="text-center group cursor-pointer">
              <div className="text-4xl font-bold text-[#6C63FF] mb-2 group-hover:scale-110 transition-transform duration-300">99%</div>
              <div className="text-sm text-gray-400">Accuracy</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl font-bold text-[#2A5CFF] mb-2 group-hover:scale-110 transition-transform duration-300">4+</div>
              <div className="text-sm text-gray-400">Languages</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">&lt;1s</div>
              <div className="text-sm text-gray-400">Real-time</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">4+</div>
              <div className="text-sm text-gray-400">Tone Options</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🖼️", title: "Smart Captioning", desc: "Generate accurate, contextual descriptions for any image instantly.", color: "#6C63FF", gradient: "from-[#6C63FF]/10" },
              { icon: "🌐", title: "Multilingual Support", desc: "Translate captions into Hindi, Bengali, Punjabi, Gujarati, and more.", color: "#2A5CFF", gradient: "from-[#2A5CFF]/10" },
              { icon: "❓", title: "Visual Q&A", desc: "Ask questions about images and get intelligent, detailed answers.", color: "#06B6D4", gradient: "from-cyan-500/10" }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-opacity-100 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
                onMouseEnter={() => setHoveredFeature(idx)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`text-5xl mb-4 transition-all duration-300 ${hoveredFeature === idx ? 'scale-110 rotate-6' : ''} inline-block`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
      `}</style>
    </div>
  );
}