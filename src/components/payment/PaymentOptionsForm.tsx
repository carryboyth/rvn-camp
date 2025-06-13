
import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { CreditCard, QrCode, Building, Upload } from "lucide-react";

interface PaymentOptionsFormProps {
  form: UseFormReturn<any>;
  language: 'en' | 'th';
}

const PaymentOptionsForm = ({ form, language }: PaymentOptionsFormProps) => {
  const translations = {
    en: {
      selectPayment: "Select Payment Method",
      creditCard: "Credit/Debit Card",
      qrCode: "QR Code (PromptPay)",
      bankTransfer: "Bank Transfer",
      cardNumber: "Card Number",
      securityCode: "Security Code (CVV)",
      expiryDate: "Expiry Date",
      cardholderName: "Cardholder Name",
      qrInstructions: "Scan the QR code below with your mobile banking app",
      bankDetails: "Bank Transfer Details",
      uploadSlip: "Upload Payment Slip",
      chooseFile: "Choose File",
      acceptTerms: "I accept the terms and conditions",
      supportedCards: "We accept Visa, MasterCard, and JCB",
      promptPayOnly: "PromptPay is available for Thai bank accounts only",
      bankName: "Bank: Kasikorn Bank",
      accountName: "Account Name: RVnCamp Co., Ltd.",
      accountNumber: "Account Number: 123-4-56789-0",
      transferNote: "Please transfer the exact amount and upload your payment slip"
    },
    th: {
      selectPayment: "เลือกวิธีการชำระเงิน",
      creditCard: "บัตรเครดิต/เดบิต",
      qrCode: "คิวอาร์โค้ด (พร้อมเพย์)",
      bankTransfer: "โอนเงินผ่านธนาคาร",
      cardNumber: "หมายเลขบัตร",
      securityCode: "รหัสความปลอดภัย (CVV)",
      expiryDate: "วันหมดอายุ",
      cardholderName: "ชื่อผู้ถือบัตร",
      qrInstructions: "สแกนคิวอาร์โค้ดด้านล่างด้วยแอปธนาคารมือถือของคุณ",
      bankDetails: "รายละเอียดการโอนเงิน",
      uploadSlip: "อัปโหลดสลิปการโอนเงิน",
      chooseFile: "เลือกไฟล์",
      acceptTerms: "ฉันยอมรับข้อกำหนดและเงื่อนไข",
      supportedCards: "เรารับ Visa, MasterCard และ JCB",
      promptPayOnly: "พร้อมเพย์ใช้ได้เฉพาะบัญชีธนาคารไทยเท่านั้น",
      bankName: "ธนาคาร: ธนาคารกสิกรไทย",
      accountName: "ชื่อบัญชี: บริษัท อาร์วีเอ็นแคมป์ จำกัด",
      accountNumber: "เลขที่บัญชี: 123-4-56789-0",
      transferNote: "กรุณาโอนเงินตามจำนวนที่ระบุและอัปโหลดสลิปการโอนเงิน"
    }
  };

  const t = translations[language];

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="paymentMethod"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-semibold">{t.selectPayment}</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="space-y-4"
              >
                {/* Credit Card Option */}
                <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-green-50 transition-colors">
                  <RadioGroupItem value="credit-card" id="credit-card" />
                  <label
                    htmlFor="credit-card"
                    className="flex items-center gap-2 cursor-pointer w-full"
                  >
                    <CreditCard className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium">{t.creditCard}</div>
                      <div className="text-sm text-gray-500">{t.supportedCards}</div>
                    </div>
                  </label>
                </div>

                {/* QR Code Option */}
                <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-green-50 transition-colors">
                  <RadioGroupItem value="qr-code" id="qr-code" />
                  <label
                    htmlFor="qr-code"
                    className="flex items-center gap-2 cursor-pointer w-full"
                  >
                    <QrCode className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-medium">{t.qrCode}</div>
                      <div className="text-sm text-gray-500">{t.promptPayOnly}</div>
                    </div>
                  </label>
                </div>

                {/* Bank Transfer Option */}
                <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-green-50 transition-colors">
                  <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                  <label
                    htmlFor="bank-transfer"
                    className="flex items-center gap-2 cursor-pointer w-full"
                  >
                    <Building className="h-5 w-5 text-purple-600" />
                    <div>
                      <div className="font-medium">{t.bankTransfer}</div>
                      <div className="text-sm text-gray-500">{t.transferNote}</div>
                    </div>
                  </label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Credit Card Form */}
      {form.watch("paymentMethod") === "credit-card" && (
        <div className="space-y-4 p-4 bg-blue-50 rounded-lg">
          <FormField
            control={form.control}
            name="cardNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.cardNumber}</FormLabel>
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
                  <FormLabel>{t.securityCode}</FormLabel>
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
                  <FormLabel>{t.expiryDate}</FormLabel>
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
                <FormLabel>{t.cardholderName}</FormLabel>
                <FormControl>
                  <Input placeholder="JOHN DOE" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      )}

      {/* QR Code Display */}
      {form.watch("paymentMethod") === "qr-code" && (
        <div className="p-6 bg-green-50 rounded-lg text-center">
          <QrCode className="h-32 w-32 mx-auto mb-4 text-green-600" />
          <p className="text-sm text-gray-600 mb-2">{t.qrInstructions}</p>
          <div className="text-xs text-gray-500">PromptPay QR Code</div>
        </div>
      )}

      {/* Bank Transfer Details */}
      {form.watch("paymentMethod") === "bank-transfer" && (
        <div className="space-y-4">
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold flex items-center gap-2 mb-3">
              <Building className="h-4 w-4" />
              {t.bankDetails}
            </h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">{t.bankName}</span></p>
              <p><span className="font-medium">{t.accountName}</span></p>
              <p><span className="font-medium">{t.accountNumber}</span></p>
            </div>
          </div>

          <FormField
            control={form.control}
            name="bankSlip"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  {t.uploadSlip}
                </FormLabel>
                <FormControl>
                  <Input 
                    type="file" 
                    accept="image/*"
                    onChange={(e) => field.onChange(e.target.files)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      )}

      {/* Terms and Conditions */}
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
              <FormLabel className="text-sm">
                {t.acceptTerms}
              </FormLabel>
            </div>
          </FormItem>
        )}
      />
    </div>
  );
};

export default PaymentOptionsForm;
