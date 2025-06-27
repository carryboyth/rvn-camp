
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Users, MapPin, Calendar as CalendarDays } from "lucide-react";
import { format, differenceInDays } from "date-fns";
import { cn } from "@/lib/utils";
import { DateRange } from "react-day-picker";
import { useNavigate, useSearchParams } from "react-router-dom";

interface StayOption {
  type: string;
  description: string;
  maxGuests: number;
  price: number;
  image?: string;
}

interface BookingWidgetProps {
  campsite: {
    id: string;
    name: string;
    price: number;
    stayOptions: StayOption[];
    location: {
      city: string;
      country: string;
    };
  };
}

const BookingWidget = ({ campsite }: BookingWidgetProps) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedOption, setSelectedOption] = useState<StayOption | null>(null);
  const [guests, setGuests] = useState(2);
  
  // Get dates from search params if available
  const checkinParam = searchParams.get('checkin');
  const checkoutParam = searchParams.get('checkout');
  
  const [date, setDate] = useState<DateRange | undefined>(() => {
    if (checkinParam && checkoutParam) {
      return {
        from: new Date(checkinParam),
        to: new Date(checkoutParam)
      };
    }
    return undefined;
  });

  // Add images for each stay option type
  const getStayOptionImage = (type: string) => {
    switch (type.toLowerCase()) {
      case 'tent pitch':
        return 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop';
      case 'rv spot':
        return 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop';
      case 'glamping cabin':
        return 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop';
      default:
        return 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop';
    }
  };

  const calculateNights = () => {
    if (!date?.from || !date?.to) return 0;
    return differenceInDays(date.to, date.from);
  };

  const calculateTotalPrice = () => {
    if (!selectedOption || !date?.from || !date?.to) return 0;
    const nights = calculateNights();
    return selectedOption.price * nights;
  };

  const handleBooking = () => {
    if (!selectedOption || !date?.from || !date?.to) {
      alert('กรุณาเลือกประเภทที่พักและวันที่');
      return;
    }

    const bookingData = {
      campsite: {
        id: campsite.id,
        name: campsite.name,
        image: "/lovable-uploads/491cfd8c-5bc4-4d54-afb5-cc0adc56e139.png",
        location: `${campsite.location.city}, ${campsite.location.country}`
      },
      stayOption: selectedOption,
      checkIn: format(date.from, 'yyyy-MM-dd'),
      checkOut: format(date.to, 'yyyy-MM-dd'),
      nights: calculateNights(),
      guests: guests,
      totalPrice: calculateTotalPrice()
    };

    navigate('/booking-summary', { state: bookingData });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>จองที่พัก</span>
            <Badge variant="secondary" className="bg-red-100 text-red-700">
              ราคาเริ่มต้น ฿{campsite.price}/คืน
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Stay Options Dropdown */}
          <div>
            <h4 className="font-medium mb-3">เลือกประเภทที่พัก</h4>
            <Select 
              value={selectedOption?.type || ""} 
              onValueChange={(value) => {
                const option = campsite.stayOptions.find(opt => opt.type === value);
                setSelectedOption(option || null);
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="เลือกประเภทที่พัก" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {campsite.stayOptions.map((option, index) => (
                  <SelectItem key={index} value={option.type}>
                    <div className="flex items-center gap-3 w-full">
                      <img 
                        src={getStayOptionImage(option.type)}
                        alt={option.type}
                        className="w-12 h-8 object-cover rounded"
                      />
                      <div className="flex-1">
                        <div className="font-medium">{option.type}</div>
                        <div className="text-sm text-gray-600">฿{option.price.toLocaleString()}/คืน</div>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Selected Stay Option Details */}
          {selectedOption && (
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-start gap-4">
                <img 
                  src={getStayOptionImage(selectedOption.type)}
                  alt={selectedOption.type}
                  className="w-20 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h5 className="font-medium text-red-800">{selectedOption.type}</h5>
                  <p className="text-sm text-gray-600 mt-1">{selectedOption.description}</p>
                  <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
                    <Users className="h-3 w-3" />
                    <span>สูงสุด {selectedOption.maxGuests} คน</span>
                  </div>
                  <div className="text-right mt-2">
                    <p className="font-semibold text-red-600">฿{selectedOption.price.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">ต่อคืน</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Date Selection */}
          <div className="grid grid-cols-2 gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline" 
                  className={cn(
                    "justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.from ? (
                    format(date.from, "dd/MM")
                  ) : (
                    "เช็คอิน"
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                  className="bg-white"
                />
              </PopoverContent>
            </Popover>

            <Button
              variant="outline"
              className="justify-start text-left font-normal"
              disabled
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.to ? (
                format(date.to, "dd/MM")
              ) : (
                "เช็คเอาท์"
              )}
            </Button>
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm font-medium mb-2">จำนวนผู้เข้าพัก</label>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setGuests(Math.max(1, guests - 1))}
                className="h-8 w-8 rounded-full p-0"
              >
                -
              </Button>
              <span className="w-8 text-center">{guests}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setGuests(guests + 1)}
                className="h-8 w-8 rounded-full p-0"
              >
                +
              </Button>
              <span className="text-sm text-gray-500 ml-2">คน</span>
            </div>
          </div>

          {/* Booking Summary */}
          {selectedOption && date?.from && date?.to && (
            <div className="border-t pt-4 space-y-3">
              <h4 className="font-medium">สรุปการจอง</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>ประเภทที่พัก:</span>
                  <span>{selectedOption.type}</span>
                </div>
                <div className="flex justify-between">
                  <span>วันที่เข้าพัก:</span>
                  <span>{format(date.from, 'dd/MM/yyyy')}</span>
                </div>
                <div className="flex justify-between">
                  <span>วันที่ออก:</span>
                  <span>{format(date.to, 'dd/MM/yyyy')}</span>
                </div>
                <div className="flex justify-between">
                  <span>จำนวนคืน:</span>
                  <span>{calculateNights()} คืน</span>
                </div>
                <div className="flex justify-between">
                  <span>ผู้เข้าพัก:</span>
                  <span>{guests} คน</span>
                </div>
                <div className="flex justify-between font-medium text-lg border-t pt-2">
                  <span>ราคารวม:</span>
                  <span className="text-red-600">฿{calculateTotalPrice().toLocaleString()}</span>
                </div>
              </div>
            </div>
          )}

          {/* Booking Button */}
          <Button 
            onClick={handleBooking}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3"
            size="lg"
            disabled={!selectedOption || !date?.from || !date?.to}
          >
            <CalendarDays className="mr-2 h-4 w-4" />
            จองเลย
          </Button>

          <div className="text-xs text-gray-500 text-center">
            คุณจะไม่ถูกเรียกเก็บเงินในขั้นตอนนี้
          </div>
        </CardContent>
      </Card>

      {/* Vehicle Details Card - Always visible, not collapsible */}
      <Card className="border rounded-lg bg-white">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">รายละเอียดพาหนะที่รองรับ</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-3 text-sm">
          <div>
            <h5 className="font-medium text-green-700 mb-2">🚐 รองรับ:</h5>
            <ul className="space-y-1 text-gray-600 ml-4">
              <li>• Campervans</li>
              <li>• Ute with Slide-on</li>
              <li>• Tents</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-medium text-red-700 mb-2">❌ ไม่รองรับ:</h5>
            <ul className="space-y-1 text-gray-600 ml-4">
              <li>• Caravans</li>
              <li>• Fifth Wheels</li>
              <li>• Motorhomes</li>
            </ul>
          </div>

          <div className="border-t pt-3 space-y-2">
            <p><span className="font-medium">📏 ความยาวรถ:</span> ไม่เกิน 18 เมตร</p>
            <p><span className="font-medium">🅿️ พื้นที่จอด:</span> Back-in site, Concrete pad, Flat surface</p>
            <p><span className="font-medium">↔️ Drive-through:</span> จำกัด (First-come, first-serve)</p>
            <p><span className="font-medium">🧯 Slide-out:</span> รองรับ</p>
          </div>

          <div className="border-t pt-3 space-y-2">
            <h5 className="font-medium mb-2">สิ่งอำนวยความสะดวก:</h5>
            <p><span className="font-medium">🔌 ไฟฟ้า:</span> มี (ต่ำกว่า 30 Amps)</p>
            <p><span className="font-medium">💧 น้ำประปา:</span> มี</p>
            <p><span className="font-medium">🚿 ท่อน้ำเสีย:</span> มี (gray water dump)</p>
            <p><span className="font-medium">📺 TV hookup:</span> ไม่มี</p>
            <p><span className="font-medium">🔇 เครื่องปั่นไฟ:</span> ห้ามใช้</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingWidget;
