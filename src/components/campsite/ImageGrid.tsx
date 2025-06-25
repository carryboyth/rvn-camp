
import React from "react";
import { Grid3x3 } from "lucide-react";

interface ImageGridProps {
  images: string[];
  name: string;
  onImageClick: (index: number) => void;
}

export const ImageGrid = ({ images, name, onImageClick }: ImageGridProps) => {
  return (
    <div className="grid grid-cols-4 gap-3 h-96 rounded-xl overflow-hidden mb-8">
      {/* Main large image */}
      <div className="col-span-2 row-span-2 relative group cursor-pointer">
        <img
          src={images[0]}
          alt={name}
          className="w-full h-full object-cover group-hover:brightness-95 transition-all duration-300"
          onClick={() => onImageClick(0)}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
      </div>

      {/* Grid of smaller images */}
      {images.slice(1, 5).map((image, index) => (
        <div key={index} className="relative group cursor-pointer">
          <img
            src={image}
            alt={`${name} ${index + 2}`}
            className="w-full h-full object-cover group-hover:brightness-95 transition-all duration-300"
            onClick={() => onImageClick(index + 1)}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
          {index === 3 && images.length > 5 && (
            <div 
              className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center cursor-pointer hover:bg-opacity-50 transition-all"
              onClick={() => onImageClick(index + 1)}
            >
              <div className="text-white text-center">
                <Grid3x3 className="h-6 w-6 mx-auto mb-2" />
                <span className="text-sm font-medium">
                  Show all {images.length} photos
                </span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
