
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Users, Coffee, Bed, MapPin, ArrowLeft } from "lucide-react";
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

  const calculateTotalDays = () => {
    if (!searchParams?.departureDate || !searchParams?.returnDate) return 0;
    const start = new Date(searchParams.departureDate);
    const end = new Date(searchParams.returnDate);
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) || 0;
  };

  const calculateTotalPrice = (price: number) => {
    const days = calculateTotalDays();
    return (price * days) || 0;
  };

  const handleSelectMotorhome = (motorhome: Motorhome) => {
    const totalDays = calculateTotalDays();
    const totalPrice = calculateTotalPrice(motorhome.price);

    toast({
      title: "Selected Motorhome",
      description: `You've selected ${motorhome.name}. Taking you to accommodation search...`,
    });
    
    navigate("/search-hotels", {
      state: {
        ...searchParams,
        selectedMotorhome: {
          ...motorhome,
          price: totalPrice || 0,
        },
        totalDays: totalDays || 0,
        totalPrice: totalPrice || 0,
      },
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="outline"
          size="icon"
          onClick={() => navigate(-1)}
          className="h-10 w-10"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-2xl font-semibold">Available Motorhomes</h2>
      </div>

      {filteredMotorhomes.map((motorhome) => (
        <Card 
          key={motorhome.id} 
          className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-up"
        >
          <div className="grid md:grid-cols-[1fr,2fr,1fr] gap-6">
            <div className="relative h-64 md:h-full min-h-[300px]">
              <img
                src={motorhome.image}
                alt={motorhome.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-2xl font-semibold mb-1">{motorhome.name}</h3>
                <p className="text-muted-foreground text-lg">{motorhome.brand}</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-5 h-5" />
                  <span className="text-foreground">{motorhome.seats} Seats</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Bed className="w-5 h-5" />
                  <span className="text-foreground">{motorhome.bedSize} Bed</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Coffee className="w-5 h-5" />
                  <span className="text-foreground">{motorhome.amenities.join(", ")}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground pt-2">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-foreground">Pick-up: {motorhome.pickupLocation}</span>
                    <span className="text-foreground">Drop-off: {motorhome.dropoffLocation}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 flex flex-col justify-between border-l bg-muted/10">
              <div className="text-right space-y-2">
                <div className="bg-primary/10 p-4 rounded-lg inline-block">
                  <p className="text-3xl font-bold text-primary-foreground">
                    ฿{motorhome.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">per day</p>
                </div>
                
                {calculateTotalDays() > 0 && (
                  <div className="bg-secondary/10 p-4 rounded-lg">
                    <p className="text-xl font-semibold text-secondary-foreground">
                      Total: ฿{calculateTotalPrice(motorhome.price).toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      for {calculateTotalDays()} days
                    </p>
                  </div>
                )}
              </div>
              
              <Button
                onClick={() => handleSelectMotorhome(motorhome)}
                className="w-full mt-4 text-lg py-6"
                size="lg"
              >
                <Car className="w-5 h-5 mr-2" />
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
