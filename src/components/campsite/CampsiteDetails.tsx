
import React from "react";
import { Users, Clock, PawPrint, Tent, Car, Home, Zap, Wifi } from "lucide-react";

interface CampsiteDetailsProps {
  campsite: {
    description: string;
    stayOptions: Array<{
      type: string;
      description: string;
      maxGuests: number;
      price: number;
    }>;
    amenities: string[];
    activities: string[];
    host: {
      name: string;
      avatar: string;
      joinedDate: string;
    };
  };
}

export const CampsiteDetails = ({ campsite }: CampsiteDetailsProps) => {
  const getStayIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'tent pitch':
        return Tent;
      case 'rv spot':
      case 'campervan':
        return Car;
      case 'cabin':
      case 'bungalow':
        return Home;
      default:
        return Tent;
    }
  };

  const getAmenityIcon = (amenity: string) => {
    if (amenity.toLowerCase().includes('wifi')) return Wifi;
    if (amenity.toLowerCase().includes('electric')) return Zap;
    return null;
  };

  return (
    <div className="space-y-8">
      {/* Description */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-xl font-semibold mb-4">About this campsite</h2>
        <p className="text-gray-700 leading-relaxed text-base">{campsite.description}</p>
      </div>

      {/* Stay Options */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-xl font-semibold mb-4">Stay Options</h2>
        <div className="space-y-4">
          {campsite.stayOptions.map((option, index) => {
            const IconComponent = getStayIcon(option.type);
            return (
              <div key={index} className="border rounded-lg p-4 hover:border-green-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <IconComponent className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900">{option.type}</h3>
                    <p className="text-gray-600 mb-2">{option.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>Up to {option.maxGuests} guests</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      ${option.price}
                    </div>
                    <div className="text-sm text-gray-500">per night</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Key Amenities */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-xl font-semibold mb-4">Key Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {campsite.amenities.slice(0, 6).map((amenity, index) => {
            const IconComponent = getAmenityIcon(amenity);
            return (
              <div key={index} className="flex items-center gap-3">
                {IconComponent && <IconComponent className="h-5 w-5 text-green-600" />}
                <span className="text-gray-700">{amenity}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Activities */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-xl font-semibold mb-4">Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {campsite.activities.map((activity, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">{activity}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Host Information */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-xl font-semibold mb-4">Your Host</h2>
        <div className="flex items-center gap-4">
          <img
            src={campsite.host.avatar}
            alt={campsite.host.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-lg">{campsite.host.name}</h3>
            <p className="text-gray-600">Host since {campsite.host.joinedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
