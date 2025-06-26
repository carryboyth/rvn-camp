
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
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="amenities" className="mt-6">
                <Card className="border-gray-200 bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-red-600">อุปกรณ์ในรถ</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* เตียงนอน */}
                    <div>
                      <h3 className="font-medium mb-3 text-red-600 flex items-center gap-2">
                        <Bed className="h-5 w-5" />
                        เตียงนอน
                      </h3>
                      <p className="text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-200">
                        {van.amenities?.bed}
                      </p>
                    </div>

                    {/* ห้องครัว */}
                    <div>
                      <h3 className="font-medium mb-3 text-red-600 flex items-center gap-2">
                        <Coffee className="h-5 w-5" />
                        ห้องครัว
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {van.amenities?.kitchen?.map((item, index) => (
                          <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg border border-gray-200">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* สิ่งอำนวยความสะดวกอื่นๆ */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className={`p-4 rounded-lg border-2 ${van.amenities?.bathroom ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-gray-50'}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <Droplet className={`h-5 w-5 ${van.amenities?.bathroom ? 'text-red-600' : 'text-gray-400'}`} />
                          <span className={`font-medium ${van.amenities?.bathroom ? 'text-red-700' : 'text-gray-600'}`}>
                            ห้องน้ำ/ฝักบัว
                          </span>
                        </div>
                        <span className={`text-sm ${van.amenities?.bathroom ? 'text-red-600' : 'text-gray-500'}`}>
                          {van.amenities?.bathroom ? 'มี' : 'ไม่มี'}
                        </span>
                      </div>

                      <div className={`p-4 rounded-lg border-2 ${van.amenities?.aircon ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-gray-50'}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <Snowflake className={`h-5 w-5 ${van.amenities?.aircon ? 'text-red-600' : 'text-gray-400'}`} />
                          <span className={`font-medium ${van.amenities?.aircon ? 'text-red-700' : 'text-gray-600'}`}>
                            เครื่องปรับอากาศ
                          </span>
                        </div>
                        <span className={`text-sm ${van.amenities?.aircon ? 'text-red-600' : 'text-gray-500'}`}>
                          {van.amenities?.aircon ? 'มี' : 'ไม่มี'}
                        </span>
                      </div>

                      <div className="p-4 rounded-lg border-2 border-red-200 bg-red-50">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="h-5 w-5 text-red-600" />
                          <span className="font-medium text-red-700">ปลั๊กไฟ</span>
                        </div>
                        <span className="text-sm text-red-600">
                          {van.amenities?.powerOutlets} ตัว
                        </span>
                      </div>

                      <div className={`p-4 rounded-lg border-2 ${van.amenities?.solarPanel ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-gray-50'}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <Sun className={`h-5 w-5 ${van.amenities?.solarPanel ? 'text-red-600' : 'text-gray-400'}`} />
                          <span className={`font-medium ${van.amenities?.solarPanel ? 'text-red-700' : 'text-gray-600'}`}>
                            แผงโซล่าเซลล์
                          </span>
                        </div>
                        <span className={`text-sm ${van.amenities?.solarPanel ? 'text-red-600' : 'text-gray-500'}`}>
                          {van.amenities?.solarPanel ? 'มี' : 'ไม่มี'}
                        </span>
                      </div>
                    </div>

                    {/* ถังน้ำ & WiFi */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg border-2 border-red-200 bg-red-50">
                        <h4 className="font-medium text-red-700 mb-2">ถังน้ำ</h4>
                        <p className="text-red-600">{van.amenities?.waterTank}</p>
                      </div>
                      
                      {van.amenities?.wifi && (
                        <div className="p-4 rounded-lg border-2 border-red-200 bg-red-50">
                          <div className="flex items-center gap-2 mb-2">
                            <Wifi className="h-5 w-5 text-red-600" />
                            <h4 className="font-medium text-red-700">WiFi</h4>
                          </div>
                          <p className="text-red-600 text-sm">อินเทอร์เน็ตระหว่างเดินทาง</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
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
                          <span className="font-medium text-red-600">สมชาย ใจดี</span>
                          <div className="flex">
                            {[1,2,3,4,5].map((star) => (
                              <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">รถสะอาด อุปกรณ์ครบ เจ้าของใจดี แนะนำเลยครับ!</p>
                      </div>

                      <div className="border-b border-gray-200 pb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium text-red-600">น้องแนน</span>
                          <div className="flex">
                            {[1,2,3,4,5].map((star) => (
                              <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">ขับง่าย ประหยัดน้ำมัน เหมาะกับครอบครัวมาก</p>
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
