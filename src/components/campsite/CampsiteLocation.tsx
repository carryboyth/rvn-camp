
import React from "react";
import { MapPin, Car, Plane, Train } from "lucide-react";

interface CampsiteLocationProps {
  campsite: {
    location: {
      address: string;
      city: string;
      country: string;
      coordinates: { lat: number; lng: number };
    };
  };
}

const nearbyAttractions = [
  { name: "Mountain Trail", distance: "2.5 km", type: "Hiking" },
  { name: "Crystal Lake", distance: "4.1 km", type: "Swimming" },
  { name: "Scenic Viewpoint", distance: "1.8 km", type: "Sightseeing" },
  { name: "Local Village", distance: "6.2 km", type: "Shopping" }
];

export const CampsiteLocation = ({ campsite }: CampsiteLocationProps) => {
  return (
    <div className="space-y-6">
      {/* Map Section */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-xl font-semibold mb-4">Location</h2>
        <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
          <div className="text-center">
            <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <span className="text-gray-500">Interactive map will be displayed here</span>
          </div>
        </div>
        <p className="text-gray-600 mb-2">
          <strong>Address:</strong> {campsite.location.address}
        </p>
        <p className="text-gray-600">
          {campsite.location.city}, {campsite.location.country}
        </p>
      </div>

      {/* Getting There */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-xl font-semibold mb-4">Getting there</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Car className="h-5 w-5 text-blue-600" />
            <div>
              <span className="font-medium">By car</span>
              <p className="text-sm text-gray-600">2 hours from city center</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Plane className="h-5 w-5 text-blue-600" />
            <div>
              <span className="font-medium">Nearest airport</span>
              <p className="text-sm text-gray-600">45 minutes drive</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Train className="h-5 w-5 text-blue-600" />
            <div>
              <span className="font-medium">Public transport</span>
              <p className="text-sm text-gray-600">Bus stop 10 minutes walk</p>
            </div>
          </div>
        </div>
      </div>

      {/* Nearby Attractions */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-xl font-semibold mb-4">What's nearby</h2>
        <div className="space-y-3">
          {nearbyAttractions.map((attraction, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <span className="font-medium">{attraction.name}</span>
                <p className="text-sm text-gray-600">{attraction.type}</p>
              </div>
              <span className="text-sm text-blue-600 font-medium">
                {attraction.distance}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
