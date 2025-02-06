import { useState } from "react";
import { useForm } from "react-hook-form";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Coffee, Bed, UtensilsCrossed, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import LocationSelector from "@/components/motorhome/form/LocationSelector";

type BookingState = "search" | "results" | "summary";

interface BookingDetails {
  pickupDate: Date | undefined;
  dropoffDate: Date | undefined;
  pickupLocation: string;
  dropoffLocation: string;
  pickupTime: string;
  dropoffTime: string;
}

const RentCampervan = () => {
  const [bookingState, setBookingState] = useState<BookingState>("search");
  const [selectedVan, setSelectedVan] = useState<any>(null);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    pickupDate: undefined,
    dropoffDate: undefined,
    pickupLocation: "",
    dropoffLocation: "",
    pickupTime: "10:00",
    dropoffTime: "10:00",
  });

  const { handleSubmit } = useForm();
  const navigate = useNavigate();

  const locations = [
    "Bangkok",
    "Chiang Mai",
    "Phuket",
    "Pattaya",
    "Krabi",
    "Koh Samui",
  ];

  const timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const campervans = [
    {
      id: 1,
      name: "Motorhome Hilux Revo",
      brand: "Toyota",
      seats: 4,
      price: 120,
      image: "/lovable-uploads/c1762e4a-0c04-42c9-bb90-72efea7f0c35.png",
      amenities: ["Kitchen", "Bathroom", "AC", "WiFi"],
      bedSize: "Queen",
    },
    {
      id: 2,
      name: "Motorhome Hilux Champ",
      brand: "Toyota",
      seats: 6,
      price: 180,
      image: "/lovable-uploads/1b98df29-031c-453f-8985-bf9ab03b53a6.png",
      amenities: ["Kitchen", "Bathroom", "AC", "WiFi", "Solar Panels"],
      bedSize: "King",
    },
    {
      id: 3,
      name: "Motorhome Mitsu Triton",
      brand: "Mitsubishi",
      seats: 2,
      price: 90,
      image: "/lovable-uploads/39ca8590-7c01-4b61-945b-09c0787d5e19.png",
      amenities: ["Kitchenette", "Portable Toilet", "AC"],
      bedSize: "Double",
    },
  ];

  const onSearch = () => {
    setBookingState("results");
  };

  const onSelectVan = (van: any) => {
    setSelectedVan(van);
    setBookingState("summary");
  };

  const calculateTotalDays = () => {
    if (bookingDetails.pickupDate && bookingDetails.dropoffDate) {
      const diffTime = Math.abs(
        bookingDetails.dropoffDate.getTime() - bookingDetails.pickupDate.getTime()
      );
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const calculateTotalPrice = () => {
    const days = calculateTotalDays();
    return selectedVan ? days * selectedVan.price : 0;
  };

  const airports = [
    "Suvarnabhumi Airport (BKK)",
    "Don Mueang International Airport (BKK)",
  ];

  const BookingForm = () => (
    <>
      <Button
        variant="ghost"
        className="mb-4 flex items-center gap-2"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-4 w-4" /> Previous Steps
      </Button>
      <form onSubmit={handleSubmit(onSearch)} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Pick-up Date</label>
            <Calendar
              mode="single"
              selected={bookingDetails.pickupDate}
              onSelect={(date) =>
                setBookingDetails({ ...bookingDetails, pickupDate: date })
              }
              className="rounded-md border"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Drop-off Date</label>
            <Calendar
              mode="single"
              selected={bookingDetails.dropoffDate}
              onSelect={(date) =>
                setBookingDetails({ ...bookingDetails, dropoffDate: date })
              }
              className="rounded-md border"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <LocationSelector
            type="pickup"
            value={bookingDetails.pickupLocation}
            onValueChange={(value) =>
              setBookingDetails({ ...bookingDetails, pickupLocation: value })
            }
            options={airports}
          />
          <LocationSelector
            type="destination"
            value={bookingDetails.dropoffLocation}
            onValueChange={(value) =>
              setBookingDetails({ ...bookingDetails, dropoffLocation: value })
            }
            options={locations}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Pick-up Time</label>
            <Select
              value={bookingDetails.pickupTime}
              onValueChange={(value) =>
                setBookingDetails({ ...bookingDetails, pickupTime: value })
              }
            >
              <SelectTrigger className="h-12 bg-white">
                <SelectValue>
                  <span>{bookingDetails.pickupTime}</span>
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg">
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Drop-off Time</label>
            <Select
              value={bookingDetails.dropoffTime}
              onValueChange={(value) =>
                setBookingDetails({ ...bookingDetails, dropoffTime: value })
              }
            >
              <SelectTrigger className="h-12 bg-white">
                <SelectValue>
                  <span>{bookingDetails.dropoffTime}</span>
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg">
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button type="submit" className="w-full">
          Search Available Campervans
        </Button>
      </form>
    </>
  );

  const CampervanResults = () => (
    <>
      <Button
        variant="ghost"
        className="mb-4 flex items-center gap-2"
        onClick={() => setBookingState("search")}
      >
        <ArrowLeft className="h-4 w-4" /> Previous Steps
      </Button>
      <div className="grid gap-6 md:grid-cols-3">
        {campervans.map((van) => (
          <Card key={van.id} className="overflow-hidden">
            <img
              src={van.image}
              alt={van.name}
              className="h-48 w-full object-cover"
            />
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{van.name}</span>
                <span className="text-lg font-normal text-muted-foreground">
                  ${van.price}/day
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>{van.seats} seats</span>
              </div>
              <div className="flex items-center gap-2">
                <Bed className="h-4 w-4" />
                <span>{van.bedSize} bed</span>
              </div>
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="h-4 w-4" />
                <span>{van.amenities.join(", ")}</span>
              </div>
              <Button
                onClick={() => onSelectVan(van)}
                className="w-full"
                variant="secondary"
              >
                Select This Campervan
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );

  const BookingSummary = () => (
    <>
      <Button
        variant="ghost"
        className="mb-4 flex items-center gap-2"
        onClick={() => setBookingState("results")}
      >
        <ArrowLeft className="h-4 w-4" /> Previous Steps
      </Button>
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle>Booking Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-medium">Pick-up Details</h3>
              <p className="text-muted-foreground">
                {bookingDetails.pickupDate?.toLocaleDateString()}
              </p>
              <p className="text-muted-foreground">{bookingDetails.pickupTime}</p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {bookingDetails.pickupLocation}
              </p>
            </div>
            <div>
              <h3 className="font-medium">Drop-off Details</h3>
              <p className="text-muted-foreground">
                {bookingDetails.dropoffDate?.toLocaleDateString()}
              </p>
              <p className="text-muted-foreground">{bookingDetails.dropoffTime}</p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {bookingDetails.dropoffLocation}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Selected Campervan</h3>
            <div className="flex items-center gap-4">
              <img
                src={selectedVan?.image}
                alt={selectedVan?.name}
                className="h-24 w-24 rounded-md object-cover"
              />
              <div>
                <p className="font-medium">{selectedVan?.name}</p>
                <p className="text-muted-foreground">{selectedVan?.brand}</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total Days</span>
              <span>{calculateTotalDays()} days</span>
            </div>
            <div className="flex justify-between text-lg font-medium">
              <span>Total Price</span>
              <span>${calculateTotalPrice()}</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              onClick={() => navigate("/campervan-summary")}
              className="w-full"
            >
              Proceed to Checkout
            </Button>
            <Button
              onClick={() => setBookingState("search")}
              variant="outline"
              className="w-full"
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold text-center">
          Rent Your Perfect Campervan
        </h1>
        {bookingState === "search" && <BookingForm />}
        {bookingState === "results" && <CampervanResults />}
        {bookingState === "summary" && <BookingSummary />}
      </main>
      <Footer />
    </div>
  );
};

export default RentCampervan;
