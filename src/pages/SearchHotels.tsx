
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import SearchForm from "@/components/hotels/search/SearchForm";
import BookingSummary from "@/components/hotels/booking/BookingSummary";
import HotelCard from "@/components/hotels/HotelCard";

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

  const locations = ["Bangkok", "Chiang Mai", "Phuket", "Ayutthaya"];

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

    navigate("/hotels-calculator", {
      state: {
        ...searchParams,
        selectedHotel: hotel,
        checkIn: checkIn,
        checkOut: checkOut,
        totalPrice: hotel.pricePerNight * totalDays
      }
    });
  };

  const handleSearch = () => {
    console.log("Searching with params:", { searchLocation, checkIn, checkOut, guests });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto py-4">
          <SearchForm
            searchLocation={searchLocation}
            setSearchLocation={setSearchLocation}
            checkIn={checkIn}
            setCheckIn={setCheckIn}
            checkOut={checkOut}
            setCheckOut={setCheckOut}
            guests={guests}
            setGuests={setGuests}
            onSearch={handleSearch}
            locations={locations}
          />
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <aside className="md:col-span-1">
            <BookingSummary
              motorhome={motorhome}
              totalDays={totalDays}
              motorhomePrice={motorhomePrice}
              departureDate={searchParams?.departureDate}
              returnDate={searchParams?.returnDate}
              formatDate={formatDate}
            />
          </aside>

          <div className="md:col-span-3">
            <h1 className="text-3xl font-bold mb-4">Available Hotels</h1>
            
            <div className="grid gap-6">
              {hotels.map((hotel) => (
                <HotelCard
                  key={hotel.id}
                  hotel={hotel}
                  totalDays={totalDays}
                  onBookNow={() => handleBookHotel(hotel)}
                />
              ))}
            </div>

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
