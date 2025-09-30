import Image from "next/image";

export default function ExploreSolutions() {
  return (
    <section className="py-16 bg-black text-white font-sans relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      </div>
      
      <div className="container mx-auto px-8 relative z-10">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-normal text-white font-serif">
            Explore our game-changing energy solutions.
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* FeRON Battery Card */}
          <div 
            className="bg-gray-900 rounded-xl p-8 h-96 flex flex-col shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(145deg, #1a1a1a, #2d2d2d)',
              boxShadow: '20px 20px 40px rgba(0, 0, 0, 0.5), -20px -20px 40px rgba(255, 255, 255, 0.05)',
              transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 rounded-xl overflow-hidden opacity-20">
              <Image
                src="/iron-xsTQVrJd.jpg"
                alt="FeRON Battery Background"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                FeRON Battery
              </h2>
              <p className="text-white text-lg mb-8 flex-grow">
                Cost-effective, durable, and scalable energy storage for the future.
              </p>
              <div className="mt-auto">
                <button className="flex items-center text-white hover:text-cyan-400 transition-colors duration-300">
                  <span className="text-lg font-medium">EXPLORE MORE</span>
                  <span className="ml-2 text-xl -translate-y-0.5">{'>'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Coming Soon Card */}
          <div 
            className="bg-gray-900 rounded-xl p-8 h-96 flex flex-col shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(145deg, #1a1a1a, #2d2d2d)',
              boxShadow: '20px 20px 40px rgba(0, 0, 0, 0.5), -20px -20px 40px rgba(255, 255, 255, 0.05)',
              transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 rounded-xl overflow-hidden opacity-20">
              <Image
                src="/image-2-BvJlwGYh.png"
                alt="Future Technology Background"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              <h2 className="text-2xl font-bold text-white mb-4">
                Coming Soon!
              </h2>
              <p className="text-white text-lg mb-8 flex-grow">
                Stay tuned for breakthrough tech like Axial Flux Motors, Aluminium-air and Zinc-air batteries.
              </p>
              <div className="mt-auto">
                <div className="text-white text-sm opacity-60">
                  Future Technologies
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
