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
import { Calendar as CalendarIcon, MapPin, Users, Search } from "lucide-react";
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

const BookMotorhome = () => {
  const navigate = useNavigate();
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [passengers, setPassengers] = useState("2");

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
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Pick-up Location</label>
              <Select onValueChange={setPickupLocation} value={pickupLocation}>
                <SelectTrigger className="w-full">
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
              <label className="text-sm font-medium">Drop-off Location</label>
              <Select onValueChange={setDropoffLocation} value={dropoffLocation}>
                <SelectTrigger className="w-full">
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
              <label className="text-sm font-medium">Departure Date</label>
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
              <label className="text-sm font-medium">Return Date</label>
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
              <label className="text-sm font-medium">Passengers</label>
              <Select value={passengers} onValueChange={setPassengers}>
                <SelectTrigger className="w-full">
                  <SelectValue>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{passengers} Passengers</span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} Passengers
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button
                onClick={handleSearch}
                className="w-full bg-primary hover:bg-primary/90 text-white"
                size="lg"
              >
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookMotorhome;