
import React from "react";
import CampervanDetailPage from "@/components/campervan/CampervanDetailPage";

// Mock data for demonstration
const mockCampervan = {
  id: "cv-001",
  name: "Adventure Seeker Pro",
  model: "Transit Custom",
  brand: "Ford",
  images: [
    "/lovable-uploads/c1762e4a-0c04-42c9-bb90-72efea7f0c35.png",
    "/lovable-uploads/1b98df29-031c-453f-8985-bf9ab03b53a6.png",
    "/lovable-uploads/39ca8590-7c01-4b61-945b-09c0787d5e19.png",
    "/lovable-uploads/e4ce7067-7522-45d6-82c0-56a7fb4d8543.png",
    "/lovable-uploads/b3b48e94-e287-44ba-807a-e228a1df866a.png"
  ],
  pricePerDay: 185,
  rating: 4.8,
  reviewCount: 127,
  description: "Perfect for outdoor enthusiasts and families seeking adventure. This modern campervan combines comfort with functionality, featuring a fully equipped kitchen, comfortable sleeping arrangements, and all the amenities needed for an unforgettable road trip through nature's most beautiful destinations.",
  year: 2022,
  specs: {
    seats: 4,
    sleeps: 4,
    transmission: "Automatic",
    fuelType: "Diesel",
    engine: "2.0L EcoBlue"
  },
  amenities: {
    bedConfiguration: "1 Double bed (converts from dinette) + 1 Pop-top double bed",
    kitchen: ["2-burner gas stove", "Sink with running water", "80L fridge/freezer", "Microwave", "Coffee maker"],
    bathroom: true,
    airConditioning: true,
    powerOutlets: 4,
    waterTank: "100L fresh water + 90L grey water",
    solarPanel: true,
    wifi: true
  },
  pricing: {
    basePrice: 185,
    minDays: 3,
    insurance: true,
    unlimitedMileage: true,
    roadsideAssistance: true
  },
  locations: {
    pickup: ["Downtown Depot", "Airport Terminal", "North Station", "City Center"],
    dropoff: ["Any pickup location", "Popular camping destinations", "Major cities (extra fee)"]
  }
};

const CampervanDetail = () => {
  return <CampervanDetailPage campervan={mockCampervan} />;
};

export default CampervanDetail;
