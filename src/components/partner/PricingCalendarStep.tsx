
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Calendar, Clock } from "lucide-react";

interface PricingCalendarStepProps {
  data: any;
  onDataChange: (data: any) => void;
}

const PricingCalendarStep = ({ data, onDataChange }: PricingCalendarStepProps) => {
  const handleInputChange = (field: string, value: string) => {
    onDataChange({ [field]: value });
  };

  return (
    <div className="space-y-6">
      {/* Base Price */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <DollarSign className="w-5 h-5 text-primary" />
            ราคาพื้นฐาน (Base Pricing)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="basePrice" className="text-sm font-medium">
              ราคาพื้นฐานต่อคืน (Base Price per Night) *
            </Label>
            <div className="relative">
              <Input
                id="basePrice"
                type="number"
                placeholder="500"
                value={data.basePrice || ""}
                onChange={(e) => handleInputChange("basePrice", e.target.value)}
                className="h-12 pl-12"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                ฿
              </span>
            </div>
            <p className="text-xs text-gray-500">
              ราคานี้จะเป็นราคาพื้นฐานต่อคืน คุณสามารถปรับราคาตามช่วงเวลาได้ในภายหลัง
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="weekendPrice" className="text-sm font-medium">
                ราคาวันหยุดสุดสัปดาห์ (Weekend Price)
              </Label>
              <div className="relative">
                <Input
                  id="weekendPrice"
                  type="number"
                  placeholder="600"
                  value={data.weekendPrice || ""}
                  onChange={(e) => handleInputChange("weekendPrice", e.target.value)}
                  className="h-12 pl-12"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  ฿
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="holidayPrice" className="text-sm font-medium">
                ราคาวันหยุดนักขัตฤกษ์ (Holiday Price)
              </Label>
              <div className="relative">
                <Input
                  id="holidayPrice"
                  type="number"
                  placeholder="700"
                  value={data.holidayPrice || ""}
                  onChange={(e) => handleInputChange("holidayPrice", e.target.value)}
                  className="h-12 pl-12"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  ฿
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Calendar Settings */}
      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Calendar className="w-5 h-5 text-green-600" />
            การตั้งค่าปฏิทิน (Calendar Settings)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-medium text-green-800 mb-2">ตั้งค่าความพร้อมให้บริการ</h4>
            <p className="text-sm text-green-700 mb-4">
              หากคุณส่งข้อมูลลงทะเบียนแล้ว ทีมงานจะติดต่อกลับเพื่อช่วยตั้งค่าปฏิทินความพร้อมให้บริการของคุณ
            </p>
            <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-100">
              <Calendar className="w-4 h-4 mr-2" />
              ดูตัวอย่างปฏิทิน
            </Button>
          </div>

          <div className="space-y-2">
            <Label htmlFor="minStay" className="text-sm font-medium">
              จำนวนคืนขั้นต่ำ (Minimum Stay)
            </Label>
            <select
              id="minStay"
              value={data.minStay || "1"}
              onChange={(e) => handleInputChange("minStay", e.target.value)}
              className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="1">1 คืน</option>
              <option value="2">2 คืน</option>
              <option value="3">3 คืน</option>
              <option value="7">7 คืน</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="maxStay" className="text-sm font-medium">
              จำนวนคืนสูงสุด (Maximum Stay)
            </Label>
            <select
              id="maxStay"
              value={data.maxStay || "30"}
              onChange={(e) => handleInputChange("maxStay", e.target.value)}
              className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="7">7 คืน</option>
              <option value="14">14 คืน</option>
              <option value="30">30 คืน</option>
              <option value="unlimited">ไม่จำกัด</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Check-in/out Times */}
      <Card className="border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Clock className="w-5 h-5 text-blue-600" />
            เวลาเช็คอิน-เช็คเอาท์ (Check-in/out Times)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="checkinTime" className="text-sm font-medium">
                เวลาเช็คอิน (Check-in Time)
              </Label>
              <Input
                id="checkinTime"
                type="time"
                value={data.checkinTime || "14:00"}
                onChange={(e) => handleInputChange("checkinTime", e.target.value)}
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="checkoutTime" className="text-sm font-medium">
                เวลาเช็คเอาท์ (Check-out Time)
              </Label>
              <Input
                id="checkoutTime"
                type="time"
                value={data.checkoutTime || "11:00"}
                onChange={(e) => handleInputChange("checkoutTime", e.target.value)}
                className="h-12"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PricingCalendarStep;
