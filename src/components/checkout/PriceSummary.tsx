
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
  totalDays?: number;
  totalPrice?: number;
}

const PriceSummary = ({ motorhome, hotel, totalDays, totalPrice }: PriceSummaryProps) => {
  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle>สรุปราคา</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span>ระยะเวลา</span>
          <span>{totalDays || 0} วัน</span>
        </div>

        {motorhome && (
          <div>
            <h3 className="font-medium">ค่าเช่ารถ</h3>
            <p className="text-muted-foreground">{motorhome.name}</p>
            <p className="text-muted-foreground">
              ฿{(motorhome.price || 0).toLocaleString()}
            </p>
          </div>
        )}
        
        {hotel && (
          <div>
            <h3 className="font-medium">ค่าที่พัก</h3>
            <p className="text-muted-foreground">{hotel.name}</p>
            <p className="text-muted-foreground">
              ฿{(hotel.price || 0).toLocaleString()}
            </p>
          </div>
        )}
        
        <div className="border-t pt-4">
          <div className="flex justify-between font-medium text-lg">
            <span>ราคารวมทั้งหมด</span>
            <span>฿{(totalPrice || 0).toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceSummary;
