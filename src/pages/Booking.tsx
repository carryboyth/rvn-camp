import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookingForm from "@/components/BookingForm";

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // This would typically come from an API
  const mockCampsite = {
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

  const handleSubmit = (data: any) => {
    console.log("Form submitted:", data);
    // Handle form submission
  };

  const handleSave = () => {
    console.log("Saving plan...");
    // Handle save functionality
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
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
  );
};

export default Booking;