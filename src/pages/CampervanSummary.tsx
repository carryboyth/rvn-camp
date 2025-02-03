import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CampervanSummary = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm();
  const hasFlightDetails = watch("hasFlightDetails", "no");

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    // Handle form submission
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-3xl font-bold">Confirm Your Campervan Booking</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Rental Details Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Rental Details</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    By entering your details below, you agree we may contact you about this vehicle.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label>Salutation</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mr">Mr.</SelectItem>
                          <SelectItem value="ms">Ms.</SelectItem>
                          <SelectItem value="dr">Dr.</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>First Name</Label>
                      <Input {...register("firstName")} required />
                    </div>
                    <div>
                      <Label>Last Name</Label>
                      <Input {...register("lastName")} required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Email</Label>
                      <Input type="email" {...register("email")} required />
                    </div>
                    <div>
                      <Label>Contact Number</Label>
                      <Input type="tel" {...register("phone")} required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <Label>Street Address</Label>
                      <Input {...register("address")} required />
                    </div>
                    <div>
                      <Label>City</Label>
                      <Input {...register("city")} required />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Driver & Passenger Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Driver & Passenger Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Driver Full Name</Label>
                      <Input {...register("driverName")} required />
                    </div>
                    <div>
                      <Label>Date of Birth</Label>
                      <div className="relative">
                        <Input type="date" {...register("driverDob")} required />
                        <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Country of License</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="th">Thailand</SelectItem>
                          <SelectItem value="sg">Singapore</SelectItem>
                          <SelectItem value="my">Malaysia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Number of Passengers</Label>
                      <Input type="number" min="1" max="6" {...register("passengers")} required />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Arrival Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Arrival Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Do you know your flight details?</Label>
                    <RadioGroup defaultValue="no" className="flex gap-4 mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="yes" />
                        <Label htmlFor="yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="no" />
                        <Label htmlFor="no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {hasFlightDetails === "yes" && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label>Flight Number</Label>
                        <Input {...register("flightNumber")} />
                      </div>
                      <div>
                        <Label>Arrival Date</Label>
                        <Input type="date" {...register("arrivalDate")} />
                      </div>
                      <div>
                        <Label>Arrival Time</Label>
                        <Input type="time" {...register("arrivalTime")} />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Payment Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Card Number</Label>
                      <Input {...register("cardNumber")} required />
                    </div>
                    <div>
                      <Label>Security Code (CVV)</Label>
                      <Input type="password" maxLength={4} {...register("cvv")} required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Name on Card</Label>
                      <Input {...register("cardName")} required />
                    </div>
                    <div>
                      <Label>Expiry Date</Label>
                      <Input placeholder="MM/YY" {...register("expiryDate")} required />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Terms & Conditions */}
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" {...register("terms")} />
                <Label htmlFor="terms">
                  I have read and accept the terms and conditions
                </Label>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button type="submit" className="flex-1">
                  Confirm Booking
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">Selected Campervan</h3>
                  <p className="text-muted-foreground">Comfort Cruiser</p>
                </div>
                <div>
                  <h3 className="font-medium">Pick-up</h3>
                  <p className="text-muted-foreground">Bangkok</p>
                  <p className="text-muted-foreground">Mon, 15 Apr 2024</p>
                </div>
                <div>
                  <h3 className="font-medium">Drop-off</h3>
                  <p className="text-muted-foreground">Chiang Mai</p>
                  <p className="text-muted-foreground">Wed, 17 Apr 2024</p>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span>Total Days</span>
                    <span>3 days</span>
                  </div>
                  <div className="flex justify-between font-medium text-lg mt-2">
                    <span>Total Price</span>
                    <span>฿9,000</span>
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

export default CampervanSummary;