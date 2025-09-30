export default function BusinessModel() {
  return (
    <section id="business" className="min-h-screen bg-black text-white font-sans py-16 relative overflow-hidden">
      {/* Background with subtle horizontal lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 w-full h-px bg-white"></div>
          <div className="absolute top-3/4 w-full h-px bg-white"></div>
        </div>
      </div>

      <div className="container mx-auto px-8 relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-4xl mx-auto">
          {/* Purple Subtitle */}
          <h2 className="text-lg text-purple-500 font-medium mb-8">
            Why Falling Behind is No Longer an Option
          </h2>
          
          {/* Main Heading with Gradient */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            <span className="text-gray-400">Optimize Your Business</span> <span className="text-gray-300">Operations</span> <span className="text-gray-200">with</span><br />
            <span className="text-gray-500">a Suite of</span> <span className="text-gray-300">Intelligent</span> <span className="text-gray-100">Features</span>
          </h1>
          
          {/* Description Paragraph */}
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Eliminate inefficiencies with smart solutions that automate processes, reduce manual work, and ensure your business runs smoothly. Focus on growth with our comprehensive energy storage solutions that deliver reliable power at 1/10th the cost of traditional lithium-ion batteries.
          </p>
        </div>
      </div>
    </section>
  );
}

