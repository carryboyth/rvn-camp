
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnerInformationStep from "@/components/partner/PartnerInformationStep";
import CampsiteInformationStep from "@/components/partner/CampsiteInformationStep";
import PricingCalendarStep from "@/components/partner/PricingCalendarStep";
import BankInfoStep from "@/components/partner/BankInfoStep";
import SubmissionStep from "@/components/partner/SubmissionStep";

const steps = [
  { id: 1, title: "ข้อมูลพาร์ทเนอร์", description: "Partner Information" },
  { id: 2, title: "ข้อมูลที่พัก", description: "Campsite Information" },
  { id: 3, title: "ราคาและปฏิทิน", description: "Pricing & Calendar" },
  { id: 4, title: "ข้อมูลธนาคาร", description: "Bank Info & Agreement" },
  { id: 5, title: "ส่งข้อมูล", description: "Submission" },
];

const PartnerRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    partnerInfo: {},
    campsiteInfo: {},
    pricing: {},
    bankInfo: {},
  });

  const progressPercentage = (currentStep / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepData = (stepKey: string, data: any) => {
    setFormData(prev => ({
      ...prev,
      [stepKey]: { ...prev[stepKey as keyof typeof prev], ...data }
    }));
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PartnerInformationStep
            data={formData.partnerInfo}
            onDataChange={(data) => handleStepData('partnerInfo', data)}
          />
        );
      case 2:
        return (
          <CampsiteInformationStep
            data={formData.campsiteInfo}
            onDataChange={(data) => handleStepData('campsiteInfo', data)}
          />
        );
      case 3:
        return (
          <PricingCalendarStep
            data={formData.pricing}
            onDataChange={(data) => handleStepData('pricing', data)}
          />
        );
      case 4:
        return (
          <BankInfoStep
            data={formData.bankInfo}
            onDataChange={(data) => handleStepData('bankInfo', data)}
          />
        );
      case 5:
        return <SubmissionStep formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            ลงทะเบียนพาร์ทเนอร์ที่พัก
          </h1>
          <p className="text-gray-600 text-lg">
            Campsite Partner Registration
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex flex-col items-center ${
                  step.id <= currentStep ? 'text-primary' : 'text-gray-400'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step.id <= currentStep
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step.id}
                </div>
                <div className="text-xs mt-2 text-center max-w-20">
                  <div className="font-medium">{step.title}</div>
                  <div className="text-gray-500 hidden md:block">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        {/* Form Card */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">
              {steps[currentStep - 1].title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {renderCurrentStep()}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        {currentStep < 5 && (
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              ย้อนกลับ
            </Button>
            <Button
              onClick={handleNext}
              className="flex items-center gap-2 bg-primary hover:bg-primary/90"
            >
              ถัดไป
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default PartnerRegistration;
