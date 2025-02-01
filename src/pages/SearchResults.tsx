import React from "react";
import CampsiteList from "@/components/CampsiteList";

// Mock data for demonstration
const mockCampsites = [
  {
    id: "1",
    name: "Mountain View Campsite",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    location: "Chiang Mai",
    description: "A peaceful campsite with stunning mountain views and modern amenities.",
    price: 1500,
    amenities: ["WiFi", "Parking", "Pet Friendly"],
    rating: 4.8,
  },
  {
    id: "2",
    name: "Riverside Haven",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    location: "Phuket",
    description: "Serene riverside location perfect for nature lovers and fishing enthusiasts.",
    price: 1800,
    amenities: ["WiFi", "Parking", "Shower"],
    rating: 4.5,
  },
  {
    id: "3",
    name: "Forest Retreat",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    location: "Krabi",
    description: "Secluded forest campsite offering a true escape into nature.",
    price: 1200,
    amenities: ["Parking", "Pet Friendly"],
    rating: 4.6,
  },
  {
    id: "4",
    name: "Hilltop Paradise",
    image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
    location: "Koh Samui",
    description: "Elevated camping experience with panoramic views of the island.",
    price: 2000,
    amenities: ["WiFi", "Parking", "Shower", "Pet Friendly"],
    rating: 4.9,
  },
];

const SearchResults = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Available Campsites</h1>
      <p className="text-muted-foreground mb-8">
        Showing {mockCampsites.length} results for your search
      </p>
      <CampsiteList campsites={mockCampsites} />
    </div>
  );
};

export default SearchResults;