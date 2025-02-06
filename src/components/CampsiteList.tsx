
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Wifi, Car, PawPrint, Star } from "lucide-react";

interface Campsite {
  id: string;
  name: string;
  image: string;
  location: string;
  description: string;
  price: number;
  amenities: string[];
  rating: number;
}

interface CampsiteListProps {
  campsites: Campsite[];
}

const CampsiteList = ({ campsites }: CampsiteListProps) => {
  const navigate = useNavigate();

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "WiFi":
        return <Wifi className="h-4 w-4" />;
      case "Parking":
        return <Car className="h-4 w-4" />;
      case "Pet Friendly":
        return <PawPrint className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {campsites.map((campsite) => (
        <Card key={campsite.id} className="p-0 overflow-hidden animate-fade-up">
          <div className="grid grid-cols-1 md:grid-cols-[300px,1fr,200px] gap-4">
            {/* Left Column - Image */}
            <div className="h-[200px] md:h-full">
              <img
                src={campsite.image}
                alt={campsite.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Middle Column - Details */}
            <div className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <h3 className="text-xl font-semibold">{campsite.name}</h3>
                <div className="flex items-center text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1 text-sm">{campsite.rating}</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                {campsite.location}
              </p>
              <p className="text-muted-foreground mb-4">{campsite.description}</p>
              <div className="flex flex-wrap justify-center gap-3">
                {campsite.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 text-sm text-muted-foreground bg-muted px-2 py-1 rounded-md"
                  >
                    {getAmenityIcon(amenity)}
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Price & Button */}
            <div className="p-6 bg-secondary flex flex-col justify-center items-center text-center border-l">
              <p className="text-2xl font-bold mb-1">
                ฿{campsite.price.toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground mb-4">per night</p>
              <Button
                onClick={() => navigate(`/campsite/${campsite.id}`)}
                className="w-full"
              >
                Select
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CampsiteList;
