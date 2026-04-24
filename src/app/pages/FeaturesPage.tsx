export function FeaturesPage() {
  const features = [
    {
      icon: "🖼️",
      title: "Image Captioning",
      description: "Generate accurate, contextual descriptions for any image using advanced BLIP-2 vision models.",
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "hover:border-purple-500/50",
    },
    {
      icon: "❓",
      title: "Visual Q&A",
      description: "Ask anything about your image and get intelligent, context-aware answers in real-time.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "hover:border-blue-500/50",
    },
    {
      icon: "🌐",
      title: "7+ Languages",
      description: "Translate captions into Hindi, Bengali, Punjabi, Tamil, Telugu, Marathi, and more Indic languages.",
      gradient: "from-green-500/20 to-teal-500/20",
      border: "hover:border-green-500/50",
    },
    {
      icon: "🎭",
      title: "Tone Adaptation",
      description: "Choose from multiple tones: happy, sad, formal, casual, or humorous to match your content style.",
      gradient: "from-orange-500/20 to-red-500/20",
      border: "hover:border-orange-500/50",
    },
    {
      icon: "📸",
      title: "Multiple Captions",
      description: "Get diverse perspectives and descriptions of the same image with multiple caption variants.",
      gradient: "from-indigo-500/20 to-purple-500/20",
      border: "hover:border-indigo-500/50",
    },
    {
      icon: "🛍️",
      title: "E-commerce Ready",
      description: "Auto-generate compelling product descriptions and listings for your online store inventory.",
      gradient: "from-yellow-500/20 to-orange-500/20",
      border: "hover:border-yellow-500/50",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] bg-clip-text text-transparent">
              What Can NeuroVision AI Do?
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Explore the powerful capabilities that make NeuroVision AI the ultimate image understanding platform
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all duration-300 hover:transform hover:scale-105 ${feature.border}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <div className="relative">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Video Section */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] rounded-2xl blur-2xl opacity-30"></div>
          <div className="relative bg-[#1A1A2E]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">See It In Action</h3>
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl h-80 flex items-center justify-center border border-white/10">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-gray-400">Demo video placeholder</p>
                <p className="text-sm text-gray-500 mt-2">Watch how NeuroVision AI processes images in real-time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] bg-clip-text text-transparent mb-2">
              99%+
            </div>
            <div className="text-sm text-gray-400">Caption Accuracy</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] bg-clip-text text-transparent mb-2">
              &lt;1s
            </div>
            <div className="text-sm text-gray-400">Processing Time</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] bg-clip-text text-transparent mb-2">
              7+
            </div>
            <div className="text-sm text-gray-400">Supported Languages</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] bg-clip-text text-transparent mb-2">
              5
            </div>
            <div className="text-sm text-gray-400">Caption Tones</div>
          </div>
        </div>
      </div>
    </div>
  );
}
