export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">FeRON</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-white hover:text-cyan-400 transition-colors duration-300">
              Products
            </a>
            <a href="#careers" className="text-white hover:text-cyan-400 transition-colors duration-300">
              Careers
            </a>
            <a href="#impact" className="text-white hover:text-cyan-400 transition-colors duration-300">
              Impact
            </a>
            <a href="#pricing" className="text-white hover:text-cyan-400 transition-colors duration-300">
              Pricing
            </a>
            <a href="#progress" className="text-white hover:text-cyan-400 transition-colors duration-300">
              Progress
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <button className="bg-transparent border border-white text-white font-bold py-1 px-4 rounded-full text-sm transition-colors duration-300 hover:bg-white hover:text-black">
              KNOW MORE
            </button>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white hover:text-cyan-400 transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden mt-4 pt-4 border-t border-gray-800">
          <div className="flex flex-col space-y-4">
            <a href="#products" className="text-white hover:text-cyan-400 transition-colors duration-300">
              Products
            </a>
            <a href="#careers" className="text-white hover:text-cyan-400 transition-colors duration-300">
              Careers
            </a>
            <a href="#impact" className="text-white hover:text-cyan-400 transition-colors duration-300">
              Impact
            </a>
            <a href="#pricing" className="text-white hover:text-cyan-400 transition-colors duration-300">
              Pricing
            </a>
            <a href="#progress" className="text-white hover:text-cyan-400 transition-colors duration-300">
              Progress
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
