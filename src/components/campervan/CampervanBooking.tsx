
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Clock, MapPin, Star } from "lucide-react";

interface CampervanBookingProps {
  campervan: {
    pricePerDay: number;
    rating: number;
    reviewCount: number;
    pricing: {
      minDays: number;
    };
    locations: {
      pickup: string[];
      dropoff: string[];
    };
  };
}

export const CampervanBooking = ({ campervan }: CampervanBookingProps) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [travelers, setTravelers] = useState(2);
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [days, setDays] = useState(campervan.pricing.minDays);

  const totalPrice = campervan.pricePerDay * days;

  return (
    <div className="sticky top-32">
      <Card className="border-2 border-green-100 shadow-lg">
        <CardContent className="p-6">
          {/* Price Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-3xl font-bold text-green-800">${campervan.pricePerDay}</span>
              <span className="text-green-600 ml-1">/ day</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{campervan.rating}</span>
              <span className="text-gray-600 text-sm">({campervan.reviewCount})</span>
            </div>
          </div>

          {/* Special Offer */}
          <div className="bg-gradient-to-r from-green-100 to-blue-100 border border-green-200 rounded-lg p-3 mb-6">
            <div className="text-center">
              <span className="text-sm font-medium text-green-800">🌟 Nature Lovers Special</span>
              <p className="text-sm text-green-700 mt-1">Book 7+ days and save 15%</p>
            </div>
          </div>

          {/* Booking Form */}
          <div className="space-y-4 mb-6">
            {/* Date Selection */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium text-green-700 mb-1">Check-in</label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <Calendar className="absolute right-3 top-3 h-5 w-5 text-green-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-green-700 mb-1">Check-out</label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <Calendar className="absolute right-3 top-3 h-5 w-5 text-green-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Travelers */}
            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">Travelers</label>
              <div className="relative">
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                  className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
                >
                  <option value={1}>1 person</option>
                  <option value={2}>2 people</option>
                  <option value={3}>3 people</option>
                  <option value={4}>4 people</option>
                  <option value={5}>5 people</option>
                  <option value={6}>6 people</option>
                </select>
                <Users className="absolute right-3 top-3 h-5 w-5 text-green-400 pointer-events-none" />
              </div>
            </div>

            {/* Pickup Time */}
            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">Pickup Time</label>
              <div className="relative">
                <select className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none">
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>12:00 PM</option>
                  <option>1:00 PM</option>
                  <option>2:00 PM</option>
                  <option>3:00 PM</option>
                  <option>4:00 PM</option>
                </select>
                <Clock className="absolute right-3 top-3 h-5 w-5 text-green-400 pointer-events-none" />
              </div>
            </div>

            {/* Pickup Location */}
            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">Pickup Location</label>
              <div className="relative">
                <select
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
                >
                  <option value="">Select pickup location</option>
                  {campervan.locations.pickup.map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </select>
                <MapPin className="absolute right-3 top-3 h-5 w-5 text-green-400 pointer-events-none" />
              </div>
            </div>

            {/* Drop-off Location */}
            <div>
              <label className="block text-sm font-medium text-green-700 mb-1">Drop-off Location</label>
              <div className="relative">
                <select
                  value={dropoffLocation}
                  onChange={(e) => setDropoffLocation(e.target.value)}
                  className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
                >
                  <option value="">Select drop-off location</option>
                  {campervan.locations.dropoff.map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </select>
                <MapPin className="absolute right-3 top-3 h-5 w-5 text-green-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="border-t border-green-100 pt-4 mb-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-green-700">${campervan.pricePerDay} × {days} days</span>
                <span className="text-green-800">${totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-700">Service fee</span>
                <span className="text-green-800">$29</span>
              </div>
              <hr className="border-green-100" />
              <div className="flex justify-between font-semibold text-base">
                <span className="text-green-800">Total</span>
                <span className="text-green-800">${totalPrice + 29}</span>
              </div>
            </div>
          </div>

          {/* Book Button */}
          <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 text-lg font-medium rounded-lg">
            Check Availability
          </Button>

          <p className="text-xs text-green-600 text-center mt-2">
            No charges until confirmed
          </p>

          {/* Additional Info */}
          <div className="mt-4 text-sm text-green-600 space-y-1 bg-green-50 p-3 rounded-lg">
            <p>• Minimum rental: {campervan.pricing.minDays} days</p>
            <p>• Free cancellation within 48 hours</p>
            <p>• Instant booking confirmation</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
