import { useState } from "react";

export function ApiDocsPage() {
  const [activeLanguage, setActiveLanguage] = useState<"curl" | "python" | "javascript">("curl");

  const endpoints = [
    {
      method: "POST",
      path: "/api/analyze-image",
      description: "Analyze an image and return caption, VQA results, and metadata",
      color: "from-purple-500 to-pink-500",
    },
    {
      method: "POST",
      path: "/api/generate-captions",
      description: "Generate multiple caption variants with specified tone",
      color: "from-blue-500 to-cyan-500",
    },
    {
      method: "POST",
      path: "/api/translate",
      description: "Translate captions to multiple Indic languages",
      color: "from-green-500 to-teal-500",
    },
  ];

  const codeExamples = {
    curl: `curl -X POST https://api.neurovision.ai/analyze-image \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "image_url": "https://example.com/image.jpg",
    "tone": "casual",
    "languages": ["english", "hindi"],
    "enable_vqa": true
  }'`,
    python: `import requests

url = "https://api.neurovision.ai/analyze-image"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "image_url": "https://example.com/image.jpg",
    "tone": "casual",
    "languages": ["english", "hindi"],
    "enable_vqa": True
}

response = requests.post(url, headers=headers, json=data)
result = response.json()
print(result)`,
    javascript: `const response = await fetch('https://api.neurovision.ai/analyze-image', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    image_url: 'https://example.com/image.jpg',
    tone: 'casual',
    languages: ['english', 'hindi'],
    enable_vqa: true
  })
});

const result = await response.json();
console.log(result);`,
  };

  const responseExample = `{
  "success": true,
  "data": {
    "primary_caption": "A beautiful sunset over mountains...",
    "caption_variants": [
      "Mountains silhouetted against...",
      "Nature's masterpiece with..."
    ],
    "translations": {
      "hindi": "पहाड़ों पर सुंदर सूर्यास्त..."
    },
    "metadata": {
      "processing_time_ms": 856,
      "model": "blip2-opt-2.7b",
      "confidence": 0.94
    }
  }
}`;

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] bg-clip-text text-transparent">
              API Documentation
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
            Integrate NeuroVision AI into your applications with our simple REST API
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#6C63FF]/50 transition-all duration-300">
            Get API Key
          </button>
        </div>

        {/* API Endpoints */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Endpoints</h2>
          <div className="space-y-4">
            {endpoints.map((endpoint, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-3">
                  <div className={`inline-flex px-4 py-2 rounded-lg bg-gradient-to-r ${endpoint.color} font-mono font-bold text-sm`}>
                    {endpoint.method}
                  </div>
                  <code className="text-gray-300 font-mono text-sm">{endpoint.path}</code>
                </div>
                <p className="text-gray-400 text-sm">{endpoint.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Code Examples */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Quick Start</h2>

          <div className="bg-[#1A1A2E]/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
            {/* Language Tabs */}
            <div className="flex gap-2 p-4 bg-white/5 border-b border-white/10">
              <button
                onClick={() => setActiveLanguage("curl")}
                className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                  activeLanguage === "curl"
                    ? "bg-[#6C63FF] text-white"
                    : "bg-white/5 text-gray-400 hover:text-white"
                }`}
              >
                curl
              </button>
              <button
                onClick={() => setActiveLanguage("python")}
                className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                  activeLanguage === "python"
                    ? "bg-[#6C63FF] text-white"
                    : "bg-white/5 text-gray-400 hover:text-white"
                }`}
              >
                Python
              </button>
              <button
                onClick={() => setActiveLanguage("javascript")}
                className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                  activeLanguage === "javascript"
                    ? "bg-[#6C63FF] text-white"
                    : "bg-white/5 text-gray-400 hover:text-white"
                }`}
              >
                JavaScript
              </button>
            </div>

            {/* Code Block */}
            <div className="p-6 bg-[#0F0F1A]">
              <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                <code>{codeExamples[activeLanguage]}</code>
              </pre>
            </div>

            {/* Copy Button */}
            <div className="p-4 bg-white/5 border-t border-white/10">
              <button className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Code
              </button>
            </div>
          </div>
        </div>

        {/* Response Example */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Response Format</h2>

          <div className="bg-[#1A1A2E]/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
            <div className="p-4 bg-white/5 border-b border-white/10">
              <span className="text-sm font-mono text-gray-400">200 OK - Success Response</span>
            </div>

            <div className="p-6 bg-[#0F0F1A]">
              <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                <code>{responseExample}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Interactive Tester */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Try It Out</h2>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Image URL</label>
                  <input
                    type="text"
                    placeholder="https://example.com/image.jpg"
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#6C63FF] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Tone</label>
                  <select className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#6C63FF] transition-colors">
                    <option value="casual">Casual</option>
                    <option value="formal">Formal</option>
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="humorous">Humorous</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">API Key</label>
                  <input
                    type="password"
                    placeholder="YOUR_API_KEY"
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#6C63FF] transition-colors"
                  />
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#6C63FF]/50 transition-all duration-300">
                  Test API Call
                </button>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Response</label>
                <div className="bg-[#0F0F1A] border border-white/20 rounded-lg p-4 h-[300px] overflow-auto">
                  <pre className="text-sm text-gray-400 font-mono">
                    {`// Response will appear here
// after making a test request`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rate Limits & Authentication */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Authentication</h3>
            <p className="text-gray-400 mb-4">
              All API requests require a valid API key passed in the Authorization header:
            </p>
            <code className="block bg-[#0F0F1A] border border-white/20 rounded-lg px-4 py-3 text-sm text-gray-300 font-mono">
              Authorization: Bearer YOUR_API_KEY
            </code>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Rate Limits</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Free Tier:</span>
                <span className="font-semibold">100 requests/day</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Pro Tier:</span>
                <span className="font-semibold">10,000 requests/day</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Enterprise:</span>
                <span className="font-semibold">Unlimited</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
