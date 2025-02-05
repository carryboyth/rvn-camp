
import { Building } from "lucide-react";

interface SelectedHotelProps {
  hotel: {
    name: string;
    location: string;
    pricePerNight: number;
    image: string;
  };
}

const SelectedHotel = ({ hotel }: SelectedHotelProps) => {
  return (
    <div className="border-t pt-4">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Building className="h-5 w-5" />
        Selected Hotel
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div>
          <p className="font-medium">{hotel.name}</p>
          <p className="text-muted-foreground">{hotel.location}</p>
          <p className="mt-2 text-lg font-semibold">
            ${hotel.pricePerNight} per night
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectedHotel;
