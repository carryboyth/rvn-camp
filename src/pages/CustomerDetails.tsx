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
        title: "ต้องยอมรับข้อตกลงและเงื่อนไข",
        description: "กรุณายอมรับข้อตกลงและเงื่อนไขเพื่อดำเนินการต่อ",
        variant: "destructive",
      });
      return;
    }

    console.log("Form submitted:", data);
    toast({
      title: "ยืนยันการจอง",
      description: "การจองของคุณได้รับการดำเนินการเรียบร้อยแล้ว",
    });
    navigate("/manage-trip");
  };

  const handleSavePlan = () => {
    toast({
      title: "บันทึกแผนการเดินทาง",
      description: "กรุณาเข้าสู่ระบบเพื่อบันทึกแผนการเดินทางของคุณ",
    });
    navigate("/login");
  };

  if (!motorhome && !hotel) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">ไม่พบการจอง</h1>
        <Button onClick={() => navigate("/book-motorhome")}>
          เริ่มการจองใหม่
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
            <h1 className="text-3xl font-bold">ยืนยันการจอง</h1>

            <BookingSummary motorhome={motorhome} hotel={hotel} />

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>ข้อมูลส่วนตัว</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CustomerInformationForm form={form} />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>ข้อมูลการชำระเงิน</CardTitle>
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
                          ยอมรับข้อตกลงและเงื่อนไข
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <div className="flex flex-wrap gap-4">
                  <Button type="submit" className="flex-1">
                    <CreditCard className="mr-2 h-4 w-4" />
                    ยืนยันและชำระเงิน
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate(-1)}
                    className="gap-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    ย้อนกลับ
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={handleSavePlan}
                    className="gap-2"
                  >
                    <Save className="h-4 w-4" />
                    บันทึกแผน
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => navigate("/manage-trip")}
                    className="gap-2"
                  >
                    <X className="h-4 w-4" />
                    ยกเลิก
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
