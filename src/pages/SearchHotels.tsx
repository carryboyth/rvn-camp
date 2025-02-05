import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, Users } from "lucide-react";

// Mock data for hotels
const hotels = [
  {
    id: 1,
    name: "Luxury Resort & Spa",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
    location: "Bangkok, Thailand",
    description: "Experience luxury living with stunning city views and world-class amenities.",
    pricePerNight: 4500,
    rating: 4.8,
    guests: 4,
  },
  {
    id: 2,
    name: "Urban Boutique Hotel",
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840",
    location: "Chiang Mai, Thailand",
    description: "Modern boutique hotel in the heart of the old city.",
    pricePerNight: 2800,
    rating: 4.5,
    guests: 2,
  },
  {
    id: 3,
    name: "Beachfront Paradise",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
    location: "Phuket, Thailand",
    description: "Direct beach access with private balconies and ocean views.",
    pricePerNight: 5200,
    rating: 4.9,
    guests: 3,
  },
  {
    id: 4,
    name: "Heritage Hotel",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
    location: "Ayutthaya, Thailand",
    description: "Historic hotel with traditional architecture and modern comforts.",
    pricePerNight: 3500,
    rating: 4.6,
    guests: 2,
  },
];

const SearchHotels = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Available Hotels</h1>
        
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
                      ฿{hotel.pricePerNight.toLocaleString()}
                    </p>
                    <p className="text-muted-foreground">per night</p>
                  </div>
                  <Button
                    onClick={() => navigate(`/booking/${hotel.id}`)}
                    className="w-full md:w-auto"
                  >
                    Book Hotel
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchHotels;