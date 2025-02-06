
import { Card } from "@/components/ui/card";
import { Car, Calendar, Clock, Wallet } from "lucide-react";

interface BookingSummaryProps {
  motorhome: any;
  totalDays: number;
  motorhomePrice: number;
  departureDate: string | Date | undefined;
  returnDate: string | Date | undefined;
  formatDate: (date: string | Date | undefined) => string;
}

const BookingSummary = ({
  motorhome,
  totalDays,
  motorhomePrice,
  departureDate,
  returnDate,
  formatDate,
}: BookingSummaryProps) => {
  return (
    <Card className="sticky top-24">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Booking Summary</h2>
        
        {motorhome ? (
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Car className="w-5 h-5 mt-1 text-muted-foreground" />
              <div>
                <p className="font-medium">{motorhome.name}</p>
                <p className="text-sm text-muted-foreground">{motorhome.brand}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Duration</p>
                <p className="text-sm text-muted-foreground">{totalDays} days</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Check-in</p>
                <p className="text-sm text-muted-foreground">
                  {formatDate(departureDate)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Check-out</p>
                <p className="text-sm text-muted-foreground">
                  {formatDate(returnDate)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Wallet className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Total Price</p>
                <p className="text-sm text-muted-foreground">
                  ${motorhomePrice.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-muted-foreground">No motorhome selected</p>
        )}
      </div>
    </Card>
  );
};

export default BookingSummary;
