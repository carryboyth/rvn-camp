
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Users } from "lucide-react";

interface Hotel {
  id: number;
  name: string;
  image: string;
  location: string;
  description: string;
  pricePerNight: number;
  rating: number;
  guests: number;
}

const HotelsCalculator = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hotel = location.state?.selectedHotel as Hotel;
  const totalDays = location.state?.totalDays || 0;
  const totalPrice = location.state?.totalPrice || 0;
  const checkIn = location.state?.checkIn;
  const checkOut = location.state?.checkOut;

  const handleContinue = () => {
    navigate("/booking-summary", {
      state: {
        ...location.state,
        selectedHotel: hotel,
        totalDays: totalDays,
        totalPrice: totalPrice
      }
    });
  };

  if (!hotel) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">ไม่พบข้อมูลที่พัก</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">กรุณาเลือกที่พักจากหน้ารายการ</p>
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
        <h1 className="text-3xl font-bold text-center mb-8">รายละเอียดการจองที่พัก</h1>
        
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">สรุปรายการ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">{hotel.name}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{hotel.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>รองรับผู้เข้าพักสูงสุด {hotel.guests} ท่าน</span>
                  </div>
                  <p className="text-muted-foreground">{hotel.description}</p>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">รายละเอียดการเข้าพัก</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                        <p>เช็คอิน: {checkIn ? new Date(checkIn).toLocaleDateString() : 'ไม่ระบุ'}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                        <p>เช็คเอาท์: {checkOut ? new Date(checkOut).toLocaleDateString() : 'ไม่ระบุ'}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <p>ระยะเวลาเข้าพัก: {totalDays} คืน</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg space-y-2">
                      <p className="flex justify-between">
                        <span>ราคาต่อคืน:</span>
                        <span>฿{hotel.pricePerNight.toLocaleString()}</span>
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

export default HotelsCalculator;
