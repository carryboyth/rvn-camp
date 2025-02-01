import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin, Calendar as CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const BookCampsite = () => {
  const [date, setDate] = React.useState<Date>();
  const [selectedProvince, setSelectedProvince] = React.useState("");

  const provinces = [
    "Bangkok",
    "Chiang Mai",
    "Phuket",
    "Krabi",
    "Koh Samui",
    "Pattaya",
  ];

  const campsites = [
    {
      id: 1,
      name: "Mountain View Campsite",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      price: 1500,
      description:
        "Beautiful mountain views with full RV hookups and modern amenities.",
      location: "Chiang Mai",
    },
    {
      id: 2,
      name: "Riverside Haven",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      price: 2000,
      description:
        "Peaceful riverside location with spacious RV spots and fishing access.",
      location: "Krabi",
    },
    {
      id: 3,
      name: "Forest Retreat",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      price: 1800,
      description: "Secluded forest campsite with nature trails and wildlife.",
      location: "Chiang Mai",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="h-[50vh] bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold text-center">
            Find Your Perfect Campsite
          </h1>
        </div>
      </div>

      {/* Search Form */}
      <div className="max-w-4xl mx-auto -mt-10 px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select value={selectedProvince} onValueChange={setSelectedProvince}>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
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

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <Button className="w-full">Search Campsites</Button>
        </div>
      </div>

      {/* Search Results */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Available Campsites</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campsites.map((campsite) => (
            <Card key={campsite.id}>
              <img
                src={campsite.image}
                alt={campsite.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{campsite.name}</h3>
                <p className="text-gray-600 mb-2">{campsite.description}</p>
                <div className="flex items-center gap-2 text-gray-500">
                  <MapPin className="h-4 w-4" />
                  {campsite.location}
                </div>
                <p className="text-xl font-bold mt-2">
                  ฿{campsite.price.toLocaleString()} / night
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCampsite;