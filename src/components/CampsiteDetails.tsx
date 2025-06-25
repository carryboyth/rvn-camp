
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Wifi,
  Car,
  Droplets,
  Power,
  AlertCircle,
  ArrowLeft,
  Star,
  MapPin,
  Phone,
  Mail,
  Globe,
  Shield,
  Home,
  Users,
  TreePine,
  Waves,
  Mountain,
  Sun,
  Camera,
  Heart,
  Calendar,
  PawPrint,
} from "lucide-react";

interface CampsiteDetailsProps {
  campsite: {
    name: string;
    images: string[];
    price: number;
    description: string;
    facilities: string[];
    checkIn: string;
    checkOut: string;
    rules: string[];
    tyreRoom: boolean;
  };
}

const CampsiteDetails = ({ campsite }: CampsiteDetailsProps) => {
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");

  const handleBookNow = () => {
    navigate(`/booking/1`);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activities = [
    "เดินป่า",
    "แคมป์ไฟ", 
    "ปั่นจักรยาน",
    "พายเรือ",
    "ดูนก",
    "ถ่ายภาพ"
  ];

  const naturalFeatures = [
    "วิวภูเขา",
    "ริมน้ำ",
    "ป่าธรรมชาติ",
    "ทางดูนก",
    "น้ำตกใกล้เคียง",
    "จุดชมพระอาทิตย์ตก"
  ];

  const reviews = [
    {
      name: "สมชาย ใจดี",
      rating: 5,
      date: "15 มี.ค. 2024",
      comment: "ที่พักสวยมาก บรรยากาศดี เจ้าของใจดี แนะนำให้มาพักครับ",
      avatar: "/lovable-uploads/b3b48e94-e287-44ba-807a-e228a1df866a.png"
    },
    {
      name: "นิดา สวยงาม", 
      rating: 4,
      date: "8 มี.ค. 2024",
      comment: "วิวสวยมาก อากาศดี เหมาะกับการพักผ่อน ความสะอาดดี",
      avatar: "/lovable-uploads/e4ce7067-7522-45d6-82c0-56a7fb4d8543.png"
    },
    {
      name: "กิตติ ธรรมชาติ",
      rating: 5, 
      date: "2 มี.ค. 2024",
      comment: "ประทับใจมากครับ กิจกรรมหลากหลาย เจ้าของดูแลอย่างดี",
      avatar: "/lovable-uploads/39ca8590-7c01-4b61-945b-09c0787d5e19.png"
    }
  ];

  const nearbyAttractions = [
    {
      name: "น้ำตกแม่กลาง",
      distance: "2.5 กม.",
      image: "/lovable-uploads/ffbe678e-abe3-4ee8-8950-91cb622e5fde.png",
      type: "น้ำตก"
    },
    {
      name: "จุดชมวิวดอยสุเทพ",
      distance: "15 กม.",
      image: "/lovable-uploads/31648e34-1e0e-418b-a716-4edcc750815c.png", 
      type: "จุดชมวิว"
    },
    {
      name: "วัดพระธาตุดอยสุเทพ",
      distance: "18 กม.",
      image: "/lovable-uploads/491cfd8c-5bc4-4d54-afb5-cc0adc56e139.png",
      type: "วัด"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-stone-600 hover:text-stone-900"
              >
                <ArrowLeft className="h-4 w-4" />
                กลับ
              </Button>
              <h1 className="text-xl font-semibold text-stone-900">{campsite.name}</h1>
            </div>
            
            {/* Navigation Tabs */}
            <nav className="hidden md:flex items-center space-x-6">
              {[
                { id: "overview", label: "ภาพรวม" },
                { id: "activities", label: "กิจกรรม" },
                { id: "location", label: "แผนที่" },
                { id: "reviews", label: "รีวิว" },
                { id: "nearby", label: "สถานที่ใกล้เคียง" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`text-sm font-medium transition-colors hover:text-green-600 ${
                    activeTab === tab.id ? 'text-green-600 border-b-2 border-green-600' : 'text-stone-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            
            {/* Section 1: Image Gallery */}
            <section id="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-96">
                {/* Main Large Image */}
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={campsite.images[0]}
                    alt={campsite.name}
                    className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedImageIndex(0)}
                  />
                  <button className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all">
                    <Heart className="h-5 w-5 text-stone-600" />
                  </button>
                </div>
                
                {/* Grid 2x2 Small Images */}
                <div className="grid grid-cols-2 gap-2">
                  {campsite.images.slice(1, 5).map((image, index) => (
                    <div key={index} className="relative rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${campsite.name} ${index + 2}`}
                        className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => setSelectedImageIndex(index + 1)}
                      />
                      {index === 3 && campsite.images.length > 5 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <div className="text-white text-center">
                            <Camera className="h-6 w-6 mx-auto mb-1" />
                            <span className="text-sm font-medium">+{campsite.images.length - 5} รูป</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 2: Details + Activities */}
            <section id="activities" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Description */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-stone-600 mb-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                    แคมป์ไซต์พรีเมียม
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.8</span>
                    <span>(24 รีวิว)</span>
                  </div>
                </div>
                
                <p className="text-stone-700 leading-relaxed mb-4">{campsite.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-stone-500" />
                    <span>รองรับได้สูงสุด 6 คน</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-stone-500" />
                    <span>เช็คอิน: {campsite.checkIn} | เช็คเอาท์: {campsite.checkOut}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PawPrint className="h-4 w-4 text-stone-500" />
                    <span>ยินดีต้อนรับสัตว์เลี้ยง</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <div className="text-2xl font-bold text-stone-900">
                    ฿{campsite.price.toLocaleString()}
                    <span className="text-lg font-normal text-stone-600"> / คืน</span>
                  </div>
                </div>
              </div>

              {/* Right: Activities & Natural Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-stone-900 mb-3 flex items-center gap-2">
                    <TreePine className="h-5 w-5 text-green-600" />
                    กิจกรรม
                  </h3>
                  <div className="space-y-2">
                    {activities.map((activity, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-stone-700">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-stone-900 mb-3 flex items-center gap-2">
                    <Mountain className="h-5 w-5 text-green-600" />
                    จุดเด่นธรรมชาติ
                  </h3>
                  <div className="space-y-2">
                    {naturalFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-stone-700">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Camping Areas */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-stone-900">พื้นที่แคมป์ที่ว่าง</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Image */}
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={campsite.images[1]}
                    alt="พื้นที่แคมป์"
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                {/* Details */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-stone-900">รายละเอียดพื้นที่</h3>
                  <div className="space-y-2 text-sm text-stone-700">
                    <p>• ขนาดพื้นที่: 5x8 เมตร</p>
                    <p>• รองรับรถบ้าน หรือเต็นท์ขนาดใหญ่</p>
                    <p>• ห้องน้ำส่วนกลาง 2 ห้อง</p>
                    <p>• ไฟฟ้า 220V พร้อมใช้</p>
                    <p>• น้ำประปาสะอาด</p>
                    <p>• Wi-Fi ครอบคลุมทั่วพื้นที่</p>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    ตรวจสอบวันว่าง
                  </Button>
                </div>
                
                {/* Map Plan */}
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-stone-900 mb-3">แปลนพื้นที่</h3>
                  <div className="aspect-square bg-white rounded border-2 border-dashed border-green-300 flex items-center justify-center">
                    <div className="text-center text-sm text-stone-500">
                      <MapPin className="h-8 w-8 mx-auto mb-2 text-green-500" />
                      แผนที่แปลน<br />จุดจอดรถบ้าน
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Reviews */}
            <section id="reviews" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-stone-900">รีวิวจากลูกค้า</h2>
                <Button variant="outline" size="sm">ดูรีวิวทั้งหมด</Button>
              </div>
              
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <Card key={index} className="border-stone-200">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-stone-900">{review.name}</span>
                            <div className="flex items-center gap-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="text-xs text-stone-500">{review.date}</span>
                          </div>
                          <p className="text-sm text-stone-700">{review.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Section 5: Location */}
            <section id="location" className="space-y-6">
              <h2 className="text-xl font-semibold text-stone-900">ตำแหน่งที่ตั้ง</h2>
              <div className="space-y-4">
                <div className="aspect-video bg-stone-100 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.0849194042347!2d100.84770147475835!3d18.619845586857763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d60dd168e9c15%3A0x40ec1b3e7dfa8f0!2sChiang%20Mai%2C%20Thailand!5e0!3m2!1sen!2sth!4v1710848947954!5m2!1sen!2sth"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-stone-600">
                    <MapPin className="h-4 w-4" />
                    <span>123 ถนนมหิดล ตำบลสุเทพ อำเภอเมือง จังหวัดเชียงใหม่ 50200</span>
                  </div>
                  <p className="text-sm text-stone-600">
                    ใกล้อุทยานแห่งชาติดอยสุเทพ-ปุย ระยะทาง 5 กิโลเมตร
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Nearby Attractions */}
            <section id="nearby" className="space-y-6">
              <h2 className="text-xl font-semibold text-stone-900">สถานที่ท่องเที่ยวใกล้เคียง</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {nearbyAttractions.map((attraction, index) => (
                  <Card key={index} className="border-stone-200 hover:shadow-md transition-shadow">
                    <div className="aspect-video rounded-t-lg overflow-hidden">
                      <img
                        src={attraction.image}
                        alt={attraction.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <h3 className="font-medium text-stone-900">{attraction.name}</h3>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-stone-600">{attraction.distance}</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                            {attraction.type}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Contact & Rules */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact */}
              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4 text-stone-900">ข้อมูลติดต่อ</h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-green-600" />
                      <span className="text-stone-800">+66 123 456 789</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-green-600" />
                      <span className="text-stone-800">info@mountaincamp.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="h-4 w-4 text-green-600" />
                      <span className="text-stone-800">www.mountaincamp.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Rules */}
              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4 text-stone-900">กฎและนโยบาย</h2>
                  <div className="space-y-2">
                    {campsite.rules.map((rule, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <AlertCircle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-stone-700">{rule}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-stone-200 shadow-lg">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-stone-900 mb-1">
                    ฿{campsite.price.toLocaleString()}
                    <span className="text-base font-normal text-stone-600"> / คืน</span>
                  </div>
                  <div className="text-xs text-stone-500">ยกเลิกฟรีก่อน 24 ชั่วโมง</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-stone-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-stone-600" />
                      <span className="font-medium text-stone-800">เช็คอิน</span>
                    </div>
                    <p className="text-stone-600 ml-6">{campsite.checkIn}</p>
                  </div>
                  <div className="bg-stone-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-stone-600" />
                      <span className="font-medium text-stone-800">เช็คเอาท์</span>
                    </div>
                    <p className="text-stone-600 ml-6">{campsite.checkOut}</p>
                  </div>
                </div>

                {/* Facilities Preview */}
                <div className="space-y-3 mb-6">
                  <h3 className="font-medium text-stone-900">สิ่งอำนวยความสะดวก</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 text-xs text-stone-600">
                      <Wifi className="h-3 w-3" />
                      <span>Wi-Fi</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-stone-600">
                      <Power className="h-3 w-3" />
                      <span>ไฟฟ้า</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-stone-600">
                      <Droplets className="h-3 w-3" />
                      <span>น้ำสะอาด</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-stone-600">
                      <Car className="h-3 w-3" />
                      <span>ที่จอดรถ</span>
                    </div>
                  </div>
                </div>

                {campsite.tyreRoom && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-green-800 text-sm">ห้องเก็บยางรถ</span>
                    </div>
                    <p className="text-xs text-green-700 mt-1">มีพื้นที่เก็บยางรถอย่างปลอดภัย</p>
                  </div>
                )}

                <Button
                  className="w-full h-12 text-base font-semibold bg-green-600 hover:bg-green-700 mb-4"
                  onClick={handleBookNow}
                >
                  จองตอนนี้
                </Button>

                <div className="text-center">
                  <p className="text-xs text-stone-500">
                    ยังไม่มีการเรียกเก็บเงิน
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampsiteDetails;
