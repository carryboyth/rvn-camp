
import { useState } from "react";
import { Users } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const AITripPlanner = () => {
  const [aiFormData, setAiFormData] = useState({
    destination: "",
    duration: "",
    people: "",
    budget: "",
    interests: ""
  });

  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // AI trip planning logic would go here
    console.log("AI Trip Planning Data:", aiFormData);
  };

  return (
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
                <SelectItem value="budget">ประหยัด (&lt; 10,000 บาท)</SelectItem>
                <SelectItem value="moderate">ปานกลาง (10,000-20,000 บาท)</SelectItem>
                <SelectItem value="luxury">หรูหรา (&gt; 20,000 บาท)</SelectItem>
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
  );
};

export default AITripPlanner;
