
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { ArrowLeft, CreditCard, Save, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomerInformationForm from "@/components/checkout/CustomerInformationForm";
import PaymentForm from "@/components/checkout/PaymentForm";
import BookingSummary from "@/components/checkout/BookingSummary";
import PriceSummary from "@/components/checkout/PriceSummary";

interface CustomerDetailsForm {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  passportNumber: string;
  paymentMethod: "credit-card" | "bank-transfer";
  cardNumber?: string;
  securityCode?: string;
  cardholderName?: string;
  expiryDate?: string;
  termsAccepted: boolean;
}

const CustomerDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const form = useForm<CustomerDetailsForm>();
  
  const { motorhome, hotel, totalPrice, totalDays } = location.state || {};

  const onSubmit = (data: CustomerDetailsForm) => {
    if (!data.termsAccepted) {
      toast({
        title: "Terms and Conditions Required",
        description: "Please accept the terms and conditions to proceed",
        variant: "destructive",
      });
      return;
    }

    console.log("Form submitted:", data);
    toast({
      title: "Booking Confirmed",
      description: "Your booking has been processed successfully",
    });
    navigate("/manage-trip");
  };

  const handleSavePlan = () => {
    toast({
      title: "Save Travel Plan",
      description: "Please login to save your travel plan",
    });
    navigate("/login");
  };

  if (!motorhome && !hotel) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">No Booking Found</h1>
        <Button onClick={() => navigate("/book-motorhome")}>
          Start New Booking
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-3xl font-bold">Confirm Booking</h1>

            <BookingSummary motorhome={motorhome} hotel={hotel} />

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CustomerInformationForm form={form} />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Payment Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PaymentForm form={form} />
                  </CardContent>
                </Card>

                <FormField
                  control={form.control}
                  name="termsAccepted"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Accept Terms and Conditions
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <div className="flex flex-wrap gap-4">
                  <Button type="submit" className="flex-1">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Confirm and Pay
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate(-1)}
                    className="gap-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={handleSavePlan}
                    className="gap-2"
                  >
                    <Save className="h-4 w-4" />
                    Save Plan
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => navigate("/manage-trip")}
                    className="gap-2"
                  >
                    <X className="h-4 w-4" />
                    Cancel
                  </Button>
                </div>
              </form>
            </Form>
          </div>

          <div className="lg:col-span-1">
            <PriceSummary 
              motorhome={motorhome} 
              hotel={hotel} 
              totalDays={totalDays}
              totalPrice={totalPrice}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerDetails;

