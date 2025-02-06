
import { Building, Calendar, Clock, Wallet } from "lucide-react";

interface SelectedHotelProps {
  hotel: {
    name: string;
    location: string;
    pricePerNight: number;
    image: string;
  };
  checkIn?: string;
  checkOut?: string;
  totalDays?: number;
  totalPrice?: number;
}

const SelectedHotel = ({ 
  hotel, 
  checkIn, 
  checkOut, 
  totalDays = 0,
  totalPrice = 0 
}: SelectedHotelProps) => {
  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
        <div className="space-y-3">
          <div>
            <p className="font-medium">{hotel.name}</p>
            <p className="text-muted-foreground">{hotel.location}</p>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm"><span className="font-medium">Check-in:</span> {formatDate(checkIn)}</p>
              <p className="text-sm"><span className="font-medium">Check-out:</span> {formatDate(checkOut)}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm"><span className="font-medium">Duration:</span> {totalDays} days</p>
          </div>

          <div className="flex items-center gap-2">
            <Wallet className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm"><span className="font-medium">Total Price:</span> ${totalPrice.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedHotel;
