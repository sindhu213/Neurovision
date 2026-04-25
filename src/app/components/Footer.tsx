import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-[#0F0F1A]/50 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 ">
          <div>
            <h3 className="text-white font-bold mb-4">NeuroVision AI</h3>
            <p className="text-gray-400 text-sm">
              Intelligent multi-modal image understanding powered by advanced AI.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/demo" className="text-gray-400 hover:text-white text-sm transition-colors">
                Demo
              </Link>
              <Link to="/features" className="text-gray-400 hover:text-white text-sm transition-colors">
                Features
              </Link>
              <Link to="/how-it-works" className="text-gray-400 hover:text-white text-sm transition-colors">
                How it Works
              </Link>
              <Link to="/applications" className="text-gray-400 hover:text-white text-sm transition-colors">
                Applications
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <div className="flex flex-col gap-2">
              <Link to="/docs" className="text-gray-400 hover:text-white text-sm transition-colors">
                Documentation
              </Link>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                GitHub Repository
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Research Paper
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          © 2026 NeuroVision AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
