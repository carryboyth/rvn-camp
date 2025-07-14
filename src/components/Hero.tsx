import { Search, MapPin, Calendar as CalendarIcon, Users, Check, Plane, Hotel, Train, Car, Map, Plus } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("hotel");

  const tabs = [
    { id: "hotel", label: "ที่พัก", icon: Hotel },
    { id: "flight", label: "เที่ยวบิน", icon: Plane },
    { id: "train", label: "รถไฟ", icon: Train },
    { id: "car", label: "รถยนต์", icon: Car },
    { id: "tour", label: "ทัวร์และตั๋วทองเที่ยว", icon: Map },
    { id: "package", label: "เที่ยวบิน + โรงแรม", icon: Plus },
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
        <div className="max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="bg-white rounded-lg shadow-xl p-6">
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
                    placeholder="ชลบุรี เมือง สตฮุน ภูเก็ต เชท..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Check-in Date */}
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  วันเข้าพัก
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
                  วันคืนพัก
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
                <span>ค้นหาคืนละที่</span>
              </label>
              <div className="flex items-center gap-4">
                <span>ประเภท/ผู้เข้าพักต่อหองไนซื่อ</span>
                <select className="border rounded px-2 py-1">
                  <option>ไทย</option>
                </select>
                <span>อายุ</span>
                <select className="border rounded px-2 py-1">
                  <option>30-60</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;