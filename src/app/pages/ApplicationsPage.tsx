export function ApplicationsPage() {
  const applications = [
    {
      id: "accessibility",
      title: "For Visually Impaired Users",
      subtitle: "Empowering accessibility through AI",
      icon: "👁️",
      tag: "Accessibility",
      color: "purple",
      gradient: "from-purple-500/10 to-pink-500/10",
      border: "purple-500/20",
      features: [
        "Screen reader integration",
        "Real-time image narration",
        "Contextual scene understanding"
      ],
      example: {
        quote: "A man in a blue shirt smiling broadly while standing in a sunlit park with green trees in the background.",
        icon: "🎧"
      }
    },
    {
      id: "ecommerce",
      title: "Product Listing Automation",
      subtitle: "Scale your inventory management",
      icon: "🛒",
      tag: "E-commerce",
      color: "blue",
      gradient: "from-blue-500/10 to-cyan-500/10",
      border: "blue-500/20",
      features: [
        "SEO-optimized descriptions",
        "Bulk product processing",
        "Multilingual listings"
      ],
      example: {
        product: "Wireless Headphones",
        price: "$129.99",
        description: "Premium wireless headphones featuring sleek black design with silver accents, cushioned ear cups for comfort, and modern minimalist styling."
      }
    },
    {
      id: "social",
      title: "Content Creation",
      subtitle: "Engage your audience effortlessly",
      icon: "📱",
      tag: "Social Media",
      color: "green",
      gradient: "from-green-500/10 to-teal-500/10",
      border: "green-500/20",
      features: [
        "Multiple caption variations",
        "Tone customization",
        "Hashtag suggestions"
      ],
      example: {
        caption: "Chasing golden hour magic at the beach! This sunset hit different today. 🌅",
        hashtags: "#sunset #beachvibes #goldenhour"
      }
    },
    {
      id: "education",
      title: "Learning & Teaching",
      subtitle: "Multilingual education for all",
      icon: "🎓",
      tag: "Education",
      color: "yellow",
      gradient: "from-yellow-500/10 to-orange-500/10",
      border: "yellow-500/20",
      features: [
        "Diagram explanations",
        "Multilingual support",
        "Interactive learning"
      ],
      example: {
        en: "The structure of a plant cell showing nucleus and chloroplasts.",
        hi: "पादप कोशिका की संरचना जिसमें केन्द्रक और हरितलवक दिखाई दे रहे हैं।"
      }
    },
    {
      id: "search",
      title: "Image Cataloging & Search",
      subtitle: "Organize and discover visually",
      icon: "🔍",
      tag: "Smart Search",
      color: "indigo",
      gradient: "from-indigo-500/10 to-purple-500/10",
      border: "indigo-500/20",
      features: [
        "Automatic tagging",
        "Semantic search",
        "Content organization"
      ]
    },
    {
      id: "conversational",
      title: "Conversational Image Analysis",
      subtitle: "Natural dialogue about visuals",
      icon: "💬",
      tag: "Interactive AI",
      color: "pink",
      gradient: "from-pink-500/10 to-red-500/10",
      border: "pink-500/20",
      features: [
        "Context-aware responses",
        "Follow-up questions",
        "Natural conversation"
      ],
      example: {
        conversation: [
          { role: "user", text: "What is this object?" },
          { role: "assistant", text: "This is a vintage camera with a leather case..." },
          { role: "user", text: "What era is it from?" }
        ]
      }
    }
  ];

  const getColorStyles = (color) => {
    const colors = {
      purple: { light: "purple-300/20", medium: "purple-500/20", dark: "purple-500", gradient: "from-purple-500 to-pink-500" },
      blue: { light: "blue-300/20", medium: "blue-500/20", dark: "blue-500", gradient: "from-blue-500 to-cyan-500" },
      green: { light: "green-300/20", medium: "green-500/20", dark: "green-500", gradient: "from-green-500 to-teal-500" },
      yellow: { light: "yellow-300/20", medium: "yellow-500/20", dark: "yellow-500", gradient: "from-yellow-500 to-orange-500" },
      indigo: { light: "indigo-300/20", medium: "indigo-500/20", dark: "indigo-500", gradient: "from-indigo-500 to-purple-500" },
      pink: { light: "pink-300/20", medium: "pink-500/20", dark: "pink-500", gradient: "from-pink-500 to-red-500" }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-5 border border-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6C63FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6C63FF]"></span>
            </span>
            <span className="text-xs text-gray-400 tracking-wider">USE CASES</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-5 tracking-tight">
            <span className="bg-gradient-to-r from-[#6C63FF] via-[#8B7FFF] to-[#2A5CFF] bg-clip-text text-transparent">
              Real-World Applications
            </span>
          </h1>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Transforming industries with intelligent visual understanding
          </p>
        </div>

        {/* Applications Grid */}
        <div className="space-y-20">
          {applications.map((app, idx) => {
            const colors = getColorStyles(app.color);
            const isEven = idx % 2 === 0;
            
            return (
              <div key={app.id} className="relative">
                {/* Decorative line */}
                <div className="absolute left-0 right-0 -top-10 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:gap-16' : ''}`}>
                  {/* Content Side */}
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="mb-4">
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-${colors.medium} border border-${colors.border}`}>
                        <span className="text-sm">{app.icon}</span>
                        <span className={`text-xs font-medium text-${colors.dark.replace('500', '300')} tracking-wide`}>
                          {app.tag}
                        </span>
                      </div>
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
                      <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                        {app.title}
                      </span>
                    </h2>
                    
                    <p className="text-gray-400 text-sm mb-6">
                      {app.subtitle}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {app.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 group">
                          <div className={`w-5 h-5 rounded-full bg-${colors.medium} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Side */}
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className={`relative bg-gradient-to-br ${app.gradient} rounded-2xl p-6 border border-white/5 backdrop-blur-sm`}>
                      {/* Example content based on app type */}
                      {app.id === "accessibility" && (
                        <div className="bg-[#0F0F1A]/90 rounded-xl p-5 border-l-4 border-purple-500">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl">{app.example.icon}</span>
                            <span className="text-xs text-purple-400/70 tracking-wide">LIVE DESCRIPTION</span>
                          </div>
                          <p className="text-gray-200 text-base italic leading-relaxed">
                            "{app.example.quote}"
                          </p>
                        </div>
                      )}

                      {app.id === "ecommerce" && (
                        <div className="bg-[#0F0F1A]/90 rounded-xl p-5">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="font-semibold text-white text-lg">{app.example.product}</h4>
                              <p className="text-2xl font-bold text-blue-400 mt-1">{app.example.price}</p>
                            </div>
                            <div className="px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                              <span className="text-xs text-green-400">In Stock</span>
                            </div>
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {app.example.description}
                          </p>
                        </div>
                      )}

                      {app.id === "social" && (
                        <div className="bg-[#0F0F1A]/90 rounded-xl overflow-hidden">
                          <div className="h-32 bg-gradient-to-br from-orange-500/20 to-pink-500/20 flex items-center justify-center">
                            <svg className="w-12 h-12 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="p-4">
                            <p className="text-gray-300 text-sm mb-2">✨ {app.example.caption}</p>
                            <p className="text-gray-500 text-xs">{app.example.hashtags}</p>
                          </div>
                        </div>
                      )}

                      {app.id === "education" && (
                        <div className="space-y-3">
                          <div className="bg-[#0F0F1A]/90 rounded-lg p-4 border-l-4 border-yellow-500">
                            <p className="text-xs font-medium text-yellow-400/80 mb-1">ENGLISH</p>
                            <p className="text-gray-300 text-sm">{app.example.en}</p>
                          </div>
                          <div className="bg-[#0F0F1A]/90 rounded-lg p-4 border-l-4 border-yellow-500">
                            <p className="text-xs font-medium text-yellow-400/80 mb-1">हिंदी</p>
                            <p className="text-gray-300 text-sm">{app.example.hi}</p>
                          </div>
                        </div>
                      )}

                      {app.id === "search" && (
                        <div className="bg-[#0F0F1A]/90 rounded-xl p-4">
                          <div className="mb-4 flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 border border-white/5">
                            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span className="text-xs text-gray-500">Search "urban landscape"</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                              <div key={i} className="aspect-square bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg border border-white/5 hover:border-indigo-500/20 transition-colors"></div>
                            ))}
                          </div>
                        </div>
                      )}

                      {app.id === "conversational" && (
                        <div className="bg-[#0F0F1A]/90 rounded-xl p-4 space-y-3">
                          {app.example.conversation.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                              <div className={`max-w-[85%] px-3 py-2 rounded-lg ${msg.role === 'user' ? 'bg-pink-500/10 border border-pink-500/20' : 'bg-white/5 border border-white/10'}`}>
                                <p className="text-sm text-gray-300">{msg.text}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      
      </div>
    </div>
  );
}