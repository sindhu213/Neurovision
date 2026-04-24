import { Link } from "react-router";

export function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#6C63FF]/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2A5CFF]/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-cyan-500/10 rounded-full blur-[80px] animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <span className="text-sm text-gray-300">🚀 Powered by BLIP-2 & Advanced AI</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#6C63FF] via-[#2A5CFF] to-cyan-400 bg-clip-text text-transparent animate-gradient">
              See Beyond Pixels
            </span>
            <br />
            <span className="text-white">AI That Understands Your Images</span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Generate intelligent captions, answer visual questions, and translate descriptions into 7+ Indic languages with NeuroVision AI's advanced multi-modal understanding.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/demo"
              className="px-8 py-4 bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#6C63FF]/50 transition-all duration-300 transform hover:scale-105"
            >
              Try Demo
            </Link>
            <Link
              to="/docs"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              View Docs
            </Link>
          </div>

          {/* Demo Preview */}
          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] rounded-2xl blur-xl opacity-50"></div>
            <div className="relative bg-[#1A1A2E]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm">Upload Image</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10 animate-pulse">
                    <p className="text-sm text-gray-300">📝 A beautiful sunset over mountains...</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10 animate-pulse delay-200">
                    <p className="text-sm text-gray-300">🌐 पहाड़ों पर सुंदर सूर्यास्त...</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10 animate-pulse delay-400">
                    <p className="text-sm text-gray-300">❓ What's in this image?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#6C63FF] mb-2">99%</div>
              <div className="text-sm text-gray-400">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2A5CFF] mb-2">7+</div>
              <div className="text-sm text-gray-400">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">&lt;1s</div>
              <div className="text-sm text-gray-400">Real-time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-sm text-gray-400">Tone Options</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#6C63FF]/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-4xl mb-4">🖼️</div>
                <h3 className="text-xl font-bold mb-2">Smart Captioning</h3>
                <p className="text-gray-400">Generate accurate, contextual descriptions for any image instantly.</p>
              </div>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#2A5CFF]/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2A5CFF]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold mb-2">Multilingual Support</h3>
                <p className="text-gray-400">Translate captions into Hindi, Bengali, Punjabi, and more.</p>
              </div>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="text-4xl mb-4">❓</div>
                <h3 className="text-xl font-bold mb-2">Visual Q&A</h3>
                <p className="text-gray-400">Ask questions about images and get intelligent answers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
