import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin, Users, Building, Car } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BookingDetails {
  pickupLocation: string;
  destination: string;
  departureDate: Date;
  returnDate: Date;
  passengers: string;
  rooms: string;
  selectedMotorhome?: {
    name: string;
    brand: string;
    price: number;
    image: string;
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

        <h1 className="text-3xl font-bold mb-8">Booking Summary</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trip Details */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Trip Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-1 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Pick-up Location</p>
                    <p className="text-muted-foreground">{bookingDetails?.pickupLocation}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-1 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Destination</p>
                    <p className="text-muted-foreground">{bookingDetails?.destination}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="w-5 h-5 mt-1 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Departure Date</p>
                    <p className="text-muted-foreground">
                      {bookingDetails?.departureDate?.toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="w-5 h-5 mt-1 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Return Date</p>
                    <p className="text-muted-foreground">
                      {bookingDetails?.returnDate?.toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="w-5 h-5 mt-1 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Passengers</p>
                    <p className="text-muted-foreground">{bookingDetails?.passengers}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Building className="w-5 h-5 mt-1 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Rooms</p>
                    <p className="text-muted-foreground">{bookingDetails?.rooms}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Price Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Price Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {bookingDetails?.selectedMotorhome && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4" />
                      <span>Motorhome</span>
                    </div>
                    <span>${bookingDetails.selectedMotorhome.price} per day</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {bookingDetails.selectedMotorhome.name} - {bookingDetails.selectedMotorhome.brand}
                  </p>
                </div>
              )}

              {bookingDetails?.selectedHotel && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      <span>Hotel</span>
                    </div>
                    <span>${bookingDetails.selectedHotel.pricePerNight} per night</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {bookingDetails.selectedHotel.name} - {bookingDetails.selectedHotel.location}
                  </p>
                </div>
              )}

              <div className="pt-4 border-t">
                <div className="flex justify-between font-medium">
                  <span>Duration</span>
                  <span>{calculateTotalDays()} days</span>
                </div>
                <div className="flex justify-between font-medium text-lg mt-2">
                  <span>Total Price</span>
                  <span>${calculateTotalPrice()}</span>
                </div>
              </div>

              <Button 
                className="w-full mt-4"
                onClick={() => navigate("/customer-details", { state: bookingDetails })}
              >
                Proceed to Customer Details
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