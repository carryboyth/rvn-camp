
import React from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CampsiteDetailsComponent from "@/components/CampsiteDetails";

// Mock data with different content based on ID
const getCampsiteData = (id: string) => {
  if (id === "3") {
    return {
      name: "Mountain Mist Luxury Campsite",
      images: [
        "/lovable-uploads/57b37350-81fd-4c1a-af07-400f654b5c47.png",
        "/lovable-uploads/71ca327b-2638-4ef8-8596-5784d0446c53.png",
        "/lovable-uploads/d8ae79a0-6073-4419-8cad-67eba89223b4.png"
      ],
      price: 3500,
      description: "Experience luxury camping with breathtaking mountain views, infinity pools, and private balconies overlooking misty valleys. Perfect for a romantic getaway or peaceful retreat.",
      facilities: [
        "Infinity Pool",
        "Private Balcony",
        "Mountain Views",
        "Luxury Amenities",
        "Free WiFi",
        "Room Service"
      ],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      rules: [
        "No loud music after 10 PM",
        "No smoking in rooms",
        "Keep balcony doors closed when not in use",
        "Respect quiet hours from 10 PM to 6 AM"
      ],
      tyreRoom: true
    };
  }
  if (id === "2") {
    return {
      name: "Seaside Resort Campsite",
      images: [
        "/lovable-uploads/9d6d7463-6a3b-44b3-b44d-581e03ab8589.png",
        "/lovable-uploads/b78a97a9-00b6-4d8c-8bb9-b5d91a0c785c.png",
        "/lovable-uploads/44c523a0-57c5-4de5-a34b-44f2808fe259.png"
      ],
      price: 2500,
      description: "A luxurious beachfront campsite featuring infinity pools and modern amenities, perfect for a relaxing getaway.",
      facilities: [
        "Free WiFi",
        "Parking Available",
        "Infinity Pool",
        "Power Hookups"
      ],
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
      rules: [
        "No loud music after 10 PM",
        "No glass items near the pool area",
        "Children must be supervised at all times"
      ],
      tyreRoom: true
    };
  }
  
  // Default mock data for other IDs
  return {
    name: "Mountain View Campsite",
    images: [
      "/lovable-uploads/491cfd8c-5bc4-4d54-afb5-cc0adc56e139.png",
      "/lovable-uploads/ffbe678e-abe3-4ee8-8950-91cb622e5fde.png",
      "/lovable-uploads/31648e34-1e0e-418b-a716-4edcc750815c.png"
    ],
    price: 1500,
    description: "A beautiful campsite with mountain views, perfect for RV camping and outdoor adventures.",
    facilities: [
      "Free WiFi",
      "Parking Available",
      "Hot Showers",
      "Power Hookups"
    ],
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    rules: [
      "No loud music after 10 PM",
      "Pets must be leashed",
      "No open fires outside designated areas"
    ],
    tyreRoom: true
  };
};

const CampsiteDetails = () => {
  const { id } = useParams();
  const campsite = getCampsiteData(id || "1");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CampsiteDetailsComponent campsite={campsite} />
      </main>
      <Footer />
    </div>
  );
};

export default CampsiteDetails;
