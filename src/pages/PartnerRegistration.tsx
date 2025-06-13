
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnerInformationStep from "@/components/partner/PartnerInformationStep";
import CampsiteInformationStep from "@/components/partner/CampsiteInformationStep";
import PricingCalendarStep from "@/components/partner/PricingCalendarStep";
import BankInfoStep from "@/components/partner/BankInfoStep";
import SubmissionStep from "@/components/partner/SubmissionStep";

const steps = [
  { id: 1, title: "ข้อมูลพาร์ทเนอร์", description: "Partner Information", icon: "👤" },
  { id: 2, title: "ข้อมูลที่พัก", description: "Campsite Information", icon: "🏕️" },
  { id: 3, title: "ราคาและปฏิทิน", description: "Pricing & Calendar", icon: "💰" },
  { id: 4, title: "ข้อมูลธนาคาร", description: "Bank Info & Agreement", icon: "🏦" },
  { id: 5, title: "ส่งข้อมูล", description: "Submission", icon: "📝" },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 font-kanit">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full mb-6 shadow-lg">
            <span className="text-3xl">🏕️</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-600 to-accent bg-clip-text text-transparent mb-4">
            ลงทะเบียนพาร์ทเนอร์ที่พัก
          </h1>
          <p className="text-slate-600 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            เข้าร่วมกับเราเพื่อนำเสนอที่พักสุดพิเศษให้กับนักท่องเที่ยว
          </p>
          <div className="mt-4 text-sm text-slate-500">
            Campsite Partner Registration
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-12 animate-slide-in">
          <div className="flex justify-between items-center mb-8 overflow-x-auto pb-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col items-center min-w-0 flex-1 ${
                  index !== steps.length - 1 ? 'relative' : ''
                }`}
              >
                {/* Connector Line */}
                {index !== steps.length - 1 && (
                  <div className="absolute top-6 left-1/2 w-full h-0.5 -z-10 hidden md:block">
                    <div
                      className={`h-full transition-all duration-500 ${
                        step.id < currentStep
                          ? 'bg-gradient-to-r from-primary to-accent'
                          : 'bg-slate-200'
                      }`}
                    />
                  </div>
                )}
                
                {/* Step Circle */}
                <div
                  className={`relative w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-all duration-300 shadow-lg ${
                    step.id < currentStep
                      ? 'bg-gradient-to-r from-primary to-accent text-white'
                      : step.id === currentStep
                      ? 'bg-white border-4 border-primary text-primary shadow-primary/25'
                      : 'bg-white border-2 border-slate-200 text-slate-400'
                  }`}
                >
                  {step.id < currentStep ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <span>{step.icon}</span>
                  )}
                </div>
                
                {/* Step Labels */}
                <div className="text-center mt-3 max-w-24 md:max-w-none">
                  <div
                    className={`font-semibold text-sm md:text-base transition-colors ${
                      step.id <= currentStep ? 'text-primary' : 'text-slate-400'
                    }`}
                  >
                    {step.title}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 hidden md:block">
                    {step.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Progress Bar */}
          <div className="relative">
            <Progress 
              value={progressPercentage} 
              className="h-3 bg-slate-200"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-500" 
                 style={{ width: `${progressPercentage}%` }} />
          </div>
          <div className="text-center mt-2 text-sm text-slate-600 font-medium">
            ขั้นตอน {currentStep} จาก {steps.length}
          </div>
        </div>

        {/* Form Card */}
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm animate-fade-up">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b border-slate-100">
            <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
              <span className="text-2xl">{steps[currentStep - 1].icon}</span>
              {steps[currentStep - 1].title}
            </CardTitle>
            <p className="text-slate-600 font-medium">
              {steps[currentStep - 1].description}
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="animate-fade-up">
              {renderCurrentStep()}
            </div>
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        {currentStep < 5 && (
          <div className="flex justify-between mt-8 animate-fade-up">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="flex items-center gap-2 px-6 py-3 font-semibold border-2 hover:border-primary hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              ย้อนกลับ
            </Button>
            <Button
              onClick={handleNext}
              className="flex items-center gap-2 px-8 py-3 font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all"
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
