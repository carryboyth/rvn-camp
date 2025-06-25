
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Star,
  MapPin,
  Shield,
  Heart,
  Share2,
} from "lucide-react";
import { CampsiteHeader } from "./CampsiteHeader";
import { CampsiteGallery } from "./CampsiteGallery";
import { CampsiteDetails } from "./CampsiteDetails";
import { BookingWidget } from "./BookingWidget";
import { CampsiteReviews } from "./CampsiteReviews";
import { CampsiteLocation } from "./CampsiteLocation";

interface CampsiteDetailPageProps {
  campsite: {
    id: string;
    name: string;
    images: string[];
    price: number;
    rating: number;
    reviewCount: number;
    description: string;
    location: {
      address: string;
      city: string;
      country: string;
      coordinates: { lat: number; lng: number };
    };
    amenities: string[];
    activities: string[];
    rules: string[];
    stayOptions: Array<{
      type: string;
      description: string;
      maxGuests: number;
      price: number;
    }>;
    host: {
      name: string;
      avatar: string;
      joinedDate: string;
    };
  };
}

const CampsiteDetailPage = ({ campsite }: CampsiteDetailPageProps) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 hover:bg-gray-100"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to search
            </Button>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header Section */}
        <CampsiteHeader campsite={campsite} />

        {/* Image Gallery */}
        <CampsiteGallery images={campsite.images} name={campsite.name} />

        {/* Navigation Tabs */}
        <div className="sticky top-16 bg-white border-b z-40 -mx-4 px-4 mb-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6 max-w-3xl bg-transparent border-0 p-0 h-12">
              <TabsTrigger 
                value="overview" 
                className="data-[state=active]:bg-transparent data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none h-full"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="photos" 
                className="data-[state=active]:bg-transparent data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none h-full"
              >
                Photos
              </TabsTrigger>
              <TabsTrigger 
                value="facilities" 
                className="data-[state=active]:bg-transparent data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none h-full"
              >
                Facilities
              </TabsTrigger>
              <TabsTrigger 
                value="reviews" 
                className="data-[state=active]:bg-transparent data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none h-full"
              >
                Reviews
              </TabsTrigger>
              <TabsTrigger 
                value="location" 
                className="data-[state=active]:bg-transparent data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none h-full"
              >
                Location
              </TabsTrigger>
              <TabsTrigger 
                value="rules" 
                className="data-[state=active]:bg-transparent data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none h-full"
              >
                Rules
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
                <CampsiteDetails campsite={campsite} />
              </TabsContent>
              <TabsContent value="photos" className="mt-0">
                <CampsiteGallery images={campsite.images} name={campsite.name} fullView />
              </TabsContent>
              <TabsContent value="facilities" className="mt-0">
                <div className="bg-white rounded-lg p-6 border">
                  <h2 className="text-xl font-semibold mb-4">Facilities & Amenities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {campsite.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="mt-0">
                <CampsiteReviews campsite={campsite} />
              </TabsContent>
              <TabsContent value="location" className="mt-0">
                <CampsiteLocation campsite={campsite} />
              </TabsContent>
              <TabsContent value="rules" className="mt-0">
                <div className="bg-white rounded-lg p-6 border">
                  <h2 className="text-xl font-semibold mb-4">House Rules</h2>
                  <div className="space-y-3">
                    {campsite.rules.map((rule, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                        <span className="text-gray-700">{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Booking Widget */}
          <div className="lg:col-span-1">
            <BookingWidget campsite={campsite} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampsiteDetailPage;
