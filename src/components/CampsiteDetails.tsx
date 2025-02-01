import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Wifi,
  Car,
  Droplets,
  Power,
  AlertCircle,
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
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Image Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {campsite.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${campsite.name} view ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Details Section */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{campsite.name}</h1>
          <p className="text-gray-600 mb-6">{campsite.description}</p>

          {/* Facilities */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Facilities & Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {campsite.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {facility.includes("WiFi") && <Wifi className="h-5 w-5" />}
                    {facility.includes("Parking") && (
                      <Car className="h-5 w-5" />
                    )}
                    {facility.includes("Shower") && (
                      <Droplets className="h-5 w-5" />
                    )}
                    {facility.includes("Power") && <Power className="h-5 w-5" />}
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Rules */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">House Rules</h2>
              <ul className="space-y-2">
                {campsite.rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Booking Card */}
        <div>
          <Card className="sticky top-4">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                ฿{campsite.price.toLocaleString()} / night
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">Check-in</p>
                    <p className="text-gray-600">{campsite.checkIn}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">Check-out</p>
                    <p className="text-gray-600">{campsite.checkOut}</p>
                  </div>
                </div>
              </div>

              {campsite.tyreRoom && (
                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <p className="text-green-700 font-semibold">
                    Tyre Room Available
                  </p>
                </div>
              )}

              <Button className="w-full">Book Now</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CampsiteDetails;