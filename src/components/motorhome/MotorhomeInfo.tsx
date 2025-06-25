
import React from "react";
import { Shield, Award, Users, Calendar } from "lucide-react";

interface MotorhomeInfoProps {
  motorhome: {
    description: string;
    pricing: {
      basePrice: number;
      insurance: number;
      cleaning: number;
      minDays: number;
    };
    host: {
      name: string;
      avatar: string;
      joinedDate: string;
      responseRate: number;
    };
  };
}

export const MotorhomeInfo = ({ motorhome }: MotorhomeInfoProps) => {
  return (
    <div className="space-y-6">
      {/* Description */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-xl font-semibold mb-4">เกี่ยวกับรถคันนี้</h2>
        <p className="text-gray-700 leading-relaxed">{motorhome.description}</p>
      </div>

      {/* Pricing Details */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-xl font-semibold mb-4">รายละเอียดราคา</h2>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">ราคาต่อวัน</span>
            <span className="font-medium">{motorhome.pricing.basePrice.toLocaleString()} บาท</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">ประกันภัย</span>
            <span className="font-medium">{motorhome.pricing.insurance.toLocaleString()} บาท</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">ค่าทำความสะอาด</span>
            <span className="font-medium">{motorhome.pricing.cleaning.toLocaleString()} บาท</span>
          </div>
          <hr />
          <div className="text-sm text-gray-600">
            <p>• ระยะทางไม่จำกัด</p>
            <p>• บริการช่วยเหลือ 24 ชั่วโมง</p>
            <p>• ประกันครอบคลุม</p>
            <p>• การเช่าขั้นต่ำ {motorhome.pricing.minDays} วัน</p>
          </div>
        </div>
      </div>

      {/* Host Information */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-xl font-semibold mb-4">เจ้าของรถ</h2>
        <div className="flex items-start gap-4">
          <img
            src={motorhome.host.avatar}
            alt={motorhome.host.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{motorhome.host.name}</h3>
            <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>เข้าร่วมเมื่อ {motorhome.host.joinedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>ตอบกลับ {motorhome.host.responseRate}%</span>
              </div>
            </div>
            <div className="flex gap-2 mt-3">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs flex items-center gap-1">
                <Shield className="h-3 w-3" />
                เจ้าของที่ได้รับการยืนยัน
              </span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs flex items-center gap-1">
                <Award className="h-3 w-3" />
                Super Host
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-xl font-semibold mb-4">คำถามที่พบบ่อย</h2>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">ต้องใช้ใบขับขี่อะไร?</h4>
            <p className="text-sm text-gray-600">ใบขับขี่ประเภท 1 หรือใบขับขี่นานาชาติ</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">ขับในจังหวัดไหนได้บ้าง?</h4>
            <p className="text-sm text-gray-600">สามารถขับได้ทุกจังหวัดในประเทศไทย</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">ถ้ามีปัญหาระหว่างทางติดต่อใคร?</h4>
            <p className="text-sm text-gray-600">โทรหาเราได้ 24 ชั่วโมง หรือติดต่อผ่านแอป</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">มีเครื่องใช้ไฟฟ้าให้ไหม?</h4>
            <p className="text-sm text-gray-600">มีระบบไฟฟ้าในตัว พร้อมจานชาม และเครื่องครัวครบชุด</p>
          </div>
        </div>
      </div>
    </div>
  );
};
