
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Wifi,
  Car,
  Droplets,
  Power,
  AlertCircle,
  ArrowLeft,
  Star,
  MapPin,
  Phone,
  Mail,
  Globe,
  Shield,
  Home,
  Users,
  TreePine,
  Waves,
  Mountain,
  Sun,
  Camera,
  Heart,
  Calendar,
  PawPrint,
  Check,
  X,
} from "lucide-react";

interface CampsiteDetailsProps {
  campsite: {
    name: string;
    images: string[];
    price: number;
    description: string;
    facilities: string[];
    checkIn: string;
    checkOut: string;
    rules: string[];
    tyreRoom: boolean;
  };
}

const CampsiteDetails = ({ campsite }: CampsiteDetailsProps) => {
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");

  const handleBookNow = () => {
    navigate(`/booking/1`);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const facilities = [
    { name: "Free Wi-Fi", icon: Wifi, available: true },
    { name: "Parking", icon: Car, available: true },
    { name: "220V Electricity", icon: Power, available: true },
    { name: "Clean Water", icon: Droplets, available: true },
    { name: "Shared Bathroom", icon: Home, available: true },
    { name: "Outdoor Tables", icon: TreePine, available: false },
  ];

  const highlights = [
    "Beautiful 360-degree mountain views",
    "Cool and comfortable weather year-round", 
    "Close to waterfalls and nature",
    "Family-friendly",
    "Various activities available"
  ];

  const reviews = [
    {
      name: "John Smith",
      rating: 5,
      date: "Mar 15, 2024",
      comment: "Beautiful place with great atmosphere. The host was very kind. Highly recommended!",
      avatar: "/lovable-uploads/b3b48e94-e287-44ba-807a-e228a1df866a.png",
      country: "USA"
    },
    {
      name: "Emma Johnson", 
      rating: 4,
      date: "Mar 8, 2024",
      comment: "Amazing views and fresh air. Perfect for relaxation. Very clean facilities.",
      avatar: "/lovable-uploads/e4ce7067-7522-45d6-82c0-56a7fb4d8543.png",
      country: "Canada"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Search
            </Button>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('overview')}
                className={`text-sm pb-3 border-b-2 transition-colors ${
                  activeTab === 'overview' ? 'border-blue-600 text-blue-600' : 'border-transparent'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection('info')}
                className={`text-sm pb-3 border-b-2 transition-colors ${
                  activeTab === 'info' ? 'border-blue-600 text-blue-600' : 'border-transparent'
                }`}
              >
                Info & Pricing
              </button>
              <button
                onClick={() => scrollToSection('facilities')}
                className={`text-sm pb-3 border-b-2 transition-colors ${
                  activeTab === 'facilities' ? 'border-blue-600 text-blue-600' : 'border-transparent'
                }`}
              >
                Facilities
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className={`text-sm pb-3 border-b-2 transition-colors ${
                  activeTab === 'reviews' ? 'border-blue-600 text-blue-600' : 'border-transparent'
                }`}
              >
                Reviews
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Property Header */}
            <section id="overview">
              <div className="mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                    Campsite
                  </span>
                  <MapPin className="h-4 w-4" />
                  <span>Chiang Mai, Thailand</span>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{campsite.name}</h1>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">4.8</span>
                    <span className="text-gray-600">(24 reviews)</span>
                  </div>
                  <div className="text-green-600 font-medium">
                    Free Cancellation
                  </div>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-4 gap-2 h-80 rounded-lg overflow-hidden">
                <div className="col-span-2 row-span-2">
                  <img
                    src={campsite.images[0]}
                    alt={campsite.name}
                    className="w-full h-full object-cover cursor-pointer hover:brightness-95 transition-all"
                    onClick={() => setSelectedImageIndex(0)}
                  />
                </div>
                {campsite.images.slice(1, 5).map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image}
                      alt={`${campsite.name} ${index + 2}`}
                      className="w-full h-full object-cover cursor-pointer hover:brightness-95 transition-all"
                      onClick={() => setSelectedImageIndex(index + 1)}
                    />
                    {index === 3 && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-white text-center">
                          <Camera className="h-5 w-5 mx-auto mb-1" />
                          <span className="text-xs">+{campsite.images.length - 5}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Property Details */}
            <section id="info" className="space-y-6">
              <div className="bg-white rounded-lg p-6 border">
                <h2 className="text-xl font-semibold mb-4">Accommodation Details</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">{campsite.description}</p>
                
                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span>Sleeps 6</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>Check-in {campsite.checkIn}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PawPrint className="h-4 w-4 text-gray-500" />
                    <span>Pet Friendly</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-gray-500" />
                    <span>Free Cancellation</span>
                  </div>
                </div>
              </div>

              {/* Facilities */}
              <div id="facilities" className="bg-white rounded-lg p-6 border">
                <h2 className="text-xl font-semibold mb-4">Facilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {facility.available ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <X className="h-4 w-4 text-red-500" />
                      )}
                      <facility.icon className="h-4 w-4 text-gray-500" />
                      <span className={`text-sm ${facility.available ? 'text-gray-700' : 'text-gray-400'}`}>
                        {facility.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* House Rules */}
              <div className="bg-white rounded-lg p-6 border">
                <h2 className="text-xl font-semibold mb-4">House Rules</h2>
                <div className="space-y-2">
                  {campsite.rules.map((rule, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Reviews */}
            <section id="reviews" className="bg-white rounded-lg p-6 border">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold">Guest Reviews</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-lg font-semibold">4.8</span>
                    <span className="text-gray-600">from 24 reviews</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">View All Reviews</Button>
              </div>
              
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <div className="flex items-start gap-3">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{review.name}</span>
                          <span className="text-xs text-gray-500">{review.country}</span>
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 mb-1">{review.comment}</p>
                        <span className="text-xs text-gray-500">{review.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border shadow-lg">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900">
                    ${campsite.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">per night including taxes and fees</div>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.8</span>
                    <span className="text-sm text-gray-600">(24 reviews)</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="border rounded-lg p-3">
                      <div className="text-xs text-gray-600 mb-1">Check-in</div>
                      <div className="font-medium">Mar 15</div>
                    </div>
                    <div className="border rounded-lg p-3">
                      <div className="text-xs text-gray-600 mb-1">Check-out</div>
                      <div className="font-medium">Mar 16</div>
                    </div>
                  </div>
                  <div className="border rounded-lg p-3">
                    <div className="text-xs text-gray-600 mb-1">Guests</div>
                    <div className="font-medium">2 adults</div>
                  </div>
                </div>

                <Button
                  className="w-full h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700 mb-4"
                  onClick={handleBookNow}
                >
                  Book Now
                </Button>

                <div className="text-center text-xs text-gray-500 mb-4">
                  You won't be charged yet
                </div>

                <div className="border-t pt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>${campsite.price.toLocaleString()} × 1 night</span>
                    <span>${campsite.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Booking fee</span>
                    <span>$0</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t pt-2">
                    <span>Total</span>
                    <span>${campsite.price.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampsiteDetails;
