
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0F0F1A]/80 to-[#0A0A12] border-t border-white/10 overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6C63FF]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2A5CFF]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand Section - Larger */}
          <div className="md:col-span-5">
            <div className="mb-4">
              <Link to="/" className="inline-block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#6C63FF] to-[#2A5CFF] rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">NV</span>
                  </div>
                  <span className="text-white font-bold text-lg">NeuroVision AI</span>
                </div>
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Intelligent multi-modal image understanding powered by advanced AI. 
              See beyond pixels with real-time captioning, translation, and visual Q&A.
            </p>
           
          </div>

          {/* Quick Links Section - Structured */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/demo" 
                  className="text-gray-400 hover:text-white text-sm transition-all duration-300 inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Demo</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/features" 
                  className="text-gray-400 hover:text-white text-sm transition-all duration-300 inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Features</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/how-it-works" 
                  className="text-gray-400 hover:text-white text-sm transition-all duration-300 inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">How it Works</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/applications" 
                  className="text-gray-400 hover:text-white text-sm transition-all duration-300 inline-flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Applications</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact/Info Section */}
          <div className="md:col-span-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Stay Updated
            </h4>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm leading-relaxed">
                Experience the future of image understanding with our cutting-edge AI technology.
              </p>
              {/* CTA Button */}
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#6C63FF]/10 to-[#2A5CFF]/10 border border-white/20 rounded-lg hover:border-[#6C63FF]/50 transition-all duration-300 group"
              >
                <span className="text-sm font-medium text-white group-hover:text-[#6C63FF] transition-colors">
                  Get Started
                </span>
                <svg className="w-4 h-4 text-white group-hover:text-[#6C63FF] group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Separator with gradient */}
        <div className="relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 NeuroVision AI. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="w-1 h-1 bg-white/20 rounded-full"></span>
              <span className="text-xs text-gray-600">Made with ❤️ for AI innovation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}