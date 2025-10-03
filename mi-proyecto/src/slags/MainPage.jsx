import Allies from "../components/sections/Allies";
import Hero from "../components/sections/Hero";
import HowDoes from "../components/sections/HowDoes";
import Prices from "../components/sections/Prices";
import Testimonials from "../components/sections/Testimonials";




const MainPage = () => {
  return (  
    <main className="bg-[#0E5F76]">
      <Hero />
      <Allies />
      <HowDoes />
      <Testimonials />
      <Prices />

    </main>
  );
};

export default MainPage;
