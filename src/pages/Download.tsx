import { AppleIcon, SmartphoneIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Download = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Download RVnCamp App</h1>
        <p className="text-muted-foreground">Get our mobile app for the best experience</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* iOS Card */}
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <AppleIcon className="w-8 h-8" />
              iOS App
            </CardTitle>
            <CardDescription>Download for iPhone and iPad</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-4">
              <img 
                src="/lovable-uploads/185d641b-79c4-4ff4-8a62-6492f5109a4e.png" 
                alt="RVnCamp iOS App" 
                className="w-32 h-32 object-contain"
              />
              <p className="text-sm text-muted-foreground">
                Available on the App Store
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Android Card */}
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <SmartphoneIcon className="w-8 h-8" />
              Android App
            </CardTitle>
            <CardDescription>Download for Android devices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-4">
              <img 
                src="/lovable-uploads/185d641b-79c4-4ff4-8a62-6492f5109a4e.png" 
                alt="RVnCamp Android App" 
                className="w-32 h-32 object-contain"
              />
              <p className="text-sm text-muted-foreground">
                Get it on Google Play
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-12">
        <p className="text-sm text-muted-foreground">
          Download our app to access exclusive features and manage your trips on the go
        </p>
      </div>
    </div>
  );
};

export default Download;