
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface PaymentSummaryHeaderProps {
  language: 'en' | 'th';
  onLanguageChange: (lang: 'en' | 'th') => void;
  onBack: () => void;
}

const PaymentSummaryHeader = ({ language, onLanguageChange, onBack }: PaymentSummaryHeaderProps) => {
  const translations = {
    en: {
      title: "Payment Summary",
      backButton: "Back to Booking",
    },
    th: {
      title: "สรุปการชำระเงิน",
      backButton: "กลับไปที่การจอง",
    }
  };

  const t = translations[language];

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <Button
          variant="outline"
          onClick={onBack}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.backButton}
        </Button>
        <div className="flex gap-2">
          <Button
            variant={language === 'en' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onLanguageChange('en')}
          >
            EN
          </Button>
          <Button
            variant={language === 'th' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onLanguageChange('th')}
          >
            TH
          </Button>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        {t.title}
      </h1>
    </>
  );
};

export default PaymentSummaryHeader;
