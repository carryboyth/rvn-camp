
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, ArrowRight } from "lucide-react";

interface PaymentConfirmationProps {
  language: 'en' | 'th';
  onDownloadReceipt: () => void;
  onGoToTrips: () => void;
  totalPrice?: number;
}

const PaymentConfirmation = ({
  language,
  onDownloadReceipt,
  onGoToTrips,
  totalPrice
}: PaymentConfirmationProps) => {
  const translations = {
    en: {
      paymentSuccess: "Payment Successful!",
      thankYou: "Thank you for your booking",
      confirmationMessage: "Your payment has been processed successfully. You will receive a confirmation email shortly.",
      bookingReference: "Booking Reference",
      amountPaid: "Amount Paid",
      downloadReceipt: "Download Receipt",
      goToTrips: "Go to My Trips",
      nextSteps: "What's Next?",
      step1: "Check your email for booking confirmation",
      step2: "Download and save your receipt",
      step3: "View your trip details in My Trips",
      step4: "Contact us if you have any questions",
    },
    th: {
      paymentSuccess: "ชำระเงินสำเร็จ!",
      thankYou: "ขอบคุณสำหรับการจอง",
      confirmationMessage: "การชำระเงินของคุณได้รับการดำเนินการเรียบร้อยแล้ว คุณจะได้รับอีเมลยืนยันในไม่ช้า",
      bookingReference: "หมายเลขการจอง",
      amountPaid: "จำนวนเงินที่ชำระ",
      downloadReceipt: "ดาวน์โหลดใบเสร็จ",
      goToTrips: "ไปที่แผนการเดินทางของฉัน",
      nextSteps: "ขั้นตอนต่อไป?",
      step1: "ตรวจสอบอีเมลสำหรับการยืนยันการจอง",
      step2: "ดาวน์โหลดและบันทึกใบเสร็จของคุณ",
      step3: "ดูรายละเอียดการเดินทางใน แผนการเดินทางของฉัน",
      step4: "ติดต่อเราหากคุณมีคำถามใดๆ",
    }
  };

  const t = translations[language];
  const bookingRef = `RVC${Date.now().toString().slice(-6)}`;

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-center py-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">{t.paymentSuccess}</CardTitle>
          <p className="text-green-100 mt-2">{t.thankYou}</p>
        </CardHeader>
        
        <CardContent className="p-8 space-y-6">
          <p className="text-gray-600 text-center">{t.confirmationMessage}</p>
          
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">{t.bookingReference}:</span>
              <span className="font-mono font-bold text-blue-600">{bookingRef}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">{t.amountPaid}:</span>
              <span className="font-bold text-green-600">฿{(totalPrice || 0).toLocaleString()}</span>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              onClick={onDownloadReceipt}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
            >
              <Download className="mr-2 h-5 w-5" />
              {t.downloadReceipt}
            </Button>
            
            <Button
              onClick={onGoToTrips}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              {t.goToTrips}
            </Button>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold mb-4 text-gray-800">{t.nextSteps}</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                <span>{t.step1}</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                <span>{t.step2}</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">3</div>
                <span>{t.step3}</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">4</div>
                <span>{t.step4}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentConfirmation;
