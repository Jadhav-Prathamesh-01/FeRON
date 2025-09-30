"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Solution() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const section = sectionRef.current;
    const cards = cardsRef.current;
    
    // Get card elements
    const missionCard = cards.querySelector('.mission-card') as HTMLElement;
    const industryCard = cards.querySelector('.industry-card') as HTMLElement;
    const productCard = cards.querySelector('.product-card') as HTMLElement;

    if (!missionCard || !industryCard || !productCard) return;

    // Set initial state - only MISSION card visible
    gsap.set(missionCard, { opacity: 1 });
    gsap.set(industryCard, { opacity: 0 });
    gsap.set(productCard, { opacity: 0 });

    // Create ScrollTrigger for card transitions
    ScrollTrigger.create({
      trigger: section,
      pin: true,
      start: "top top",
      end: "+=1000",
      scrub: 0.5,
      markers: false, // Set to true for debugging
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progress = self.progress;
        
        // MISSION: visible from 0 to 0.33
        if (progress <= 0.33) {
          gsap.set(missionCard, { opacity: 1 });
          gsap.set(industryCard, { opacity: 0 });
          gsap.set(productCard, { opacity: 0 });
        }
        // INDUSTRY: visible from 0.33 to 0.66
        else if (progress <= 0.66) {
          gsap.set(missionCard, { opacity: 0 });
          gsap.set(industryCard, { opacity: 1 });
          gsap.set(productCard, { opacity: 0 });
        }
        // PRODUCT: visible from 0.66 to 1
        else {
          gsap.set(missionCard, { opacity: 0 });
          gsap.set(industryCard, { opacity: 0 });
          gsap.set(productCard, { opacity: 1 });
        }
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="vertical-section w-full h-screen overflow-hidden flex text-lg bg-black text-white font-sans relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      </div>
      {/* Left Section - Fixed Image */}
      <div ref={imageRef} className="w-1/2 h-screen flex flex-col justify-center items-center p-8 relative z-10">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-lg font-bold text-gray-400 mb-6">THE SOLUTION</h1>
          
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4 italic">
            <span className="text-gray-600">F</span><span className="text-gray-500">e</span><span className="text-gray-400">R</span><span className="text-gray-300">O</span><span className="text-gray-200">N</span>
          </h2>
          <p className="text-xl text-white font-serif">
            Engineered to transform grid-scale energy.
          </p>
        </div>
        
        <Image
          src="/Aluminium-Air-Battery.jpg"
          alt="Iron-Air Battery System"
          width={400}
          height={300}
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Right Section - Scrollable Content Cards */}
      <div ref={cardsRef} className="w-1/2 p-8 relative flex items-center justify-center z-10">
        {/* MISSION Card - First Screen */}
        <div className="mission-card absolute inset-0 flex items-center justify-center p-8">
          <div className="max-w-lg">
            <div className="mb-8">
              <h3 className="text-4xl font-bold text-white font-serif">MISSION</h3>
            </div>
            <p className="text-white leading-relaxed text-lg font-serif">
              Power India's clean energy future with <span className="text-white font-bold">safe, affordable, and sustainable iron-air batteries</span> to <span className="text-white font-bold">reduce import dependency</span> and enabling true energy independence.
            </p>
          </div>
        </div>

        {/* INDUSTRY Card - Middle Screen */}
        <div className="industry-card absolute inset-0 flex items-center justify-center p-8">
          <div className="max-w-lg">
            <div className="mb-8">
              <h3 className="text-4xl font-bold text-white font-serif">INDUSTRY</h3>
            </div>
            <p className="text-white leading-relaxed text-lg font-serif">
              Energy Storage & Renewable Energy Infrastructure - focusing on <span className="text-white font-bold">grid-scale storage, long-duration energy storage</span> for utilities, <span className="text-white font-bold">telecom, and data centers.</span>
            </p>
          </div>
        </div>

        {/* PRODUCT Card - Last Screen */}
        <div className="product-card absolute inset-0 flex items-center justify-center p-8">
          <div className="max-w-lg">
            <div className="mb-8">
              <h3 className="text-4xl font-bold text-white font-serif">PRODUCT</h3>
            </div>
            <p className="text-white leading-relaxed text-lg font-serif">
              <span className="text-white font-bold">FeRON Iron-Air Battery System</span>: A next-generation energy storage solution that combines iron-air chemistry + supercapacitors, engineered for grid applications. It is ~ <span className="text-white font-bold">10x cheaper</span> than lithium-ion batteries (*grid scale applications) and also <span className="text-white font-bold">100% Made in India.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
