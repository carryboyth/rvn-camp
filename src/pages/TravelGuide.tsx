
import Header from "../components/Header";
import Footer from "../components/Footer";
import TravelGuideHeader from "../components/travel-guide/TravelGuideHeader";
import TravelGuideGrid from "../components/travel-guide/TravelGuideGrid";
import AITripPlanner from "../components/travel-guide/AITripPlanner";

const TravelGuide = () => {
  return (
    <div className="min-h-screen flex flex-col bg-luxury-pearl">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container">
          <TravelGuideHeader />
          <TravelGuideGrid />
          <AITripPlanner />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TravelGuide;
