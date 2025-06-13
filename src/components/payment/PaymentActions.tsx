
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Check, Save, X } from "lucide-react";

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

interface PaymentActionsProps {
  form: UseFormReturn<PaymentForm>;
  language: 'en' | 'th';
  isProcessing: boolean;
  onSubmit: (data: PaymentForm) => void;
  onSavePlan: () => void;
  onCancel: () => void;
}

const PaymentActions = ({ 
  form, 
  language, 
  isProcessing, 
  onSubmit, 
  onSavePlan, 
  onCancel 
}: PaymentActionsProps) => {
  const translations = {
    en: {
      confirmPayment: "Confirm and Pay",
      savePlan: "Save Trip Plan",
      cancel: "Cancel",
      processing: "Processing...",
    },
    th: {
      confirmPayment: "ยืนยันและชำระเงิน",
      savePlan: "บันทึกแผนการเดินทาง",
      cancel: "ยกเลิก",
      processing: "กำลังดำเนินการ...",
    }
  };

  const t = translations[language];

  return (
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
        onClick={onSavePlan}
        className="w-full gap-2 py-4 text-lg"
      >
        <Save className="h-5 w-5" />
        {t.savePlan}
      </Button>

      <Button
        type="button"
        variant="outline"
        onClick={onCancel}
        className="w-full gap-2 py-4 text-lg"
      >
        <X className="h-5 w-5" />
        {t.cancel}
      </Button>
    </div>
  );
};

export default PaymentActions;
