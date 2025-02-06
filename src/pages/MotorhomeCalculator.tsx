
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";

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

const MotorhomeCalculator = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const motorhome = location.state?.selectedMotorhome as Motorhome;
  const totalDays = location.state?.totalDays || 0;
  const totalPrice = location.state?.totalPrice || 0;

  const handleContinue = () => {
    navigate("/search-hotels", {
      state: {
        selectedMotorhome: motorhome,
        totalDays: totalDays,
        totalPrice: totalPrice,
        departureDate: location.state?.departureDate,
        returnDate: location.state?.returnDate
      }
    });
  };

  if (!motorhome) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">ไม่พบข้อมูลรถเช่า</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">กรุณาเลือกรถเช่าจากหน้ารายการ</p>
              <Button className="mt-4" onClick={() => window.history.back()}>
                กลับไปหน้าที่แล้ว
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">รายละเอียดการเช่ารถ Motorhome</h1>
        
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">สรุปรายการ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={motorhome.image}
                    alt={motorhome.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">{motorhome.name}</h3>
                    <p className="text-muted-foreground">{motorhome.brand}</p>
                  </div>
                  <div className="space-y-2">
                    <p><span className="font-medium">จำนวนที่นั่ง:</span> {motorhome.seats} ที่นั่ง</p>
                    <p><span className="font-medium">ขนาดเตียง:</span> {motorhome.bedSize}</p>
                    <p><span className="font-medium">สิ่งอำนวยความสะดวก:</span> {motorhome.amenities.join(", ")}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">สถานที่รับ-ส่งรถ</h4>
                    <p><span className="text-muted-foreground">รับรถ:</span> {motorhome.pickupLocation}</p>
                    <p><span className="text-muted-foreground">ส่งรถ:</span> {motorhome.dropoffLocation}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <p>ระยะเวลาเช่า: {totalDays} วัน</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg space-y-2">
                      <p className="flex justify-between">
                        <span>ราคาต่อวัน:</span>
                        <span>฿{motorhome.price.toLocaleString()}</span>
                      </p>
                      <p className="flex justify-between text-lg font-semibold">
                        <span>ราคารวมทั้งหมด:</span>
                        <span>฿{totalPrice.toLocaleString()}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-4">
                <Button
                  variant="outline"
                  onClick={() => window.history.back()}
                >
                  กลับไปหน้าที่แล้ว
                </Button>
                <Button onClick={handleContinue}>
                  ดำเนินการต่อ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MotorhomeCalculator;
