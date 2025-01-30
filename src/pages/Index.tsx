import Hero from "../components/Hero";
import FeaturedDestinations from "../components/FeaturedDestinations";
import HowItWorks from "../components/HowItWorks";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <FeaturedDestinations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;