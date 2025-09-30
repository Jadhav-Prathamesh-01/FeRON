export default function WhyFeRON() {
  return (
    <section id="whyferon" className="min-h-screen bg-black text-white font-sans py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Section - Main Heading */}
            <div className="space-y-4">
              {/* Purple Subtitle */}
              <h2 className="text-lg sm:text-xl text-purple-500 font-medium">
                Why FeRON?!
              </h2>
              
              {/* Main Heading with Gradient */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-serif">
                <span className="text-gray-400">Here&apos;s how</span> <span className="text-white">WE SOLVE</span> <span className="text-gray-300">THE</span><br />
                <span className="text-gray-200">PROBLEM.</span>
              </h1>
            </div>
            
            {/* Right Section - Description */}
            <div className="lg:pt-24">
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-serif">
                Focus on creating exceptional experiences for<br />
                your customers and growing your business.
              </p>
            </div>
          </div>
        </div>

        {/* Three Cards Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Card - AFFORDABLE & ZERO IMPORTS */}
          <div className="bg-black rounded-xl p-8 h-[28rem] flex flex-col">
            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-4">AFFORDABLE & ZERO IMPORTS</h3>
            
            {/* Short Description */}
            <p className="text-white text-sm mb-4">
              1/10th the cost of Li-ion battery (₹1600 per kWh). 100% MADE IN INDIA.
            </p>
            
            {/* Longer Paragraph */}
            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
              Transform your energy costs with our revolutionary battery technology. While competitors rely on expensive imports, we deliver cutting-edge solutions built entirely in India. Experience the future of energy storage without the premium price tag.
            </p>
          </div>

          {/* Middle Card - HIGH ABUNDANCE & DURABLE (Purple Gradient) */}
          <div 
            className="rounded-xl p-8 h-[28rem] flex flex-col"
            style={{
              background: 'linear-gradient(180deg, #A060D0, #5D2F8C)',
              opacity: 1,
              transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-4">HIGH ABUNDANCE & DURABLE</h3>
            
            {/* Short Description */}
            <p className="text-white text-sm mb-4">
              Iron is abundant in India. Bulletproof safety with no explosion risk.
            </p>
            
            {/* Longer Paragraph */}
            <p className="text-white text-sm leading-relaxed flex-grow">
              Leverage India&apos;s natural iron abundance for sustainable energy solutions. Our iron-air battery technology offers unmatched safety and reliability. No more worrying about battery explosions or safety hazards - power your future with confidence.
            </p>
          </div>

          {/* Right Card - LONGEVITY & SUSTAINABLE */}
          <div className="bg-black rounded-xl p-8 h-[28rem] flex flex-col">
            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-4">LONGEVITY & SUSTAINABLE</h3>
            
            {/* Short Description */}
            <p className="text-white text-sm mb-4">
              Lasts up to 500 cycles with no degradation. ZERO E-Waste PRODUCED.
            </p>
            
            {/* Longer Paragraph */}
            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
              Experience long-lasting performance without environmental guilt. Our batteries maintain peak efficiency for 500+ cycles with zero degradation, while producing absolutely no electronic waste. Build a sustainable future without compromising on performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

