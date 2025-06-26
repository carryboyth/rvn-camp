
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Filter, Wifi, Car, Droplets, Home, Zap, PawPrint, Mountain, Waves, TreePine, Utensils, Flame } from "lucide-react";

interface SearchFiltersProps {
  filters: {
    priceRange: [number, number];
    accommodationTypes: string[];
    amenities: string[];
    activities: string[];
  };
  onFiltersChange: (filters: any) => void;
  showMobile: boolean;
  onCloseMobile: () => void;
}

const SearchFilters = ({ filters, onFiltersChange, showMobile, onCloseMobile }: SearchFiltersProps) => {
  const accommodationTypes = [
    { id: "tent", label: "ลานกางเต็นท์" },
    { id: "rv", label: "จุดจอดรถบ้าน" },
    { id: "glamping", label: "Glamping" },
    { id: "cabin", label: "บ้านพัก" }
  ];

  const amenities = [
    { id: "wifi", label: "Wi-Fi ฟรี", icon: Wifi },
    { id: "toilet", label: "ห้องน้ำ", icon: Home },
    { id: "shower", label: "ห้องอาบน้ำ", icon: Droplets },
    { id: "electricity", label: "ไฟฟ้า", icon: Zap },
    { id: "pet-friendly", label: "สัตว์เลี้ยงได้", icon: PawPrint },
    { id: "restaurant", label: "ร้านอาหาร", icon: Utensils },
    { id: "firepit", label: "กองไฟ", icon: Flame },
    { id: "parking", label: "ที่จอดรถ", icon: Car }
  ];

  const activities = [
    { id: "hiking", label: "เดินป่า", icon: Mountain },
    { id: "swimming", label: "ว่ายน้ำ", icon: Waves },
    { id: "fishing", label: "ตกปลา", icon: Waves },
    { id: "camping", label: "แคมป์ปิ้ง", icon: TreePine },
    { id: "photography", label: "ถ่ายภาพ", icon: Mountain },
    { id: "cycling", label: "ปั่นจักรยาน", icon: Mountain }
  ];

  const handleAccommodationTypeChange = (typeId: string, checked: boolean) => {
    const newTypes = checked 
      ? [...filters.accommodationTypes, typeId]
      : filters.accommodationTypes.filter(id => id !== typeId);
    
    onFiltersChange({ ...filters, accommodationTypes: newTypes });
  };

  const handleAmenityChange = (amenityId: string, checked: boolean) => {
    const newAmenities = checked 
      ? [...filters.amenities, amenityId]
      : filters.amenities.filter(id => id !== amenityId);
    
    onFiltersChange({ ...filters, amenities: newAmenities });
  };

  const handleActivityChange = (activityId: string, checked: boolean) => {
    const newActivities = checked 
      ? [...filters.activities, activityId]
      : filters.activities.filter(id => id !== activityId);
    
    onFiltersChange({ ...filters, activities: newActivities });
  };

  const handlePriceRangeChange = (value: number[]) => {
    onFiltersChange({ ...filters, priceRange: value as [number, number] });
  };

  const clearFilters = () => {
    onFiltersChange({
      priceRange: [0, 5000],
      accommodationTypes: [],
      amenities: [],
      activities: []
    });
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Filter className="h-5 w-5" />
          ตัวกรอง
        </h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={clearFilters}
          className="text-red-600 hover:text-red-700"
        >
          ล้างทั้งหมด
        </Button>
      </div>

      {/* Price Range */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">ช่วงราคา (ต่อคืน)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={filters.priceRange}
            onValueChange={handlePriceRangeChange}
            max={5000}
            min={0}
            step={100}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>฿{filters.priceRange[0].toLocaleString()}</span>
            <span>฿{filters.priceRange[1].toLocaleString()}</span>
          </div>
        </CardContent>
      </Card>

      {/* Accommodation Types */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">ประเภทที่พัก</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {accommodationTypes.map((type) => (
            <div key={type.id} className="flex items-center space-x-2">
              <Checkbox
                id={type.id}
                checked={filters.accommodationTypes.includes(type.id)}
                onCheckedChange={(checked) => handleAccommodationTypeChange(type.id, checked as boolean)}
              />
              <label htmlFor={type.id} className="text-sm font-medium cursor-pointer">
                {type.label}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Amenities */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">สิ่งอำนวยความสะดวก</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="flex items-center space-x-2">
              <Checkbox
                id={amenity.id}
                checked={filters.amenities.includes(amenity.id)}
                onCheckedChange={(checked) => handleAmenityChange(amenity.id, checked as boolean)}
              />
              <label
                htmlFor={amenity.id}
                className="flex items-center gap-2 text-sm font-medium cursor-pointer"
              >
                <amenity.icon className="h-4 w-4 text-gray-500" />
                {amenity.label}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Activities */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">กิจกรรม</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-2">
              <Checkbox
                id={activity.id}
                checked={filters.activities.includes(activity.id)}
                onCheckedChange={(checked) => handleActivityChange(activity.id, checked as boolean)}
              />
              <label
                htmlFor={activity.id}
                className="flex items-center gap-2 text-sm font-medium cursor-pointer"
              >
                <activity.icon className="h-4 w-4 text-gray-500" />
                {activity.label}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <FilterContent />
      </div>

      {/* Mobile Dialog */}
      <Dialog open={showMobile} onOpenChange={onCloseMobile}>
        <DialogContent className="max-w-sm max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>ตัวกรอง</DialogTitle>
          </DialogHeader>
          <FilterContent />
          <div className="pt-4">
            <Button onClick={onCloseMobile} className="w-full">
              ใช้ตัวกรอง
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SearchFilters;
