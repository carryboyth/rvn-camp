
import { UseFormReturn } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Building, DollarSign } from "lucide-react";

interface PaymentFormProps {
  form: UseFormReturn<any>;
}

const PaymentForm = ({ form }: PaymentFormProps) => {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="paymentMethod"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-semibold">Select Payment Method</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-secondary/20">
                  <RadioGroupItem value="credit-card" id="credit-card" />
                  <label
                    htmlFor="credit-card"
                    className="flex items-center gap-2 cursor-pointer w-full"
                  >
                    <CreditCard className="h-4 w-4" />
                    Credit Card
                  </label>
                </div>
                <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-secondary/20">
                  <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                  <label
                    htmlFor="bank-transfer"
                    className="flex items-center gap-2 cursor-pointer w-full"
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

      {form.watch("paymentMethod") === "bank-transfer" && (
        <div className="space-y-4">
          <div className="rounded-lg border p-4 bg-secondary/10">
            <h3 className="font-semibold flex items-center gap-2 mb-2">
              <DollarSign className="h-4 w-4" />
              Bank Transfer Details
            </h3>
            <div className="space-y-2">
              <p><span className="font-medium">Bank:</span> Siam Commercial Bank</p>
              <p><span className="font-medium">Account Name:</span> Thailand Campsite Co., Ltd.</p>
              <p><span className="font-medium">Account Number:</span> 123-4-56789-0</p>
              <p><span className="font-medium">Branch:</span> Bangkok Main Branch</p>
              <p className="text-sm text-muted-foreground mt-4">
                Please make the transfer and upload your payment slip in the next step
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
