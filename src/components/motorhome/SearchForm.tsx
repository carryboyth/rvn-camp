
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
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Search, Building } from "lucide-react";

const airports = [
  "Suvarnabhumi Airport (BKK)",
  "Don Mueang International Airport (BKK)",
];

const destinations = [
  "Bangkok",
  "Chiang Mai",
  "Phuket",
  "Pattaya",
  "Krabi",
  "Koh Samui",
];

const SearchForm = () => {
  const navigate = useNavigate();
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [passengers, setPassengers] = useState("2");
  const [rooms, setRooms] = useState("1");

  const handleSearch = () => {
    if (!pickupLocation || !destination || !departureDate || !returnDate) {
      console.log("Please fill in all required fields");
      return;
    }
    
    navigate("/motorhome-results", {
      state: {
        pickupLocation,
        destination,
        departureDate,
        returnDate,
        passengers,
        rooms,
      },
    });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur shadow-xl">
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* First Row - Pickup and Destination */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Pick-up Location</label>
              <Select onValueChange={setPickupLocation} value={pickupLocation}>
                <SelectTrigger className="h-12">
                  <SelectValue>
                    {pickupLocation ? (
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{pickupLocation}</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-black">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>Pick-up Location</span>
                      </div>
                    )}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {airports.map((airport) => (
                    <SelectItem key={airport} value={airport}>
                      {airport}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Destination</label>
              <Select onValueChange={setDestination} value={destination}>
                <SelectTrigger className="h-12">
                  <SelectValue>
                    {destination ? (
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-2" />
                        <span>{destination}</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-2" />
                        <span>Select destination</span>
                      </div>
                    )}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {destinations.map((dest) => (
                    <SelectItem key={dest} value={dest}>
                      {dest}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Second Row - Travel Dates */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Travel Dates</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Calendar
                  mode="single"
                  selected={departureDate}
                  onSelect={setDepartureDate}
                  className="rounded-md border bg-white"
                  disabled={(date) =>
                    date < new Date() || (returnDate && date > returnDate)
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Drop off date</label>
                <Calendar
                  mode="single"
                  selected={returnDate}
                  onSelect={setReturnDate}
                  className="rounded-md border bg-white"
                  disabled={(date) =>
                    date < new Date() || (departureDate && date < departureDate)
                  }
                />
              </div>
            </div>
          </div>

          {/* Third Row - Passengers & Rooms */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Passengers & Rooms</label>
            <div className="grid grid-cols-2 gap-4">
              <Select value={passengers} onValueChange={setPassengers}>
                <SelectTrigger className="h-12">
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

              <Select value={rooms} onValueChange={setRooms}>
                <SelectTrigger className="h-12">
                  <SelectValue>
                    <div className="flex items-center">
                      <Building className="w-4 h-4 mr-2" />
                      <span>{rooms} Room(s)</span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} Room(s)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Search Button */}
          <Button
            onClick={handleSearch}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg"
          >
            <Search className="w-5 h-5 mr-2" />
            Search Motorhome & Hotel
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchForm;

