import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MapPin, Calendar as CalendarIcon, Users } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { DateRange } from "react-day-picker";

const BookCampsite = () => {
  const navigate = useNavigate();
  const [date, setDate] = React.useState<DateRange | undefined>();
  const [selectedProvince, setSelectedProvince] = React.useState("");
  const [guests, setGuests] = React.useState("1");

  const provinces = [
    "Bangkok",
    "Chiang Mai",
    "Phuket",
    "Krabi",
    "Koh Samui",
    "Pattaya",
  ];

  React.useEffect(() => {
    if (!selectedProvince && provinces.length > 0) {
      setSelectedProvince(provinces[0]);
    }
  }, []);

  const handleSearch = () => {
    navigate("/search");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="relative min-h-[90vh] flex items-start justify-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/lovable-uploads/1c68e1b4-9fe2-4968-a384-030737e07ca5.png')",
            }}
          >
            <div className="absolute inset-0 bg-black/30" /> {/* Reduced overlay opacity */}
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pt-24">
            {/* Header Section */}
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold mb-4 text-white">Find your Camp Site</h1>
              <p className="text-white/90 text-lg">
                Search low prices on hotels, homes, and much more...
              </p>
            </div>

            {/* Search Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Location Selector */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <Select value={selectedProvince || provinces[0]} onValueChange={setSelectedProvince}>
                    <SelectTrigger className="w-full bg-white border-gray-300">
                      <SelectValue>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {selectedProvince || provinces[0]}
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="bg-white z-50 border shadow-lg">
                      {provinces.map((province) => (
                        <SelectItem key={province} value={province}>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {province}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Range Picker */}
                <div className="space-y-2 col-span-1 md:col-span-2">
                  <label className="text-sm font-medium">Check-in - Check-out</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-white border-gray-300",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.from ? (
                          date.to ? (
                            <>
                              {format(date.from, "LLL dd, y")} -{" "}
                              {format(date.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(date.from, "LLL dd, y")
                          )
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white z-50 border shadow-lg" align="start">
                      <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Guest Selector */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Guests</label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger className="bg-white border-gray-300">
                      <SelectValue>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>{guests} Guest(s)</span>
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="bg-white z-50 border shadow-lg">
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            {num} Guest(s)
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Search Button */}
              <Button 
                className="w-full md:w-auto px-8" 
                size="lg"
                onClick={handleSearch}
              >
                Search Campsites
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookCampsite;
