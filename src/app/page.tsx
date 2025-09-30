import Hero from "@/components/Hero";
import Funding from "@/components/Funding";
import Solution from "@/components/Solution";
import ExploreSolutions from "@/components/ExploreSolutions";
import WhyFeRON from "@/components/WhyFeRON";
import BusinessModel from "@/components/BusinessModel";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Funding />
      <Solution />
      <ExploreSolutions />
      <WhyFeRON />
      <BusinessModel />
      <Contact />
    </main>
  );
}
