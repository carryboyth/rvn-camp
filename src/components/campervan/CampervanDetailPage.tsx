import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Star,
  MapPin,
  Heart,
  Share2,
  Users,
  Bed,
  Car,
  Fuel,
  Calendar,
  Wifi,
  Snowflake,
  Droplet,
  Sun,
  Zap
} from "lucide-react";
import { CampervanGallery } from "./CampervanGallery";
import { CampervanInfo } from "./CampervanInfo";
import { CampervanBooking } from "./CampervanBooking";
import { CampervanReviews } from "./CampervanReviews";
import { CampervanFAQ } from "./CampervanFAQ";

interface CampervanDetailPageProps {
  campervan: {
    id: string;
    name: string;
    model: string;
    brand: string;
    images: string[];
    pricePerDay: number;
    rating: number;
    reviewCount: number;
    description: string;
    year: number;
    specs: {
      seats: number;
      sleeps: number;
      transmission: string;
      fuelType: string;
      engine: string;
    };
    amenities: {
      bedConfiguration: string;
      kitchen: string[];
      bathroom: boolean;
      airConditioning: boolean;
      powerOutlets: number;
      waterTank: string;
      solarPanel: boolean;
      wifi: boolean;
    };
    pricing: {
      basePrice: number;
      minDays: number;
      insurance: boolean;
      unlimitedMileage: boolean;
      roadsideAssistance: boolean;
    };
    locations: {
      pickup: string[];
      dropoff: string[];
    };
  };
}

const CampervanDetailPage = ({ campervan }: CampervanDetailPageProps) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header Navigation */}
      <div className="bg-white/90 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 hover:bg-green-50 text-green-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Search
            </Button>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:bg-green-50 text-green-700">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:bg-green-50 text-green-700">
                <Heart className="h-4 w-4" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Title Section */}
        <div className="mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-green-900 mb-2">
                {campervan.name}
              </h1>
              <p className="text-lg text-green-700 mb-3">
                {campervan.brand} {campervan.model} • {campervan.year}
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-green-600">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{campervan.specs.seats} seats</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bed className="h-4 w-4" />
                  <span>Sleeps {campervan.specs.sleeps}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Car className="h-4 w-4" />
                  <span>{campervan.specs.transmission}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Fuel className="h-4 w-4" />
                  <span>{campervan.specs.fuelType}</span>
                </div>
              </div>
            </div>

            {/* Price Display */}
            <div className="text-right lg:text-left">
              <div className="text-3xl font-bold text-green-800">
                ${campervan.pricePerDay}
                <span className="text-lg font-normal text-green-600"> / day</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-lg">{campervan.rating}</span>
                </div>
                <span className="text-green-600">
                  ({campervan.reviewCount} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <CampervanGallery images={campervan.images} name={campervan.name} />

        {/* Navigation Tabs */}
        <div className="sticky top-16 bg-white/90 backdrop-blur-sm border-b border-green-100 z-40 -mx-4 px-4 mb-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 max-w-3xl bg-transparent border-0 p-0 h-12">
              <TabsTrigger 
                value="overview" 
                className="data-[state=active]:bg-transparent data-[state=active]:text-green-600 data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none h-full"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="amenities" 
                className="data-[state=active]:bg-transparent data-[state=active]:text-green-600 data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none h-full"
              >
                Amenities
              </TabsTrigger>
              <TabsTrigger 
                value="reviews" 
                className="data-[state=active]:bg-transparent data-[state=active]:text-green-600 data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none h-full"
              >
                Reviews
              </TabsTrigger>
              <TabsTrigger 
                value="location" 
                className="data-[state=active]:bg-transparent data-[state=active]:text-green-600 data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none h-full"
              >
                Location
              </TabsTrigger>
              <TabsTrigger 
                value="faq" 
                className="data-[state=active]:bg-transparent data-[state=active]:text-green-600 data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none h-full"
              >
                FAQ
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} className="w-full">
              <TabsContent value="overview" className="mt-0">
                <CampervanInfo campervan={campervan} />
              </TabsContent>
              
              <TabsContent value="amenities" className="mt-0">
                <div className="bg-white rounded-xl p-6 border border-green-100 shadow-sm">
                  <h2 className="text-xl font-semibold mb-6 text-green-900">Interior Amenities</h2>
                  
                  {/* Bed Configuration */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3 text-green-800 flex items-center gap-2">
                      <Bed className="h-5 w-5" />
                      Sleeping Arrangement
                    </h3>
                    <p className="text-green-700 bg-green-50 p-3 rounded-lg">
                      {campervan.amenities.bedConfiguration}
                    </p>
                  </div>

                  {/* Kitchen */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3 text-green-800">Kitchenette</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {campervan.amenities.kitchen.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-green-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Other Amenities */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`p-4 rounded-lg border-2 ${campervan.amenities.bathroom ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Droplet className={`h-5 w-5 ${campervan.amenities.bathroom ? 'text-green-600' : 'text-gray-400'}`} />
                        <span className={`font-medium ${campervan.amenities.bathroom ? 'text-green-800' : 'text-gray-600'}`}>
                          Bathroom/Shower
                        </span>
                      </div>
                      <span className={`text-sm ${campervan.amenities.bathroom ? 'text-green-600' : 'text-gray-500'}`}>
                        {campervan.amenities.bathroom ? 'Available' : 'Not available'}
                      </span>
                    </div>

                    <div className={`p-4 rounded-lg border-2 ${campervan.amenities.airConditioning ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Snowflake className={`h-5 w-5 ${campervan.amenities.airConditioning ? 'text-green-600' : 'text-gray-400'}`} />
                        <span className={`font-medium ${campervan.amenities.airConditioning ? 'text-green-800' : 'text-gray-600'}`}>
                          Air Conditioning
                        </span>
                      </div>
                      <span className={`text-sm ${campervan.amenities.airConditioning ? 'text-green-600' : 'text-gray-500'}`}>
                        {campervan.amenities.airConditioning ? 'Available' : 'Not available'}
                      </span>
                    </div>

                    <div className="p-4 rounded-lg border-2 border-green-200 bg-green-50">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="h-5 w-5 text-green-600" />
                        <span className="font-medium text-green-800">Power Outlets</span>
                      </div>
                      <span className="text-sm text-green-600">
                        {campervan.amenities.powerOutlets} outlets available
                      </span>
                    </div>

                    <div className={`p-4 rounded-lg border-2 ${campervan.amenities.solarPanel ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Sun className={`h-5 w-5 ${campervan.amenities.solarPanel ? 'text-green-600' : 'text-gray-400'}`} />
                        <span className={`font-medium ${campervan.amenities.solarPanel ? 'text-green-800' : 'text-gray-600'}`}>
                          Solar Panel
                        </span>
                      </div>
                      <span className={`text-sm ${campervan.amenities.solarPanel ? 'text-green-600' : 'text-gray-500'}`}>
                        {campervan.amenities.solarPanel ? 'Eco-friendly power' : 'Not available'}
                      </span>
                    </div>
                  </div>

                  {/* Water Tank & WiFi */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg border-2 border-green-200 bg-green-50">
                      <h4 className="font-medium text-green-800 mb-2">Water Tank</h4>
                      <p className="text-green-700">{campervan.amenities.waterTank}</p>
                    </div>
                    
                    {campervan.amenities.wifi && (
                      <div className="p-4 rounded-lg border-2 border-green-200 bg-green-50">
                        <div className="flex items-center gap-2 mb-2">
                          <Wifi className="h-5 w-5 text-green-600" />
                          <h4 className="font-medium text-green-800">WiFi Internet</h4>
                        </div>
                        <p className="text-green-700 text-sm">Stay connected on the road</p>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-0">
                <CampervanReviews campervan={campervan} />
              </TabsContent>
              
              <TabsContent value="location" className="mt-0">
                <div className="bg-white rounded-xl p-6 border border-green-100 shadow-sm">
                  <h2 className="text-xl font-semibold mb-6 text-green-900">Pick-up & Drop-off Locations</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-3 text-green-800 flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        Pick-up Locations
                      </h3>
                      <div className="space-y-2">
                        {campervan.locations.pickup.map((location, index) => (
                          <div key={index} className="p-3 bg-green-50 rounded-lg border border-green-100">
                            <span className="text-green-700">{location}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3 text-green-800 flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        Drop-off Locations
                      </h3>
                      <div className="space-y-2">
                        {campervan.locations.dropoff.map((location, index) => (
                          <div key={index} className="p-3 bg-green-50 rounded-lg border border-green-100">
                            <span className="text-green-700">{location}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  <div className="mt-6 h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center border border-green-200">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-green-500 mx-auto mb-3" />
                      <h4 className="text-green-800 font-medium mb-1">Interactive Map</h4>
                      <span className="text-green-600 text-sm">View exact pickup locations</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="faq" className="mt-0">
                <CampervanFAQ />
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Booking Widget */}
          <div className="lg:col-span-1">
            <CampervanBooking campervan={campervan} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampervanDetailPage;
