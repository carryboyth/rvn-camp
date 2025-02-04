import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Utensils, Wind, Bed } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const mockCampervans = [
  {
    id: "1",
    name: "Luxury RV Cruiser",
    brand: "Mercedes-Benz",
    model: "Sprinter",
    seats: 4,
    features: ["Kitchen", "Air Conditioning", "Queen Bed"],
    price: 4500,
    image: "/lovable-uploads/064c497f-316d-4fbd-9300-f9927b5f4208.png"
  },
  {
    id: "2",
    name: "Family Adventure Van",
    brand: "Volkswagen",
    model: "Crafter",
    seats: 6,
    features: ["Full Kitchen", "AC", "2 Beds"],
    price: 5500,
    image: "/lovable-uploads/185d641b-79c4-4ff4-8a62-6492f5109a4e.png"
  },
  {
    id: "3",
    name: "Compact Explorer",
    brand: "Ford",
    model: "Transit",
    seats: 2,
    features: ["Kitchenette", "AC", "Convertible Bed"],
    price: 3500,
    image: "/lovable-uploads/1b98df29-031c-453f-8985-bf9ab03b53a6.png"
  }
];

const mockCampsites = [
  {
    id: "1",
    name: "Mountain View Resort",
    location: "Chiang Mai",
    description: "Scenic mountain views with full RV hookups",
    price: 1200,
    image: "/lovable-uploads/39ca8590-7c01-4b61-945b-09c0787d5e19.png"
  },
  {
    id: "2",
    name: "Riverside Camping",
    location: "Kanchanaburi",
    description: "Peaceful riverside location with modern facilities",
    price: 1500,
    image: "/lovable-uploads/3e1b13b0-4b5b-4eec-85e7-d9d8ff30e668.png"
  },
  {
    id: "3",
    name: "Beach Paradise",
    location: "Phuket",
    description: "Beachfront camping with stunning sunset views",
    price: 2000,
    image: "/lovable-uploads/b7d87dfa-8531-459d-aa23-7eeb6c5fae70.png"
  },
  {
    id: "4",
    name: "Forest Retreat",
    location: "Khao Yai",
    description: "Secluded forest location with nature trails",
    price: 1800,
    image: "/lovable-uploads/c1762e4a-0c04-42c9-bb90-72efea7f0c35.png"
  }
];

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = location.state;

  const handleSelectCampervan = (id: string) => {
    navigate(`/campervan-summary`, { 
      state: { 
        ...searchParams,
        selectedCampervan: mockCampervans.find(van => van.id === id)
      }
    });
  };

  const handleSelectCampsite = (id: string) => {
    navigate(`/campsite/${id}`);
  };

  const getFeatureIcon = (feature: string) => {
    switch (feature.toLowerCase()) {
      case "kitchen":
      case "full kitchen":
      case "kitchenette":
        return <Utensils className="h-4 w-4" />;
      case "air conditioning":
      case "ac":
        return <Wind className="h-4 w-4" />;
      case "queen bed":
      case "2 beds":
      case "convertible bed":
        return <Bed className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Campervans Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Available Campervans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCampervans.map((van) => (
              <Card key={van.id} className="overflow-hidden">
                <img
                  src={van.image}
                  alt={van.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{van.name}</h3>
                  <p className="text-muted-foreground mb-4">
                    {van.brand} {van.model}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-4 w-4" />
                    <span>{van.seats} seats</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {van.features.map((feature, index) => (
                      <span
                        key={index}
                        className="flex items-center gap-1 text-sm bg-secondary px-2 py-1 rounded"
                      >
                        {getFeatureIcon(feature)}
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold">
                        ฿{van.price.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground">/day</span>
                    </div>
                    <Button onClick={() => handleSelectCampervan(van.id)}>
                      Select
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Campsites Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Available Campsites</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockCampsites.map((site) => (
              <Card key={site.id} className="overflow-hidden">
                <img
                  src={site.image}
                  alt={site.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{site.name}</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {site.location}
                  </p>
                  <p className="text-sm mb-4">{site.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold">
                        ฿{site.price.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground">/night</span>
                    </div>
                    <Button onClick={() => handleSelectCampsite(site.id)}>
                      Select
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResults;