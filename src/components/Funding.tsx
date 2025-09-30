import Image from "next/image";

export default function Funding() {
  return (
    <section className="py-16 bg-black text-white font-sans relative overflow-hidden">
      {/* Background with subtle horizontal lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 w-full h-px bg-white"></div>
          <div className="absolute top-3/4 w-full h-px bg-white"></div>
        </div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Government Image */}
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/govt-CGODo7X-.png"
            alt="Government of India Funding"
            width={800}
            height={400}
            className="w-full max-w-2xl mx-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
}
