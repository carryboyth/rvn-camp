import React from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CampsiteDetailsComponent from "@/components/CampsiteDetails";

// This is mock data - in a real app, this would come from an API
const mockCampsite = {
  name: "Mountain View Campsite",
  images: [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
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

const CampsiteDetails = () => {
  const { id } = useParams();

  // In a real app, you would fetch the campsite data based on the ID
  // For now, we'll use the mock data
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <CampsiteDetailsComponent campsite={mockCampsite} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CampsiteDetails;
