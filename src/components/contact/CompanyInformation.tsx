
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const CompanyInformation = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold mb-6">Company Information</h2>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-primary mt-1" />
          <div>
            <h3 className="font-semibold">T.k.d. Fiber Co., Ltd.</h3>
            <p className="text-muted-foreground">
              888,Luangphaeng rd.<br />
              Bangkok,10520 Thailand
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Mail className="w-6 h-6 text-primary" />
          <a href="mailto:rvncamp@carryboy.com" className="hover:text-primary">
            rvncamp@carryboy.com
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Phone className="w-6 h-6 text-primary" />
          <a href="tel:0638916161" className="hover:text-primary">
            063 891 6161
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Clock className="w-6 h-6 text-primary" />
          <p>Monday - Friday: 9:00 AM - 6:00 PM (GMT+7)</p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="text-primary text-xl">🌐</span>
          </div>
          <a href="https://www.rvncamp.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            www.rvncamp.com
          </a>
        </div>

        <div className="flex justify-center mt-4">
          <img 
            src="/lovable-uploads/8508ac30-4e38-47ee-94f9-27aaea1f39d7.png" 
            alt="RVN Camp QR Code" 
            className="w-32 h-32"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
