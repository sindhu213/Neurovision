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
    <div className="min-h-screen bg-gradient-to-b from-[#0F0F1A] to-[#1A1A2E] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#6C63FF] animate-pulse"></span>
            <span className="text-sm text-gray-300 tracking-wide">AI-POWERED WORKFLOW</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-[#6C63FF] via-[#8B7FFF] to-[#2A5CFF] bg-clip-text text-transparent">
              How It Works
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Powered by state-of-the-art AI models and cutting-edge technology
          </p>
        </div>

        {/* Step-by-Step Flow */}
        <div className="mb-28">
          <div className="relative">
            {/* Vertical connector for mobile, horizontal for desktop */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#6C63FF]/20 via-[#2A5CFF]/20 to-transparent md:hidden"></div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Desktop Connector */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute top-20 left-[calc(100%-1rem)] w-8 h-px bg-gradient-to-r from-[#6C63FF]/40 to-transparent"></div>
                  )}

                  {/* Step Card */}
                  <div 
                    className="group relative bg-[#1A1A2E]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/[0.05] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1A1A2E]/60"
                    style={{
                      boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 blur-xl`}></div>

                    <div className="relative">
                      {/* Step Number & Icon Row */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} text-white font-bold text-sm shadow-lg`}>
                          {step.number}
                        </div>
                        <span className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-300">
                          {step.icon}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-semibold mb-3 tracking-tight text-white group-hover:text-[#6C63FF] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Mobile indicator */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:hidden absolute left-8 top-full w-px h-8 bg-gradient-to-b from-[#6C63FF]/20 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Architecture Diagram - Simplified but elegant */}
        <div className="mb-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Architecture Overview
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF]/10 via-[#2A5CFF]/5 to-transparent rounded-3xl blur-3xl"></div>

            <div className="relative bg-[#1A1A2E]/30 backdrop-blur-sm border border-white/[0.05] rounded-3xl p-8 md:p-10">
              {/* Flow container */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Input */}
                <div className="flex-1 text-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                    <div className="relative bg-[#0F0F1A] border border-purple-500/20 rounded-2xl p-5 mb-3 group-hover:border-purple-500/40 transition-colors">
                      <svg className="w-12 h-12 mx-auto text-purple-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-300">Image Input</p>
                  </div>
                </div>

                {/* Arrow - Desktop */}
                <div className="hidden md:flex items-center justify-center text-gray-600 text-2xl font-light">→</div>
                <div className="md:hidden text-gray-600">↓</div>

                {/* BLIP-2 */}
                <div className="flex-1 text-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                    <div className="relative bg-[#0F0F1A] border border-blue-500/20 rounded-2xl p-5 mb-3 group-hover:border-blue-500/40 transition-colors">
                      <svg className="w-12 h-12 mx-auto text-blue-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-300">BLIP-2<br/><span className="text-xs text-gray-500">Vision Encoder</span></p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex text-gray-600 text-2xl font-light">→</div>
                <div className="md:hidden text-gray-600">↓</div>

                {/* Generation */}
                <div className="flex-1 text-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                    <div className="relative bg-[#0F0F1A] border border-green-500/20 rounded-2xl p-5 mb-3 group-hover:border-green-500/40 transition-colors">
                      <svg className="w-12 h-12 mx-auto text-green-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-300">Language<br/><span className="text-xs text-gray-500">Generation</span></p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex text-gray-600 text-2xl font-light">→</div>
                <div className="md:hidden text-gray-600">↓</div>

                {/* Output */}
                <div className="flex-1 text-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                    <div className="relative bg-[#0F0F1A] border border-orange-500/20 rounded-2xl p-5 mb-3 group-hover:border-orange-500/40 transition-colors">
                      <svg className="w-12 h-12 mx-auto text-orange-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-300">Translation<br/><span className="text-xs text-gray-500">VQA Output</span></p>
                  </div>
                </div>
              </div>

              {/* Footer note */}
              <div className="mt-10 pt-8 border-t border-white/[0.03] text-center">
                <p className="text-xs text-gray-500 tracking-wide">END-TO-END ENCRYPTED & REAL-TIME PROCESSING</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack - Minimalist */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-300">
              Built with <span className="text-[#6C63FF]">modern tools</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="group px-5 py-2 bg-[#1A1A2E]/40 backdrop-blur-sm rounded-full border border-white/[0.05] hover:border-[#6C63FF]/30 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${tech.color} group-hover:animate-pulse`}></div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}