
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, MapPin, Users, Bed, Car, Fuel, Calendar, Wifi, Snowflake, Coffee, Droplet, Sun, Zap, Battery, Shield, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CampervanDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { campervan, bookingDetails } = location.state || {};

  // ข้อมูลตัวอย่างสำหรับ Toyota Hilux Revo
  const defaultCampervan = {
    id: 1,
    name: "Toyota Hilux Revo Campervan",
    brand: "Toyota",
    model: "Hilux Revo",
    year: 2023,
    seats: 6,
    sleeps: 4,
    price: 3200,
    image: "/lovable-uploads/c1762e4a-0c04-42c9-bb90-72efea7f0c35.png",
    images: [
      "/lovable-uploads/c1762e4a-0c04-42c9-bb90-72efea7f0c35.png",
      "/lovable-uploads/1b98df29-031c-453f-8985-bf9ab03b53a6.png",
      "/lovable-uploads/39ca8590-7c01-4b61-945b-09c0787d5e19.png",
      "/lovable-uploads/e4ce7067-7522-45d6-82c0-56a7fb4d8543.png",
      "/lovable-uploads/b3b48e94-e287-44ba-807a-e228a1df866a.png"
    ],
    rating: 4.9,
    reviewCount: 156,
    transmission: "Automatic",
    fuel: "Diesel",
    amenities: {
      passenger: "รองรับผู้โดยสาร 6 คน",
      bathroom: {
        available: true,
        features: ["ห้องน้ำ/ห้องอาบน้ำ", "เครื่องทำน้ำอุ่น", "ชักโครก", "อ่างล้างหน้า"]
      },
      storage: [
        "ตู้เก็บรองเท้า",
        "ตู้เก็บของ",
        "ช่องเก็บสัมภาระ",
        "กล่องสัมภาระท้ายรถ"
      ],
      comfort: [
        "ที่นอน",
        "โซฟาปรับนอนได้",
        "เครื่องปรับอากาศ",
        "กันสาด กางเก็บได้"
      ],
      kitchen: [
        "ตู้เย็น 80 ลิตร"
      ],
      power: [
        "แบตเตอรี่ 9,600 Wh",
        "แผงโซลาร์เซลล์",
        "เครื่องปั่นไฟ",
        "แผงดูสถานะไฟและน้ำ"
      ],
      water: "ถังน้ำสะอาด 120 ลิตร",
      technology: [
        "ระบบควบคุม RV Smart",
        "Wi-Fi"
      ]
    },
    pricing: {
      basePrice: 3200,
      minDays: 3,
      insurance: true,
      unlimitedMileage: true,
      roadside: true
    }
  };

  const van = campervan || defaultCampervan;

  const handleBooking = () => {
    navigate("/campervan-summary", {
      state: {
        campervan: van,
        bookingDetails: bookingDetails
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Header with back button */}
      <div className="bg-white backdrop-blur-sm border-b border-gray-200 sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            กลับไปค้นหา
          </Button>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-6">
        {/* ชื่อรถ + ราคา */}
        <div className="mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {van.name}
              </h1>
              <p className="text-lg text-red-600 mb-3">
                {van.brand} {van.model} • ปี {van.year}
              </p>
              
              {/* ข้อมูลย่อ */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{van.seats} ที่นั่ง</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bed className="h-4 w-4" />
                  <span>นอนได้ {van.sleeps} คน</span>
                </div>
                <div className="flex items-center gap-1">
                  <Car className="h-4 w-4" />
                  <span>{van.transmission}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Fuel className="h-4 w-4" />
                  <span>{van.fuel}</span>
                </div>
              </div>
            </div>

            {/* ราคา */}
            <div className="text-right lg:text-left">
              <div className="text-3xl font-bold text-red-600">
                {van.price?.toLocaleString() || van.pricing?.basePrice?.toLocaleString()} บาท
                <span className="text-lg font-normal text-gray-600"> / คืน</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-lg text-gray-900">{van.rating}</span>
                </div>
                <span className="text-gray-600">
                  ({van.reviewCount} รีวิว)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* แกลเลอรี่ภาพ */}
        <div className="grid grid-cols-4 gap-3 h-96 rounded-xl overflow-hidden mb-8 border border-gray-200 shadow-sm">
          {/* รูปใหญ่ด้านซ้าย */}
          <div className="col-span-2 row-span-2 relative group cursor-pointer">
            <img
              src={van.images ? van.images[0] : van.image}
              alt={van.name}
              className="w-full h-full object-cover group-hover:brightness-95 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>

          {/* รูปย่อย 4 ภาพ (2x2) */}
          {(van.images || [van.image, van.image, van.image, van.image]).slice(1, 5).map((image, index) => (
            <div key={index} className="relative group cursor-pointer">
              <img
                src={image}
                alt={`${van.name} ${index + 2}`}
                className="w-full h-full object-cover group-hover:brightness-95 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* เนื้อหาหลัก */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* คอลัมน์ซ้าย - เนื้อหาหลัก */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-white border border-gray-200">
                <TabsTrigger value="overview" className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-700">ข้อมูลรถ</TabsTrigger>
                <TabsTrigger value="amenities" className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-700">อุปกรณ์</TabsTrigger>
                <TabsTrigger value="location" className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-700">จุดรับ-คืน</TabsTrigger>
                <TabsTrigger value="reviews" className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-700">รีวิว</TabsTrigger>
                <TabsTrigger value="faq" className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-700">FAQ</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <Card className="border-gray-200 bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-red-600">ข้อมูลรถ</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">ยี่ห้อ:</span>
                        <span className="font-medium text-gray-900">{van.brand}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">รุ่น:</span>
                        <span className="font-medium text-gray-900">{van.model}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">ปี:</span>
                        <span className="font-medium text-gray-900">{van.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">เกียร์:</span>
                        <span className="font-medium text-gray-900">{van.transmission}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">เชื้อเพลิง:</span>
                        <span className="font-medium text-gray-900">{van.fuel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">ที่นั่ง/นอน:</span>
                        <span className="font-medium text-gray-900">{van.seats}/{van.sleeps} คน</span>
                      </div>
                    </div>
                    
                    {/* ความจุผู้โดยสาร */}
                    <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-5 w-5 text-red-600" />
                        <span className="font-medium text-red-700">ความจุผู้โดยสาร</span>
                      </div>
                      <p className="text-red-700">{van.amenities?.passenger}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="amenities" className="mt-6">
                <div className="space-y-6">
                  {/* ห้องน้ำและสุขภัณฑ์ */}
                  <Card className="border-gray-200 bg-white shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-red-600 flex items-center gap-2">
                        <Droplet className="h-5 w-5" />
                        ห้องน้ำและสุขภัณฑ์
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        {van.amenities?.bathroom?.features?.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 p-3 bg-red-50 rounded-lg border border-red-200">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-red-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* ที่เก็บและจัดเก็บ */}
                  <Card className="border-gray-200 bg-white shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-red-600 flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        ที่เก็บและจัดเก็บ
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        {van.amenities?.storage?.map((item, index) => (
                          <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* ความสะดวกสบาย */}
                  <Card className="border-gray-200 bg-white shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-red-600 flex items-center gap-2">
                        <Bed className="h-5 w-5" />
                        ความสะดวกสบาย
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        {van.amenities?.comfort?.map((item, index) => (
                          <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* ห้องครัว */}
                  <Card className="border-gray-200 bg-white shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-red-600 flex items-center gap-2">
                        <Coffee className="h-5 w-5" />
                        ห้องครัว
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        {van.amenities?.kitchen?.map((item, index) => (
                          <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* ระบบไฟฟ้าและพลังงาน */}
                  <Card className="border-gray-200 bg-white shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-red-600 flex items-center gap-2">
                        <Battery className="h-5 w-5" />
                        ระบบไฟฟ้าและพลังงาน
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {van.amenities?.power?.map((item, index) => (
                          <div key={index} className="flex items-center gap-2 p-3 bg-red-50 rounded-lg border border-red-200">
                            <Zap className="h-4 w-4 text-red-600" />
                            <span className="text-red-700 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* ระบบน้ำ */}
                  <Card className="border-gray-200 bg-white shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-red-600 flex items-center gap-2">
                        <Droplet className="h-5 w-5" />
                        ระบบน้ำ
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-blue-700 font-medium">{van.amenities?.water}</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* เทคโนโลยีและระบบควบคุม */}
                  <Card className="border-gray-200 bg-white shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-red-600 flex items-center gap-2">
                        <Wrench className="h-5 w-5" />
                        เทคโนโลยีและระบบควบคุม
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {van.amenities?.technology?.map((item, index) => (
                          <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="location" className="mt-6">
                <Card className="border-gray-200 bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-red-600">จุดรับ-คืนรถ</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-2 flex items-center gap-2 text-red-600">
                          <MapPin className="h-5 w-5" />
                          จุดรับรถ
                        </h3>
                        <div className="space-y-2">
                          <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <span className="text-gray-700">สนามบินสุวรรณภูมิ</span>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <span className="text-gray-700">สนามบินดอนเมือง</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-2 text-red-600">จุดคืนรถ</h3>
                        <div className="space-y-2">
                          <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <span className="text-gray-700">สถานที่เดียวกับจุดรับ</span>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <span className="text-gray-700">สถานที่ท่องเที่ยวยอดนิยม (ค่าใช้จ่ายเพิ่มเติม)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* แผนที่ */}
                    <div className="mt-6 h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center border border-gray-200">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-red-600 mx-auto mb-3" />
                        <h4 className="text-red-600 font-medium mb-1">แผนที่จุดรับ-คืนรถ</h4>
                        <span className="text-gray-600 text-sm">ดูตำแหน่งที่ตั้งจริง</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <Card className="border-gray-200 bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-red-600">รีวิวลูกค้า</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                        <span className="text-2xl font-bold text-gray-900">{van.rating}</span>
                      </div>
                      <div>
                        <p className="font-medium text-red-600">{van.reviewCount} รีวิว</p>
                        <p className="text-sm text-gray-600">จากผู้เช่าจริง</p>
                      </div>
                    </div>

                    {/* รีวิวตัวอย่าง */}
                    <div className="space-y-4">
                      <div className="border-b border-gray-200 pb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium text-red-600">คุณสมชาย</span>
                          <div className="flex">
                            {[1,2,3,4,5].map((star) => (
                              <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">รถใหม่มาก อุปกรณ์ครบครัน ห้องน้ำสะอาด ระบบ RV Smart ใช้งานง่าย แนะนำเลยครับ!</p>
                      </div>

                      <div className="border-b border-gray-200 pb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium text-red-600">คุณนิดา</span>
                          <div className="flex">
                            {[1,2,3,4,5].map((star) => (
                              <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">รถกว้างขวาง เหมาะกับครอบครัวใหญ่ แบตเตอรี่อึ่นทั้งวัน แผงโซลาร์ช่วยประหยัดพลังงาน</p>
                      </div>

                      <div className="border-b border-gray-200 pb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium text-red-600">คุณพล</span>
                          <div className="flex">
                            {[1,2,3,4,5].map((star) => (
                              <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">ตู้เย็นใหญ่ ถังน้ำเยอะ กันสาดกางง่าย เหมาะกับการไปแคมป์ปิ้งหลายวัน</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="faq" className="mt-6">
                <Card className="border-gray-200 bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-red-600">คำถามที่พบบ่อย</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2 text-red-600">ใบขับขี่ที่รับได้?</h4>
                      <p className="text-sm text-gray-700">ใบขับขี่ประเภท 1 หรือใบขับขี่นานาชาติ</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-red-600">อายุขั้นต่ำ?</h4>
                      <p className="text-sm text-gray-700">25 ปีขึ้นไป (21-24 ปี มีค่าใช้จ่ายเพิ่มเติม)</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-red-600">นโยบายสัตว์เลี้ยง?</h4>
                      <p className="text-sm text-gray-700">อนุญาต แต่ต้องแจ้งล่วงหน้า และมีค่าทำความสะอาดเพิ่มเติม</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-red-600">ขับข้ามจังหวัดได้ไหม?</h4>
                      <p className="text-sm text-gray-700">ได้ ภายในประเทศไทย</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-red-600">ระบบ RV Smart คืออะไร?</h4>
                      <p className="text-sm text-gray-700">ระบบควบคุมอัจฉริยะสำหรับจัดการไฟฟ้า น้ำ และอุปกรณ์ต่างๆ ในรถ</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-red-600">แบตเตอรี่ใช้ได้นานแค่ไหน?</h4>
                      <p className="text-sm text-gray-700">แบตเตอรี่ 9,600 Wh ใช้ได้ประมาณ 2-3 วัน โดยมีแผงโซลาร์เซลล์ช่วยชาร์จ</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* คอลัมน์ขวา - ระบบจอง */}
          <div className="lg:col-span-1">
            <Card className="border-2 border-red-200 bg-white shadow-lg sticky top-32">
              <CardContent className="p-6">
                {/* ราคา */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold text-red-600">{van.price?.toLocaleString() || van.pricing?.basePrice?.toLocaleString()} บาท</span>
                    <span className="text-gray-600 ml-1">/ คืน</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-gray-900">{van.rating}</span>
                  </div>
                </div>

                {/* ข้อมูลการเช่า */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                  <h3 className="font-medium text-red-600 mb-2">สิ่งที่รวมในราคา</h3>
                  <div className="space-y-1 text-sm text-gray-700">
                    <p>• ประกันภัย</p>
                    <p>• ระยะทางไม่จำกัด</p>
                    <p>• บริการช่วยเหลือ 24 ชั่วโมง</p>
                    <p>• การเช่าขั้นต่ำ {van.pricing?.minDays || 3} วัน</p>
                  </div>
                </div>

                {/* ปุ่มจอง */}
                <Button 
                  onClick={handleBooking}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  จองเลย
                </Button>

                <p className="text-xs text-gray-500 text-center mt-2">
                  ไม่มีค่าใช้จ่ายจนกว่าจะยืนยัน
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CampervanDetail;
