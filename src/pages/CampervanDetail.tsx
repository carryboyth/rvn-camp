
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, MapPin, Users, Bed, Car, Fuel, Calendar, Wifi, Snowflake, Coffee, Droplet, Sun, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CampervanDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { campervan, bookingDetails } = location.state || {};

  // ข้อมูลตัวอย่างสำหรับกรณีที่ไม่มีข้อมูลส่งมา
  const defaultCampervan = {
    id: 1,
    name: "Toyota HiAce Campervan",
    brand: "Toyota",
    model: "HiAce",
    year: 2023,
    seats: 4,
    sleeps: 2,
    price: 2800,
    image: "/lovable-uploads/c1762e4a-0c04-42c9-bb90-72efea7f0c35.png",
    images: [
      "/lovable-uploads/c1762e4a-0c04-42c9-bb90-72efea7f0c35.png",
      "/lovable-uploads/1b98df29-031c-453f-8985-bf9ab03b53a6.png",
      "/lovable-uploads/39ca8590-7c01-4b61-945b-09c0787d5e19.png",
      "/lovable-uploads/e4ce7067-7522-45d6-82c0-56a7fb4d8543.png",
      "/lovable-uploads/b3b48e94-e287-44ba-807a-e228a1df866a.png"
    ],
    rating: 4.8,
    reviewCount: 127,
    transmission: "Automatic",
    fuel: "Diesel",
    amenities: {
      bed: "เตียงคู่แปลงได้จากโซฟา",
      kitchen: ["เตาแก๊ส 2 หัว", "อ่างล้างจาน", "ตู้เย็น 80L", "ไมโครเวฟ", "เครื่องชงกาแฟ"],
      bathroom: true,
      aircon: true,
      powerOutlets: 4,
      waterTank: "น้ำสะอาด 100L + น้ำเสีย 90L",
      solarPanel: true,
      wifi: true
    },
    pricing: {
      basePrice: 2800,
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-luxury-dark via-gray-900 to-black">
      <Header />
      
      {/* Header with back button */}
      <div className="bg-black/90 backdrop-blur-sm border-b border-red-900 sticky top-16 z-40">
        <div className="container mx-auto px-4 py-3">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 hover:bg-red-900/20 text-red-400 hover:text-red-300"
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
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {van.name}
              </h1>
              <p className="text-lg text-red-300 mb-3">
                {van.brand} {van.model} • ปี {van.year}
              </p>
              
              {/* ข้อมูลย่อ */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
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
              <div className="text-3xl font-bold text-red-400">
                {van.price?.toLocaleString() || van.pricing?.basePrice?.toLocaleString()} บาท
                <span className="text-lg font-normal text-gray-300"> / คืน</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-lg text-white">{van.rating}</span>
                </div>
                <span className="text-gray-300">
                  ({van.reviewCount} รีวิว)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* แกลเลอรี่ภาพ */}
        <div className="grid grid-cols-4 gap-3 h-96 rounded-xl overflow-hidden mb-8 border border-red-900">
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
              <TabsList className="grid w-full grid-cols-5 bg-luxury-charcoal border border-red-900">
                <TabsTrigger value="overview" className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-300">ข้อมูลรถ</TabsTrigger>
                <TabsTrigger value="amenities" className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-300">อุปกรณ์</TabsTrigger>
                <TabsTrigger value="location" className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-300">จุดรับ-คืน</TabsTrigger>
                <TabsTrigger value="reviews" className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-300">รีวิว</TabsTrigger>
                <TabsTrigger value="faq" className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-gray-300">FAQ</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <Card className="border-red-900 bg-luxury-charcoal">
                  <CardHeader>
                    <CardTitle className="text-red-400">ข้อมูลรถ</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex justify-between">
                        <span className="text-gray-300">ยี่ห้อ:</span>
                        <span className="font-medium text-white">{van.brand}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">รุ่น:</span>
                        <span className="font-medium text-white">{van.model}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">ปี:</span>
                        <span className="font-medium text-white">{van.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">เกียร์:</span>
                        <span className="font-medium text-white">{van.transmission}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">เชื้อเพลิง:</span>
                        <span className="font-medium text-white">{van.fuel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">ที่นั่ง/นอน:</span>
                        <span className="font-medium text-white">{van.seats}/{van.sleeps} คน</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="amenities" className="mt-6">
                <Card className="border-red-900 bg-luxury-charcoal">
                  <CardHeader>
                    <CardTitle className="text-red-400">อุปกรณ์ในรถ</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* เตียงนอน */}
                    <div>
                      <h3 className="font-medium mb-3 text-red-300 flex items-center gap-2">
                        <Bed className="h-5 w-5" />
                        เตียงนอน
                      </h3>
                      <p className="text-gray-300 bg-luxury-dark p-3 rounded-lg border border-red-900">
                        {van.amenities?.bed}
                      </p>
                    </div>

                    {/* ห้องครัว */}
                    <div>
                      <h3 className="font-medium mb-3 text-red-300 flex items-center gap-2">
                        <Coffee className="h-5 w-5" />
                        ห้องครัว
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {van.amenities?.kitchen?.map((item, index) => (
                          <div key={index} className="flex items-center gap-2 p-2 bg-luxury-dark rounded-lg border border-red-900">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-300 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* สิ่งอำนวยความสะดวกอื่นๆ */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className={`p-4 rounded-lg border-2 ${van.amenities?.bathroom ? 'border-red-600 bg-red-900/20' : 'border-gray-700 bg-gray-800'}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <Droplet className={`h-5 w-5 ${van.amenities?.bathroom ? 'text-red-400' : 'text-gray-500'}`} />
                          <span className={`font-medium ${van.amenities?.bathroom ? 'text-red-300' : 'text-gray-400'}`}>
                            ห้องน้ำ/ฝักบัว
                          </span>
                        </div>
                        <span className={`text-sm ${van.amenities?.bathroom ? 'text-red-200' : 'text-gray-500'}`}>
                          {van.amenities?.bathroom ? 'มี' : 'ไม่มี'}
                        </span>
                      </div>

                      <div className={`p-4 rounded-lg border-2 ${van.amenities?.aircon ? 'border-red-600 bg-red-900/20' : 'border-gray-700 bg-gray-800'}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <Snowflake className={`h-5 w-5 ${van.amenities?.aircon ? 'text-red-400' : 'text-gray-500'}`} />
                          <span className={`font-medium ${van.amenities?.aircon ? 'text-red-300' : 'text-gray-400'}`}>
                            เครื่องปรับอากาศ
                          </span>
                        </div>
                        <span className={`text-sm ${van.amenities?.aircon ? 'text-red-200' : 'text-gray-500'}`}>
                          {van.amenities?.aircon ? 'มี' : 'ไม่มี'}
                        </span>
                      </div>

                      <div className="p-4 rounded-lg border-2 border-red-600 bg-red-900/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="h-5 w-5 text-red-400" />
                          <span className="font-medium text-red-300">ปลั๊กไฟ</span>
                        </div>
                        <span className="text-sm text-red-200">
                          {van.amenities?.powerOutlets} ตัว
                        </span>
                      </div>

                      <div className={`p-4 rounded-lg border-2 ${van.amenities?.solarPanel ? 'border-red-600 bg-red-900/20' : 'border-gray-700 bg-gray-800'}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <Sun className={`h-5 w-5 ${van.amenities?.solarPanel ? 'text-red-400' : 'text-gray-500'}`} />
                          <span className={`font-medium ${van.amenities?.solarPanel ? 'text-red-300' : 'text-gray-400'}`}>
                            แผงโซล่าเซลล์
                          </span>
                        </div>
                        <span className={`text-sm ${van.amenities?.solarPanel ? 'text-red-200' : 'text-gray-500'}`}>
                          {van.amenities?.solarPanel ? 'มี' : 'ไม่มี'}
                        </span>
                      </div>
                    </div>

                    {/* ถังน้ำ & WiFi */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg border-2 border-red-600 bg-red-900/20">
                        <h4 className="font-medium text-red-300 mb-2">ถังน้ำ</h4>
                        <p className="text-red-200">{van.amenities?.waterTank}</p>
                      </div>
                      
                      {van.amenities?.wifi && (
                        <div className="p-4 rounded-lg border-2 border-red-600 bg-red-900/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Wifi className="h-5 w-5 text-red-400" />
                            <h4 className="font-medium text-red-300">WiFi</h4>
                          </div>
                          <p className="text-red-200 text-sm">อินเทอร์เน็ตระหว่างเดินทาง</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="location" className="mt-6">
                <Card className="border-red-900 bg-luxury-charcoal">
                  <CardHeader>
                    <CardTitle className="text-red-400">จุดรับ-คืนรถ</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-2 flex items-center gap-2 text-red-300">
                          <MapPin className="h-5 w-5" />
                          จุดรับรถ
                        </h3>
                        <div className="space-y-2">
                          <div className="p-3 bg-luxury-dark rounded-lg border border-red-900">
                            <span className="text-gray-300">สนามบินสุวรรณภูมิ</span>
                          </div>
                          <div className="p-3 bg-luxury-dark rounded-lg border border-red-900">
                            <span className="text-gray-300">สนามบินดอนเมือง</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-2 text-red-300">จุดคืนรถ</h3>
                        <div className="space-y-2">
                          <div className="p-3 bg-luxury-dark rounded-lg border border-red-900">
                            <span className="text-gray-300">สถานที่เดียวกับจุดรับ</span>
                          </div>
                          <div className="p-3 bg-luxury-dark rounded-lg border border-red-900">
                            <span className="text-gray-300">สถานที่ท่องเที่ยวยอดนิยม (ค่าใช้จ่ายเพิ่มเติม)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* แผนที่ */}
                    <div className="mt-6 h-64 bg-gradient-to-br from-luxury-dark to-red-900/20 rounded-xl flex items-center justify-center border border-red-900">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-red-400 mx-auto mb-3" />
                        <h4 className="text-red-300 font-medium mb-1">แผนที่จุดรับ-คืนรถ</h4>
                        <span className="text-gray-300 text-sm">ดูตำแหน่งที่ตั้งจริง</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <Card className="border-red-900 bg-luxury-charcoal">
                  <CardHeader>
                    <CardTitle className="text-red-400">รีวิวลูกค้า</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                        <span className="text-2xl font-bold text-white">{van.rating}</span>
                      </div>
                      <div>
                        <p className="font-medium text-red-300">{van.reviewCount} รีวิว</p>
                        <p className="text-sm text-gray-300">จากผู้เช่าจริง</p>
                      </div>
                    </div>

                    {/* รีวิวตัวอย่าง */}
                    <div className="space-y-4">
                      <div className="border-b border-red-900 pb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium text-red-300">สมชาย ใจดี</span>
                          <div className="flex">
                            {[1,2,3,4,5].map((star) => (
                              <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-300">รถสะอาด อุปกรณ์ครบ เจ้าของใจดี แนะนำเลยครับ!</p>
                      </div>

                      <div className="border-b border-red-900 pb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium text-red-300">น้องแนน</span>
                          <div className="flex">
                            {[1,2,3,4,5].map((star) => (
                              <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-300">ขับง่าย ประหยัดน้ำมัน เหมาะกับครอบครัวมาก</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="faq" className="mt-6">
                <Card className="border-red-900 bg-luxury-charcoal">
                  <CardHeader>
                    <CardTitle className="text-red-400">คำถามที่พบบ่อย</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2 text-red-300">ใบขับขี่ที่รับได้?</h4>
                      <p className="text-sm text-gray-300">ใบขับขี่ประเภท 1 หรือใบขับขี่นานาชาติ</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-red-300">อายุขั้นต่ำ?</h4>
                      <p className="text-sm text-gray-300">25 ปีขึ้นไป (21-24 ปี มีค่าใช้จ่ายเพิ่มเติม)</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-red-300">นโยบายสัตว์เลี้ยง?</h4>
                      <p className="text-sm text-gray-300">อนุญาต แต่ต้องแจ้งล่วงหน้า และมีค่าทำความสะอาดเพิ่มเติม</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-red-300">ขับข้ามจังหวัดได้ไหม?</h4>
                      <p className="text-sm text-gray-300">ได้ ภายในประเทศไทย</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* คอลัมน์ขวา - ระบบจอง */}
          <div className="lg:col-span-1">
            <Card className="border-2 border-red-900 bg-luxury-charcoal shadow-2xl sticky top-32">
              <CardContent className="p-6">
                {/* ราคา */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold text-red-400">{van.price?.toLocaleString() || van.pricing?.basePrice?.toLocaleString()} บาท</span>
                    <span className="text-gray-300 ml-1">/ คืน</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-white">{van.rating}</span>
                  </div>
                </div>

                {/* ข้อมูลการเช่า */}
                <div className="bg-luxury-dark border border-red-900 rounded-lg p-4 mb-6">
                  <h3 className="font-medium text-red-300 mb-2">สิ่งที่รวมในราคา</h3>
                  <div className="space-y-1 text-sm text-gray-300">
                    <p>• ประกันภัย</p>
                    <p>• ระยะทางไม่จำกัด</p>
                    <p>• บริการช่วยเหลือ 24 ชั่วโมง</p>
                    <p>• การเช่าขั้นต่ำ {van.pricing?.minDays || 3} วัน</p>
                  </div>
                </div>

                {/* ปุ่มจอง */}
                <Button 
                  onClick={handleBooking}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  จองเลย
                </Button>

                <p className="text-xs text-gray-400 text-center mt-2">
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
