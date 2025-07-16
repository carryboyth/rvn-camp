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
  const [rooms, setRooms] = useState(1);
  const [nights, setNights] = useState(1);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [accommodationType, setAccommodationType] = useState("");
  const [travelWithPets, setTravelWithPets] = useState(false);
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [driverAge, setDriverAge] = useState("");
  
  const popularDestinations = ["กรุงเทพฯ", "เชียงใหม่", "กระบี่", "ภูเก็ต", "พัทยา"];
  const accommodationTypes = [
    "ลานกางเต็นท์/แคมป์ไซต์",
    "จุดจอดรถบ้าน / คาราวาน", 
    "บ้านพัก / โรงแรม"
  ];
  const vehicleTypes = [
    "Caravan",
    "Motorhome A class",
    "Motorhome B class", 
    "Motorhome C class",
    "Campervan"
  ];
  const ageRanges = ["18-24", "25-29", "30-60", "60+"];

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
                </div>
              </>
            ) : activeTab === "package" ? (
              // Combined Motorhome + Campsite Form (Two-Row Design)
              <>
                {/* Row 1 - Campsite Booking Section */}
                <div className="border-l-4 border-blue-500 pl-4 mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">
                    จองแคมป์ไซต์ 🏕️
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
                    {/* Destination */}
                    <div className="text-left">
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
                          placeholder="จังหวัด, เมือง, สถานที่"
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

                    {/* Check-in & Check-out Date Range */}
                    <div className="text-left md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        วันเข้า - วันออก
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full pl-10 pr-4 py-3 h-12 justify-start text-left font-normal border-gray-300 rounded-lg hover:bg-gray-50"
                          >
                            <CalendarIcon className="absolute left-3 w-4 h-4 text-gray-400" />
                            <span className="text-sm">
                              {checkInDate && checkOutDate
                                ? `${format(checkInDate, "dd MMM")} - ${format(checkOutDate, "dd MMM")}`
                                : "เลือกวันที่"}
                            </span>
                            <ChevronDown className="absolute right-3 w-4 h-4 text-gray-400" />
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
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Room and Guest Selector */}
                    <div className="text-left">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ห้องและผู้เข้าพัก
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full pl-10 pr-4 py-3 h-12 justify-start text-left font-normal border-gray-300 rounded-lg hover:bg-gray-50"
                          >
                            <Users className="absolute left-3 w-4 h-4 text-gray-400" />
                            <span className="text-sm">
                              {rooms} ห้อง, {adults} ผู้ใหญ่, {children} เด็ก
                            </span>
                            <ChevronDown className="absolute right-3 w-4 h-4 text-gray-400" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80 p-4 bg-white z-50" align="start">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">ห้อง</span>
                              <div className="flex items-center gap-3">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={() => setRooms(Math.max(1, rooms - 1))}
                                  className="h-8 w-8"
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-8 text-center">{rooms}</span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={() => setRooms(rooms + 1)}
                                  className="h-8 w-8"
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">ผู้ใหญ่</span>
                              <div className="flex items-center gap-3">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={() => setAdults(Math.max(1, adults - 1))}
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

                    {/* Type of Campsite */}
                    <div className="text-left">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ประเภทแคมป์ไซต์
                      </label>
                      <div className="relative">
                        <select
                          value={accommodationType}
                          onChange={(e) => setAccommodationType(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                        >
                          <option value="">เลือกประเภท</option>
                          {accommodationTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Pet-friendly Checkbox */}
                    <div className="text-left">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        สัตว์เลี้ยง
                      </label>
                      <div className="flex items-center h-12">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={travelWithPets}
                            onChange={(e) => setTravelWithPets(e.target.checked)}
                            className="rounded"
                          />
                          <span className="text-sm">รับสัตว์เลี้ยง</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 2 - Campervan Rental Section */}
                <div className="border-l-4 border-green-500 pl-4 mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">
                    เช่ารถบ้าน 🚐
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
                    {/* Pick-up Location */}
                    <div className="text-left">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        สถานที่รับรถ
                      </label>
                      <div className="relative">
                        <Plane className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <select
                          value={pickupLocation}
                          onChange={(e) => setPickupLocation(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                        >
                          <option value="">เลือกสถานที่รับรถ</option>
                          <option value="suvarnabhumi">สนามบินสุวรรณภูมิ (BKK)</option>
                          <option value="donmueang">สนามบินดอนเมือง (DMK)</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Drop-off Location */}
                    <div className="text-left">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        สถานที่คืนรถ
                      </label>
                      <div className="relative">
                        <Plane className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <select
                          value={dropoffLocation}
                          onChange={(e) => setDropoffLocation(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                        >
                          <option value="">เลือกสถานที่คืนรถ</option>
                          <option value="suvarnabhumi">สนามบินสุวรรณภูมิ (BKK)</option>
                          <option value="donmueang">สนามบินดอนเมือง (DMK)</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Pick-up Date and Time Combined */}
                    <div className="text-left">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        วันรับรถ
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full pl-10 pr-4 py-3 h-12 justify-start text-left font-normal border-gray-300 rounded-lg hover:bg-gray-50"
                          >
                            <CalendarIcon className="absolute left-3 w-4 h-4 text-gray-400" />
                            <span className="text-sm">
                              16 ก.ค. - 10:00
                            </span>
                            <ChevronDown className="absolute right-3 w-4 h-4 text-gray-400" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80 p-4 bg-white z-50" align="start">
                          <div className="space-y-4">
                            <Calendar
                              mode="single"
                              selected={checkInDate}
                              onSelect={setCheckInDate}
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                            />
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">เวลา</label>
                              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
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
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Return Date and Time Combined */}
                    <div className="text-left">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        วันคืนรถ
                      </label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full pl-10 pr-4 py-3 h-12 justify-start text-left font-normal border-gray-300 rounded-lg hover:bg-gray-50"
                          >
                            <CalendarIcon className="absolute left-3 w-4 h-4 text-gray-400" />
                            <span className="text-sm">
                              19 ก.ค. - 10:00
                            </span>
                            <ChevronDown className="absolute right-3 w-4 h-4 text-gray-400" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80 p-4 bg-white z-50" align="start">
                          <div className="space-y-4">
                            <Calendar
                              mode="single"
                              selected={checkOutDate}
                              onSelect={setCheckOutDate}
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                            />
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">เวลา</label>
                              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
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
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Vehicle Type */}
                    <div className="text-left">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ประเภทรถ
                      </label>
                      <div className="relative">
                        <select
                          value={vehicleType}
                          onChange={(e) => setVehicleType(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                        >
                          <option value="">เลือกประเภทรถ</option>
                          {vehicleTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Driver Age Range */}
                    <div className="text-left">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        อายุผู้ขับ
                      </label>
                      <div className="relative">
                        <select
                          value={driverAge}
                          onChange={(e) => setDriverAge(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                        >
                          <option value="">เลือกช่วงอายุ</option>
                          {ageRanges.map((age) => (
                            <option key={age} value={age}>
                              {age} ปี
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Large Search Button */}
                <div className="flex justify-center mt-6">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-lg transition-colors flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl">
                    <Search className="w-6 h-6" />
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

                  {/* Date Range */}
                  <div className="text-left">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      วันที่
                    </label>
                    <div className="flex gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal border-gray-300",
                              !checkInDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkInDate ? format(checkInDate, "PPP") : <span>เช็คอิน</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-white z-50" align="start">
                          <Calendar
                            mode="single"
                            selected={checkInDate}
                            onSelect={setCheckInDate}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                      
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal border-gray-300",
                              !checkOutDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkOutDate ? format(checkOutDate, "PPP") : <span>เช็คเอาท์</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-white z-50" align="start">
                          <Calendar
                            mode="single"
                            selected={checkOutDate}
                            onSelect={setCheckOutDate}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
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

                  {/* Search Button */}
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Search className="w-5 h-5" />
                    <span>ค้นหา</span>
                  </button>
                </div>

                {/* Accommodation Type and Pet Option */}
                <div className="mt-4 flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-4">
                    <span>ประเภทที่พัก</span>
                    <select 
                      value={accommodationType}
                      onChange={(e) => setAccommodationType(e.target.value)}
                      className="border rounded px-3 py-2"
                    >
                      <option value="">เลือกประเภท</option>
                      {accommodationTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <label className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      checked={travelWithPets}
                      onChange={(e) => setTravelWithPets(e.target.checked)}
                      className="rounded" 
                    />
                    <span>เดินทางพร้อมสัตว์เลี้ยง</span>
                  </label>
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