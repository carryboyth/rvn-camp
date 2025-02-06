
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Star, Users } from "lucide-react";

interface HotelCardProps {
  hotel: {
    id: number;
    name: string;
    image: string;
    location: string;
    description: string;
    pricePerNight: number;
    rating: number;
    guests: number;
  };
  totalDays: number;
  onBookNow: () => void;
}

const HotelCard = ({ hotel, totalDays, onBookNow }: HotelCardProps) => {
  return (
    <Card className="overflow-hidden animate-fade-up">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="relative h-[200px] md:h-full">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="p-6 md:p-0">
          <h2 className="text-2xl font-semibold mb-2">{hotel.name}</h2>
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <MapPin className="w-4 h-4" />
            <span>{hotel.location}</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>{hotel.rating}</span>
            <Users className="w-4 h-4 ml-4" />
            <span>Up to {hotel.guests} guests</span>
          </div>
          <p className="text-muted-foreground">{hotel.description}</p>
        </div>

        <div className="p-6 md:p-0 flex flex-col justify-center items-end">
          <div className="text-right mb-4">
            <p className="text-2xl font-bold">
              ${hotel.pricePerNight.toLocaleString()}
            </p>
            <p className="text-muted-foreground">per night</p>
            {totalDays > 0 && (
              <div className="mt-2 p-2 bg-secondary/10 rounded-lg">
                <p className="font-semibold">
                  ${(hotel.pricePerNight * totalDays).toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground">
                  for {totalDays} days
                </p>
              </div>
            )}
          </div>
          <Button onClick={onBookNow} className="w-full md:w-auto">
            Book Now
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default HotelCard;
