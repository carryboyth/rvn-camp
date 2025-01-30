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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Wifi,
  Shower,
  Parking,
  UtensilsCrossed,
  Clock,
  Info,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type BookingState = "search" | "results" | "details" | "booking";

interface BookingDetails {
  checkInDate: Date | undefined;
  checkOutDate: Date | undefined;
  location: string;
}

interface PersonalDetails {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  country: string;
}

const BookCampsite = () => {
  const [bookingState, setBookingState] = useState<BookingState>("search");
  const [selectedCampsite, setSelectedCampsite] = useState<any>(null);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    checkInDate: undefined,
    checkOutDate: undefined,
    location: "",
  });

  const { register, handleSubmit } = useForm<PersonalDetails>();

  const locations = [
    "Bangkok",
    "Chiang Mai",
    "Phuket",
    "Pattaya",
    "Krabi",
    "Koh Samui",
  ];

  const campsites = [
    {
      id: 1,
      name: "Mountain View Campsite",
      location: "Chiang Mai",
      price: 45,
      description:
        "Scenic mountain views with modern facilities for a comfortable stay.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      amenities: ["WiFi", "Showers", "RV Parking", "Kitchen"],
      rules: ["Check-in: 2 PM", "Check-out: 12 PM", "No smoking", "Pets allowed"],
    },
    {
      id: 2,
      name: "Beachfront Paradise",
      location: "Phuket",
      price: 60,
      description: "Beautiful beachfront location with stunning sunset views.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      amenities: ["WiFi", "Showers", "RV Parking", "Kitchen", "Beach Access"],
      rules: ["Check-in: 2 PM", "Check-out: 12 PM", "No smoking"],
    },
    {
      id: 3,
      name: "Forest Retreat",
      location: "Koh Samui",
      price: 35,
      description: "Peaceful forest setting with nature trails nearby.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      amenities: ["Showers", "RV Parking", "Fire Pit"],
      rules: ["Check-in: 3 PM", "Check-out: 11 AM", "Pets allowed"],
    },
  ];

  const onSearch = () => {
    setBookingState("results");
  };

  const onSelectCampsite = (campsite: any) => {
    setSelectedCampsite(campsite);
    setBookingState("details");
  };

  const onProceedToBooking = () => {
    setBookingState("booking");
  };

  const calculateTotalDays = () => {
    if (bookingDetails.checkInDate && bookingDetails.checkOutDate) {
      const diffTime = Math.abs(
        bookingDetails.checkOutDate.getTime() -
          bookingDetails.checkInDate.getTime()
      );
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const calculateTotalPrice = () => {
    const days = calculateTotalDays();
    return selectedCampsite ? days * selectedCampsite.price : 0;
  };

  const SearchForm = () => (
    <div className="space-y-8">
      <div
        className="relative h-[300px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb")',
        }}
      >
        <div className="absolute inset-0 bg-black/40">
          <div className="container mx-auto flex h-full items-center justify-center">
            <h1 className="text-4xl font-bold text-white">
              Find Your Perfect Campsite
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl space-y-6 p-6">
        <Card>
          <CardContent className="grid gap-6 p-6 md:grid-cols-3">
            <div className="space-y-2">
              <Label>Location</Label>
              <Select
                onValueChange={(value) =>
                  setBookingDetails({ ...bookingDetails, location: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Check-in Date</Label>
              <Calendar
                mode="single"
                selected={bookingDetails.checkInDate}
                onSelect={(date) =>
                  setBookingDetails({ ...bookingDetails, checkInDate: date })
                }
                className="rounded-md border"
              />
            </div>

            <div className="space-y-2">
              <Label>Check-out Date</Label>
              <Calendar
                mode="single"
                selected={bookingDetails.checkOutDate}
                onSelect={(date) =>
                  setBookingDetails({ ...bookingDetails, checkOutDate: date })
                }
                className="rounded-md border"
              />
            </div>
          </CardContent>

          <div className="p-6 pt-0">
            <Button onClick={onSearch} className="w-full">
              Search Available Campsites
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );

  const SearchResults = () => (
    <div className="container mx-auto max-w-6xl space-y-6 p-6">
      <h2 className="text-2xl font-bold">Available Campsites</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {campsites.map((campsite) => (
          <Card key={campsite.id} className="overflow-hidden">
            <img
              src={campsite.image}
              alt={campsite.name}
              className="h-48 w-full object-cover"
            />
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{campsite.name}</span>
                <span className="text-lg font-normal text-muted-foreground">
                  ${campsite.price}/night
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{campsite.description}</p>
              <div className="flex flex-wrap gap-2">
                {campsite.amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="rounded-full bg-secondary px-3 py-1 text-sm"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
              <Button
                onClick={() => onSelectCampsite(campsite)}
                className="w-full"
                variant="secondary"
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const CampsiteDetails = () => (
    <div className="container mx-auto max-w-6xl space-y-6 p-6">
      <Card>
        <div className="relative h-[400px]">
          <img
            src={selectedCampsite?.image}
            alt={selectedCampsite?.name}
            className="h-full w-full object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle>{selectedCampsite?.name}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-lg font-semibold">About this campsite</h3>
              <p className="text-muted-foreground">{selectedCampsite?.description}</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Amenities</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {selectedCampsite?.amenities.map((amenity: string) => (
                  <div key={amenity} className="flex items-center gap-2">
                    {amenity === "WiFi" && <Wifi className="h-4 w-4" />}
                    {amenity === "Showers" && <Shower className="h-4 w-4" />}
                    {amenity === "RV Parking" && <Parking className="h-4 w-4" />}
                    {amenity === "Kitchen" && (
                      <UtensilsCrossed className="h-4 w-4" />
                    )}
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-lg font-semibold">House Rules</h3>
              <div className="space-y-2">
                {selectedCampsite?.rules.map((rule: string) => (
                  <div key={rule} className="flex items-center gap-2">
                    {rule.includes("Check-in") || rule.includes("Check-out") ? (
                      <Clock className="h-4 w-4" />
                    ) : (
                      <Info className="h-4 w-4" />
                    )}
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-secondary">
              <CardContent className="p-6">
                <div className="mb-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Price per night</span>
                    <span>${selectedCampsite?.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total nights</span>
                    <span>{calculateTotalDays()}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Total price</span>
                    <span>${calculateTotalPrice()}</span>
                  </div>
                </div>
                <Button onClick={onProceedToBooking} className="w-full">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const BookingForm = () => (
    <div className="container mx-auto max-w-6xl space-y-6 p-6">
      <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Your Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  {...register("firstName")}
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  {...register("lastName")}
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="john.doe@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                {...register("phone")}
                placeholder="+1 234 567 890"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                {...register("country")}
                placeholder="United States"
              />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">{selectedCampsite?.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {selectedCampsite?.location}
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Price per night</span>
                  <span>${selectedCampsite?.price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Total nights</span>
                  <span>{calculateTotalDays()}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total price</span>
                  <span>${calculateTotalPrice()}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-4">
            <Button className="w-full">Next: Final Booking</Button>
            <Button variant="secondary" className="w-full">
              Save Plan
            </Button>
            <Button
              variant="outline"
              onClick={() => setBookingState("search")}
              className="w-full"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {bookingState === "search" && <SearchForm />}
        {bookingState === "results" && <SearchResults />}
        {bookingState === "details" && <CampsiteDetails />}
        {bookingState === "booking" && <BookingForm />}
      </main>
      <Footer />
    </div>
  );
};

export default BookCampsite;