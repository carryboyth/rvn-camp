import Hero from "../components/Hero";
import FeaturedDestinations from "../components/FeaturedDestinations";
import HowItWorks from "../components/HowItWorks";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <FeaturedDestinations />
    </main>
  );
};

export default Index;