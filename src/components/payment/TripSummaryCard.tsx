
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Users, Bed } from "lucide-react";

interface TripSummaryCardProps {
  motorhome?: {
    name?: string;
    price: number;
    pickupLocation: string;
    dropoffLocation: string;
    startDate: string;
    endDate: string;
  };
  hotel?: {
    name?: string;
    price: number;
    location: string;
    roomType: string;
    checkIn: string;
    checkOut: string;
  };
  totalDays?: number;
  totalPrice?: number;
  language: 'en' | 'th';
}

const TripSummaryCard = ({ 
  motorhome, 
  hotel, 
  totalDays, 
  totalPrice, 
  language 
}: TripSummaryCardProps) => {
  const translations = {
    en: {
      tripSummary: "Trip Summary",
      duration: "Duration",
      days: "days",
      motorhomeRental: "Motorhome Rental",
      hotelStay: "Hotel Stay",
      pickupLocation: "Pick-up Location",
      dropoffLocation: "Drop-off Location",
      startDate: "Start Date",
      endDate: "End Date",
      checkIn: "Check-in",
      checkOut: "Check-out",
      location: "Location",
      roomType: "Room Type",
      subtotal: "Subtotal",
      total: "Total Amount",
    },
    th: {
      tripSummary: "สรุปการเดินทาง",
      duration: "ระยะเวลา",
      days: "วัน",
      motorhomeRental: "เช่าบ้านเคลื่อนที่",
      hotelStay: "ที่พัก",
      pickupLocation: "สถานที่รับรถ",
      dropoffLocation: "สถานที่คืนรถ",
      startDate: "วันเริ่มต้น",
      endDate: "วันสิ้นสุด",
      checkIn: "เช็คอิน",
      checkOut: "เช็คเอาท์",
      location: "สถานที่",
      roomType: "ประเภทห้อง",
      subtotal: "ยอดรวมย่อย",
      total: "ยอดรวมทั้งหมด",
    }
  };

  const t = translations[language];

  return (
    <Card className="sticky top-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-green-100 to-blue-100 rounded-t-lg">
        <CardTitle className="text-gray-800">{t.tripSummary}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-blue-600" />
            {t.duration}
          </span>
          <span className="font-semibold">{totalDays || 0} {t.days}</span>
        </div>

        {motorhome && (
          <div className="space-y-3">
            <h3 className="font-semibold text-green-700 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {t.motorhomeRental}
            </h3>
            <p className="text-gray-600 font-medium">{motorhome.name}</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">{t.pickupLocation}:</span>
                <span>{motorhome.pickupLocation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">{t.dropoffLocation}:</span>
                <span>{motorhome.dropoffLocation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">{t.startDate}:</span>
                <span>{motorhome.startDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">{t.endDate}:</span>
                <span>{motorhome.endDate}</span>
              </div>
            </div>
            <div className="flex justify-between font-medium text-green-700">
              <span>{t.subtotal}:</span>
              <span>฿{(motorhome.price || 0).toLocaleString()}</span>
            </div>
          </div>
        )}
        
        {hotel && (
          <div className="space-y-3">
            <h3 className="font-semibold text-blue-700 flex items-center gap-2">
              <Bed className="h-4 w-4" />
              {t.hotelStay}
            </h3>
            <p className="text-gray-600 font-medium">{hotel.name}</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">{t.checkIn}:</span>
                <span>{hotel.checkIn}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">{t.checkOut}:</span>
                <span>{hotel.checkOut}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">{t.location}:</span>
                <span>{hotel.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">{t.roomType}:</span>
                <span>{hotel.roomType}</span>
              </div>
            </div>
            <div className="flex justify-between font-medium text-blue-700">
              <span>{t.subtotal}:</span>
              <span>฿{(hotel.price || 0).toLocaleString()}</span>
            </div>
          </div>
        )}
        
        <div className="border-t pt-4">
          <div className="flex justify-between font-bold text-lg bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            <span>{t.total}</span>
            <span>฿{(totalPrice || 0).toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TripSummaryCard;
