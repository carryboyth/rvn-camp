
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, CreditCard, Building, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  
  const { motorhome, hotel } = location.state || {};

  const onSubmit = (data: CustomerDetailsForm) => {
    if (!data.termsAccepted) {
      toast({
        title: "Terms & Conditions Required",
        description: "Please accept the terms and conditions to proceed.",
        variant: "destructive",
      });
      return;
    }

    console.log("Form submitted:", data);
    toast({
      title: "Booking Confirmed",
      description: "Your booking has been successfully processed.",
    });
    navigate("/manage-trip");
  };

  const calculateTotal = () => {
    const motorhomeTotal = motorhome?.price || 0;
    const hotelTotal = hotel?.price || 0;
    return motorhomeTotal + hotelTotal;
  };

  if (!motorhome && !hotel) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">No Booking Selected</h1>
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
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-3xl font-bold">Complete Your Booking</h1>

            {/* Booking Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {motorhome && (
                  <div className="space-y-2">
                    <h3 className="font-semibold">Motorhome Details</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Pick-up Location</p>
                        <p>{motorhome.pickupLocation}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Drop-off Location</p>
                        <p>{motorhome.dropoffLocation}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Start Date</p>
                        <p>{motorhome.startDate}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">End Date</p>
                        <p>{motorhome.endDate}</p>
                      </div>
                    </div>
                  </div>
                )}
                {hotel && (
                  <div className="space-y-2">
                    <h3 className="font-semibold">Hotel Details</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Check-in Date</p>
                        <p>{hotel.checkIn}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Check-out Date</p>
                        <p>{hotel.checkOut}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Location</p>
                        <p>{hotel.location}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Room Type</p>
                        <p>{hotel.roomType}</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+66 123456789" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john.doe@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="passportNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Passport Number</FormLabel>
                          <FormControl>
                            <Input placeholder="AB1234567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>

                {/* Payment Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="paymentMethod"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="space-y-4"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="credit-card" id="credit-card" />
                                <label
                                  htmlFor="credit-card"
                                  className="flex items-center gap-2 cursor-pointer"
                                >
                                  <CreditCard className="h-4 w-4" />
                                  Credit Card
                                </label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                                <label
                                  htmlFor="bank-transfer"
                                  className="flex items-center gap-2 cursor-pointer"
                                >
                                  <Building className="h-4 w-4" />
                                  Bank Transfer
                                </label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {form.watch("paymentMethod") === "credit-card" && (
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="cardNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Card Number</FormLabel>
                              <FormControl>
                                <Input placeholder="1234 5678 9012 3456" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="securityCode"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Security Code (CVV)</FormLabel>
                                <FormControl>
                                  <Input
                                    type="password"
                                    maxLength={4}
                                    placeholder="123"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="expiryDate"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Expiry Date</FormLabel>
                                <FormControl>
                                  <Input placeholder="MM/YY" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="cardholderName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Cardholder Name</FormLabel>
                              <FormControl>
                                <Input placeholder="JOHN DOE" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Terms & Conditions */}
                <FormField
                  control={form.control}
                  name="termsAccepted"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I accept the terms and conditions
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button type="submit" className="flex-1">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Confirm & Pay
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

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Price Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {motorhome && (
                  <div>
                    <h3 className="font-medium">Motorhome Rental</h3>
                    <p className="text-muted-foreground">{motorhome.name}</p>
                    <p className="text-muted-foreground">
                      ฿{motorhome.price.toLocaleString()} / night
                    </p>
                  </div>
                )}
                {hotel && (
                  <div>
                    <h3 className="font-medium">Hotel Stay</h3>
                    <p className="text-muted-foreground">{hotel.name}</p>
                    <p className="text-muted-foreground">
                      ฿{hotel.price.toLocaleString()} / night
                    </p>
                  </div>
                )}
                <div className="border-t pt-4">
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total Price</span>
                    <span>฿{calculateTotal().toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerDetails;
