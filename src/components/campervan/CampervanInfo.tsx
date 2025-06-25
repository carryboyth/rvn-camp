
import React from "react";
import { Car, Fuel, Calendar, Users, Bed, Shield, Award, CheckCircle } from "lucide-react";

interface CampervanInfoProps {
  campervan: {
    description: string;
    year: number;
    specs: {
      seats: number;
      sleeps: number;
      transmission: string;
      fuelType: string;
      engine: string;
    };
    pricing: {
      basePrice: number;
      minDays: number;
      insurance: boolean;
      unlimitedMileage: boolean;
      roadsideAssistance: boolean;
    };
  };
}

export const CampervanInfo = ({ campervan }: CampervanInfoProps) => {
  return (
    <div className="space-y-6">
      {/* Description */}
      <div className="bg-white rounded-xl p-6 border border-green-100 shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-green-900">Vehicle Overview</h2>
        <p className="text-green-700 leading-relaxed mb-6">{campervan.description}</p>
        
        {/* Vehicle Specs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-5 w-5 text-green-600" />
              <span className="font-medium text-green-800">Year</span>
            </div>
            <span className="text-green-700">{campervan.year}</span>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-5 w-5 text-green-600" />
              <span className="font-medium text-green-800">Seats</span>
            </div>
            <span className="text-green-700">{campervan.specs.seats} people</span>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <div className="flex items-center gap-2 mb-2">
              <Bed className="h-5 w-5 text-green-600" />
              <span className="font-medium text-green-800">Sleeps</span>
            </div>
            <span className="text-green-700">{campervan.specs.sleeps} people</span>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <div className="flex items-center gap-2 mb-2">
              <Car className="h-5 w-5 text-green-600" />
              <span className="font-medium text-green-800">Transmission</span>
            </div>
            <span className="text-green-700">{campervan.specs.transmission}</span>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <div className="flex items-center gap-2 mb-2">
              <Fuel className="h-5 w-5 text-green-600" />
              <span className="font-medium text-green-800">Fuel Type</span>
            </div>
            <span className="text-green-700">{campervan.specs.fuelType}</span>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <div className="flex items-center gap-2 mb-2">
              <Car className="h-5 w-5 text-green-600" />
              <span className="font-medium text-green-800">Engine</span>
            </div>
            <span className="text-green-700">{campervan.specs.engine}</span>
          </div>
        </div>
      </div>

      {/* Rental Details */}
      <div className="bg-white rounded-xl p-6 border border-green-100 shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-green-900">Rental Information</h2>
        
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-100 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-green-700">Daily Rate</span>
            <span className="text-2xl font-bold text-green-800">${campervan.pricing.basePrice}</span>
          </div>
          <p className="text-green-600 text-sm">Minimum rental: {campervan.pricing.minDays} days</p>
        </div>

        <h3 className="font-medium mb-3 text-green-800">What's Included</h3>
        <div className="space-y-3">
          {campervan.pricing.insurance && (
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <Shield className="h-5 w-5 text-green-600" />
              <div>
                <span className="font-medium text-green-800">Comprehensive Insurance</span>
                <p className="text-green-600 text-sm">Full coverage included in rental price</p>
              </div>
            </div>
          )}
          
          {campervan.pricing.unlimitedMileage && (
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <span className="font-medium text-green-800">Unlimited Mileage</span>
                <p className="text-green-600 text-sm">No distance restrictions</p>
              </div>
            </div>
          )}
          
          {campervan.pricing.roadsideAssistance && (
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <Award className="h-5 w-5 text-green-600" />
              <div>
                <span className="font-medium text-green-800">24/7 Roadside Assistance</span>
                <p className="text-green-600 text-sm">Emergency support throughout your journey</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
