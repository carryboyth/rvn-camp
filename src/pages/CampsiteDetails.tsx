
import React from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CampsiteDetailPage from "@/components/campsite/CampsiteDetailPage";

// Mock data with different content based on ID
const getCampsiteData = (id: string) => {
  const baseData = {
    id: id || "1",
    name: "Mountain View Eco Campsite",
    images: [
      "/lovable-uploads/491cfd8c-5bc4-4d54-afb5-cc0adc56e139.png",
      "/lovable-uploads/ffbe678e-abe3-4ee8-8950-91cb622e5fde.png",
      "/lovable-uploads/31648e34-1e0e-418b-a716-4edcc750815c.png",
      "/lovable-uploads/57b37350-81fd-4c1a-af07-400f654b5c47.png",
      "/lovable-uploads/71ca327b-2638-4ef8-8596-5784d0446c53.png",
      "/lovable-uploads/d8ae79a0-6073-4419-8cad-67eba89223b4.png"
    ],
    price: 45,
    rating: 4.8,
    reviewCount: 127,
    description: "Escape to nature at our eco-friendly campsite nestled in the heart of the mountains. Perfect for digital nomads and nature lovers seeking tranquility, adventure, and sustainable travel. Wake up to breathtaking sunrise views and fall asleep under a canopy of stars.",
    location: {
      address: "123 Mountain Ridge Trail",
      city: "Boulder Creek",
      country: "United States",
      coordinates: { lat: 37.1234, lng: -122.0567 }
    },
    amenities: [
      "Hot showers",
      "Flush toilets", 
      "Electricity hookups",
      "Fresh water supply",
      "Free Wi-Fi",
      "Campfire pits",
      "Picnic tables",
      "Barbecue grills",
      "Pet-friendly areas",
      "Waste disposal",
      "Communal kitchen",
      "Parking available"
    ],
    activities: [
      "Hiking trails",
      "Mountain biking",
      "Stargazing sessions",
      "Wildlife watching",
      "Photography tours",
      "Yoga classes",
      "Kayak rental",
      "Rock climbing"
    ],
    rules: [
      "Quiet hours from 10 PM to 7 AM",
      "Maximum 6 people per campsite",
      "Pets must be leashed at all times",
      "No loud music or parties",
      "Campfires only in designated areas",
      "Check-in after 2 PM, check-out before 11 AM",
      "No smoking in buildings",
      "Dispose of waste properly"
    ],
    stayOptions: [
      {
        type: "Tent Pitch",
        description: "Perfect spot for your tent with access to all facilities",
        maxGuests: 4,
        price: 35
      },
      {
        type: "RV Spot",
        description: "Full hookup site for RVs and campervans up to 35 feet",
        maxGuests: 6,
        price: 55
      },
      {
        type: "Glamping Cabin",
        description: "Cozy cabin with basic amenities for comfortable camping",
        maxGuests: 4,
        price: 85
      }
    ],
    host: {
      name: "Sarah Mountains",
      avatar: "/lovable-uploads/b3b48e94-e287-44ba-807a-e228a1df866a.png",
      joinedDate: "2019"
    }
  };

  // Customize based on ID
  if (id === "2") {
    return {
      ...baseData,
      name: "Seaside Paradise Campground",
      price: 65,
      description: "Wake up to ocean waves at our beachfront campsite. Perfect for surfers, beach lovers, and anyone seeking a coastal adventure with modern amenities."
    };
  }

  if (id === "3") {
    return {
      ...baseData,
      name: "Forest Hideaway Camp",
      price: 40,
      description: "Immerse yourself in old-growth forest at this secluded campsite. Ideal for nature photographers, bird watchers, and those seeking digital detox."
    };
  }

  return baseData;
};

const CampsiteDetails = () => {
  const { id } = useParams();
  const campsite = getCampsiteData(id || "1");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CampsiteDetailPage campsite={campsite} />
      </main>
      <Footer />
    </div>
  );
};

export default CampsiteDetails;
