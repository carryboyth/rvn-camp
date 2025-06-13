
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomerInformationForm from "@/components/checkout/CustomerInformationForm";
import PaymentOptionsForm from "@/components/payment/PaymentOptionsForm";
import TripSummaryCard from "@/components/payment/TripSummaryCard";
import PaymentConfirmation from "@/components/payment/PaymentConfirmation";
import { Download, ArrowLeft, Check } from "lucide-react";

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
      customerInfo: "Customer Information",
      paymentMethod: "Payment Method",
      tripSummary: "Trip Summary",
      processPayment: "Process Payment",
      paymentSuccess: "Payment Successful!",
      downloadReceipt: "Download Receipt",
      goToTrips: "Go to My Trips",
      confirmPayment: "Confirm Payment",
      processing: "Processing...",
    },
    th: {
      title: "สรุปการชำระเงิน",
      backButton: "กลับไปที่การจอง",
      customerInfo: "ข้อมูลลูกค้า",
      paymentMethod: "วิธีการชำระเงิน",
      tripSummary: "สรุปการเดินทาง",
      processPayment: "ดำเนินการชำระเงิน",
      paymentSuccess: "ชำระเงินสำเร็จ!",
      downloadReceipt: "ดาวน์โหลดใบเสร็จ",
      goToTrips: "ไปที่แผนการเดินทางของฉัน",
      confirmPayment: "ยืนยันการชำระเงิน",
      processing: "กำลังดำเนินการ...",
    }
  };

  const t = translations[language];

  const onSubmit = async (data: PaymentForm) => {
    if (!data.termsAccepted) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and conditions",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (data.paymentMethod === "credit-card" || data.paymentMethod === "qr-code") {
        // Auto-confirm for card and QR payments
        setPaymentComplete(true);
        toast({
          title: t.paymentSuccess,
          description: "Your booking has been confirmed",
        });
      } else {
        // Bank transfer requires manual verification
        toast({
          title: "Payment Submitted",
          description: "We will verify your payment within 24 hours",
        });
        navigate("/manage-trip");
      }
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
          {/* Header with language toggle */}
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
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Customer Information */}
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-green-100 to-blue-100 rounded-t-lg">
                    <CardTitle className="text-gray-800">{t.customerInfo}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CustomerInformationForm form={form} />
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-green-100 to-blue-100 rounded-t-lg">
                    <CardTitle className="text-gray-800">{t.paymentMethod}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <PaymentOptionsForm form={form} language={language} />
                  </CardContent>
                </Card>

                {/* Submit Button */}
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
            </div>

            {/* Trip Summary Sidebar */}
            <div className="lg:col-span-1">
              <TripSummaryCard
                motorhome={motorhome}
                hotel={hotel}
                totalDays={totalDays}
                totalPrice={totalPrice}
                language={language}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentSummary;
