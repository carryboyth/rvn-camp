import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Users, Coffee, Bed, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface Motorhome {
  id: number;
  name: string;
  brand: string;
  seats: number;
  price: number;
  image: string;
  amenities: string[];
  bedSize: string;
  pickupLocation: string;
  dropoffLocation: string;
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
    pickupLocation: "Suvarnabhumi Airport",
    dropoffLocation: "Chiang Mai International Airport",
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
    pickupLocation: "Don Mueang Airport",
    dropoffLocation: "Phuket International Airport",
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
    pickupLocation: "Suvarnabhumi Airport",
    dropoffLocation: "Krabi International Airport",
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
    pickupLocation: "Don Mueang Airport",
    dropoffLocation: "Chiang Mai International Airport",
  },
];

interface SearchResultsProps {
  filters?: {
    features: string[];
    priceRange: number[];
    types: string[];
    capacity: string[];
  };
}

const SearchResults = ({ filters }: SearchResultsProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const searchParams = location.state;
  const [filteredMotorhomes, setFilteredMotorhomes] = useState(motorhomes);

  const calculateTotalPrice = (price: number) => {
    if (!searchParams?.departureDate || !searchParams?.returnDate) return price;
    const start = new Date(searchParams.departureDate);
    const end = new Date(searchParams.returnDate);
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return price * days;
  };

  const handleSelectMotorhome = (motorhome: Motorhome) => {
    toast({
      title: "Motorhome Selected",
      description: `You have selected the ${motorhome.name}. Redirecting to hotel search...`,
    });
    
    navigate("/search-hotels", {
      state: {
        ...searchParams,
        selectedMotorhome: motorhome,
      },
    });
  };

  return (
    <div className="space-y-6">
      {filteredMotorhomes.map((motorhome) => (
        <Card key={motorhome.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 md:h-full">
              <img
                src={motorhome.image}
                alt={motorhome.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{motorhome.name}</h3>
              <p className="text-muted-foreground mb-4">{motorhome.brand}</p>
              
              <div className="space-y-3">
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
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <div className="flex flex-col">
                    <span>Pick-up: {motorhome.pickupLocation}</span>
                    <span>Drop-off: {motorhome.dropoffLocation}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 flex flex-col justify-between border-l">
              <div className="text-right">
                <p className="text-2xl font-bold">${motorhome.price}</p>
                <p className="text-muted-foreground">per day</p>
                {searchParams?.departureDate && searchParams?.returnDate && (
                  <div className="mt-2">
                    <p className="text-lg font-semibold">
                      Total: ${calculateTotalPrice(motorhome.price)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      for {Math.ceil(
                        (new Date(searchParams.returnDate).getTime() -
                          new Date(searchParams.departureDate).getTime()) /
                          (1000 * 60 * 60 * 24)
                      )} days
                    </p>
                  </div>
                )}
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
  );
};

export default SearchResults;