import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Eye } from "lucide-react";
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
    name: "Toyota Hilux Revo Camper",
    brand: "Toyota",
    seats: 4,
    price: 5000,
    image: "/lovable-uploads/c1762e4a-0c04-42c9-bb90-72efea7f0c35.png",
    amenities: ["Bathroom", "Solar panel", "Kitchen", "AC", "WiFi", "TV", "Fridge"],
    bedSize: "Queen",
    pickupLocation: "Suvarnabhumi Airport",
    dropoffLocation: "Chiang Mai International Airport",
  },
  {
    id: 2,
    name: "Toyota Hilux Champ Camper",
    brand: "Toyota",
    seats: 6,
    price: 7500,
    image: "/lovable-uploads/1b98df29-031c-453f-8985-bf9ab03b53a6.png",
    amenities: ["Kitchen", "Bathroom", "AC", "WiFi", "Solar Panels", "TV", "Shower"],
    bedSize: "King",
    pickupLocation: "Don Mueang Airport",
    dropoffLocation: "Phuket International Airport",
  },
  {
    id: 3,
    name: "Mitsubishi Triton Camper",
    brand: "Mitsubishi",
    seats: 2,
    price: 3500,
    image: "/lovable-uploads/39ca8590-7c01-4b61-945b-09c0787d5e19.png",
    amenities: ["Kitchenette", "Portable Toilet", "AC", "Solar panel"],
    bedSize: "Double",
    pickupLocation: "Suvarnabhumi Airport",
    dropoffLocation: "Krabi International Airport",
  },
  {
    id: 4,
    name: "Isuzu D-Max Camper",
    brand: "Isuzu",
    seats: 4,
    price: 6000,
    image: "/lovable-uploads/e4ce7067-7522-45d6-82c0-56a7fb4d8543.png",
    amenities: ["Kitchen", "Bathroom", "AC", "WiFi", "TV", "Fridge", "Shower"],
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
  const [filteredMotorhomes] = useState(motorhomes);

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
      title: "เลือกรถ Motorhome",
      description: `คุณได้เลือก ${motorhome.name} กำลังพาคุณไปยังหน้ารายละเอียด...`,
    });
    
    navigate("/motorhome-calculator", {
      state: {
        ...searchParams,
        selectedMotorhome: motorhome,
        totalDays: totalDays,
        totalPrice: totalPrice,
      },
    });
  };

  const handleViewDetails = (motorhome: Motorhome) => {
    navigate(`/motorhome/${motorhome.id}`, {
      state: {
        ...searchParams,
        selectedMotorhome: motorhome,
      },
    });
  };

  const displayAmenities = (amenities: string[], maxShow: number = 3) => {
    const shown = amenities.slice(0, maxShow);
    const remaining = amenities.length - maxShow;
    return { shown, remaining };
  };

  return (
    <div className="space-y-4">
      <p className="text-muted-foreground font-medium mb-4">
        {filteredMotorhomes.length} Vehicle type found
      </p>

      {filteredMotorhomes.map((motorhome) => {
        const { shown, remaining } = displayAmenities(motorhome.amenities);
        
        return (
          <Card 
            key={motorhome.id} 
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="relative w-full md:w-72 h-48 md:h-auto flex-shrink-0">
                <img
                  src={motorhome.image}
                  alt={motorhome.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 p-5">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  {/* Left side - Details */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold">{motorhome.name}</h3>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Available
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>Up to {motorhome.seats} guests</span>
                    </div>
                    
                    {/* Amenities */}
                    <div className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
                      {shown.map((amenity, index) => (
                        <span key={amenity}>
                          {amenity}
                          {index < shown.length - 1 && <span className="mx-1">•</span>}
                        </span>
                      ))}
                      {remaining > 0 && (
                        <span className="text-muted-foreground">(+{remaining} more)</span>
                      )}
                    </div>
                  </div>
                  
                  {/* Right side - Price and Buttons */}
                  <div className="flex flex-col items-end gap-3">
                    <div className="text-right">
                      <p className="text-2xl font-bold">
                        ฿{motorhome.price.toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground">/ night</p>
                    </div>
                    
                    <p className="text-xs text-muted-foreground">
                      Add-ons & insurance not included
                    </p>
                    
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleSelectMotorhome(motorhome)}
                        className="bg-primary hover:bg-primary/90"
                      >
                        Select vehicle
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleViewDetails(motorhome)}
                        className="gap-1"
                      >
                        <Eye className="w-4 h-4" />
                        View details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default SearchResults;
