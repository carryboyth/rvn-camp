
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Upload, MapPin, Home, Image, Wifi, Car, Zap, ChefHat } from "lucide-react";

interface CampsiteInformationStepProps {
  data: any;
  onDataChange: (data: any) => void;
}

const campTypes = [
  { id: "tent", label: "เต็นท์ (Tent Site)" },
  { id: "campervan", label: "รถบ้าน (Campervan Site)" },
  { id: "house", label: "บ้านพัก (House)" },
  { id: "cabin", label: "กระท่อม (Cabin)" },
];

const facilities = [
  { id: "toilet", label: "ห้องน้ำ", icon: Home },
  { id: "electricity", label: "ไฟฟ้า", icon: Zap },
  { id: "parking", label: "ที่จอดรถ", icon: Car },
  { id: "wifi", label: "Wi-Fi", icon: Wifi },
  { id: "kitchen", label: "ครัว", icon: ChefHat },
  { id: "shower", label: "ฝักบัว", icon: Home },
];

const CampsiteInformationStep = ({ data, onDataChange }: CampsiteInformationStepProps) => {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);

  const handleInputChange = (field: string, value: string) => {
    onDataChange({ [field]: value });
  };

  const handleCheckboxChange = (field: string, checked: boolean) => {
    const currentTypes = data.campTypes || [];
    if (checked) {
      onDataChange({ campTypes: [...currentTypes, field] });
    } else {
      onDataChange({ campTypes: currentTypes.filter((type: string) => type !== field) });
    }
  };

  const handleFacilityChange = (facility: string, checked: boolean) => {
    const currentFacilities = data.facilities || [];
    if (checked) {
      onDataChange({ facilities: [...currentFacilities, facility] });
    } else {
      onDataChange({ facilities: currentFacilities.filter((f: string) => f !== facility) });
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadedImages(prev => [...prev, ...files]);
    onDataChange({ images: [...uploadedImages, ...files] });
  };

  return (
    <div className="space-y-6">
      {/* Campsite Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="campsiteNameTh" className="text-sm font-medium">
            ชื่อที่พัก (ภาษาไทย) *
          </Label>
          <Input
            id="campsiteNameTh"
            placeholder="ชื่อที่พักภาษาไทย"
            value={data.campsiteNameTh || ""}
            onChange={(e) => handleInputChange("campsiteNameTh", e.target.value)}
            className="h-12"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="campsiteNameEn" className="text-sm font-medium">
            ชื่อที่พัก (ภาษาอังกฤษ) *
          </Label>
          <Input
            id="campsiteNameEn"
            placeholder="Campsite Name (English)"
            value={data.campsiteNameEn || ""}
            onChange={(e) => handleInputChange("campsiteNameEn", e.target.value)}
            className="h-12"
          />
        </div>
      </div>

      {/* Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="province" className="flex items-center gap-2 text-sm font-medium">
            <MapPin className="w-4 h-4 text-primary" />
            จังหวัด (Province) *
          </Label>
          <select
            id="province"
            value={data.province || ""}
            onChange={(e) => handleInputChange("province", e.target.value)}
            className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">เลือกจังหวัด</option>
            <option value="bangkok">กรุงเทพมหานคร</option>
            <option value="chiangmai">เชียงใหม่</option>
            <option value="phuket">ภูเก็ต</option>
            <option value="krabi">กระบี่</option>
            <option value="kanchanaburi">กาญจนบุรี</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="district" className="text-sm font-medium">
            อำเภอ (District) *
          </Label>
          <Input
            id="district"
            placeholder="ระบุอำเภอ"
            value={data.district || ""}
            onChange={(e) => handleInputChange("district", e.target.value)}
            className="h-12"
          />
        </div>
      </div>

      {/* Campsite Type */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">ประเภทที่พัก (Campsite Type) *</Label>
        <div className="grid grid-cols-2 gap-3">
          {campTypes.map((type) => (
            <div key={type.id} className="flex items-center space-x-2">
              <Checkbox
                id={type.id}
                checked={(data.campTypes || []).includes(type.id)}
                onCheckedChange={(checked) => handleCheckboxChange(type.id, checked as boolean)}
              />
              <Label htmlFor={type.id} className="text-sm">
                {type.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Image Upload */}
      <div className="space-y-3">
        <Label className="flex items-center gap-2 text-sm font-medium">
          <Image className="w-4 h-4 text-primary" />
          อัปโหลดรูปภาพที่พัก *
        </Label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="hidden"
            id="imageUpload"
          />
          <label htmlFor="imageUpload" className="cursor-pointer">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">
              คลิกเพื่ออัปโหลดรูปภาพ (หลายไฟล์)
            </p>
            <p className="text-xs text-gray-400">
              รองรับไฟล์ JPG, PNG (ขนาดไม่เกิน 5MB ต่อไฟล์)
            </p>
          </label>
        </div>
        {uploadedImages.length > 0 && (
          <div className="grid grid-cols-4 gap-2 mt-4">
            {uploadedImages.map((file, index) => (
              <div key={index} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-xs text-gray-600">{file.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Facilities */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">สิ่งอำนวยความสะดวก (Facilities)</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {facilities.map((facility) => (
            <div key={facility.id} className="flex items-center space-x-2">
              <Checkbox
                id={facility.id}
                checked={(data.facilities || []).includes(facility.id)}
                onCheckedChange={(checked) => handleFacilityChange(facility.id, checked as boolean)}
              />
              <Label htmlFor={facility.id} className="flex items-center gap-2 text-sm">
                <facility.icon className="w-4 h-4 text-primary" />
                {facility.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampsiteInformationStep;
