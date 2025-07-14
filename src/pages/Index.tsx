
import Hero from "../components/Hero";
import FeaturedDestinations from "../components/FeaturedDestinations";
import TopCampsite from "../components/TopCampsite";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopCampervanRental from "../components/TopCampervanRental";
import PromotionalSection from "../components/PromotionalSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <PromotionalSection />
        <TopCampsite />
        <TopCampervanRental />
        <FeaturedDestinations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
