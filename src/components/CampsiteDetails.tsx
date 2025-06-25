
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
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
  Utensils,
  TreePine,
  Waves,
  Mountain,
  Sun,
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

  const handleBookNow = () => {
    navigate(`/booking/1`);
  };

  const getFacilityIcon = (facility: string) => {
    const lowerFacility = facility.toLowerCase();
    if (lowerFacility.includes("wifi")) return <Wifi className="h-5 w-5 text-blue-600" />;
    if (lowerFacility.includes("parking") || lowerFacility.includes("car")) return <Car className="h-5 w-5 text-green-600" />;
    if (lowerFacility.includes("shower") || lowerFacility.includes("bath")) return <Droplets className="h-5 w-5 text-blue-500" />;
    if (lowerFacility.includes("power") || lowerFacility.includes("electric")) return <Power className="h-5 w-5 text-yellow-600" />;
    if (lowerFacility.includes("pool")) return <Waves className="h-5 w-5 text-blue-400" />;
    if (lowerFacility.includes("mountain")) return <Mountain className="h-5 w-5 text-gray-600" />;
    if (lowerFacility.includes("luxury") || lowerFacility.includes("amenities")) return <Star className="h-5 w-5 text-yellow-500" />;
    if (lowerFacility.includes("balcony") || lowerFacility.includes("view")) return <Sun className="h-5 w-5 text-orange-500" />;
    if (lowerFacility.includes("room") || lowerFacility.includes("service")) return <Home className="h-5 w-5 text-purple-600" />;
    return <TreePine className="h-5 w-5 text-green-500" />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Search
          </Button>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Main Image */}
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <img
              src={campsite.images[selectedImageIndex]}
              alt={`${campsite.name} view ${selectedImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Arrows */}
            {campsite.images.length > 1 && (
              <>
                <button
                  onClick={() => setSelectedImageIndex(selectedImageIndex > 0 ? selectedImageIndex - 1 : campsite.images.length - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setSelectedImageIndex(selectedImageIndex < campsite.images.length - 1 ? selectedImageIndex + 1 : 0)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                >
                  <ArrowLeft className="h-5 w-5 rotate-180" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {selectedImageIndex + 1} / {campsite.images.length}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          {campsite.images.length > 1 && (
            <div className="p-4 bg-gray-50">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {campsite.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header Info */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{campsite.name}</h1>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                      Premium Campsite
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">4.8</span>
                      <span>(24 reviews)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>Chiang Mai, Thailand</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">{campsite.description}</p>
            </div>

            {/* Facilities */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Facilities & Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {campsite.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      {getFacilityIcon(facility)}
                      <span className="font-medium text-gray-800">{facility}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location & Map */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Location</h2>
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.0849194042347!2d100.84770147475835!3d18.619845586857763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d60dd168e9c15%3A0x40ec1b3e7dfa8f0!2sChiang%20Mai%2C%20Thailand!5e0!3m2!1sen!2sth!4v1710848947954!5m2!1sen!2sth"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>123 Mountain View Road, Chiang Mai 50200</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <h3 className="font-medium text-gray-800 mb-2">Nearby Attractions:</h3>
                    <ul className="space-y-1">
                      <li>• Doi Suthep Temple - 15 minutes drive</li>
                      <li>• Chiang Mai Night Bazaar - 20 minutes drive</li>
                      <li>• Elephant Nature Park - 30 minutes drive</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rules */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">House Rules</h2>
                <div className="space-y-3">
                  {campsite.rules.map((rule, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800">{rule}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Contact Information</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-800">+66 123 456 789</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-green-600" />
                    <span className="text-gray-800">info@mountainviewcamp.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-800">www.mountainviewcamp.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    ฿{campsite.price.toLocaleString()}
                    <span className="text-lg font-normal text-gray-600"> / night</span>
                  </div>
                  <div className="text-sm text-gray-500">Free cancellation until 24 hours before</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-gray-600" />
                      <span className="font-medium text-gray-800">Check-in</span>
                    </div>
                    <p className="text-gray-600 ml-6">{campsite.checkIn}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-gray-600" />
                      <span className="font-medium text-gray-800">Check-out</span>
                    </div>
                    <p className="text-gray-600 ml-6">{campsite.checkOut}</p>
                  </div>
                </div>

                {campsite.tyreRoom && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span className="font-medium text-green-800">Tyre Room Available</span>
                    </div>
                    <p className="text-sm text-green-700 mt-1">Secure storage for your vehicle tires</p>
                  </div>
                )}

                <Button
                  className="w-full h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700"
                  onClick={handleBookNow}
                >
                  Book Now
                </Button>

                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    You won't be charged yet
                  </p>
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
