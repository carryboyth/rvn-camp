
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, Shield, ChevronDown } from "lucide-react";

interface Addon {
  id: string;
  name: string;
  price: number;
  description: string;
}

interface InsuranceOption {
  id: string;
  name: string;
  price: number;
  description: string;
  coverage: string;
}

interface PickupLocation {
  id: string;
  name: string;
  address: string;
}

interface BookingSectionProps {
  motorhome: {
    pricing: {
      basePrice: number;
      insurance: number;
      cleaning: number;
      deposit: number;
      minDays: number;
    };
    rating: number;
    reviewCount: number;
  };
  addons?: Addon[];
  insuranceOptions?: InsuranceOption[];
  pickupLocations?: PickupLocation[];
}

export const BookingSection = ({ 
  motorhome, 
  addons = [], 
  insuranceOptions = [],
  pickupLocations = []
}: BookingSectionProps) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [pickupTime, setPickupTime] = useState("10:00");
  const [selectedLocation, setSelectedLocation] = useState(pickupLocations[0]?.id || "");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [selectedInsurance, setSelectedInsurance] = useState(insuranceOptions[0]?.id || "basic");
  const [days, setDays] = useState(1);

  const handleAddonToggle = (addonId: string) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  const calculateAddonsTotal = () => {
    return addons
      .filter(addon => selectedAddons.includes(addon.id))
      .reduce((sum, addon) => sum + addon.price, 0);
  };

  const getInsurancePrice = () => {
    const insurance = insuranceOptions.find(opt => opt.id === selectedInsurance);
    return insurance?.price || 0;
  };

  const baseTotal = motorhome.pricing.basePrice * days;
  const addonsTotal = calculateAddonsTotal();
  const insuranceTotal = getInsurancePrice() * days;
  const totalPrice = baseTotal + addonsTotal + insuranceTotal;

  return (
    <div className="space-y-4">
      <Card className="border">
        <CardContent className="p-4">
          {/* Status Badge */}
          <div className="mb-4">
            <span className="text-sm text-gray-600">สถานะรับรถ</span>
          </div>

          {/* Pickup Time */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">เวลารับรถ</label>
            <div className="relative">
              <select
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
              >
                <option value="08:00">08:00</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
              </select>
              <Clock className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Pickup Location */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">สถานที่รับรถ</label>
            <div className="relative">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white text-sm"
              >
                {pickupLocations.map(location => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Price Summary */}
          <div className="border-t pt-4 mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">ราคารวม:</span>
              <span className="font-bold">{baseTotal.toLocaleString()} THB</span>
            </div>
            <div className="flex justify-between text-red-600">
              <span>ชำระเงินทันที:</span>
              <span className="font-bold">{totalPrice.toLocaleString()} THB</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1 border-red-500 text-red-500 hover:bg-red-50">
              เพิ่มในตระกร้า
            </Button>
            <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
              จองเลย →
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Add-ons Section */}
      {addons.length > 0 && (
        <Card className="border">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-4">Add-ons เพิ่มเติม</h3>
            <div className="space-y-3">
              {addons.map(addon => (
                <div key={addon.id} className="flex items-start gap-3">
                  <Checkbox
                    id={addon.id}
                    checked={selectedAddons.includes(addon.id)}
                    onCheckedChange={() => handleAddonToggle(addon.id)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <Label htmlFor={addon.id} className="font-medium cursor-pointer">
                      {addon.name}
                    </Label>
                    <p className="text-xs text-gray-500">{addon.description}</p>
                  </div>
                  <span className="text-sm font-medium">+฿{addon.price.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Insurance Section */}
      {insuranceOptions.length > 0 && (
        <Card className="border">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold">ประกันภัย</h3>
            </div>
            <RadioGroup value={selectedInsurance} onValueChange={setSelectedInsurance}>
              <div className="space-y-3">
                {insuranceOptions.map(option => (
                  <div key={option.id} className="flex items-start gap-3 p-3 border rounded-lg hover:border-primary transition-colors">
                    <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor={option.id} className="font-medium cursor-pointer">
                        {option.name}
                        {option.price === 0 && (
                          <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                            รวมแล้ว
                          </span>
                        )}
                      </Label>
                      <p className="text-xs text-gray-500 mt-1">{option.description}</p>
                      <p className="text-xs text-gray-400">ความคุ้มครอง: {option.coverage}</p>
                    </div>
                    <span className="text-sm font-medium">
                      {option.price === 0 ? "ฟรี" : `+฿${option.price.toLocaleString()}/วัน`}
                    </span>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
