import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Download = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Download RVnCamp App</h1>
      <p className="text-center text-gray-600 mb-12">
        Get the RVnCamp app on your mobile device for the best experience
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>iOS App</CardTitle>
            <CardDescription>Download for iPhone and iPad</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <img 
              src="/lovable-uploads/064c497f-316d-4fbd-9300-f9927b5f4208.png" 
              alt="iOS App" 
              className="w-32 h-32 mb-4"
            />
            <Button className="w-full">
              Download for iOS
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Android App</CardTitle>
            <CardDescription>Download for Android devices</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <img 
              src="/lovable-uploads/064c497f-316d-4fbd-9300-f9927b5f4208.png" 
              alt="Android App" 
              className="w-32 h-32 mb-4"
            />
            <Button className="w-full">
              Download for Android
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Download;