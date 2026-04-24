export function ApplicationsPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] bg-clip-text text-transparent">
              Real-World Applications
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            See how NeuroVision AI transforms industries and empowers users across different domains
          </p>
        </div>

        {/* Use Cases */}
        <div className="space-y-12">
          {/* Accessibility */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-4">
                <span className="text-sm text-purple-300">👁️ Accessibility</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">For Visually Impaired Users</h2>
              <p className="text-gray-400 mb-6">
                Empower accessibility tools with accurate image descriptions, helping visually impaired users understand visual content through detailed audio descriptions.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="text-green-400 mt-1">✓</div>
                  <p className="text-sm text-gray-300">Screen reader integration</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-400 mt-1">✓</div>
                  <p className="text-sm text-gray-300">Real-time image narration</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-400 mt-1">✓</div>
                  <p className="text-sm text-gray-300">Contextual scene understanding</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-8">
              <div className="bg-[#1A1A2E]/80 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-sm text-gray-400">Audio Description</span>
                </div>
                <p className="text-lg italic text-gray-200">
                  "A man in a blue shirt smiling broadly while standing in a sunlit park with green trees in the background."
                </p>
              </div>
            </div>
          </div>

          {/* E-commerce */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-6">
                <div className="bg-[#1A1A2E]/80 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Wireless Headphones</h4>
                      <p className="text-sm text-gray-400">$129.99</p>
                    </div>
                    <div className="bg-green-500/20 px-3 py-1 rounded-full text-xs text-green-300">In Stock</div>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Premium wireless headphones featuring sleek black design with silver accents, cushioned ear cups for comfort, and modern minimalist styling.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full mb-4">
                <span className="text-sm text-blue-300">🛒 E-commerce</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Product Listing Automation</h2>
              <p className="text-gray-400 mb-6">
                Auto-generate compelling product descriptions and listings for your entire inventory, saving hours of manual work and ensuring consistency.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="text-green-400 mt-1">✓</div>
                  <p className="text-sm text-gray-300">SEO-optimized descriptions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-400 mt-1">✓</div>
                  <p className="text-sm text-gray-300">Bulk product processing</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-400 mt-1">✓</div>
                  <p className="text-sm text-gray-300">Multilingual listings</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full mb-4">
                <span className="text-sm text-green-300">📱 Social Media</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Content Creation</h2>
              <p className="text-gray-400 mb-6">
                Generate engaging captions for social media posts with customizable tones to match your brand voice and audience preferences.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="text-green-400 mt-1">✓</div>
                  <p className="text-sm text-gray-300">Multiple caption variations</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-400 mt-1">✓</div>
                  <p className="text-sm text-gray-300">Tone customization</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-400 mt-1">✓</div>
                  <p className="text-sm text-gray-300">Hashtag suggestions</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-xl p-6">
              <div className="bg-[#1A1A2E]/80 backdrop-blur-sm rounded-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-orange-500/30 to-pink-500/30 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-300 mb-2">
                    ✨ Chasing golden hour magic at the beach! This sunset hit different today. 🌅
                  </p>
                  <p className="text-xs text-gray-500">#sunset #beachvibes #goldenhour</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl p-6">
                <div className="bg-[#1A1A2E]/80 backdrop-blur-sm rounded-lg p-6 space-y-4">
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <p className="text-sm font-semibold text-yellow-300 mb-1">English</p>
                    <p className="text-sm text-gray-300">The structure of a plant cell showing nucleus and chloroplasts.</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <p className="text-sm font-semibold text-yellow-300 mb-1">हिंदी</p>
                    <p className="text-sm text-gray-300">पादप कोशिका की संरचना जिसमें केन्द्रक और हरितलवक दिखाई दे रहे हैं।</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full mb-4">
                <span className="text-sm text-yellow-300">🎓 Education</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Learning & Teaching</h2>
              <p className="text-gray-400 mb-6">
                Enhance educational materials with multilingual image descriptions, making learning accessible to students in their native language.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="text-green-400 mt-1">✓</div>
                  <p className="text-sm text-gray-300">Diagram explanations</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-400 mt-1">✓</div>
                  <p className="text-sm text-gray-300">Multilingual support</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-400 mt-1">✓</div>
                  <p className="text-sm text-gray-300">Interactive learning</p>
                </div>
              </div>
            </div>
          </div>

          {/* Smart Search */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full mb-4">
                <span className="text-sm text-indigo-300">🔍 Smart Search</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Image Cataloging & Search</h2>
              <p className="text-gray-400 mb-6">
                Automatically tag and organize large image collections with AI-generated metadata, making them easily searchable and discoverable.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="text-green-400 mt-1">✓</div>
                  <p className="text-sm text-gray-300">Automatic tagging</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-400 mt-1">✓</div>
                  <p className="text-sm text-gray-300">Semantic search</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-400 mt-1">✓</div>
                  <p className="text-sm text-gray-300">Content organization</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-xl p-6">
              <div className="bg-[#1A1A2E]/80 backdrop-blur-sm rounded-lg p-4">
                <div className="mb-4 flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input type="text" placeholder="Search images..." className="bg-transparent flex-1 outline-none text-sm" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg border border-white/10"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive AI */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-pink-500/20 to-red-500/20 border border-pink-500/30 rounded-xl p-6">
                <div className="bg-[#1A1A2E]/80 backdrop-blur-sm rounded-lg p-4 space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-pink-500/20 rounded-lg px-4 py-2 max-w-[80%]">
                      <p className="text-sm">What is this object?</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white/5 rounded-lg px-4 py-2 max-w-[80%]">
                      <p className="text-sm">This is a vintage camera with a leather case...</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-pink-500/20 rounded-lg px-4 py-2 max-w-[80%]">
                      <p className="text-sm">What era is it from?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full mb-4">
                <span className="text-sm text-pink-300">💬 Interactive AI</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Conversational Image Analysis</h2>
              <p className="text-gray-400 mb-6">
                Enable natural conversations about images with Visual Q&A, allowing users to ask follow-up questions and dive deeper into visual content.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="text-green-400 mt-1">✓</div>
                  <p className="text-sm text-gray-300">Context-aware responses</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-400 mt-1">✓</div>
                  <p className="text-sm text-gray-300">Follow-up questions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-green-400 mt-1">✓</div>
                  <p className="text-sm text-gray-300">Natural conversation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
