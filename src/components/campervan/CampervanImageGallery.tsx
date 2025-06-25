
import React from "react";
import { Camera, Grid3x3 } from "lucide-react";

interface CampervanImageGalleryProps {
  images: string[];
  name: string;
}

export const CampervanImageGallery = ({ images, name }: CampervanImageGalleryProps) => {
  return (
    <div className="grid grid-cols-4 gap-3 h-96 rounded-xl overflow-hidden mb-8 border border-gray-200 shadow-sm">
      {/* รูปใหญ่ด้านซ้าย */}
      <div className="col-span-2 row-span-2 relative group cursor-pointer">
        <img
          src={images ? images[0] : "/lovable-uploads/c1762e4a-0c04-42c9-bb90-72efea7f0c35.png"}
          alt={name}
          className="w-full h-full object-cover group-hover:brightness-95 transition-all duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          <Camera className="h-4 w-4 inline mr-1" />
          {images?.length || 5} รูป
        </div>
      </div>

      {/* รูปย่อย 4 ภาพ (2x2) */}
      {(images || [
        "/lovable-uploads/c1762e4a-0c04-42c9-bb90-72efea7f0c35.png",
        "/lovable-uploads/1b98df29-031c-453f-8985-bf9ab03b53a6.png",
        "/lovable-uploads/39ca8590-7c01-4b61-945b-09c0787d5e19.png",
        "/lovable-uploads/e4ce7067-7522-45d6-82c0-56a7fb4d8543.png"
      ]).slice(1, 5).map((image, index) => (
        <div key={index} className="relative group cursor-pointer">
          <img
            src={image}
            alt={`${name} ${index + 2}`}
            className="w-full h-full object-cover group-hover:brightness-95 transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
          {index === 3 && (images?.length || 5) > 5 && (
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center cursor-pointer hover:bg-opacity-50 transition-all">
              <div className="text-white text-center">
                <Grid3x3 className="h-6 w-6 mx-auto mb-2" />
                <span className="text-sm font-medium">
                  ดูทั้งหมด {images?.length || 5} รูป
                </span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
