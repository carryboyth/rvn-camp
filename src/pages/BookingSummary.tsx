import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin, Users, Building, Car, CreditCard } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";

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
    if (!bookingDetails?.selectedMotorhome || !bookingDetails?.selectedHotel) {
      toast({
        title: "Incomplete Booking",
        description: "Please select both a motorhome and hotel to proceed.",
        variant: "destructive",
      });
      return;
    }
    
    navigate("/customer-details", { 
      state: {
        ...bookingDetails,
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
          Back
        </Button>

        <h1 className="text-2xl md:text-3xl font-bold mb-8">Booking Summary</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Trip Details */}
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
                      {new Date(bookingDetails?.departureDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="w-5 h-5 mt-1 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Return Date</p>
                    <p className="text-muted-foreground">
                      {new Date(bookingDetails?.returnDate).toLocaleDateString()}
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

              {bookingDetails?.selectedMotorhome && (
                <div className="border-t pt-4">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Car className="h-5 w-5" />
                    Selected Motorhome
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <img
                      src={bookingDetails.selectedMotorhome.image}
                      alt={bookingDetails.selectedMotorhome.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-medium">{bookingDetails.selectedMotorhome.name}</p>
                      <p className="text-muted-foreground">{bookingDetails.selectedMotorhome.brand}</p>
                      <p className="mt-2">
                        <span className="font-medium">Pick-up:</span>{" "}
                        {bookingDetails.selectedMotorhome.pickupLocation}
                      </p>
                      <p>
                        <span className="font-medium">Drop-off:</span>{" "}
                        {bookingDetails.selectedMotorhome.dropoffLocation}
                      </p>
                      <p className="mt-2 text-lg font-semibold">
                        ${bookingDetails.selectedMotorhome.price} per day
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {bookingDetails?.selectedHotel && (
                <div className="border-t pt-4">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Selected Hotel
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <img
                      src={bookingDetails.selectedHotel.image}
                      alt={bookingDetails.selectedHotel.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-medium">{bookingDetails.selectedHotel.name}</p>
                      <p className="text-muted-foreground">{bookingDetails.selectedHotel.location}</p>
                      <p className="mt-2 text-lg font-semibold">
                        ${bookingDetails.selectedHotel.pricePerNight} per night
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Price Summary */}
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
                    <span>Motorhome Total</span>
                    <span>
                      ${bookingDetails.selectedMotorhome.price * calculateTotalDays()}
                    </span>
                  </div>
                )}
                {bookingDetails?.selectedHotel && (
                  <div className="flex justify-between">
                    <span>Hotel Total</span>
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

              <Button 
                className="w-full mt-4"
                onClick={handleProceedToCustomerDetails}
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