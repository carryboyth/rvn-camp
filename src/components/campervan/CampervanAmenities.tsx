
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Shield, Bed, Coffee, Battery, Zap, Wrench, Users } from "lucide-react";

interface CampervanAmenitiesProps {
  amenities: {
    passenger: string;
    bathroom: {
      available: boolean;
      features: string[];
    };
    storage: string[];
    comfort: string[];
    kitchen: string[];
    power: string[];
    water: string;
    technology: string[];
  };
}

export const CampervanAmenities = ({ amenities }: CampervanAmenitiesProps) => {
  return (
    <div className="space-y-6">
      {/* ความจุผู้โดยสาร */}
      <Card className="border-gray-200 bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-red-600 flex items-center gap-2">
            <Users className="h-5 w-5" />
            ความจุผู้โดยสาร
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <p className="text-red-700 font-medium">{amenities.passenger}</p>
          </div>
        </CardContent>
      </Card>

      {/* ห้องน้ำและสุขภัณฑ์ */}
      <Card className="border-gray-200 bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-red-600 flex items-center gap-2">
            <Droplet className="h-5 w-5" />
            ห้องน้ำและสุขภัณฑ์
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {amenities.bathroom.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-red-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ที่เก็บและจัดเก็บ */}
      <Card className="border-gray-200 bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-red-600 flex items-center gap-2">
            <Shield className="h-5 w-5" />
            ที่เก็บและจัดเก็บ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {amenities.storage.map((item, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ความสะดวกสบาย */}
      <Card className="border-gray-200 bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-red-600 flex items-center gap-2">
            <Bed className="h-5 w-5" />
            ความสะดวกสบาย
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {amenities.comfort.map((item, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ห้องครัว */}
      <Card className="border-gray-200 bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-red-600 flex items-center gap-2">
            <Coffee className="h-5 w-5" />
            ห้องครัว
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {amenities.kitchen.map((item, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ระบบไฟฟ้าและพลังงาน */}
      <Card className="border-gray-200 bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-red-600 flex items-center gap-2">
            <Battery className="h-5 w-5" />
            ระบบไฟฟ้าและพลังงาน
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {amenities.power.map((item, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-red-50 rounded-lg border border-red-200">
                <Zap className="h-4 w-4 text-red-600" />
                <span className="text-red-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ระบบน้ำ */}
      <Card className="border-gray-200 bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-red-600 flex items-center gap-2">
            <Droplet className="h-5 w-5" />
            ระบบน้ำ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-700 font-medium">{amenities.water}</p>
          </div>
        </CardContent>
      </Card>

      {/* เทคโนโลยีและระบบควบคุม */}
      <Card className="border-gray-200 bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-red-600 flex items-center gap-2">
            <Wrench className="h-5 w-5" />
            เทคโนโลยีและระบบควบคุม
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {amenities.technology.map((item, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
