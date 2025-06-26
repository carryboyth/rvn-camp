
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MapPin, Calendar as CalendarIcon, Users, Tent, Car, Home, Search, Sparkles } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { DateRange } from "react-day-picker";

interface SearchHeroProps {
  onSearch: () => void;
}

const SearchHero = ({ onSearch }: SearchHeroProps) => {
  const [date, setDate] = React.useState<DateRange | undefined>();
  const [selectedProvince, setSelectedProvince] = React.useState("");
  const [guests, setGuests] = React.useState({ adults: 2, children: 0 });
  const [accommodationType, setAccommodationType] = React.useState("");

  const provinces = [
    "กรุงเทพมหานคร",
    "เชียงใหม่", 
    "ภูเก็ต",
    "กระบี่",
    "เกาะสมุย",
    "พัทยา",
    "หัวหิน",
    "เขาใหญ่",
    "อุทยานแห่งชาติดอยอินทนนท์",
    "อุทยานแห่งชาติเขาใหญ่"
  ];

  const accommodationTypes = [
    { value: "campsites", label: "Campsites", icon: Tent },
    { value: "caravan", label: "Caravan parks", icon: Car },
    { value: "glamping", label: "Glamping", icon: Sparkles },
    { value: "hotel", label: "Hotel", icon: Home }
  ];

  React.useEffect(() => {
    if (!selectedProvince && provinces.length > 0) {
      setSelectedProvince(provinces[0]);
    }
  }, []);

  return (
    <div className="relative min-h-[70vh] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/2f8bf321-c66e-434a-8d25-4059c7f22a47.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            ค้นหาแคมป์ไซต์ในฝัน
          </h1>
          <p className="text-white/90 text-lg md:text-xl">
            จองที่พักแคมป์ปิ้งและรถบ้านในประเทศไทย ราคาดีที่สุด
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Location Selector */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">จังหวัด/สถานที่</label>
              <Select value={selectedProvince || provinces[0]} onValueChange={setSelectedProvince}>
                <SelectTrigger className="h-12 bg-white border-gray-200 rounded-xl">
                  <SelectValue>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-green-600" />
                      {selectedProvince || provinces[0]}
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-white z-50 border shadow-lg rounded-xl">
                  {provinces.map((province) => (
                    <SelectItem key={province} value={province}>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-green-600" />
                        {province}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Date Range Picker */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">วันที่เข้าพัก - ออก</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "h-12 w-full justify-start text-left font-normal bg-white border-gray-200 rounded-xl",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-green-600" />
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, "dd/MM/yyyy")} - {format(date.to, "dd/MM/yyyy")}
                        </>
                      ) : (
                        format(date.from, "dd/MM/yyyy")
                      )
                    ) : (
                      <span>เลือกวันที่</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white z-50 border shadow-lg rounded-xl" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                    className="rounded-xl"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Guest Selector */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">จำนวนผู้เข้าพัก</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-12 w-full justify-start text-left font-normal bg-white border-gray-200 rounded-xl"
                  >
                    <Users className="mr-2 h-4 w-4 text-green-600" />
                    <span>{guests.adults + guests.children} คน</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 bg-white z-50 border shadow-lg rounded-xl" align="start">
                  <div className="space-y-4 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">ผู้ใหญ่</div>
                        <div className="text-sm text-gray-500">อายุ 13 ปีขึ้นไป</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setGuests(prev => ({ ...prev, adults: Math.max(1, prev.adults - 1) }))}
                          className="h-8 w-8 rounded-full p-0"
                        >
                          -
                        </Button>
                        <span className="w-8 text-center">{guests.adults}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setGuests(prev => ({ ...prev, adults: prev.adults + 1 }))}
                          className="h-8 w-8 rounded-full p-0"
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">เด็ก</div>
                        <div className="text-sm text-gray-500">อายุ 2-12 ปี</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setGuests(prev => ({ ...prev, children: Math.max(0, prev.children - 1) }))}
                          className="h-8 w-8 rounded-full p-0"
                        >
                          -
                        </Button>
                        <span className="w-8 text-center">{guests.children}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setGuests(prev => ({ ...prev, children: prev.children + 1 }))}
                          className="h-8 w-8 rounded-full p-0"
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Accommodation Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">ประเภทที่พัก</label>
              <Select value={accommodationType} onValueChange={setAccommodationType}>
                <SelectTrigger className="h-12 bg-white border-gray-200 rounded-xl">
                  <SelectValue placeholder="เลือกประเภทที่พัก">
                    {accommodationType && (
                      <div className="flex items-center gap-2">
                        {(() => {
                          const type = accommodationTypes.find(t => t.value === accommodationType);
                          const Icon = type?.icon;
                          return Icon ? <Icon className="h-4 w-4 text-green-600" /> : null;
                        })()}
                        {accommodationTypes.find(t => t.value === accommodationType)?.label}
                      </div>
                    )}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-white z-50 border shadow-lg rounded-xl">
                  {accommodationTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      <div className="flex items-center gap-2">
                        <type.icon className="h-4 w-4 text-green-600" />
                        {type.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Search Button */}
          <Button 
            className="w-full h-14 text-lg font-semibold bg-green-600 hover:bg-green-700 rounded-xl"
            onClick={onSearch}
          >
            <Search className="w-5 h-5 mr-2" />
            ค้นหาแคมป์ไซต์
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchHero;
