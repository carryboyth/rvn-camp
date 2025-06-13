
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle, Send, Clock, Phone, Mail } from "lucide-react";

interface SubmissionStepProps {
  formData: any;
}

const SubmissionStep = ({ formData }: SubmissionStepProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setShowSuccessModal(true);
      console.log("Form submitted:", formData);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <>
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              ส่งข้อมูลเรียบร้อยแล้ว!
            </h2>
            <p className="text-gray-600">
              ทีมงานของเราจะตรวจสอบข้อมูลและติดต่อกลับภายใน 2-3 วันทำการ
            </p>
          </div>

          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-green-800 mb-3">ขั้นตอนถัดไป:</h3>
              <div className="space-y-2 text-sm text-green-700">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>ทีมงานจะตรวจสอบข้อมูลของคุณ</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>เจ้าหน้าที่จะโทรติดต่อเพื่อยืนยันรายละเอียด</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>เปิดใช้งานบัญชีพาร์ทเนอร์ของคุณ</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>หมายเลขอ้างอิง:</strong> RVN-{Date.now()}
            </p>
            <p className="text-xs text-blue-600 mt-1">
              กรุณาเก็บหมายเลขนี้ไว้เพื่อสอบถามสถานะ
            </p>
          </div>
        </div>

        <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                ลงทะเบียนสำเร็จ!
              </DialogTitle>
            </DialogHeader>
            <div className="text-center space-y-4">
              <p className="text-gray-600">
                ขอบคุณที่สมัครเป็นพาร์ทเนอร์กับเรา ทีมงานจะติดต่อกลับเร็วๆ นี้
              </p>
              <Button 
                onClick={() => setShowSuccessModal(false)}
                className="w-full"
              >
                เสร็จสิ้น
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          ตรวจสอบข้อมูลและส่งใบสมัคร
        </h2>
        <p className="text-gray-600">
          กรุณาตรวจสอบข้อมูลทั้งหมดให้ถูกต้องก่อนส่งใบสมัคร
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-blue-600">ข้อมูลพาร์ทเนอร์</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm">
              <span className="font-medium">ชื่อ:</span> {formData.partnerInfo?.fullName || "ไม่ระบุ"}
            </div>
            <div className="text-sm">
              <span className="font-medium">อีเมล:</span> {formData.partnerInfo?.email || "ไม่ระบุ"}
            </div>
            <div className="text-sm">
              <span className="font-medium">ประเภท:</span> {formData.partnerInfo?.userType || "ไม่ระบุ"}
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-green-600">ข้อมูลที่พัก</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm">
              <span className="font-medium">ชื่อที่พัก:</span> {formData.campsiteInfo?.campsiteNameTh || "ไม่ระบุ"}
            </div>
            <div className="text-sm">
              <span className="font-medium">จังหวัด:</span> {formData.campsiteInfo?.province || "ไม่ระบุ"}
            </div>
            <div className="text-sm">
              <span className="font-medium">ประเภท:</span> {formData.campsiteInfo?.campTypes?.length || 0} ประเภท
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-orange-600">ราคาและปฏิทิน</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm">
              <span className="font-medium">ราคาพื้นฐาน:</span> ฿{formData.pricing?.basePrice || "ไม่ระบุ"} / คืน
            </div>
            <div className="text-sm">
              <span className="font-medium">ขั้นต่ำ:</span> {formData.pricing?.minStay || "1"} คืน
            </div>
            <div className="text-sm">
              <span className="font-medium">เช็คอิน:</span> {formData.pricing?.checkinTime || "14:00"}
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-purple-600">ข้อมูลธนาคาร</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm">
              <span className="font-medium">ธนาคาร:</span> {formData.bankInfo?.bankName || "ไม่ระบุ"}
            </div>
            <div className="text-sm">
              <span className="font-medium">เจ้าของบัญชี:</span> {formData.bankInfo?.accountHolder || "ไม่ระบุ"}
            </div>
            <div className="text-sm">
              <span className="font-medium">ยอมรับเงื่อนไข:</span> {formData.bankInfo?.agreedToTerms ? "✓" : "✗"}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Information */}
      <Card className="border-gray-200 bg-gray-50">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-3">ช่องทางติดต่อหลังส่งใบสมัคร</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>อีเมล: partners@rvncamp.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>โทรศัพท์: 063-891-6161</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <div className="text-center">
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting || !formData.bankInfo?.agreedToTerms}
          className="w-full md:w-auto px-8 py-3 text-lg bg-primary hover:bg-primary/90"
        >
          {isSubmitting ? (
            <>
              <Clock className="w-4 h-4 mr-2 animate-spin" />
              กำลังส่งข้อมูล...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              ส่งใบสมัครพาร์ทเนอร์
            </>
          )}
        </Button>
        
        {!formData.bankInfo?.agreedToTerms && (
          <p className="text-xs text-red-500 mt-2">
            กรุณายอมรับข้อตกลงและเงื่อนไขก่อนส่งใบสมัคร
          </p>
        )}
      </div>
    </div>
  );
};

export default SubmissionStep;
