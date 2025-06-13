
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Form } from "@/components/ui/form";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TripSummaryCard from "@/components/payment/TripSummaryCard";
import PaymentConfirmation from "@/components/payment/PaymentConfirmation";
import { Download, ArrowLeft, Check, Save, X } from "lucide-react";

interface PaymentForm {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  passportNumber: string;
  paymentMethod: "credit-card" | "qr-code" | "bank-transfer";
  cardNumber?: string;
  securityCode?: string;
  cardholderName?: string;
  expiryDate?: string;
  bankSlip?: FileList;
  termsAccepted: boolean;
}

const PaymentSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const form = useForm<PaymentForm>();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [language, setLanguage] = useState<'en' | 'th'>('en');
  
  const { motorhome, hotel, totalPrice, totalDays } = location.state || {};

  const translations = {
    en: {
      title: "Payment Summary",
      backButton: "Back to Booking",
      tripSummary: "Trip Summary",
      processPayment: "Process Payment",
      paymentSuccess: "Payment Successful!",
      downloadReceipt: "Download Receipt",
      goToTrips: "Go to My Trips",
      confirmPayment: "Confirm and Pay",
      savePlan: "Save Trip Plan",
      cancel: "Cancel",
      processing: "Processing...",
    },
    th: {
      title: "สรุปการชำระเงิน",
      backButton: "กลับไปที่การจอง",
      tripSummary: "สรุปการเดินทาง",
      processPayment: "ดำเนินการชำระเงิน",
      paymentSuccess: "ชำระเงินสำเร็จ!",
      downloadReceipt: "ดาวน์โหลดใบเสร็จ",
      goToTrips: "ไปที่แผนการเดินทางของฉัน",
      confirmPayment: "ยืนยันและชำระเงิน",
      savePlan: "บันทึกแผนการเดินทาง",
      cancel: "ยกเลิก",
      processing: "กำลังดำเนินการ...",
    }
  };

  const t = translations[language];

  const onSubmit = async (data: PaymentForm) => {
    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setPaymentComplete(true);
      toast({
        title: t.paymentSuccess,
        description: "Your booking has been confirmed",
      });
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "Please try again or contact support",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownloadReceipt = () => {
    toast({
      title: "Receipt Downloaded",
      description: "Your receipt has been downloaded successfully",
    });
  };

  const handleSavePlan = () => {
    toast({
      title: "Save Travel Plan",
      description: "Please login to save your travel plan",
    });
    navigate("/login");
  };

  if (paymentComplete) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-blue-50">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <PaymentConfirmation
            language={language}
            onDownloadReceipt={handleDownloadReceipt}
            onGoToTrips={() => navigate("/manage-trip")}
            totalPrice={totalPrice}
          />
        </main>
        <Footer />
      </div>
    );
  }

  if (!motorhome && !hotel) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <h1 className="text-2xl font-bold mb-4">No Booking Found</h1>
        <Button onClick={() => navigate("/book-motorhome")}>
          Start New Booking
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-blue-50" style={{ fontFamily: 'Kanit, sans-serif' }}>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header with Back button and language toggle */}
          <div className="flex justify-between items-center mb-6">
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.backButton}
            </Button>
            <div className="flex gap-2">
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('en')}
              >
                EN
              </Button>
              <Button
                variant={language === 'th' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('th')}
              >
                TH
              </Button>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            {t.title}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Trip Summary - Now takes full left side */}
            <div className="lg:col-span-2">
              <TripSummaryCard
                motorhome={motorhome}
                hotel={hotel}
                totalDays={totalDays}
                totalPrice={totalPrice}
                language={language}
              />
            </div>

            {/* Action Buttons - Right side */}
            <div className="lg:col-span-1 space-y-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <Button
                    type="submit"
                    className="w-full py-4 text-lg bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        {t.processing}
                      </>
                    ) : (
                      <>
                        <Check className="mr-2 h-5 w-5" />
                        {t.confirmPayment}
                      </>
                    )}
                  </Button>
                </form>
              </Form>

              <Button
                type="button"
                variant="secondary"
                onClick={handleSavePlan}
                className="w-full gap-2 py-4 text-lg"
              >
                <Save className="h-5 w-5" />
                {t.savePlan}
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/manage-trip")}
                className="w-full gap-2 py-4 text-lg"
              >
                <X className="h-5 w-5" />
                {t.cancel}
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentSummary;
