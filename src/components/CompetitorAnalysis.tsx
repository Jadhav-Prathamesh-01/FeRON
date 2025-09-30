export default function CompetitorAnalysis() {
  return (
    <section className="min-h-screen bg-black text-white font-sans py-16 relative overflow-hidden">
      {/* Background Elements */}
      {/* Top Right Hexagonal Icon */}
      <div className="absolute top-8 right-8 w-12 h-12">
        <div className="w-full h-full border border-cyan-400 opacity-60">
          <div className="w-full h-full relative">
            <div className="absolute top-1 left-1 w-2 h-2 bg-cyan-400"></div>
            <div className="absolute top-1 right-1 w-2 h-2 bg-cyan-400"></div>
            <div className="absolute bottom-1 left-1 w-2 h-2 bg-cyan-400"></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 bg-cyan-400"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-400"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">COMPETITOR ANALYSIS</h1>
          <div className="w-48 h-0.5 bg-cyan-400 mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Section - Market Metrics */}
          <div className="space-y-8">
            {/* Market Growth Rate */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold text-white">11.41%</div>
                <div className="text-cyan-400 text-lg">Market Growth Rate</div>
              </div>
            </div>

            {/* Market Size (TAM) */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <div className="flex flex-col">
                <div className="text-4xl font-bold text-white mb-2">$ 3.41 Billion</div>
                <div className="text-cyan-400 text-lg">Market Size (TAM)</div>
              </div>
            </div>

            {/* Market Growth by 2032 */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <div className="flex flex-col">
                <div className="text-4xl font-bold text-white mb-2">$ 9.31 Billion</div>
                <div className="text-cyan-400 text-lg">Market Growth by 2032</div>
              </div>
            </div>
          </div>

          {/* Right Section - Competitors */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Competitors in this space</h2>
            
            {/* Competitors Grid */}
            <div className="border border-white rounded-lg p-8">
              <div className="grid grid-cols-3 gap-8">
                {/* Top Row */}
                <div className="text-center">
                  <div className="bg-white text-black rounded-lg p-4 mb-2">
                    <div className="font-bold text-lg">TATA</div>
                    <div className="text-sm">TATA POWER</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white text-black rounded-lg p-4 mb-2">
                    <div className="font-bold text-lg">Panasonic</div>
                  </div>
                </div>
                
                <div className="text-center relative">
                  <div className="bg-white text-black rounded-lg p-4 mb-2 border border-orange-400">
                    <div className="font-bold text-lg">Form</div>
                    <div className="text-sm">energy</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full flex items-center justify-center">
                    <span className="text-black text-xs font-bold">*</span>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="text-center">
                  <div className="bg-white text-black rounded-lg p-4 mb-2">
                    <div className="font-bold text-lg flex items-center justify-center">
                      E<span className="text-cyan-400">⚡</span>IDE
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white text-black rounded-lg p-4 mb-2">
                    <div className="font-bold text-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-cyan-400 rounded-full mr-2"></div>
                      AMARA RAJA
                    </div>
                    <div className="text-xs text-gray-600">Gotta be a better way</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white text-black rounded-lg p-4 mb-2">
                    <div className="font-bold text-lg flex items-center justify-center">
                      LOG<span className="text-cyan-400">⚡</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

