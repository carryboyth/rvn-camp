import React from "react";
import CampsiteList from "@/components/CampsiteList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const mockCampsites = [
  {
    id: "1",
    name: "Pine Valley Campground",
    description: "Beautiful campsite nestled in a pine forest with scenic mountain views.",
    location: "Chiang Mai, Thailand",
    amenities: ["WiFi", "Parking", "Pet Friendly"],
    rating: 4.5,
    price: 1500,
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "2",
    name: "Riverside Retreat",
    description: "Peaceful camping spot along the river with excellent fishing opportunities.",
    location: "Kanchanaburi, Thailand",
    amenities: ["Parking", "Pet Friendly"],
    rating: 4.2,
    price: 1200,
    image: "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1447&q=80"
  },
  {
    id: "3",
    name: "Beach Paradise Camp",
    description: "Beachfront camping with stunning sunset views and water activities.",
    location: "Phuket, Thailand",
    amenities: ["WiFi", "Parking"],
    rating: 4.8,
    price: 2000,
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  }
];

const SearchResults = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">Available Campsites</h1>
          <p className="text-muted-foreground mb-8">
            Showing {mockCampsites.length} results for your search
          </p>
          <CampsiteList campsites={mockCampsites} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResults;