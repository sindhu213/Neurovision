import { Link } from "react-router";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F1A]/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-[#6C63FF] to-[#2A5CFF] rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] bg-clip-text text-transparent">
            NeuroVision AI
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/demo" className="text-gray-300 hover:text-white transition-colors">
            Demo
          </Link>
          <Link to="/features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
            How it Works
          </Link>
          <Link to="/applications" className="text-gray-300 hover:text-white transition-colors">
            Applications
          </Link>
          <Link to="/docs" className="text-gray-300 hover:text-white transition-colors">
            Docs
          </Link>
        </div>

        <Link
          to="/demo"
          className="px-6 py-2 border-2 border-[#6C63FF] text-[#6C63FF] rounded-lg hover:bg-[#6C63FF] hover:text-white transition-all duration-300"
        >
          Launch Demo
        </Link>
      </div>
    </nav>
  );
}
