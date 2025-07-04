import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CreditCard, Save } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import TripDetails from "@/components/booking/TripDetails";
import SelectedMotorhome from "@/components/booking/SelectedMotorhome";
import SelectedHotel from "@/components/booking/SelectedHotel";
import LoginPopup from "@/components/auth/LoginPopup";

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
  const [showLoginPopup, setShowLoginPopup] = useState(false);

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
        title: "Incomplete Information",
        description: "Please select a motorhome and hotel to proceed",
        variant: "destructive",
      });
      return;
    }
    
    navigate("/payment-summary", { 
      state: {
        motorhome: bookingDetails.selectedMotorhome,
        hotel: bookingDetails.selectedHotel,
        totalPrice: calculateTotalPrice(),
        totalDays: calculateTotalDays(),
      }
    });
  };

  const handleSavePlan = () => {
    setShowLoginPopup(true);
  };

  const handleContinueAsGuest = () => {
    navigate("/payment-summary", { 
      state: {
        motorhome: bookingDetails.selectedMotorhome,
        hotel: bookingDetails.selectedHotel,
        totalPrice: calculateTotalPrice(),
        totalDays: calculateTotalDays(),
        isGuest: true,
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
          Back
        </Button>

        <h1 className="text-2xl md:text-3xl font-bold mb-8">Booking Summary</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <TripDetails {...bookingDetails} />
            
            {bookingDetails?.selectedMotorhome && (
              <SelectedMotorhome 
                motorhome={bookingDetails.selectedMotorhome}
                startDate={bookingDetails.departureDate}
                endDate={bookingDetails.returnDate}
                totalDays={calculateTotalDays()}
                totalPrice={bookingDetails.selectedMotorhome.price * calculateTotalDays()}
              />
            )}

            {bookingDetails?.selectedHotel && (
              <SelectedHotel 
                hotel={bookingDetails.selectedHotel}
                checkIn={bookingDetails.departureDate}
                checkOut={bookingDetails.returnDate}
                totalDays={calculateTotalDays()}
                totalPrice={bookingDetails.selectedHotel.pricePerNight * calculateTotalDays()}
              />
            )}
          </div>

          {/* Price Summary Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Price Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Duration</span>
                  <span>{calculateTotalDays()} days</span>
                </div>
                {bookingDetails?.selectedMotorhome && (
                  <div className="flex justify-between">
                    <span>Motorhome Rental</span>
                    <span>
                      ${bookingDetails.selectedMotorhome.price * calculateTotalDays()}
                    </span>
                  </div>
                )}
                {bookingDetails?.selectedHotel && (
                  <div className="flex justify-between">
                    <span>Hotel Stay</span>
                    <span>
                      ${bookingDetails.selectedHotel.pricePerNight * calculateTotalDays()}
                    </span>
                  </div>
                )}
                <div className="pt-4 border-t">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total Price</span>
                    <span>${calculateTotalPrice()}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  className="w-full"
                  onClick={handleProceedToCustomerDetails}
                >
                  Proceed to Customer Details
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleSavePlan}
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save Plan
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />

      <LoginPopup
        isOpen={showLoginPopup}
        onClose={() => setShowLoginPopup(false)}
        onContinueAsGuest={handleContinueAsGuest}
        redirectAfterLogin="/manage-trip"
      />
    </div>
  );
};

export default BookingSummary;
