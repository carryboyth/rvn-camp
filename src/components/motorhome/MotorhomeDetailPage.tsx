
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  ArrowLeft,
  Star,
  Heart,
  Share2,
  Badge,
  Check,
  X,
  Grid3x3,
  ChevronLeft,
  ChevronRight,
  Ruler
} from "lucide-react";
import { MotorhomeGallery } from "./MotorhomeGallery";
import { BookingSection } from "./BookingSection";
import { ReviewsSection } from "./ReviewsSection";

interface Addon {
  id: string;
  name: string;
  price: number;
  description: string;
}

interface InsuranceOption {
  id: string;
  name: string;
  price: number;
  description: string;
  coverage: string;
}

interface Amenity {
  name: string;
  available: boolean;
}

interface PickupLocation {
  id: string;
  name: string;
  address: string;
}

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
      engine: string;
    };
    dimensions: {
      length: string;
      width: string;
      height: string;
      wheelbase: string;
    };
    amenities: Amenity[];
    addons: Addon[];
    insuranceOptions: InsuranceOption[];
    pickupLocations: PickupLocation[];
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
  };
}

const MotorhomeDetailPage = ({ motorhome }: MotorhomeDetailPageProps) => {
  const navigate = useNavigate();
  
  // State for gallery modal
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // Refs for scrolling to sections
  const overviewRef = useRef<HTMLDivElement>(null);
  const dimensionsRef = useRef<HTMLDivElement>(null);
  const floorplanRef = useRef<HTMLDivElement>(null);
  const amenitiesRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const yOffset = -140;
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const tabs = [
    { label: "หน้าแรก", ref: overviewRef },
    { label: "ข้อมูลรถ", ref: overviewRef },
    { label: "ติดต่อเรา", ref: reviewsRef },
  ];

  const openGalleryModal = (index: number) => {
    setSelectedImageIndex(index);
    setShowGalleryModal(true);
  };

  const closeGalleryModal = () => {
    setShowGalleryModal(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % motorhome.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + motorhome.images.length) % motorhome.images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 hover:bg-gray-100"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-xl font-bold">{motorhome.brand}</h1>
                <div className="flex items-center gap-2">
                  <span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs font-medium">
                    {motorhome.badges[0]}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-3xl font-bold">฿{motorhome.price.toLocaleString()}</span>
              <span className="text-gray-600">/วัน</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="relative h-[400px] cursor-pointer" onClick={() => openGalleryModal(0)}>
        <img
          src={motorhome.images[0]}
          alt={motorhome.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
          Main campervan view
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Brand and Description */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
            <span className="text-red-600 font-bold text-lg">M</span>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold">{motorhome.brand}</h2>
            <p className="text-gray-600 text-sm mt-1">{motorhome.description}</p>
          </div>
        </div>

        {/* RVN CAMP Brand */}
        <div className="mb-8">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">RVN</span>
            <span className="text-xl font-bold text-red-500">CAMP</span>
            <span className="text-gray-400 text-xs">________________________</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Specs Section */}
            <div ref={overviewRef} className="bg-white">
              <div className="grid grid-cols-2 gap-8">
                {/* Basic Info */}
                <div>
                  <h3 className="font-semibold mb-4">ข้อมูลพื้นฐาน</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">ยี่ห้อ</span>
                      <span className="font-medium">{motorhome.brand}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">รุ่น</span>
                      <span className="font-medium">{motorhome.model}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ปี</span>
                      <span className="font-medium">{motorhome.specs.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">เชื้อเพลิง</span>
                      <span className="font-medium">{motorhome.specs.fuelType}</span>
                    </div>
                  </div>
                </div>

                {/* Performance */}
                <div>
                  <h3 className="font-semibold mb-4">สมรรถนะ</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">เครื่องยนต์</span>
                      <span className="font-medium">{motorhome.specs.engine}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">เกียร์</span>
                      <span className="font-medium">{motorhome.specs.drive}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">เมลนิมิ</span>
                      <span className="font-medium">{motorhome.specs.transmission}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dimensions Section */}
            <div ref={dimensionsRef} className="bg-white border-t pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Ruler className="h-5 w-5" />
                <h3 className="font-semibold">ขนาด</h3>
              </div>
              <div className="grid grid-cols-4 gap-4 text-sm text-center">
                <div className="border-r">
                  <p className="text-gray-600 mb-1">ความยาว</p>
                  <p className="font-medium">{motorhome.dimensions.length}</p>
                </div>
                <div className="border-r">
                  <p className="text-gray-600 mb-1">ความกว้าง</p>
                  <p className="font-medium">{motorhome.dimensions.width}</p>
                </div>
                <div className="border-r">
                  <p className="text-gray-600 mb-1">ความสูง</p>
                  <p className="font-medium">{motorhome.dimensions.height}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">ความยาวฐานล้อ</p>
                  <p className="font-medium">{motorhome.dimensions.wheelbase}</p>
                </div>
              </div>
            </div>

            {/* Floorplan / Gallery Section */}
            <div ref={floorplanRef} className="bg-white border-t pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Grid3x3 className="h-5 w-5" />
                <h3 className="font-semibold">แผนผัง</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {motorhome.images.slice(1).map((image, index) => (
                  <div 
                    key={index} 
                    className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
                    onClick={() => openGalleryModal(index + 1)}
                  >
                    <img
                      src={image}
                      alt={`${motorhome.name} view ${index + 2}`}
                      className="w-full h-full object-cover group-hover:brightness-95 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities Section */}
            <div ref={amenitiesRef} className="bg-white border-t pt-6">
              <h3 className="font-semibold mb-4">สิ่งอำนวยความสะดวก</h3>
              <div className="grid grid-cols-2 gap-4">
                {motorhome.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3 py-2 border-b">
                    <span className="text-gray-700">{amenity.name}</span>
                    {amenity.available ? (
                      <Check className="h-4 w-4 text-green-500 ml-auto" />
                    ) : (
                      <X className="h-4 w-4 text-red-400 ml-auto" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div ref={reviewsRef}>
              <ReviewsSection motorhome={motorhome} />
            </div>
          </div>

          {/* Right Column - Booking Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BookingSection 
                motorhome={motorhome} 
                addons={motorhome.addons}
                insuranceOptions={motorhome.insuranceOptions}
                pickupLocations={motorhome.pickupLocations}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {showGalleryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <button
              onClick={closeGalleryModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {motorhome.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}

            <img
              src={motorhome.images[selectedImageIndex]}
              alt={`${motorhome.name} ${selectedImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded">
              {selectedImageIndex + 1} / {motorhome.images.length}
            </div>

            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4">
              {motorhome.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 ${
                    selectedImageIndex === index ? 'border-white' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${motorhome.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MotorhomeDetailPage;
