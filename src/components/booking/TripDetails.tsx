
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, Building } from "lucide-react";

interface TripDetailsProps {
  pickupLocation: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  passengers: number;
  rooms: number;
}

const TripDetails = ({
  pickupLocation,
  destination,
  departureDate,
  returnDate,
  passengers,
  rooms,
}: TripDetailsProps) => {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Trip Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-2">
            <MapPin className="w-5 h-5 mt-1 text-muted-foreground" />
            <div>
              <p className="font-medium">Pick-up Location</p>
              <p className="text-muted-foreground">{pickupLocation}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-5 h-5 mt-1 text-muted-foreground" />
            <div>
              <p className="font-medium">Destination</p>
              <p className="text-muted-foreground">{destination}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Calendar className="w-5 h-5 mt-1 text-muted-foreground" />
            <div>
              <p className="font-medium">Departure Date</p>
              <p className="text-muted-foreground">
                {new Date(departureDate).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Calendar className="w-5 h-5 mt-1 text-muted-foreground" />
            <div>
              <p className="font-medium">Return Date</p>
              <p className="text-muted-foreground">
                {new Date(returnDate).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Users className="w-5 h-5 mt-1 text-muted-foreground" />
            <div>
              <p className="font-medium">Passengers</p>
              <p className="text-muted-foreground">{passengers}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Building className="w-5 h-5 mt-1 text-muted-foreground" />
            <div>
              <p className="font-medium">Rooms</p>
              <p className="text-muted-foreground">{rooms}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TripDetails;
