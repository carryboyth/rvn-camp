
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, Wifi, Car, Droplets, Heart, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface FeaturedCampsitesProps {
  showMap: boolean;
}

const FeaturedCampsites = ({ showMap }: FeaturedCampsitesProps) => {
  const navigate = useNavigate();

  const featuredCampsites = [
    {
      id: 1,
      name: "แคมป์ปิ้งดอยสุเทพ",
      location: "เชียงใหม่",
      image: "/lovable-uploads/1c68e1b4-9fe2-4968-a384-030737e07ca5.png",
      price: 1200,
      rating: 4.8,
      reviews: 156,
      description: "แคมป์ปิ้งบนยอดดอยสุเทพ วิวสวย อากาศเย็นสบาย",
      amenities: ["Wi-Fi", "ที่จอดรถ", "น้ำสะอาด", "ห้องน้ำ"],
      capacity: 6
    },
    {
      id: 2,
      name: "ริมแม่น้ำแคมป์",
      location: "กาญจนบุรี",
      image: "/lovable-uploads/36e1489f-0a29-4aa0-9fa0-178c0b50d209.png",
      price: 800,
      rating: 4.6,
      reviews: 89,
      description: "แคมป์ปิ้งริมแม่น้ำแคว บรรยากาศเงียบสงบ ธรรมชาติสวยงาม",
      amenities: ["ที่จอดรถ", "น้ำสะอาด", "ห้องน้ำ"],
      capacity: 4
    },
    {
      id: 3,
      name: "ป่าไผ่แคมป์ไซต์",
      location: "เขาใหญ่",
      image: "/lovable-uploads/b3b48e94-e287-44ba-807a-e228a1df866a.png",
      price: 1500,
      rating: 4.9,
      reviews: 234,
      description: "แคมป์ปิ้งในป่าไผ่ อากาศเย็นสบาย เหมาะสำหรับครอบครัว",
      amenities: ["Wi-Fi", "ที่จอดรถ", "น้ำสะอาด", "ห้องน้ำ", "ไฟฟ้า"],
      capacity: 8
    },
    {
      id: 4,
      name: "ชายหาดแคมป์",
      location: "ประจวบคีรีขันธ์",
      image: "/lovable-uploads/e4ce7067-7522-45d6-82c0-56a7fb4d8543.png",
      price: 1000,
      rating: 4.7,
      reviews: 112,
      description: "แคมป์ปิ้งริมชายหาด ชมพระอาทิตย์ขึ้น-ตก กิจกรรมทางน้ำ",
      amenities: ["ที่จอดรถ", "น้ำสะอาด", "ห้องน้ำ"],
      capacity: 6
    },
    {
      id: 5,
      name: "ภูเขาหมอกแคมป์",
      location: "เพชรบูรณ์",
      image: "/lovable-uploads/1c68e1b4-9fe2-4968-a384-030737e07ca5.png",
      price: 1800,
      rating: 4.8,
      reviews: 78,
      description: "แคมป์ปิ้งบนภูเขาสูง ทะเลหมอกสวยงาม อุณหภูมิเย็นสบาย",
      amenities: ["Wi-Fi", "ที่จอดรถ", "น้ำสะอาด", "ห้องน้ำ", "ไฟฟ้า"],
      capacity: 10
    },
    {
      id: 6,
      name: "น้ำตกแคมป์ปิ้ง",
      location: "ตาก",
      image: "/lovable-uploads/36e1489f-0a29-4aa0-9fa0-178c0b50d209.png",
      price: 900,
      rating: 4.5,
      reviews: 67,
      description: "แคมป์ปิ้งใกล้น้ำตก เสียงน้ำไหลเซาะ บรรยากาศร่มรื่น",
      amenities: ["ที่จอดรถ", "น้ำสะอาด", "ห้องน้ำ"],
      capacity: 5
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "Wi-Fi": return <Wifi className="h-4 w-4" />;
      case "ที่จอดรถ": return <Car className="h-4 w-4" />;
      case "น้ำสะอาด": return <Droplets className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      {showMap && (
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center">
            <p className="text-gray-500">แผนที่แสดงตำแหน่งแคมป์ไซต์</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredCampsites.map((campsite) => (
          <Card 
            key={campsite.id} 
            className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer rounded-2xl border-0 shadow-lg"
            onClick={() => navigate(`/campsite/${campsite.id}`)}
          >
            <div className="relative">
              <img
                src={campsite.image}
                alt={campsite.name}
                className="w-full h-48 object-cover"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-3 right-3 bg-white/80 hover:bg-white rounded-full h-8 w-8 p-0"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{campsite.rating}</span>
                  <span className="text-xs text-gray-600">({campsite.reviews})</span>
                </div>
              </div>
            </div>
            
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-lg text-gray-900 line-clamp-1">
                  {campsite.name}
                </h3>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">
                    ฿{campsite.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">ต่อคืน</div>
                </div>
              </div>
              
              <div className="flex items-center gap-1 mb-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">{campsite.location}</span>
              </div>
              
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {campsite.description}
              </p>
              
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">รองรับได้ {campsite.capacity} คน</span>
              </div>
              
              <div className="flex items-center gap-3 text-xs text-gray-500">
                {campsite.amenities.slice(0, 3).map((amenity, index) => (
                  <div key={index} className="flex items-center gap-1">
                    {getAmenityIcon(amenity)}
                    <span>{amenity}</span>
                  </div>
                ))}
                {campsite.amenities.length > 3 && (
                  <span>+{campsite.amenities.length - 3} อื่นๆ</span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center pt-6">
        <Button 
          variant="outline" 
          className="px-8 py-2 rounded-xl border-2 border-green-600 text-green-600 hover:bg-green-50"
          onClick={() => navigate("/search")}
        >
          ดูแคมป์ไซต์ทั้งหมด
        </Button>
      </div>
    </div>
  );
};

export default FeaturedCampsites;
