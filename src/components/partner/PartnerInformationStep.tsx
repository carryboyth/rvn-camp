
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Upload, User, Mail, Phone, MapPin, FileText } from "lucide-react";

interface PartnerInformationStepProps {
  data: any;
  onDataChange: (data: any) => void;
}

const PartnerInformationStep = ({ data, onDataChange }: PartnerInformationStepProps) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleInputChange = (field: string, value: string) => {
    onDataChange({ [field]: value });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      onDataChange({ idDocument: file });
    }
  };

  return (
    <div className="space-y-6">
      {/* Full Name */}
      <div className="space-y-2">
        <Label htmlFor="fullName" className="flex items-center gap-2 text-sm font-medium">
          <User className="w-4 h-4 text-primary" />
          ชื่อ-นามสกุล (Full Name) *
        </Label>
        <Input
          id="fullName"
          placeholder="กรุณาระบุชื่อ-นามสกุล"
          value={data.fullName || ""}
          onChange={(e) => handleInputChange("fullName", e.target.value)}
          className="h-12"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
          <Mail className="w-4 h-4 text-primary" />
          อีเมล (Email) *
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="example@email.com"
          value={data.email || ""}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className="h-12"
        />
      </div>

      {/* Phone Number */}
      <div className="space-y-2">
        <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium">
          <Phone className="w-4 h-4 text-primary" />
          เบอร์โทรศัพท์ (Phone Number) *
        </Label>
        <Input
          id="phone"
          placeholder="08X-XXX-XXXX"
          value={data.phone || ""}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          className="h-12"
        />
      </div>

      {/* User Type */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">ประเภทผู้ใช้งาน (User Type) *</Label>
        <RadioGroup
          value={data.userType || ""}
          onValueChange={(value) => handleInputChange("userType", value)}
          className="flex flex-col space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="individual" id="individual" />
            <Label htmlFor="individual">บุคคลธรรมดา (Individual)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="business" id="business" />
            <Label htmlFor="business">นิติบุคคล (Business)</Label>
          </div>
        </RadioGroup>
      </div>

      {/* ID Card/Business License Upload */}
      <div className="space-y-3">
        <Label className="flex items-center gap-2 text-sm font-medium">
          <FileText className="w-4 h-4 text-primary" />
          อัปโหลดบัตรประชาชน หรือ ใบอนุญาตประกอบธุรกิจ *
        </Label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <input
            type="file"
            accept="image/*,.pdf"
            onChange={handleFileUpload}
            className="hidden"
            id="idUpload"
          />
          <label htmlFor="idUpload" className="cursor-pointer">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            {uploadedFile ? (
              <p className="text-sm text-green-600">
                ไฟล์ที่เลือก: {uploadedFile.name}
              </p>
            ) : (
              <div>
                <p className="text-sm text-gray-600 mb-1">
                  คลิกเพื่ออัปโหลดไฟล์
                </p>
                <p className="text-xs text-gray-400">
                  รองรับไฟล์ JPG, PNG, PDF (ขนาดไม่เกิน 5MB)
                </p>
              </div>
            )}
          </label>
        </div>
      </div>

      {/* Address */}
      <div className="space-y-2">
        <Label htmlFor="address" className="flex items-center gap-2 text-sm font-medium">
          <MapPin className="w-4 h-4 text-primary" />
          ที่อยู่ (Address) *
        </Label>
        <textarea
          id="address"
          placeholder="กรุณาระบุที่อยู่ของคุณ"
          value={data.address || ""}
          onChange={(e) => handleInputChange("address", e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
        />
      </div>
    </div>
  );
};

export default PartnerInformationStep;
