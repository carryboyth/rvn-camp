
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Star,
  MapPin,
  Heart,
  Share2,
  Badge,
  Users,
  Bed,
  Car,
  Fuel,
  Calendar,
  Shield
} from "lucide-react";
import { MotorhomeGallery } from "./MotorhomeGallery";
import { BookingSection } from "./BookingSection";
import { ReviewsSection } from "./ReviewsSection";

interface MotorhomeDetailPageProps {
  motorhome: {
    id: string;
    name: string;
    model: string;
    brand: string;
    images: string[];
    price: number;
    rating: number;
    reviewCount: number;
    description: string;
    badges: string[];
    specs: {
      passengers: number;
      beds: number;
      transmission: string;
      fuelType: string;
      year: number;
      drive: string;
    };
    amenities: string[];
    location: {
      pickup: string;
      dropoff: string[];
      coordinates: { lat: number; lng: number };
    };
    pricing: {
      basePrice: number;
      insurance: number;
      cleaning: number;
      deposit: number;
      minDays: number;
    };
    terms: {
      minAge: number;
      license: string[];
      cancellation: string;
      payment: string[];
    };
    host: {
      name: string;
      avatar: string;
      joinedDate: string;
      responseRate: number;
    };
  };
}

const MotorhomeDetailPage = ({ motorhome }: MotorhomeDetailPageProps) => {
  const navigate = useNavigate();
  
  // Refs for scrolling to sections
  const overviewRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const amenitiesRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const termsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const yOffset = -140; // Account for sticky header + tabs
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const tabs = [
    { label: "ภาพรวม", ref: overviewRef },
    { label: "รายละเอียด", ref: specsRef },
    { label: "สิ่งอำนวยความสะดวก", ref: amenitiesRef },
    { label: "รีวิว", ref: reviewsRef },
    { label: "สถานที่", ref: locationRef },
    { label: "เงื่อนไข", ref: termsRef },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 hover:bg-gray-100"
            >
              <ArrowLeft className="h-4 w-4" />
              กลับไปค้นหา
            </Button>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                แชร์
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                บันทึก
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header Section */}
        <div className="mb-6">
          {/* Badges */}
          <div className="flex items-center gap-2 mb-3">
            {motorhome.badges.map((badge, index) => (
              <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Badge className="h-3 w-3" />
                {badge}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{motorhome.name}</h1>
          <p className="text-lg text-gray-600 mb-3">{motorhome.brand} {motorhome.model}</p>

          {/* Quick Stats */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{motorhome.specs.passengers} ที่นั่ง</span>
            </div>
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              <span>{motorhome.specs.beds} เตียง</span>
            </div>
            <div className="flex items-center gap-1">
              <Car className="h-4 w-4" />
              <span>{motorhome.specs.transmission}</span>
            </div>
            <div className="flex items-center gap-1">
              <Fuel className="h-4 w-4" />
              <span>{motorhome.specs.fuelType}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>ปี {motorhome.specs.year}</span>
            </div>
          </div>

          {/* Rating and Location */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-lg">{motorhome.rating}</span>
              </div>
              <span className="text-gray-600">
                ({motorhome.reviewCount} รีวิว)
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>{motorhome.location.pickup}</span>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <MotorhomeGallery images={motorhome.images} name={motorhome.name} />

        {/* Navigation Tabs - Scroll to section on click */}
        <div className="sticky top-16 bg-white border-b z-40 -mx-4 px-4 mb-8">
          <div className="flex gap-0 max-w-3xl">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(tab.ref)}
                className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-colors whitespace-nowrap"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content - All sections visible */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Section */}
            <div ref={overviewRef} className="bg-white rounded-lg p-6 border">
              <h2 className="text-xl font-semibold mb-4">ภาพรวม</h2>
              <p className="text-gray-600 leading-relaxed">{motorhome.description}</p>
            </div>

            {/* Specs Section */}
            <div ref={specsRef} className="bg-white rounded-lg p-6 border">
              <h2 className="text-xl font-semibold mb-4">ข้อมูลทั่วไป</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">ผู้โดยสาร:</span>
                    <span className="font-medium">{motorhome.specs.passengers} คน</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">เตียงนอน:</span>
                    <span className="font-medium">{motorhome.specs.beds} เตียง</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">เกียร์:</span>
                    <span className="font-medium">{motorhome.specs.transmission}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">เชื้อเพลิง:</span>
                    <span className="font-medium">{motorhome.specs.fuelType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ขับเคลื่อน:</span>
                    <span className="font-medium">{motorhome.specs.drive}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ปีที่ผลิต:</span>
                    <span className="font-medium">{motorhome.specs.year}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities Section */}
            <div ref={amenitiesRef} className="bg-white rounded-lg p-6 border">
              <h2 className="text-xl font-semibold mb-4">สิ่งอำนวยความสะดวก</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {motorhome.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div ref={reviewsRef}>
              <ReviewsSection motorhome={motorhome} />
            </div>

            {/* Location Section */}
            <div ref={locationRef} className="bg-white rounded-lg p-6 border">
              <h2 className="text-xl font-semibold mb-4">จุดรับ-คืนรถ</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">จุดรับรถ</h3>
                  <p className="text-gray-600">{motorhome.location.pickup}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">จุดคืนรถ</h3>
                  <div className="space-y-1">
                    {motorhome.location.dropoff.map((location, index) => (
                      <p key={index} className="text-gray-600">• {location}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center mt-4">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <span className="text-gray-500">แผนที่จะแสดงที่นี่</span>
                </div>
              </div>
            </div>

            {/* Terms Section */}
            <div ref={termsRef} className="bg-white rounded-lg p-6 border">
              <h2 className="text-xl font-semibold mb-4">เงื่อนไขการเช่า</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">ข้อกำหนดผู้เช่า</h3>
                  <p className="text-gray-600">อายุขั้นต่ำ: {motorhome.terms.minAge} ปี</p>
                  <p className="text-gray-600">ใบขับขี่: {motorhome.terms.license.join(", ")}</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">การชำระเงิน</h3>
                  <p className="text-gray-600">ช่องทางการชำระ: {motorhome.terms.payment.join(", ")}</p>
                  <p className="text-gray-600">เงินมัดจำ: {motorhome.pricing.deposit.toLocaleString()} บาท</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">นโยบายยกเลิก</h3>
                  <p className="text-gray-600">{motorhome.terms.cancellation}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-36">
              <BookingSection motorhome={motorhome} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotorhomeDetailPage;
