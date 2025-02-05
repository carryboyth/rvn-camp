import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Users, Coffee, Bed } from "lucide-react";

interface Motorhome {
  id: number;
  name: string;
  brand: string;
  seats: number;
  price: number;
  image: string;
  amenities: string[];
  bedSize: string;
}

const motorhomes: Motorhome[] = [
  {
    id: 1,
    name: "Motorhome Hilux Revo",
    brand: "Toyota",
    seats: 4,
    price: 120,
    image: "/lovable-uploads/c1762e4a-0c04-42c9-bb90-72efea7f0c35.png",
    amenities: ["Kitchen", "Bathroom", "AC", "WiFi"],
    bedSize: "Queen",
  },
  {
    id: 2,
    name: "Motorhome Hilux Champ",
    brand: "Toyota",
    seats: 6,
    price: 180,
    image: "/lovable-uploads/1b98df29-031c-453f-8985-bf9ab03b53a6.png",
    amenities: ["Kitchen", "Bathroom", "AC", "WiFi", "Solar Panels"],
    bedSize: "King",
  },
  {
    id: 3,
    name: "Motorhome Mitsu Triton",
    brand: "Mitsubishi",
    seats: 2,
    price: 90,
    image: "/lovable-uploads/39ca8590-7c01-4b61-945b-09c0787d5e19.png",
    amenities: ["Kitchenette", "Portable Toilet", "AC"],
    bedSize: "Double",
  },
  {
    id: 4,
    name: "Motorhome Isuzu D-Max",
    brand: "Isuzu",
    seats: 4,
    price: 150,
    image: "/lovable-uploads/e4ce7067-7522-45d6-82c0-56a7fb4d8543.png",
    amenities: ["Kitchen", "Bathroom", "AC", "WiFi", "TV"],
    bedSize: "Queen",
  },
];

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = location.state;

  const handleSelectMotorhome = (motorhome: Motorhome) => {
    navigate("/search-hotels", {
      state: {
        ...searchParams,
        selectedMotorhome: motorhome,
      },
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Available Motorhomes</h2>
      <div className="space-y-6">
        {motorhomes.map((motorhome) => (
          <Card key={motorhome.id} className="overflow-hidden">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-48 md:h-full">
                <img
                  src={motorhome.image}
                  alt={motorhome.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{motorhome.name}</h3>
                <p className="text-muted-foreground mb-4">{motorhome.brand}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{motorhome.seats} seats</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4" />
                    <span>{motorhome.bedSize} bed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coffee className="w-4 h-4" />
                    <span>{motorhome.amenities.join(", ")}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col justify-between">
                <div className="text-right">
                  <p className="text-2xl font-bold">${motorhome.price}</p>
                  <p className="text-muted-foreground">per day</p>
                </div>
                
                <Button
                  onClick={() => handleSelectMotorhome(motorhome)}
                  className="w-full mt-4"
                >
                  <Car className="w-4 h-4 mr-2" />
                  Select Motorhome
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;