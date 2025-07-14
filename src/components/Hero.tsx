import { Search, MapPin, Calendar as CalendarIcon, Users, Check, Plane, Hotel, Train, Car, Map, Plus, ChevronDown, Minus } from "lucide-react";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("motorhome");
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [showDestinations, setShowDestinations] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [accommodationType, setAccommodationType] = useState("");
  const [travelWithPets, setTravelWithPets] = useState(false);
  
  const popularDestinations = ["กรุงเทพฯ", "เชียงใหม่", "กระบี่", "ภูเก็ต", "พัทยา"];
  const accommodationTypes = [
    "ลานกางเต็นท์/แคมป์ไซต์",
    "จุดจอดรถบ้าน / คาราวาน", 
    "บ้านพัก / โรงแรม"
  ];

  const tabs = [
    { id: "motorhome", label: "เช่ารถบ้าน", icon: Car },
    { id: "campsite", label: "แคมป์ไซต์", icon: Map },
    { id: "package", label: "เช่ารถบ้าน + แคมป์ไซต์", icon: Plus },
  ];

  return (
    <div className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/lovable-uploads/36e1489f-0a29-4aa0-9fa0-178c0b50d209.png')",
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center py-16">
        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 animate-fade-up">
          Discover Thailand's Beauty
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          on Your Terms
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/90 mb-8">
          Plan your perfect road trip with our curated campervan experiences
        </p>

        {/* Navigation Tabs */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-black/30 rounded-full p-1 inline-flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-white text-gray-900"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Search Form */}
        <div className="max-w-6xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="bg-white rounded-lg shadow-xl p-6">
            {activeTab === "motorhome" ? (
              // Motorhome Rental Form
              <>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                  {/* Pickup Location */}
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      สถานที่รับรถ
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="เมืองเริ่ม เช่น ภูเก็ต เชา..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Pickup Date & Time */}
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      วันที่รับ
                    </label>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <CalendarIcon className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="พ. 16 ก.ค."
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <select className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>10:00</option>
                        <option>11:00</option>
                        <option>12:00</option>
                        <option>13:00</option>
                        <option>14:00</option>
                        <option>15:00</option>
                        <option>16:00</option>
                        <option>17:00</option>
                      </select>
                    </div>
                  </div>

                  {/* Return Date & Time */}
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      วันที่คืน
                    </label>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <CalendarIcon className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="ส. 19 ก.ค."
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <select className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>10:00</option>
                        <option>11:00</option>
                        <option>12:00</option>
                        <option>13:00</option>
                        <option>14:00</option>
                        <option>15:00</option>
                        <option>16:00</option>
                        <option>17:00</option>
                      </select>
                    </div>
                  </div>

                  {/* Search Button */}
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Search className="w-5 h-5" />
                    <span>ค้นหา</span>
                  </button>
                </div>

                {/* Additional Options */}
                <div className="mt-4 flex items-center gap-6 text-sm text-gray-600">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>คืนรถต่างสาขา</span>
                  </label>
                  <div className="flex items-center gap-4">
                    <span>ประเภท/อายุผู้ขับขี่หลัก</span>
                    <select className="border rounded px-2 py-1">
                      <option>ไทย</option>
                      <option>ต่างชาติ</option>
                    </select>
                    <span>อายุ</span>
                    <select className="border rounded px-2 py-1">
                      <option>30-60</option>
                      <option>25-29</option>
                      <option>60+</option>
                    </select>
                  </div>
                </div>
              </>
            ) : activeTab === "package" ? (
              // Combined Motorhome + Campsite Form
              <>
                {/* Motorhome Section */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">ข้อมูลการเช่ารถบ้าน</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Pickup Location */}
                    <div className="text-left">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        สถานที่รับรถ
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="เมืองเริ่ม เช่น ภูเก็ต เชา..."
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Pickup Date & Time */}
                    <div className="text-left">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        วันที่รับ
                      </label>
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <CalendarIcon className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            placeholder="พ. 16 ก.ค."
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <select className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option>10:00</option>
                          <option>11:00</option>
                          <option>12:00</option>
                          <option>13:00</option>
                        </select>
                      </div>
                    </div>

                    {/* Return Date & Time */}
                    <div className="text-left">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        วันที่คืน
                      </label>
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <CalendarIcon className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            placeholder="ส. 19 ก.ค."
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <select className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option>10:00</option>
                          <option>11:00</option>
                          <option>12:00</option>
                          <option>13:00</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Campsite Section */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">ข้อมูลแคมป์ไซต์</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Destination */}
                    <div className="text-left">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        จุดหมาย
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="ชลบุรี เมือง สตฮุน ภูเก็ต เชท..."
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Check-in Date */}
                    <div className="text-left">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        วันเช็คอิน
                      </label>
                      <div className="relative">
                        <CalendarIcon className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="พ. 16 ก.ค."
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Check-out Date */}
                    <div className="text-left">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        วันเช็คเอาท์
                      </label>
                      <div className="relative">
                        <CalendarIcon className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="ส. 19 ก.ค."
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex justify-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-12 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Search className="w-5 h-5" />
                    <span>ค้นหา</span>
                  </button>
                </div>
              </>
            ) : (
              // Campsite Form - All fields in one line
              <>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
                  {/* 1. Destination */}
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      จุดหมาย
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        value={selectedDestination}
                        onChange={(e) => setSelectedDestination(e.target.value)}
                        onFocus={() => setShowDestinations(true)}
                        onBlur={() => setTimeout(() => setShowDestinations(false), 200)}
                        placeholder="เลือกจุดหมาย"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      {showDestinations && (
                        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                          {popularDestinations.map((destination) => (
                            <button
                              key={destination}
                              className="w-full text-left px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                              onClick={() => {
                                setSelectedDestination(destination);
                                setShowDestinations(false);
                              }}
                            >
                              {destination}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 2. Date Range - Check-in + Check-out in one field */}
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      วันเช็คอิน - วันเช็คเอาท์
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-10 pr-4 py-3 h-12 justify-start text-left font-normal border-gray-300 rounded-lg hover:bg-gray-50",
                            (!checkInDate || !checkOutDate) && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="absolute left-3 w-4 h-4 text-gray-400" />
                          {checkInDate && checkOutDate ? (
                            `${format(checkInDate, "dd/MM")} - ${format(checkOutDate, "dd/MM")}`
                          ) : (
                            <span>เลือกวันที่</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-white z-50" align="start">
                        <Calendar
                          mode="range"
                          selected={{
                            from: checkInDate,
                            to: checkOutDate,
                          }}
                          onSelect={(range) => {
                            setCheckInDate(range?.from);
                            setCheckOutDate(range?.to);
                          }}
                          initialFocus
                          className="p-3 pointer-events-auto"
                          numberOfMonths={2}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* 3. Number of Guests - Dropdown */}
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      จำนวนผู้เข้าพัก
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <select
                        value={`${adults},${children}`}
                        onChange={(e) => {
                          const [adultCount, childCount] = e.target.value.split(',').map(Number);
                          setAdults(adultCount);
                          setChildren(childCount);
                        }}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                      >
                        <option value="0,0">เลือกจำนวนผู้เข้าพัก</option>
                        <option value="1,0">1 ผู้ใหญ่</option>
                        <option value="2,0">2 ผู้ใหญ่</option>
                        <option value="2,1">2 ผู้ใหญ่, 1 เด็ก</option>
                        <option value="2,2">2 ผู้ใหญ่, 2 เด็ก</option>
                        <option value="3,0">3 ผู้ใหญ่</option>
                        <option value="3,1">3 ผู้ใหญ่, 1 เด็ก</option>
                        <option value="4,0">4 ผู้ใหญ่</option>
                        <option value="4,2">4 ผู้ใหญ่, 2 เด็ก</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* 4. Accommodation Type */}
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ประเภทที่พัก
                    </label>
                    <div className="relative">
                      <select
                        value={accommodationType}
                        onChange={(e) => setAccommodationType(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                      >
                        <option value="">เลือกประเภทที่พัก</option>
                        {accommodationTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Pet Travel Checkbox - Compact */}
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      สัตว์เลี้ยง
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700 py-3">
                      <input
                        type="checkbox"
                        checked={travelWithPets}
                        onChange={(e) => setTravelWithPets(e.target.checked)}
                        className="rounded"
                      />
                      <span>พร้อมสัตว์เลี้ยง</span>
                    </label>
                  </div>

                  {/* 5. Search Button */}
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 h-12">
                    <Search className="w-5 h-5" />
                    <span className="hidden lg:inline">ค้นหา</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;