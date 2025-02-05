import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookingForm from "@/components/BookingForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // This would typically come from an API
  const mockCampsite = {
    id: "1",
    name: "Mountain View Campsite",
    price: 1500,
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    rules: [
      "No smoking",
      "No pets allowed",
      "Quiet hours from 10 PM to 6 AM",
      "Check-out before 12 PM",
    ],
  };

  // Verify the booking exists
  React.useEffect(() => {
    if (id !== mockCampsite.id) {
      toast({
        variant: "destructive",
        title: "Booking not found",
        description: "The requested booking could not be found.",
      });
      navigate("/");
    }
  }, [id, navigate, toast]);

  const handleSubmit = (data: any) => {
    console.log("Form submitted:", data);
    // Handle form submission
    toast({
      title: "Booking submitted",
      description: "Your booking has been submitted successfully.",
    });
  };

  const handleSave = () => {
    console.log("Saving plan...");
    toast({
      title: "Plan saved",
      description: "Your booking plan has been saved.",
    });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="min-h-screen bg-background">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Complete Your Booking</h1>
            <BookingForm
              campsite={mockCampsite}
              onSubmit={handleSubmit}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;