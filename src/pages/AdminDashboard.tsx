
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Settings, Home, LogOut, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleVehicleBookings = () => {
    // Navigate to vehicle bookings management
    window.location.href = "https://preview--camper-van-compass.lovable.app/";
  };

  const handleAdminControl = () => {
    // Navigate to admin control panel
    console.log("Navigate to admin control panel");
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      
      {/* Top Navigation Bar */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <Home className="h-5 w-5" />
            <span className="font-kanit">หน้าหลัก</span>
          </Button>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <User className="h-5 w-5" />
              <span className="font-kanit">ผู้ดูแลระบบ</span>
            </div>
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-600 hover:text-red-600"
            >
              <LogOut className="h-5 w-5" />
              <span className="font-kanit">ออกจากระบบ</span>
            </Button>
          </div>
        </div>
      </div>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          {/* Welcome Message */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 font-kanit">
              ยินดีต้อนรับกลับมา ผู้ดูแลระบบ RVnCamp
            </h1>
            <p className="text-xl text-gray-600 font-kanit">
              เลือกระบบที่ต้องการจัดการ
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Vehicle Bookings Management */}
            <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Button
                  onClick={handleVehicleBookings}
                  className="w-full h-auto p-8 bg-blue-600 hover:bg-blue-700 text-white flex flex-col items-center gap-4 transition-all duration-300"
                >
                  <div className="bg-white/20 p-4 rounded-full">
                    <Car className="h-12 w-12" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-kanit">จัดการการจองรถ</h3>
                    <p className="text-blue-100 font-kanit">
                      จัดการการจองรถแคมเปอร์แวน และยานพาหนะอื่นๆ
                    </p>
                  </div>
                </Button>
              </CardContent>
            </Card>

            {/* Admin Control Panel */}
            <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Button
                  onClick={handleAdminControl}
                  className="w-full h-auto p-8 bg-green-600 hover:bg-green-700 text-white flex flex-col items-center gap-4 transition-all duration-300"
                >
                  <div className="bg-white/20 p-4 rounded-full">
                    <Settings className="h-12 w-12" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-kanit">แอดมินคอนโทรล</h3>
                    <p className="text-green-100 font-kanit">
                      จัดการระบบ ผู้ใช้ และการตั้งค่าทั้งหมด
                    </p>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
