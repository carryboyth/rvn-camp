
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, CreditCard, Building, FileText, Shield } from "lucide-react";

interface BankInfoStepProps {
  data: any;
  onDataChange: (data: any) => void;
}

const banks = [
  "ธนาคารกสิกรไทย",
  "ธนาคารกรุงไทย",
  "ธนาคารกรุงเทพ",
  "ธนาคารไทยพาณิชย์",
  "ธนาคารกรุงศรีอยุธยา",
  "ธนาคารทหารไทยธนชาต",
  "ธนาคารออมสิน",
  "ธนาคารอาคารสงเคราะห์",
];

const BankInfoStep = ({ data, onDataChange }: BankInfoStepProps) => {
  const [uploadedPassbook, setUploadedPassbook] = useState<File | null>(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    onDataChange({ [field]: value });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedPassbook(file);
      onDataChange({ passbook: file });
    }
  };

  const handleTermsChange = (checked: boolean) => {
    setAgreedToTerms(checked);
    onDataChange({ agreedToTerms: checked });
  };

  return (
    <div className="space-y-6">
      {/* Bank Information */}
      <Card className="border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <CreditCard className="w-5 h-5 text-blue-600" />
            ข้อมูลบัญชีธนาคาร (Bank Account Information)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="accountHolder" className="text-sm font-medium">
              ชื่อเจ้าของบัญชี (Account Holder Name) *
            </Label>
            <Input
              id="accountHolder"
              placeholder="ชื่อเจ้าของบัญชีตามที่ปรากฏในสมุดบัญชี"
              value={data.accountHolder || ""}
              onChange={(e) => handleInputChange("accountHolder", e.target.value)}
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="accountNumber" className="text-sm font-medium">
              หมายเลขบัญชี (Account Number) *
            </Label>
            <Input
              id="accountNumber"
              placeholder="XXX-X-XXXXX-X"
              value={data.accountNumber || ""}
              onChange={(e) => handleInputChange("accountNumber", e.target.value)}
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bankName" className="flex items-center gap-2 text-sm font-medium">
              <Building className="w-4 h-4 text-primary" />
              ธนาคาร (Bank Name) *
            </Label>
            <select
              id="bankName"
              value={data.bankName || ""}
              onChange={(e) => handleInputChange("bankName", e.target.value)}
              className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">เลือกธนาคาร</option>
              {banks.map((bank) => (
                <option key={bank} value={bank}>
                  {bank}
                </option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Passbook Upload */}
      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <FileText className="w-5 h-5 text-green-600" />
            อัปโหลดสมุดบัญชี (Passbook Upload)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Label className="text-sm font-medium">
              อัปโหลดหน้าแรกของสมุดบัญชี หรือ เอกสารยืนยันบัญชี *
            </Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileUpload}
                className="hidden"
                id="passbookUpload"
              />
              <label htmlFor="passbookUpload" className="cursor-pointer">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                {uploadedPassbook ? (
                  <p className="text-sm text-green-600">
                    ไฟล์ที่เลือก: {uploadedPassbook.name}
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
        </CardContent>
      </Card>

      {/* Terms and Conditions */}
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Shield className="w-5 h-5 text-orange-600" />
            ข้อตกลงและเงื่อนไข (Terms and Conditions)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-medium text-orange-800 mb-2">ข้อตกลงการใช้บริการ</h4>
            <div className="text-sm text-orange-700 space-y-2">
              <p>• ค่าคมมิชชั่น: RVnCamp จะหักค่าคมมิชชั่น 10% จากการจองแต่ละครั้ง</p>
              <p>• การเก็บเงิน: เงินจะถูกโอนเข้าบัญชีของคุณทุกวันจันทร์ของสัปดาห์</p>
              <p>• การยกเลิก: ลูกค้าสามารถยกเลิกได้ตามนโยบายที่คุณกำหนด</p>
              <p>• คุณภาพ: คุณต้องรักษาคุณภาพของที่พักให้เป็นไปตามมาตรฐาน</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="terms"
              checked={agreedToTerms}
              onCheckedChange={handleTermsChange}
              className="mt-1"
            />
            <Label htmlFor="terms" className="text-sm leading-5">
              ฉันได้อ่านและยอมรับ{" "}
              <span className="text-primary underline cursor-pointer">
                ข้อตกลงและเงื่อนไขการใช้บริการ
              </span>{" "}
              และ{" "}
              <span className="text-primary underline cursor-pointer">
                นโยบายความเป็นส่วนตัว
              </span>{" "}
              ของ RVnCamp *
            </Label>
          </div>

          {!agreedToTerms && (
            <p className="text-xs text-red-500">
              กรุณายอมรับข้อตกลงและเงื่อนไขเพื่อดำเนินการต่อ
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BankInfoStep;
