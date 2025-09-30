import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      </div>
      
      {/* Meteor Shower Effect - Falling towards right bottom corner */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-80"
            style={{
              left: `${Math.random() * 30}%`,
              top: `${Math.random() * 30}%`,
              animation: `meteor-fall ${Math.random() * 3 + 2}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              transform: 'rotate(45deg)',
              boxShadow: '0 0 6px white, 0 0 12px white, 0 0 18px white'
            }}
          ></div>
        ))}
        
        {/* Larger meteors */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 20}%`,
              top: `${Math.random() * 20}%`,
              animation: `meteor-fall ${Math.random() * 4 + 3}s linear infinite`,
              animationDelay: `${Math.random() * 6}s`,
              transform: 'rotate(45deg)',
              boxShadow: '0 0 8px cyan, 0 0 16px cyan'
            }}
          ></div>
        ))}
        
        {/* Fast meteors */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`fast-${i}`}
            className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-40"
            style={{
              left: `${Math.random() * 40}%`,
              top: `${Math.random() * 40}%`,
              animation: `meteor-fall ${Math.random() * 1.5 + 1}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
              transform: 'rotate(45deg)',
              boxShadow: '0 0 4px white'
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Question */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight font-serif">
            <span className="text-white">Transf</span><span className="text-gray-300">orming</span> <span className="text-gray-400">energy</span> <span className="text-gray-500">through</span> <span className="text-gray-600">innovation</span><br />
            <span className="text-white">Batt</span><span className="text-gray-300">ery</span> <span className="text-gray-400">Solutions</span>
          </h1>
          
          {/* Description Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-serif">
            Power the future of energy with FeRON. Transform sustainability with our cutting-edge Battery systems.
          </p>
          
          {/* Join Waitlist Button */}
          <div className="flex justify-center">
            <button className="group relative bg-transparent border-2 border-white px-6 py-3 rounded-full text-white font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/25 font-serif">
              <div className="flex items-center space-x-3">
                {/* Sparkle Icon */}
                <div className="w-5 h-5 flex items-center justify-center">
                  
                </div>
                
                {/* Button Text */}
                <span>Join Waitlist</span>
                
                {/* Arrow Icon */}
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}