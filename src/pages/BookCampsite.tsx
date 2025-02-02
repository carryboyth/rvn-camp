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

  const handleSearch = () => {
    navigate("/search-results");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="min-h-screen bg-background">
          <div className="max-w-4xl mx-auto px-4 py-12">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Find your Camp Site</h1>
              <p className="text-muted-foreground text-lg">
                Search low prices on hotels, homes, and much more...
              </p>
            </div>

            {/* Search Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Location Selector */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <Select value={selectedProvince} onValueChange={setSelectedProvince}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select location">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>Select location</span>
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
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
                          "w-full justify-start text-left font-normal",
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
                    <PopoverContent className="w-auto p-0" align="start">
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
                    <SelectTrigger>
                      <SelectValue>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>{guests} Guest(s)</span>
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
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
