
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Users, Star, MapPin, Shield } from "lucide-react";
import { format } from "date-fns";

interface BookingWidgetProps {
  campsite: {
    id: string;
    price: number;
    rating: number;
    reviewCount: number;
    stayOptions: Array<{
      type: string;
      price: number;
      maxGuests: number;
    }>;
  };
}

export const BookingWidget = ({ campsite }: BookingWidgetProps) => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(2);
  const [stayType, setStayType] = useState(campsite.stayOptions[0]?.type || "");

  const selectedOption = campsite.stayOptions.find(option => option.type === stayType);
  const totalPrice = selectedOption ? selectedOption.price : campsite.price;

  const handleBooking = () => {
    navigate(`/booking/${campsite.id}`);
  };

  return (
    <div className="sticky top-32">
      <Card className="border shadow-lg">
        <CardContent className="p-6">
          {/* Price and Rating */}
          <div className="mb-6">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold">${totalPrice}</span>
              <span className="text-gray-600">per night</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{campsite.rating}</span>
              </div>
              <span className="text-gray-600">({campsite.reviewCount} reviews)</span>
            </div>
          </div>

          {/* Genius Discount Badge */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
            <div className="flex items-center gap-2 mb-1">
              <Shield className="h-4 w-4 text-blue-600" />
              <span className="text-blue-600 font-semibold text-sm">Genius discount</span>
            </div>
            <p className="text-sm text-gray-600">
              You're getting a reduced rate because you're signed in.
            </p>
          </div>

          {/* Booking Form */}
          <div className="space-y-4 mb-6">
            {/* Check-in and Check-out */}
            <div className="grid grid-cols-2 gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkIn ? format(checkIn, "MMM dd") : "Check-in"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkOut ? format(checkOut, "MMM dd") : "Check-out"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Guests and Stay Type */}
            <div className="grid grid-cols-2 gap-2">
              <Select value={guests.toString()} onValueChange={(value) => setGuests(parseInt(value))}>
                <SelectTrigger>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} guest{num > 1 ? 's' : ''}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={stayType} onValueChange={setStayType}>
                <SelectTrigger>
                  <SelectValue placeholder="Stay type" />
                </SelectTrigger>
                <SelectContent>
                  {campsite.stayOptions.map((option) => (
                    <SelectItem key={option.type} value={option.type}>
                      {option.type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Book Now Button */}
          <Button 
            className="w-full h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700 mb-4"
            onClick={handleBooking}
          >
            Reserve
          </Button>

          <p className="text-center text-sm text-gray-500 mb-4">
            You won't be charged yet
          </p>

          {/* Price Breakdown */}
          <div className="border-t pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>${totalPrice} × 1 night</span>
              <span>${totalPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>Service fee</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
          </div>

          {/* Mini Map */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium">Great location</span>
            </div>
            <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">Interactive map preview</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
