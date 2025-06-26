
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Map, Filter, Wifi, Car, Droplets, Home, Zap, PawPrint, Mountain, Waves, TreePine } from "lucide-react";

interface FilterSidebarProps {
  filters: {
    priceRange: number[];
    amenities: string[];
    activities: string[];
    accommodationType: string;
  };
  onFiltersChange: (filters: any) => void;
  showMap: boolean;
  onToggleMap: () => void;
}

const FilterSidebar = ({ filters, onFiltersChange, showMap, onToggleMap }: FilterSidebarProps) => {
  const amenities = [
    { id: "wifi", label: "Wi-Fi ฟรี", icon: Wifi },
    { id: "parking", label: "ที่จอดรถ", icon: Car },
    { id: "water", label: "น้ำสะอาด", icon: Droplets },
    { id: "bathroom", label: "ห้องน้ำ", icon: Home },
    { id: "electricity", label: "ไฟฟ้า", icon: Zap },
    { id: "pet", label: "สัตว์เลี้ยงได้", icon: PawPrint }
  ];

  const activities = [
    { id: "hiking", label: "เดินป่า", icon: Mountain },
    { id: "swimming", label: "ว่ายน้ำ", icon: Waves },
    { id: "fishing", label: "ตกปลา", icon: Waves },
    { id: "camping", label: "แคมป์ปิ้ง", icon: TreePine },
    { id: "photography", label: "ถ่ายภาพ", icon: Mountain },
    { id: "cycling", label: "ปั่นจักรยาน", icon: Mountain }
  ];

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
    onFiltersChange({ ...filters, priceRange: value });
  };

  const clearFilters = () => {
    onFiltersChange({
      priceRange: [0, 5000],
      amenities: [],
      activities: [],
      accommodationType: ""
    });
  };

  return (
    <div className="space-y-6">
      {/* Map Toggle - Mobile */}
      <div className="lg:hidden">
        <Button
          variant={showMap ? "default" : "outline"}
          onClick={onToggleMap}
          className="w-full flex items-center gap-2 rounded-xl"
        >
          <Map className="h-4 w-4" />
          {showMap ? "ซ่อนแผนที่" : "แสดงแผนที่"}
        </Button>
      </div>

      {/* Filter Header */}
      <Card className="rounded-2xl border-0 shadow-lg">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Filter className="h-5 w-5" />
              ตัวกรอง
            </CardTitle>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearFilters}
              className="text-green-600 hover:text-green-700"
            >
              ล้าง
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Price Range */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">ช่วงราคา (ต่อคืน)</h3>
            <div className="px-2">
              <Slider
                value={filters.priceRange}
                onValueChange={handlePriceRangeChange}
                max={5000}
                min={0}
                step={100}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>฿{filters.priceRange[0].toLocaleString()}</span>
                <span>฿{filters.priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">สิ่งอำนวยความสะดวก</h3>
            <div className="space-y-2">
              {amenities.map((amenity) => (
                <div key={amenity.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={amenity.id}
                    checked={filters.amenities.includes(amenity.id)}
                    onCheckedChange={(checked) => handleAmenityChange(amenity.id, checked as boolean)}
                  />
                  <label
                    htmlFor={amenity.id}
                    className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    <amenity.icon className="h-4 w-4 text-gray-500" />
                    {amenity.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">กิจกรรม</h3>
            <div className="space-y-2">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={activity.id}
                    checked={filters.activities.includes(activity.id)}
                    onCheckedChange={(checked) => handleActivityChange(activity.id, checked as boolean)}
                  />
                  <label
                    htmlFor={activity.id}
                    className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    <activity.icon className="h-4 w-4 text-gray-500" />
                    {activity.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterSidebar;
