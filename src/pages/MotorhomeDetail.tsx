
import React from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotorhomeDetailPage from "@/components/motorhome/MotorhomeDetailPage";

// Mock data for motorhome
const getMotorhomeData = (id: string) => {
  const baseData = {
    id: id || "1",
    name: "Toyota HiAce Campervan Premium",
    model: "HiAce",
    brand: "Toyota", 
    images: [
      "/lovable-uploads/491cfd8c-5bc4-4d54-afb5-cc0adc56e139.png",
      "/lovable-uploads/ffbe678e-abe3-4ee8-8950-91cb622e5fde.png",
      "/lovable-uploads/31648e34-1e0e-418b-a716-4edcc750815c.png",
      "/lovable-uploads/57b37350-81fd-4c1a-af07-400f654b5c47.png",
      "/lovable-uploads/71ca327b-2638-4ef8-8596-5784d0446c53.png",
      "/lovable-uploads/d8ae79a0-6073-4419-8cad-67eba89223b4.png"
    ],
    price: 2500,
    rating: 4.9,
    reviewCount: 87,
    description: "รถบ้าน Toyota HiAce ปรับปรุงใหม่ พร้อมอุปกรณ์ครบครัน เหมาะสำหรับการเดินทางท่องเที่ยวกับครอบครัวและเพื่อน มาพร้อมครัวในตัว ห้องน้ำ และเตียงนอนที่สะดวกสบาย ขับขี่ง่าย ประหยัดน้ำมัน",
    badges: ["ยอดนิยม", "รถใหม่", "มีโปรโมชั่น"],
    specs: {
      passengers: 6,
      beds: 4,
      transmission: "อัตโนมัติ",
      fuelType: "ดีเซล",
      year: 2023,
      drive: "4x2"
    },
    amenities: [
      "เตียงนอน 2 ชั้น",
      "เครื่องปรับอากาศ",
      "ครัวในตัว พร้อมเตาแก๊ส",
      "ตู้เย็น",
      "ห้องน้ำ-ฝักบัว",
      "ระบบไฟฟ้า 12V/220V",
      "Wi-Fi ในตัว",
      "จานชาม เครื่องครัว",
      "โต๊ะ เก้าอี้",
      "ผ้าปูที่นอน หมอน",
      "พัดลมเพดาน",
      "ไมโครเวฟ"
    ],
    location: {
      pickup: "สนามบิน สุวรรณภูมิ",
      dropoff: [
        "สนามบิน สุวรรณภูมิ",
        "สนามบิน ดอนเมือง",
        "สถานีรถไฟหัวลำโพง",
        "หมอชิต"
      ],
      coordinates: { lat: 13.6900, lng: 100.7501 }
    },
    pricing: {
      basePrice: 2500,
      insurance: 300,
      cleaning: 500,
      deposit: 10000,
      minDays: 2
    },
    terms: {
      minAge: 25,
      license: ["ใบขับขี่ประเภท 1", "ใบขับขี่นานาชาติ"],
      cancellation: "ยกเลิกได้ฟรีภายใน 48 ชั่วโมงก่อนการเดินทาง",
      payment: ["โอนธนาคาร", "QR Code", "บัตรเครดิต"]
    },
    host: {
      name: "คุณสมชาย",
      avatar: "/lovable-uploads/b3b48e94-e287-44ba-807a-e228a1df866a.png",
      joinedDate: "2020",
      responseRate: 98
    }
  };

  return baseData;
};

const MotorhomeDetail = () => {
  const { id } = useParams();
  const motorhome = getMotorhomeData(id || "1");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <MotorhomeDetailPage motorhome={motorhome} />
      </main>
      <Footer />
    </div>
  );
};

export default MotorhomeDetail;
