
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Lock, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Admin login attempt with:", { username, password });
    // Navigate to admin dashboard
    navigate("/admin-dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <Card className="w-full max-w-md shadow-xl border-0 bg-white">
          <CardHeader className="space-y-1 text-center pb-6">
            <div className="flex justify-center mb-4">
              <img 
                src="/lovable-uploads/185d641b-79c4-4ff4-8a62-6492f5109a4e.png" 
                alt="RVnCamp Logo" 
                className="h-12"
              />
            </div>
            <div className="flex justify-center mb-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl text-gray-800 font-kanit">เข้าสู่ระบบแอดมิน</CardTitle>
            <p className="text-gray-600 font-kanit">
              สำหรับผู้ดูแลระบบ RVnCamp
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 font-kanit">ชื่อผู้ใช้</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="ชื่อผู้ใช้"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-9 bg-white border-gray-300 focus:border-blue-500 text-gray-800 font-kanit"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 font-kanit">รหัสผ่าน</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="password"
                    placeholder="รหัสผ่าน"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-9 bg-white border-gray-300 focus:border-blue-500 text-gray-800 font-kanit"
                    required
                  />
                </div>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-kanit text-lg py-3 mt-6"
              >
                เข้าสู่ระบบ
              </Button>
              <div className="text-center text-sm">
                <Button 
                  variant="link" 
                  className="p-0 text-gray-500 hover:text-blue-600 hover:underline font-kanit"
                >
                  ลืมรหัสผ่าน?
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

export default AdminLogin;
