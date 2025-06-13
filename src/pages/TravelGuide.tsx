
import { useState } from "react";
import { Search, Filter, MapPin, Clock, Users, Car } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";

const TravelGuide = () => {
  const [aiFormData, setAiFormData] = useState({
    destination: "",
    duration: "",
    people: "",
    budget: "",
    interests: ""
  });

  const travelGuides = [
    {
      id: 1,
      title: "เชียงใหม่ - เชียงราย",
      region: "ภาคเหนือ",
      duration: "4 วัน 3 คืน",
      vehicleType: "รถบ้านขนาดใหญ่",
      image: "/lovable-uploads/472396961693-142e6e269027.jpg",
      description: "สัมผัสธรรมชาติและวัฒนธรรมล้านนา"
    },
    {
      id: 2,
      title: "ภูเก็ต - กระบี่",
      region: "ภาคใต้",
      duration: "5 วัน 4 คืน",
      vehicleType: "รถบ้านขนาดกลาง",
      image: "/lovable-uploads/482938289607-e9573fc25ebb.jpg",
      description: "ชายหาดสวยงามและเกาะในฝัน"
    },
    {
      id: 3,
      title: "ขอนแก่น - อุดรธานี",
      region: "ภาคอีสาน",
      duration: "3 วัน 2 คืน",
      vehicleType: "รถบ้านขนาดเล็ก",
      image: "/lovable-uploads/509316975850-ff9c5deb0cd9.jpg",
      description: "ผ้าไหมและอาหารอีสานแท้"
    },
    {
      id: 4,
      title: "กาญจนบุรี - เพชรบุรี",
      region: "ภาคกลาง",
      duration: "2 วัน 1 คืน",
      vehicleType: "รถบ้านขนาดเล็ก",
      image: "/lovable-uploads/513836279014-a89f7a76ae86.jpg",
      description: "ประวัติศาสตร์และธรรมชาติใกล้กรุงเทพ"
    }
  ];

  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // AI trip planning logic would go here
    console.log("AI Trip Planning Data:", aiFormData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-luxury-pearl">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light text-luxury-dark mb-4">
              ไกด์ไลน์การเดินทาง
            </h1>
            <p className="text-lg text-luxury-silver max-w-2xl mx-auto">
              ค้นหาเส้นทางการเดินทางที่สมบูรณ์แบบ หรือให้ AI วางแผนทริปในฝันให้คุณ
            </p>
          </div>

          {/* Travel Guides Section */}
          <section className="mb-16">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
              <h2 className="text-2xl font-light text-luxury-dark">
                แผนการเดินทางแนะนำ
              </h2>
              
              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-luxury-silver h-4 w-4" />
                  <Input
                    placeholder="ค้นหาจังหวัด หรือ ภูมิภาค"
                    className="pl-10 bg-white border-luxury-silver/20"
                  />
                </div>
                <Select>
                  <SelectTrigger className="w-48 bg-white border-luxury-silver/20">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="ระยะเวลา" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2">1-2 วัน</SelectItem>
                    <SelectItem value="3-4">3-4 วัน</SelectItem>
                    <SelectItem value="5+">5+ วัน</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Travel Guide Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {travelGuides.map((guide) => (
                <div key={guide.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-luxury-red" />
                      <span className="text-sm text-luxury-silver">{guide.region}</span>
                    </div>
                    <h3 className="text-lg font-medium text-luxury-dark mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-luxury-silver mb-4">
                      {guide.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-luxury-silver">
                        <Clock className="h-4 w-4" />
                        {guide.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-luxury-silver">
                        <Car className="h-4 w-4" />
                        {guide.vehicleType}
                      </div>
                    </div>
                    <Button className="w-full bg-luxury-red hover:bg-luxury-red-dark text-white">
                      ดูรายละเอียด
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* AI Trip Planner Section */}
          <section className="bg-white rounded-xl shadow-sm p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-light text-luxury-dark mb-4">
                ให้ AI จัดทริปให้ฉัน
              </h2>
              <p className="text-luxury-silver">
                บอกความต้องการของคุณ เราจะวางแผนการเดินทางที่เหมาะสมที่สุด
              </p>
            </div>

            <form onSubmit={handleAiSubmit} className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="destination" className="text-luxury-dark">
                    คุณอยากไปที่ไหน?
                  </Label>
                  <Input
                    id="destination"
                    placeholder="เช่น เชียงใหม่, ภาคใต้, ทุกที่ในไทย"
                    value={aiFormData.destination}
                    onChange={(e) => setAiFormData({...aiFormData, destination: e.target.value})}
                    className="border-luxury-silver/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration" className="text-luxury-dark">
                    เดินทางกี่วัน?
                  </Label>
                  <Select value={aiFormData.duration} onValueChange={(value) => setAiFormData({...aiFormData, duration: value})}>
                    <SelectTrigger className="border-luxury-silver/20">
                      <SelectValue placeholder="เลือกระยะเวลา" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2">1-2 วัน</SelectItem>
                      <SelectItem value="3-4">3-4 วัน</SelectItem>
                      <SelectItem value="5-7">5-7 วัน</SelectItem>
                      <SelectItem value="7+">มากกว่า 7 วัน</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="people" className="text-luxury-dark">
                    จำนวนคนที่ไป
                  </Label>
                  <Select value={aiFormData.people} onValueChange={(value) => setAiFormData({...aiFormData, people: value})}>
                    <SelectTrigger className="border-luxury-silver/20">
                      <Users className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="เลือกจำนวนคน" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2">1-2 คน</SelectItem>
                      <SelectItem value="3-4">3-4 คน</SelectItem>
                      <SelectItem value="5-6">5-6 คน</SelectItem>
                      <SelectItem value="7+">มากกว่า 6 คน</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-luxury-dark">
                    งบประมาณโดยรวม
                  </Label>
                  <Select value={aiFormData.budget} onValueChange={(value) => setAiFormData({...aiFormData, budget: value})}>
                    <SelectTrigger className="border-luxury-silver/20">
                      <SelectValue placeholder="เลือกงบประมาณ" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="budget">ประหยัด (< 10,000 บาท)</SelectItem>
                      <SelectItem value="moderate">ปานกลาง (10,000-20,000 บาท)</SelectItem>
                      <SelectItem value="luxury">หรูหรา (> 20,000 บาท)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <Label className="text-luxury-dark">ความสนใจ</Label>
                <RadioGroup 
                  value={aiFormData.interests} 
                  onValueChange={(value) => setAiFormData({...aiFormData, interests: value})}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nature" id="nature" />
                    <Label htmlFor="nature">ธรรมชาติ</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cafe" id="cafe" />
                    <Label htmlFor="cafe">คาเฟ่</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="culture" id="culture" />
                    <Label htmlFor="culture">วัฒนธรรม</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="camping" id="camping" />
                    <Label htmlFor="camping">แคมป์กลางป่า</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="text-center">
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-luxury-red hover:bg-luxury-red-dark text-white px-12 py-3 text-lg"
                >
                  ให้ AI วางแผนให้เลย
                </Button>
              </div>
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TravelGuide;
