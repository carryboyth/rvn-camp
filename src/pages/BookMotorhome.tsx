import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MapPin,
  Users,
  Search,
  Car,
  Calendar as CalendarIcon,
  Globe,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const locations = [
  "Bangkok",
  "Chiang Mai",
  "Phuket",
  "Pattaya",
  "Krabi",
  "Koh Samui",
];

const motorhomeModels = [
  "Motorhome Hilux Revo",
  "Motorhome Hilux Champ",
  "Motorhome Mitsu Triton",
  "Motorhome Isuzu D-Max",
];

const BookMotorhome = () => {
  const navigate = useNavigate();
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [passengers, setPassengers] = useState("2");
  const [motorhomeModel, setMotorhomeModel] = useState("");
  const [driverLicenseCountry, setDriverLicenseCountry] = useState("");

  const handleSearch = () => {
    if (!pickupLocation || !dropoffLocation || !departureDate || !returnDate) {
      console.log("Please fill in all required fields");
      return;
    }
    
    navigate("/search-results", {
      state: {
        pickupLocation,
        dropoffLocation,
        departureDate,
        returnDate,
        passengers,
        motorhomeModel,
        driverLicenseCountry,
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-up">
            Your entire holiday in one click!
          </h1>
          <p className="text-xl md:text-2xl text-white/90 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Book Car Rental + Hotel
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-20 mb-12">
        <Card className="p-6 md:p-8 shadow-xl animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-2xl">Plan Your Trip</CardTitle>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label>Province (Motorhome Rental Location)</Label>
                <Select onValueChange={setPickupLocation} value={pickupLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select province">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>Select province</span>
                      </div>
                    </SelectValue>
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
                <Label>Motorhome Model</Label>
                <Select onValueChange={setMotorhomeModel} value={motorhomeModel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select model">
                      <div className="flex items-center">
                        <Car className="w-4 h-4 mr-2" />
                        <span>Select model</span>
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {motorhomeModels.map((model) => (
                      <SelectItem key={model} value={model}>
                        {model}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Drop-off Location</Label>
                <Select onValueChange={setDropoffLocation} value={dropoffLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>Select location</span>
                      </div>
                    </SelectValue>
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
                <Label>Pick-up Date</Label>
                <div className="relative">
                  <Calendar
                    mode="single"
                    selected={departureDate}
                    onSelect={setDepartureDate}
                    className="rounded-md border"
                    disabled={(date) =>
                      date < new Date() || (returnDate && date > returnDate)
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Return Date</Label>
                <div className="relative">
                  <Calendar
                    mode="single"
                    selected={returnDate}
                    onSelect={setReturnDate}
                    className="rounded-md border"
                    disabled={(date) =>
                      date < new Date() || (departureDate && date < departureDate)
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Number of Travelers</Label>
                <Select value={passengers} onValueChange={setPassengers}>
                  <SelectTrigger>
                    <SelectValue>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{passengers} Travelers</span>
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} Travelers
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Driver's License Country</Label>
                <Select
                  value={driverLicenseCountry}
                  onValueChange={setDriverLicenseCountry}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select country">
                      <div className="flex items-center">
                        <Globe className="w-4 h-4 mr-2" />
                        <span>Select country</span>
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="th">Thailand</SelectItem>
                    <SelectItem value="sg">Singapore</SelectItem>
                    <SelectItem value="my">Malaysia</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-2 lg:col-span-3">
                <Button
                  onClick={handleSearch}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search Motorhome & Campsite
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default BookMotorhome;