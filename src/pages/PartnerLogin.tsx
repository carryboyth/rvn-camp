
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Lock, Building2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PartnerLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partner login attempt with:", { email, password });
    // Redirect to the specified URL
    window.location.href = "https://preview--tent-haven-dashboard.lovable.app/";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 bg-gradient-to-br from-luxury-dark via-luxury-charcoal to-luxury-dark">
        <Card className="w-full max-w-md bg-luxury-pearl shadow-xl border-0">
          <CardHeader className="space-y-1 text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className="bg-luxury-dark p-3 rounded-full">
                <Building2 className="h-8 w-8 text-luxury-pearl" />
              </div>
            </div>
            <CardTitle className="text-2xl text-luxury-dark">Partner Login</CardTitle>
            <p className="text-luxury-charcoal">
              เข้าสู่ระบบสำหรับพาร์ทเนอร์ที่พัก
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-luxury-charcoal" />
                  <Input
                    type="email"
                    placeholder="อีเมลพาร์ทเนอร์"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-9 bg-white border-luxury-silver focus:border-luxury-dark text-luxury-dark"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-luxury-charcoal" />
                  <Input
                    type="password"
                    placeholder="รหัสผ่าน"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-9 bg-white border-luxury-silver focus:border-luxury-dark text-luxury-dark"
                    required
                  />
                </div>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-luxury-dark hover:bg-luxury-charcoal text-luxury-pearl"
              >
                เข้าสู่ระบบพาร์ทเนอร์
              </Button>
              <div className="text-center text-sm">
                <Button 
                  variant="link" 
                  className="p-0 text-luxury-charcoal hover:text-luxury-dark hover:underline"
                >
                  ลืมรหัสผ่าน?
                </Button>
              </div>
              <div className="text-center text-sm text-luxury-charcoal">
                ยังไม่เป็นพาร์ทเนอร์?{" "}
                <Button
                  variant="link"
                  className="p-0 text-luxury-dark hover:text-luxury-charcoal hover:underline"
                  onClick={() => navigate("/partner-registration")}
                >
                  สมัครเป็นพาร์ทเนอร์
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default PartnerLogin;
