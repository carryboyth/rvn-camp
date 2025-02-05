
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CreditCard } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import TripDetails from "@/components/booking/TripDetails";
import SelectedMotorhome from "@/components/booking/SelectedMotorhome";
import SelectedHotel from "@/components/booking/SelectedHotel";

interface BookingDetails {
  pickupLocation: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  passengers: number;
  rooms: number;
  selectedMotorhome?: {
    name: string;
    brand: string;
    price: number;
    image: string;
    pickupLocation: string;
    dropoffLocation: string;
  };
  selectedHotel?: {
    name: string;
    location: string;
    pricePerNight: number;
    image: string;
  };
}

const BookingSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const bookingDetails = location.state as BookingDetails;

  const calculateTotalDays = () => {
    if (!bookingDetails?.departureDate || !bookingDetails?.returnDate) return 0;
    const start = new Date(bookingDetails.departureDate);
    const end = new Date(bookingDetails.returnDate);
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  };

  const calculateTotalPrice = () => {
    const days = calculateTotalDays();
    const motorhomeTotal = bookingDetails?.selectedMotorhome?.price 
      ? bookingDetails.selectedMotorhome.price * days 
      : 0;
    const hotelTotal = bookingDetails?.selectedHotel?.pricePerNight 
      ? bookingDetails.selectedHotel.pricePerNight * days 
      : 0;
    return motorhomeTotal + hotelTotal;
  };

  const handleProceedToCustomerDetails = () => {
    if (!bookingDetails?.selectedMotorhome && !bookingDetails?.selectedHotel) {
      toast({
        title: "ข้อมูลไม่ครบถ้วน",
        description: "กรุณาเลือกรถและโรงแรมเพื่อดำเนินการต่อ",
        variant: "destructive",
      });
      return;
    }
    
    navigate("/customer-details", { 
      state: {
        motorhome: bookingDetails.selectedMotorhome,
        hotel: bookingDetails.selectedHotel,
        totalPrice: calculateTotalPrice(),
        totalDays: calculateTotalDays(),
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Button
          variant="outline"
          className="mb-6"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          ย้อนกลับ
        </Button>

        <h1 className="text-2xl md:text-3xl font-bold mb-8">สรุปการจอง</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <TripDetails {...bookingDetails} />
            
            {bookingDetails?.selectedMotorhome && (
              <SelectedMotorhome motorhome={bookingDetails.selectedMotorhome} />
            )}

            {bookingDetails?.selectedHotel && (
              <SelectedHotel hotel={bookingDetails.selectedHotel} />
            )}
          </div>

          {/* Price Summary Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                สรุปราคา
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>ระยะเวลา</span>
                  <span>{calculateTotalDays()} วัน</span>
                </div>
                {bookingDetails?.selectedMotorhome && (
                  <div className="flex justify-between">
                    <span>ค่าเช่ารถ</span>
                    <span>
                      ฿{bookingDetails.selectedMotorhome.price * calculateTotalDays()}
                    </span>
                  </div>
                )}
                {bookingDetails?.selectedHotel && (
                  <div className="flex justify-between">
                    <span>ค่าที่พัก</span>
                    <span>
                      ฿{bookingDetails.selectedHotel.pricePerNight * calculateTotalDays()}
                    </span>
                  </div>
                )}
                <div className="pt-4 border-t">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>ราคารวมทั้งหมด</span>
                    <span>฿{calculateTotalPrice()}</span>
                  </div>
                </div>
              </div>

              <Button 
                className="w-full mt-4"
                onClick={handleProceedToCustomerDetails}
              >
                ดำเนินการต่อ
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingSummary;
