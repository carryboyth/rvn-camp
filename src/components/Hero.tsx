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
  const [adults, setAdults] = useState(2);
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

                </div>

                {/* Additional Options */}
                <div className="mt-4 flex items-center gap-6 text-sm text-gray-600">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>คืนรถต่างสาขา</span>
                  </label>
                  <div className="flex items-center gap-4">
                    <span>ประเภทรถที่เช่า</span>
                    <select className="border rounded px-3 py-2">
                      <option>Caravan</option>
                      <option>Motorhome C class</option>
                      <option>Camper</option>
                      <option>Motorhome A class</option>
                      <option>Motorhome B class</option>
                      <option>Other vehicle</option>
                    </select>
                    <span>อายุผู้ขับขี่</span>
                    <select className="border rounded px-3 py-2">
                      <option>25-29</option>
                      <option>30-60</option>
                      <option>60+</option>
                    </select>
                  </div>
                  
                  {/* Search Button moved here */}
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 ml-auto">
                    <Search className="w-5 h-5" />
                    <span>ค้นหา</span>
                  </button>
                </div>
              </>
            ) : activeTab === "package" ? (
              // Combined Motorhome + Campsite Form
              <>
                {/* Single Row - All Fields */}
                <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-4">
                  {/* Destination - Narrower */}
                  <div className="text-left md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      จุดหมายปลายทาง
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        value={selectedDestination}
                        onChange={(e) => setSelectedDestination(e.target.value)}
                        onFocus={() => setShowDestinations(true)}
                        onBlur={() => setTimeout(() => setShowDestinations(false), 200)}
                        placeholder="ระยอง เมืองระยอง..."
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

                  {/* Check-in and Check-out in same container */}
                  <div className="text-left md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      เช็คอิน - เช็คเอาท์
                    </label>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <CalendarIcon className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="จ. 14 ก.ค."
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div className="relative flex-1">
                        <CalendarIcon className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="อ. 15 ก.ค."
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">1 คืน</div>
                  </div>

                  {/* Guests */}
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      จำนวนผู้เข้าพัก
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full pl-10 pr-4 py-3 h-12 justify-start text-left font-normal border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                          <Users className="absolute left-3 w-4 h-4 text-gray-400" />
                          <span>
                            ผู้ใหญ่ {adults} เด็ก {children}
                          </span>
                          <ChevronDown className="absolute right-3 w-4 h-4 text-gray-400" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80 p-4 bg-white z-50" align="start">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">ผู้ใหญ่</span>
                            <div className="flex items-center gap-3">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setAdults(Math.max(0, adults - 1))}
                                className="h-8 w-8"
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center">{adults}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setAdults(adults + 1)}
                                className="h-8 w-8"
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">เด็ก</span>
                            <div className="flex items-center gap-3">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setChildren(Math.max(0, children - 1))}
                                className="h-8 w-8"
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center">{children}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setChildren(children + 1)}
                                className="h-8 w-8"
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Accommodation Type */}
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      เลือกประเภทที่พัก
                    </label>
                    <div className="relative">
                      <select
                        value={accommodationType}
                        onChange={(e) => setAccommodationType(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
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

                  {/* Pet Travel Option */}
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      มีสัตว์เลี้ยง
                    </label>
                    <div className="flex items-center h-12">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={travelWithPets}
                          onChange={(e) => setTravelWithPets(e.target.checked)}
                          className="rounded"
                        />
                        <span>มีสัตว์เลี้ยง</span>
                      </label>
                    </div>
                  </div>

                  {/* Search Button */}
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-2 invisible">
                      ค้นหา
                    </label>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 w-full h-12">
                      <Search className="w-5 h-5" />
                      <span>ค้นหา</span>
                    </button>
                  </div>
                </div>

                {/* Third Row - Vehicle Pickup/Return */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  {/* Pickup Location */}
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      สถานที่รับรถ
                    </label>
                    <div className="relative">
                      <Car className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="สถานที่รับรถ เชื่อม บริเวณ สถาวี ภม..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Return Location */}
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      สถานที่คืนรถ
                    </label>
                    <div className="relative">
                      <Car className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="สถานที่คืนรถ เชื่อม บริเวณ สถาวี ภม..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Pickup Date & Time */}
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      วันรับรถ
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
                      วันคืนรถ
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
                </div>

                {/* Fourth Row - Vehicle Options */}
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-4">
                    <span>ประเภทรถที่เช่า</span>
                    <select className="border rounded px-3 py-2">
                      <option>Caravan</option>
                      <option>Motorhome C class</option>
                      <option>Camper</option>
                      <option>Motorhome A class</option>
                      <option>Motorhome B class</option>
                      <option>Other vehicle</option>
                    </select>
                    <span>อายุ</span>
                    <select className="border rounded px-3 py-2">
                      <option>25-29</option>
                      <option>30-60</option>
                      <option>60+</option>
                    </select>
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex justify-end">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Search className="w-5 h-5" />
                    <span>ค้นหา</span>
                  </button>
                </div>
              </>
            ) : (
              // Campsite Search Form
              <>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                  {/* Destination */}
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

                  {/* Date Range - Check-in + Check-out */}
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

                  {/* Guest & Room Selector */}
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ผู้เข้าพักและห้อง
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full pl-10 pr-4 py-3 h-12 justify-start text-left font-normal border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                          <Users className="absolute left-3 w-4 h-4 text-gray-400" />
                          <span>
                            1 ห้อง, ผู้ใหญ่ {adults} คน, เด็ก {children} คน
                          </span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80 p-4 bg-white z-50" align="start">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">ผู้ใหญ่</span>
                            <div className="flex items-center gap-3">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setAdults(Math.max(0, adults - 1))}
                                className="h-8 w-8"
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center">{adults}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setAdults(adults + 1)}
                                className="h-8 w-8"
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">เด็ก</span>
                            <div className="flex items-center gap-3">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setChildren(Math.max(0, children - 1))}
                                className="h-8 w-8"
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center">{children}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setChildren(children + 1)}
                                className="h-8 w-8"
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Search Button */}
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Search className="w-5 h-5" />
                    <span>ค้นหา</span>
                  </button>
                </div>

                {/* Additional Options */}
                <div className="mt-4 space-y-4">
                  {/* Accommodation Type */}
                  <div className="flex items-center gap-4">
                    <label className="text-sm font-medium text-gray-700">ประเภทที่พัก:</label>
                    <select
                      value={accommodationType}
                      onChange={(e) => setAccommodationType(e.target.value)}
                      className="border border-gray-300 rounded px-3 py-2 text-sm"
                    >
                      <option value="">เลือกประเภทที่พัก</option>
                      {accommodationTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Pet Travel Option */}
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 text-sm text-gray-600">
                      <input
                        type="checkbox"
                        checked={travelWithPets}
                        onChange={(e) => setTravelWithPets(e.target.checked)}
                        className="rounded"
                      />
                      <span>เดินทางพร้อมสัตว์เลี้ยง</span>
                    </label>
                  </div>
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