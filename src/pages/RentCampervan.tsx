import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const RentCampervan = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Rent a Campervan</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Available Campervans</h2>
          <p className="text-muted-foreground">
            Choose from our selection of modern, fully-equipped campervans for your next adventure.
          </p>
          
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Luxury RV 2024</h3>
              <p className="text-sm text-muted-foreground">Sleeps 4 • Kitchen • Bathroom</p>
              <p className="text-primary font-bold mt-2">$299.99/day</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Compact Camper</h3>
              <p className="text-sm text-muted-foreground">Sleeps 2 • Basic Kitchen</p>
              <p className="text-primary font-bold mt-2">$199.99/day</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Family Motorhome</h3>
              <p className="text-sm text-muted-foreground">Sleeps 6 • Full Kitchen • 2 Bathrooms</p>
              <p className="text-primary font-bold mt-2">$399.99/day</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Rental Information</h2>
          <div className="border rounded-lg p-4 space-y-4">
            <div>
              <h3 className="font-semibold">Requirements</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                <li>Valid driver's license</li>
                <li>Minimum age: 21 years</li>
                <li>Credit card for deposit</li>
                <li>Insurance coverage</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold">Included in Rental</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                <li>Comprehensive insurance</li>
                <li>24/7 roadside assistance</li>
                <li>Basic camping equipment</li>
                <li>Unlimited mileage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-end">
        <Button
          asChild
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Link to="/motorhome-summary">Check Out</Link>
        </Button>
      </div>
    </div>
  );
};

export default RentCampervan;