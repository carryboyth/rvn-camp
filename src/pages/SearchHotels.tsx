
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Star, Users, Calendar, ArrowLeft, Car, Clock, Wallet } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { format } from "date-fns";

const hotels = [
  {
    id: 1,
    name: "Luxury Resort & Spa",
    image: "/lovable-uploads/f13e329f-d1e7-49bf-9c1b-9c22e6b8f9de.png",
    location: "Bangkok, Thailand",
    description: "Experience luxury living with stunning city views and world-class amenities.",
    pricePerNight: 4500,
    rating: 4.8,
    guests: 4,
  },
  {
    id: 2,
    name: "Urban Boutique Hotel",
    image: "/lovable-uploads/e24bf5fc-b70c-4b89-a2af-4325db96ce1d.png",
    location: "Chiang Mai, Thailand",
    description: "Modern boutique hotel in the heart of the old city.",
    pricePerNight: 2800,
    rating: 4.5,
    guests: 2,
  },
  {
    id: 3,
    name: "Beachfront Paradise",
    image: "/lovable-uploads/4bcc8b26-96b5-40e3-b140-b6fc6e673ad2.png",
    location: "Phuket, Thailand",
    description: "Direct beach access with private balconies and ocean views.",
    pricePerNight: 5200,
    rating: 4.9,
    guests: 3,
  },
  {
    id: 4,
    name: "Heritage Hotel",
    image: "/lovable-uploads/da1ee2d7-9a0b-44ca-a085-8ddad30fd28f.png",
    location: "Ayutthaya, Thailand",
    description: "Historic hotel with traditional architecture and modern comforts.",
    pricePerNight: 3500,
    rating: 4.6,
    guests: 2,
  },
];

const SearchHotels = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const searchParams = location.state;

  const totalDays = searchParams?.totalDays || 0;
  const motorhomePrice = searchParams?.selectedMotorhome?.price || 0;
  const motorhome = searchParams?.selectedMotorhome;

  // Array of available locations
  const locations = ["Bangkok", "Chiang Mai", "Phuket", "Ayutthaya"];

  // New state for search form
  const [searchLocation, setSearchLocation] = useState(locations[0]);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("1");

  const formatDate = (date: string | Date | undefined) => {
    if (!date) return "";
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleBookHotel = (hotel: typeof hotels[0]) => {
    if (!searchParams?.selectedMotorhome) {
      toast({
        title: "No Motorhome Selected",
        description: "Please select a motorhome first before booking a hotel.",
        variant: "destructive",
      });
      return;
    }

    navigate("/booking-summary", {
      state: {
        ...searchParams,
        selectedHotel: hotel,
      },
    });
  };

  const handleSearch = () => {
    console.log("Searching with params:", { searchLocation, checkIn, checkOut, guests });
    // Add search logic here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Search Form */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block">Location</label>
              <Select value={searchLocation} onValueChange={setSearchLocation}>
                <SelectTrigger className="h-12">
                  <SelectValue>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      {searchLocation}
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" />
                        {location}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block">Check-in</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-12 w-full justify-start text-left font-normal"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {checkIn ? format(checkIn, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block">Check-out</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-12 w-full justify-start text-left font-normal"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {checkOut ? format(checkOut, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="w-32">
              <label className="text-sm font-medium mb-2 block">Guests</label>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger className="h-12">
                  <SelectValue>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      {guests} {parseInt(guests) === 1 ? 'Guest' : 'Guests'}
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Button onClick={handleSearch} className="h-12 px-8">
              Search
            </Button>
          </div>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="md:col-span-1">
            <Card className="sticky top-24">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4">Booking Summary</h2>
                
                {motorhome ? (
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Car className="w-5 h-5 mt-1 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{motorhome.name}</p>
                        <p className="text-sm text-muted-foreground">{motorhome.brand}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Duration</p>
                        <p className="text-sm text-muted-foreground">{totalDays} days</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Check-in</p>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(searchParams?.departureDate)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Check-out</p>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(searchParams?.returnDate)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Wallet className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Total Price</p>
                        <p className="text-sm text-muted-foreground">
                          ${motorhomePrice.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground">No motorhome selected</p>
                )}
              </div>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="md:col-span-3">
            <h1 className="text-3xl font-bold mb-4">Available Hotels</h1>
            
            <div className="grid gap-6">
              {hotels.map((hotel) => (
                <Card key={hotel.id} className="overflow-hidden animate-fade-up">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Column 1: Hotel Image */}
                    <div className="relative h-[200px] md:h-full">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>

                    {/* Column 2: Hotel Details */}
                    <div className="p-6 md:p-0">
                      <h2 className="text-2xl font-semibold mb-2">{hotel.name}</h2>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{hotel.location}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{hotel.rating}</span>
                        <Users className="w-4 h-4 ml-4" />
                        <span>Up to {hotel.guests} guests</span>
                      </div>
                      <p className="text-muted-foreground">{hotel.description}</p>
                    </div>

                    {/* Column 3: Pricing and Booking */}
                    <div className="p-6 md:p-0 flex flex-col justify-center items-end">
                      <div className="text-right mb-4">
                        <p className="text-2xl font-bold">
                          ${hotel.pricePerNight.toLocaleString()}
                        </p>
                        <p className="text-muted-foreground">per night</p>
                        {totalDays > 0 && (
                          <div className="mt-2 p-2 bg-secondary/10 rounded-lg">
                            <p className="font-semibold">
                              Total: ${(hotel.pricePerNight * totalDays).toLocaleString()}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              for {totalDays} days
                            </p>
                          </div>
                        )}
                      </div>
                      <Button
                        onClick={() => handleBookHotel(hotel)}
                        className="w-full md:w-auto"
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Back Button */}
            <div className="mt-8 flex justify-center">
              <Button
                variant="outline"
                onClick={() => navigate(-1)}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchHotels;
