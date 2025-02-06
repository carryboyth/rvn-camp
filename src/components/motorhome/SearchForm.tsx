
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import LocationSelector from "./form/LocationSelector";
import DateSelector from "./form/DateSelector";
import PassengersRoomsSelector from "./form/PassengersRoomsSelector";
import SearchButton from "./form/SearchButton";

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LocationSelector
              type="pickup"
              value={pickupLocation}
              onValueChange={setPickupLocation}
              options={airports}
            />
            <LocationSelector
              type="destination"
              value={destination}
              onValueChange={setDestination}
              options={destinations}
            />
          </div>

          <DateSelector
            departureDate={departureDate}
            returnDate={returnDate}
            onDepartureDateChange={setDepartureDate}
            onReturnDateChange={setReturnDate}
          />

          <PassengersRoomsSelector
            passengers={passengers}
            rooms={rooms}
            onPassengersChange={setPassengers}
            onRoomsChange={setRooms}
          />

          <SearchButton onClick={handleSearch} />
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchForm;
