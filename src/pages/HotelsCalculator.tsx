
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
              <CardTitle className="text-center">No Hotel Found</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">Please select a hotel from the listing page</p>
              <Button className="mt-4" onClick={() => window.history.back()}>
                Go Back
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
        <h1 className="text-3xl font-bold text-center mb-8">Hotel Booking Details</h1>
        
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Summary</CardTitle>
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
                    <span>Maximum {hotel.guests} guests</span>
                  </div>
                  <p className="text-muted-foreground">{hotel.description}</p>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Stay Details</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                        <p>Check-in: {checkIn ? new Date(checkIn).toLocaleDateString() : 'Not specified'}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                        <p>Check-out: {checkOut ? new Date(checkOut).toLocaleDateString() : 'Not specified'}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <p>Duration: {totalDays} nights</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg space-y-2">
                      <p className="flex justify-between">
                        <span>Price per night:</span>
                        <span>${hotel.pricePerNight.toLocaleString()}</span>
                      </p>
                      <p className="flex justify-between text-lg font-semibold">
                        <span>Total Price:</span>
                        <span>${totalPrice.toLocaleString()}</span>
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
                  Go Back
                </Button>
                <Button onClick={handleContinue}>
                  Continue
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
