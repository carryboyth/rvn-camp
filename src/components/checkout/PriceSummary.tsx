
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PriceSummaryProps {
  motorhome?: {
    name?: string;
    price: number;
  };
  hotel?: {
    name?: string;
    price: number;
  };
}

const PriceSummary = ({ motorhome, hotel }: PriceSummaryProps) => {
  const calculateTotal = () => {
    const motorhomeTotal = motorhome?.price || 0;
    const hotelTotal = hotel?.price || 0;
    return motorhomeTotal + hotelTotal;
  };

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle>Price Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {motorhome && (
          <div>
            <h3 className="font-medium">Motorhome Rental</h3>
            <p className="text-muted-foreground">{motorhome.name}</p>
            <p className="text-muted-foreground">
              ฿{motorhome.price.toLocaleString()} / night
            </p>
          </div>
        )}
        {hotel && (
          <div>
            <h3 className="font-medium">Hotel Stay</h3>
            <p className="text-muted-foreground">{hotel.name}</p>
            <p className="text-muted-foreground">
              ฿{hotel.price.toLocaleString()} / night
            </p>
          </div>
        )}
        <div className="border-t pt-4">
          <div className="flex justify-between font-medium text-lg">
            <span>Total Price</span>
            <span>฿{calculateTotal().toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceSummary;
