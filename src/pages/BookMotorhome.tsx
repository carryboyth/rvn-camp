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
import { 
  Calendar as CalendarIcon, 
  MapPin, 
  Users, 
  Search,
  Car,
  Globe,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const provinces = [
  "Bangkok",
  "Chiang Mai",
  "Phuket",
  "Krabi",
  "Pattaya",
  "Koh Samui",
];

const campervanTypes = [
  "Compact RV (2-3 people)",
  "Family RV (4-6 people)",
  "Luxury RV (2-4 people)",
  "Adventure Van (2-3 people)",
];

const driverLicenseCountries = [
  "Thailand",
  "United States",
  "United Kingdom",
  "Australia",
  "Japan",
  "Singapore",
];

const BookMotorhome = () => {
  const navigate = useNavigate();
  const [province, setProvince] = useState("");
  const [campervanType, setCampervanType] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [passengers, setPassengers] = useState("2");
  const [licenseCountry, setLicenseCountry] = useState("");

  const handleSearch = () => {
    if (!province || !campervanType || !pickupLocation || !dropoffLocation || !departureDate || !returnDate || !licenseCountry) {
      console.log("Please fill in all required fields");
      return;
    }
    
    navigate("/search-results", {
      state: {
        province,
        campervanType,
        pickupLocation,
        dropoffLocation,
        departureDate,
        returnDate,
        passengers,
        licenseCountry,
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="relative h-[70vh] md:h-[80vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/lovable-uploads/36e1489f-0a29-4aa0-9fa0-178c0b50d209.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up">
            Find Your Perfect Campervan & Campsite
          </h1>
          <p className="text-xl md:text-2xl text-white/90 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Plan your RV adventure with ease—rent a campervan and book a campsite in one go!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-20 mb-12">
        <div className="bg-white rounded-xl shadow-2xl p-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-2xl font-semibold mb-6">Plan Your Trip</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Province</label>
              <Select onValueChange={setProvince} value={province}>
                <SelectTrigger>
                  <SelectValue placeholder="Select province">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Select province</span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {provinces.map((prov) => (
                    <SelectItem key={prov} value={prov}>
                      {prov}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Campervan Type</label>
              <Select onValueChange={setCampervanType} value={campervanType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type">
                    <div className="flex items-center">
                      <Car className="w-4 h-4 mr-2" />
                      <span>Select type</span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {campervanTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Pick-up Location</label>
              <Select onValueChange={setPickupLocation} value={pickupLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select location">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Select location</span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {provinces.map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Drop-off Location</label>
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
                  {provinces.map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Pick-up Date</label>
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
              <label className="text-sm font-medium">Drop-off Date</label>
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
                <SelectTrigger>
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

            <div className="space-y-2">
              <label className="text-sm font-medium">Driver's License Country</label>
              <Select onValueChange={setLicenseCountry} value={licenseCountry}>
                <SelectTrigger>
                  <SelectValue placeholder="Select country">
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 mr-2" />
                      <span>Select country</span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {driverLicenseCountries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="md:col-span-2 lg:col-span-3">
              <Button
                onClick={handleSearch}
                className="w-full bg-primary hover:bg-primary/90 text-white"
                size="lg"
              >
                <Search className="w-5 h-5 mr-2" />
                Search Campervans & Campsites
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