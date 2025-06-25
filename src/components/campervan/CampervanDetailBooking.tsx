
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface CampervanDetailBookingProps {
  van: {
    price?: number;
    pricing?: {
      basePrice: number;
      minDays: number;
    };
    rating: number;
  };
  bookingDetails?: any;
}

export const CampervanDetailBooking = ({ van, bookingDetails }: CampervanDetailBookingProps) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/campervan-summary", {
      state: {
        campervan: van,
        bookingDetails: bookingDetails
      }
    });
  };

  return (
    <Card className="border-2 border-red-200 bg-white shadow-lg sticky top-32">
      <CardContent className="p-6">
        {/* ราคา */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-3xl font-bold text-red-600">
              {van.price?.toLocaleString() || van.pricing?.basePrice?.toLocaleString()} บาท
            </span>
            <span className="text-gray-600 ml-1">/ คืน</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-gray-900">{van.rating}</span>
          </div>
        </div>

        {/* ข้อมูลการเช่า */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
          <h3 className="font-medium text-red-600 mb-2">สิ่งที่รวมในราคา</h3>
          <div className="space-y-1 text-sm text-gray-700">
            <p>• ประกันภัย</p>
            <p>• ระยะทางไม่จำกัด</p>
            <p>• บริการช่วยเหลือ 24 ชั่วโมง</p>
            <p>• การเช่าขั้นต่ำ {van.pricing?.minDays || 3} วัน</p>
          </div>
        </div>

        {/* ปุ่มจอง */}
        <Button 
          onClick={handleBooking}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          จองเลย
        </Button>

        <p className="text-xs text-gray-500 text-center mt-2">
          ไม่มีค่าใช้จ่ายจนกว่าจะยืนยัน
        </p>
      </CardContent>
    </Card>
  );
};
