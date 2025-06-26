
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Star, Users, TrendingUp } from "lucide-react";

const PartnerCallToAction = () => {
  return (
    <div className="mt-16 mb-8">
      <Card className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl border-0 shadow-2xl overflow-hidden">
        <CardContent className="p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                ลงทะเบียนแคมป์ไซต์ของคุณ
              </h2>
              <p className="text-xl text-red-50">
                เพิ่มรายได้จากที่ดินของคุณ เข้าร่วมเป็นพาร์ทเนอร์กับเรา
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <Star className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                  <div className="font-semibold">คุณภาพสูง</div>
                  <div className="text-sm text-red-100">มาตรฐานระดับสากล</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <Users className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                  <div className="font-semibold">ลูกค้ามากมาย</div>
                  <div className="text-sm text-red-100">เข้าถึงนักท่องเที่ยว</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-purple-300" />
                  <div className="font-semibold">รายได้เพิ่ม</div>
                  <div className="text-sm text-red-100">สร้างรายได้ทุกเดือน</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-lg font-semibold">ประโยชน์สำหรับพาร์ทเนอร์:</div>
                <ul className="space-y-1 text-red-50">
                  <li>• ไม่มีค่าธรรมเนียมเริ่มต้น</li>
                  <li>• ระบบจองออนไลน์ที่ง่ายดาย</li>
                  <li>• การสนับสนุนตลอด 24 ชั่วโมง</li>
                  <li>• เครื่องมือจัดการที่ครบครัน</li>
                </ul>
              </div>
              
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-3 rounded-xl h-auto"
              >
                <Plus className="w-5 h-5 mr-2" />
                ลงทะเบียนเป็นพาร์ทเนอร์
              </Button>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src="/lovable-uploads/117e1808-dacc-4236-a185-e46fb1a4ecd9.png"
                  alt="Partner Success"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PartnerCallToAction;
