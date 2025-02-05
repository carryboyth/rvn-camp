
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BookingSummaryProps {
  motorhome?: {
    name?: string;
    price: number;
    pickupLocation: string;
    dropoffLocation: string;
    startDate: string;
    endDate: string;
  };
  hotel?: {
    name?: string;
    price: number;
    location: string;
    roomType: string;
    checkIn: string;
    checkOut: string;
  };
}

const BookingSummary = ({ motorhome, hotel }: BookingSummaryProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {motorhome && (
          <div className="space-y-2">
            <h3 className="font-semibold">Motorhome Details</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Pick-up Location</p>
                <p>{motorhome.pickupLocation}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Drop-off Location</p>
                <p>{motorhome.dropoffLocation}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Start Date</p>
                <p>{motorhome.startDate}</p>
              </div>
              <div>
                <p className="text-muted-foreground">End Date</p>
                <p>{motorhome.endDate}</p>
              </div>
            </div>
          </div>
        )}
        {hotel && (
          <div className="space-y-2">
            <h3 className="font-semibold">Hotel Details</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Check-in Date</p>
                <p>{hotel.checkIn}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Check-out Date</p>
                <p>{hotel.checkOut}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Location</p>
                <p>{hotel.location}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Room Type</p>
                <p>{hotel.roomType}</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BookingSummary;

