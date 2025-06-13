
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Mail, Lock, Phone, Chrome, Facebook } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+66",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const countryCodes = [
    { code: "+66", country: "Thailand" },
    { code: "+1", country: "United States" },
    { code: "+44", country: "United Kingdom" },
    { code: "+81", country: "Japan" },
    { code: "+86", country: "China" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleCountryCodeChange = (value: string) => {
    setFormData(prev => ({ ...prev, countryCode: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "ข้อผิดพลาด",
        description: "รหัสผ่านไม่ตรงกัน",
        variant: "destructive",
      });
      return;
    }

    if (!formData.agreeToTerms) {
      toast({
        title: "ข้อผิดพลาด", 
        description: "กรุณายอมรับข้อกำหนดและเงื่อนไข",
        variant: "destructive",
      });
      return;
    }

    console.log("Registration attempt with:", formData);
    toast({
      title: "สำเร็จ!",
      description: "สมัครสมาชิกเรียบร้อยแล้ว!",
    });
    navigate("/login");
  };

  const handleSocialSignup = (provider: string) => {
    console.log(`Social signup with ${provider}`);
    toast({
      title: "กำลังดำเนินการ",
      description: `กำลังเชื่อมต่อกับ ${provider}...`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-luxury-dark via-luxury-charcoal to-luxury-dark">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 py-8">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Illustration for desktop */}
          <div className="hidden lg:flex flex-col items-center justify-center space-y-6 animate-slide-in">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-luxury-pearl font-kanit">
                เริ่มต้นการผจญภัยของคุณ
              </h1>
              <p className="text-lg text-luxury-silver font-kanit">
                สมัครสมาชิกกับ RVnCamp และสำรวจสถานที่ท่องเที่ยวสุดพิเศษ
              </p>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/3e1b13b0-4b5b-4eec-85e7-d9d8ff30e668.png" 
                alt="Campervan Adventure" 
                className="w-96 h-96 object-cover rounded-2xl shadow-2xl border border-luxury-silver/20"
              />
              <div className="absolute -bottom-4 -right-4 bg-luxury-pearl p-3 rounded-xl shadow-xl border border-luxury-silver/30">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-luxury-dark font-kanit">พร้อมให้บริการ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Signup form */}
          <div className="w-full max-w-md mx-auto animate-fade-up">
            <Card className="shadow-2xl border border-luxury-silver/20 bg-luxury-pearl/95 backdrop-blur-sm">
              <CardHeader className="space-y-2 text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-luxury-dark/10 rounded-full flex items-center justify-center mb-2 border border-luxury-silver/30">
                  <User className="w-8 h-8 text-luxury-dark" />
                </div>
                <h2 className="text-2xl font-bold text-luxury-dark font-kanit">สมัครสมาชิก</h2>
                <p className="text-luxury-charcoal font-kanit">สร้างบัญชีเพื่อเริ่มจองแคมปิ้งกับเรา</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Social signup buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    onClick={() => handleSocialSignup("Google")}
                    className="w-full font-kanit border-luxury-silver/30 hover:bg-luxury-platinum/50 text-luxury-dark"
                  >
                    <Chrome className="w-4 h-4 mr-2" />
                    Google
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleSocialSignup("Facebook")}
                    className="w-full font-kanit border-luxury-silver/30 hover:bg-luxury-platinum/50 text-luxury-dark"
                  >
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-luxury-silver/30" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-luxury-pearl px-2 text-luxury-charcoal font-kanit">หรือ</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-luxury-dark font-kanit">ชื่อ-นามสกุล</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-luxury-silver" />
                      <Input
                        type="text"
                        placeholder="กรอกชื่อและนามสกุล"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="pl-9 font-kanit border-luxury-silver/30 focus:border-luxury-dark bg-white/80"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-luxury-dark font-kanit">อีเมล</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-luxury-silver" />
                      <Input
                        type="email"
                        placeholder="example@email.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-9 font-kanit border-luxury-silver/30 focus:border-luxury-dark bg-white/80"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-luxury-dark font-kanit">หมายเลขโทรศัพท์</label>
                    <div className="flex space-x-2">
                      <Select value={formData.countryCode} onValueChange={handleCountryCodeChange}>
                        <SelectTrigger className="w-24 font-kanit border-luxury-silver/30 bg-white/80">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {countryCodes.map((item) => (
                            <SelectItem key={item.code} value={item.code} className="font-kanit">
                              {item.code}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <div className="relative flex-1">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-luxury-silver" />
                        <Input
                          type="tel"
                          placeholder="081-234-5678"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="pl-9 font-kanit border-luxury-silver/30 focus:border-luxury-dark bg-white/80"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-luxury-dark font-kanit">รหัสผ่าน</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-luxury-silver" />
                      <Input
                        type="password"
                        placeholder="สร้างรหัสผ่าน"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="pl-9 font-kanit border-luxury-silver/30 focus:border-luxury-dark bg-white/80"
                        required
                      />
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-luxury-dark font-kanit">ยืนยันรหัสผ่าน</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-luxury-silver" />
                      <Input
                        type="password"
                        placeholder="ยืนยันรหัสผ่านอีกครั้ง"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="pl-9 font-kanit border-luxury-silver/30 focus:border-luxury-dark bg-white/80"
                        required
                      />
                    </div>
                  </div>

                  {/* Terms checkbox */}
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))
                      }
                      className="mt-1"
                    />
                    <label 
                      htmlFor="terms" 
                      className="text-sm text-luxury-charcoal font-kanit leading-5 cursor-pointer"
                    >
                      ฉันยอมรับ{" "}
                      <a href="#" className="text-luxury-dark hover:underline font-medium">
                        ข้อกำหนดการใช้งาน
                      </a>{" "}
                      และ{" "}
                      <a href="#" className="text-luxury-dark hover:underline font-medium">
                        นโยบายความเป็นส่วนตัว
                      </a>
                    </label>
                  </div>

                  {/* Submit button */}
                  <Button 
                    type="submit" 
                    className="w-full bg-luxury-dark hover:bg-luxury-charcoal text-luxury-pearl font-kanit font-medium py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    สมัครสมาชิก
                  </Button>

                  {/* Login link */}
                  <div className="text-center">
                    <span className="text-sm text-luxury-charcoal font-kanit">
                      มีบัญชีอยู่แล้ว?{" "}
                      <Button
                        variant="link"
                        className="p-0 text-luxury-dark hover:underline font-kanit font-medium"
                        onClick={() => navigate("/login")}
                      >
                        เข้าสู่ระบบ
                      </Button>
                    </span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
