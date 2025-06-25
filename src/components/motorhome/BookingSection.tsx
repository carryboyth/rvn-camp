
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Clock, Shield, Star, Badge } from "lucide-react";

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
}

export const BookingSection = ({ motorhome }: BookingSectionProps) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [days, setDays] = useState(3);

  const totalPrice = (motorhome.pricing.basePrice * days) + motorhome.pricing.insurance + motorhome.pricing.cleaning;

  return (
    <div className="sticky top-32">
      <Card className="border-2">
        <CardContent className="p-6">
          {/* Price Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-2xl font-bold">฿{motorhome.pricing.basePrice.toLocaleString()}</span>
              <span className="text-gray-600 ml-1">/ วัน</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{motorhome.rating}</span>
              <span className="text-gray-600 text-sm">({motorhome.reviewCount})</span>
            </div>
          </div>

          {/* Special Offer Badge */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2 mb-1">
              <Badge className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-800">โปรโมชั่นพิเศษ</span>
            </div>
            <p className="text-sm text-orange-700">เช่า 7 วันขึ้นไป ลด 15%</p>
          </div>

          {/* Date Selection */}
          <div className="space-y-4 mb-4">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">วันรับรถ</label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">วันคืนรถ</label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Guests Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">จำนวนผู้โดยสาร</label>
              <div className="relative">
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  <option value={1}>1 คน</option>
                  <option value={2}>2 คน</option>
                  <option value={3}>3 คน</option>
                  <option value={4}>4 คน</option>
                  <option value={5}>5 คน</option>
                  <option value={6}>6 คน</option>
                </select>
                <Users className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Time Selection */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">เวลารับรถ</label>
                <div className="relative">
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none">
                    <option>09:00</option>
                    <option>10:00</option>
                    <option>11:00</option>
                    <option>12:00</option>
                    <option>13:00</option>
                    <option>14:00</option>
                  </select>
                  <Clock className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">เวลาคืนรถ</label>
                <div className="relative">
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none">
                    <option>09:00</option>
                    <option>10:00</option>
                    <option>11:00</option>
                    <option>12:00</option>
                    <option>13:00</option>
                    <option>14:00</option>
                  </select>
                  <Clock className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="border-t pt-4 mb-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>฿{motorhome.pricing.basePrice.toLocaleString()} × {days} วัน</span>
                <span>฿{(motorhome.pricing.basePrice * days).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>ประกันภัย</span>
                <span>฿{motorhome.pricing.insurance.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>ค่าทำความสะอาด</span>
                <span>฿{motorhome.pricing.cleaning.toLocaleString()}</span>
              </div>
              <hr />
              <div className="flex justify-between font-semibold text-base">
                <span>รวมทั้งสิ้น</span>
                <span>฿{totalPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Insurance Badge */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">ประกันครอบคลุมเต็มจำนวน</span>
            </div>
          </div>

          {/* Book Button */}
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium">
            เช็ครถว่าง
          </Button>

          <p className="text-xs text-gray-500 text-center mt-2">
            ยังไม่มีการเรียกเก็บเงิน
          </p>

          {/* Additional Info */}
          <div className="mt-4 text-sm text-gray-600 space-y-1">
            <p>• การเช่าขั้นต่ำ {motorhome.pricing.minDays} วัน</p>
            <p>• เงินมัดจำ ฿{motorhome.pricing.deposit.toLocaleString()}</p>
            <p>• ยกเลิกได้ฟรีภายใน 48 ชั่วโมง</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
