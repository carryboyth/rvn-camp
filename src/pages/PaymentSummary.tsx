
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import PaymentSummaryLayout from "@/components/payment/PaymentSummaryLayout";
import PaymentSummaryHeader from "@/components/payment/PaymentSummaryHeader";
import PaymentActions from "@/components/payment/PaymentActions";
import TripSummaryCard from "@/components/payment/TripSummaryCard";
import PaymentConfirmation from "@/components/payment/PaymentConfirmation";

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
      paymentSuccess: "Payment Successful!",
    },
    th: {
      paymentSuccess: "ชำระเงินสำเร็จ!",
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

  const handleCancel = () => {
    navigate("/manage-trip");
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (paymentComplete) {
    return (
      <PaymentSummaryLayout>
        <PaymentConfirmation
          language={language}
          onDownloadReceipt={handleDownloadReceipt}
          onGoToTrips={() => navigate("/manage-trip")}
          totalPrice={totalPrice}
        />
      </PaymentSummaryLayout>
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
    <PaymentSummaryLayout>
      <PaymentSummaryHeader
        language={language}
        onLanguageChange={setLanguage}
        onBack={handleBack}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <TripSummaryCard
            motorhome={motorhome}
            hotel={hotel}
            totalDays={totalDays}
            totalPrice={totalPrice}
            language={language}
          />
        </div>

        <PaymentActions
          form={form}
          language={language}
          isProcessing={isProcessing}
          onSubmit={onSubmit}
          onSavePlan={handleSavePlan}
          onCancel={handleCancel}
        />
      </div>
    </PaymentSummaryLayout>
  );
};

export default PaymentSummary;
