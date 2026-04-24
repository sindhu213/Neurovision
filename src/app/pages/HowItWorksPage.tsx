export function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      icon: "📤",
      title: "Upload Image",
      description: "Drag & drop any image or paste a URL to get started",
      color: "from-purple-500 to-pink-500",
    },
    {
      number: 2,
      icon: "⚙️",
      title: "AI Analysis",
      description: "BLIP-2 extracts visual features and understands context",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: 3,
      icon: "✨",
      title: "Generate",
      description: "Captions, answers, and translations are created",
      color: "from-green-500 to-teal-500",
    },
    {
      number: 4,
      icon: "📋",
      title: "Get Results",
      description: "Copy, download, or use via API in your application",
      color: "from-orange-500 to-red-500",
    },
  ];

  const techStack = [
    { name: "Python", color: "bg-blue-500" },
    { name: "PyTorch", color: "bg-orange-500" },
    { name: "Hugging Face", color: "bg-yellow-500" },
    { name: "FastAPI", color: "bg-green-500" },
    { name: "React", color: "bg-cyan-500" },
    { name: "BLIP-2", color: "bg-purple-500" },
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] bg-clip-text text-transparent">
              How It Works
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Powered by state-of-the-art AI models and cutting-edge technology
          </p>
        </div>

        {/* Step-by-Step Flow */}
        <div className="mb-20">
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Connector Line */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-white/20 to-white/10"></div>
                )}

                {/* Step Card */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}></div>

                  <div className="relative">
                    {/* Step Number */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${step.color} text-white font-bold mb-4`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="text-5xl mb-4">{step.icon}</div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Architecture Overview</h2>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] rounded-2xl blur-2xl opacity-20"></div>

            <div className="relative bg-[#1A1A2E]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Input */}
                <div className="flex-shrink-0 text-center">
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-6 mb-2">
                    <svg className="w-16 h-16 mx-auto text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold">Image Input</p>
                </div>

                {/* Arrow */}
                <div className="text-gray-400 text-2xl hidden md:block">→</div>

                {/* BLIP-2 Vision */}
                <div className="flex-shrink-0 text-center">
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-6 mb-2">
                    <svg className="w-16 h-16 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold">BLIP-2 Vision</p>
                </div>

                {/* Arrow */}
                <div className="text-gray-400 text-2xl hidden md:block">→</div>

                {/* Generation */}
                <div className="flex-shrink-0 text-center">
                  <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-xl p-6 mb-2">
                    <svg className="w-16 h-16 mx-auto text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold">Caption Generation</p>
                </div>

                {/* Arrow */}
                <div className="text-gray-400 text-2xl hidden md:block">→</div>

                {/* Output */}
                <div className="flex-shrink-0 text-center">
                  <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-6 mb-2">
                    <svg className="w-16 h-16 mx-auto text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold">Translation / VQA</p>
                </div>
              </div>

              {/* Details */}
              <div className="mt-8 pt-8 border-t border-white/10 grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold mb-2 text-purple-400">Vision Encoder</h4>
                  <p className="text-sm text-gray-400">Extracts visual features from images using pre-trained models</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2 text-blue-400">Language Model</h4>
                  <p className="text-sm text-gray-400">Generates natural language descriptions and answers</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2 text-green-400">Translation Engine</h4>
                  <p className="text-sm text-gray-400">Converts captions to multiple Indic languages</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Powered By</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-white/30 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${tech.color}`}></div>
                  <span className="font-semibold group-hover:text-white transition-colors">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
