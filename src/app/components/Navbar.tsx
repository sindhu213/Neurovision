import { Link, useLocation } from "react-router";

export function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Demo", path: "/demo" },
    { name: "Features", path: "/features" },
    { name: "How it Works", path: "/how-it-works" },
    { name: "Applications", path: "/applications" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      {/* Floating Glass Container */}
      <nav className="max-w-7xl mx-auto bg-[#0F0F1A]/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
        <div className="px-6 py-3 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 bg-gradient-to-br from-[#6C63FF] to-[#2A5CFF] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-[#6C63FF]/40 transition-all duration-300">
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <svg className="w-6 h-6 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6C63FF] group-hover:to-cyan-400 transition-all duration-300">
              NeuroVision <span className="text-gray-500 group-hover:text-cyan-400">AI</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center bg-white/5 px-6 py-2 rounded-full border border-white/5 gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors relative group ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.name}
                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] rounded-full"></span>
                  )}
                  {/* Hover indicator */}
                  {!isActive && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6C63FF] transition-all group-hover:w-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="flex items-center gap-4">
            <Link
              to="/demo"
              className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-white transition duration-300 ease-out bg-gradient-to-r from-[#6C63FF] to-[#2A5CFF] rounded-xl shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#2A5CFF] group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease font-bold">Launch Demo</span>
              <span className="relative invisible font-bold">Launch Demo</span>
            </Link>
          </div>

        </div>
      </nav>
    </div>
  );
}