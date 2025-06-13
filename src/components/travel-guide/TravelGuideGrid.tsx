
import { Search, Filter, MapPin, Clock, Car } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const TravelGuideGrid = () => {
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

  return (
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
  );
};

export default TravelGuideGrid;
