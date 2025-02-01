import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Card, CardContent } from "@/components/ui/card";
import { Save, X } from "lucide-react";

interface BookingFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  country: string;
}

interface BookingFormProps {
  campsite: {
    name: string;
    price: number;
    checkIn: string;
    checkOut: string;
    rules: string[];
  };
  onSave: () => void;
  onCancel: () => void;
  onSubmit: (data: BookingFormData) => void;
}

const BookingForm = ({
  campsite,
  onSave,
  onCancel,
  onSubmit,
}: BookingFormProps) => {
  const form = useForm<BookingFormData>();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 animate-fade-up"
          >
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
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="th">Thailand</SelectItem>
                      <SelectItem value="sg">Singapore</SelectItem>
                      <SelectItem value="my">Malaysia</SelectItem>
                      {/* Add more countries as needed */}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                Next: Final Booking
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={onSave}
                className="gap-2"
              >
                <Save className="h-4 w-4" />
                Save Plan
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                className="gap-2"
              >
                <X className="h-4 w-4" />
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </div>

      <Card className="h-fit">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium">{campsite.name}</p>
              <p className="text-muted-foreground">
                ฿{campsite.price.toLocaleString()} / night
              </p>
            </div>
            <div className="border-t pt-4">
              <p className="font-medium">Check-in</p>
              <p className="text-muted-foreground">{campsite.checkIn}</p>
            </div>
            <div>
              <p className="font-medium">Check-out</p>
              <p className="text-muted-foreground">{campsite.checkOut}</p>
            </div>
            <div className="border-t pt-4">
              <p className="font-medium mb-2">House Rules</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                {campsite.rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingForm;