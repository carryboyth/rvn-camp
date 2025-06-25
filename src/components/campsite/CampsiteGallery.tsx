
import React, { useState } from "react";
import { Camera, Grid3x3 } from "lucide-react";

interface CampsiteGalleryProps {
  images: string[];
  name: string;
  fullView?: boolean;
}

export const CampsiteGallery = ({ images, name, fullView = false }: CampsiteGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (fullView) {
    return (
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-xl font-semibold mb-4">Photos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="aspect-square rounded-lg overflow-hidden">
              <img
                src={image}
                alt={`${name} ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                onClick={() => setSelectedImage(index)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2 h-80 rounded-lg overflow-hidden mb-8">
      {/* Main large image */}
      <div className="col-span-2 row-span-2 relative">
        <img
          src={images[0]}
          alt={name}
          className="w-full h-full object-cover cursor-pointer hover:brightness-95 transition-all"
          onClick={() => setSelectedImage(0)}
        />
      </div>

      {/* Grid of smaller images */}
      {images.slice(1, 5).map((image, index) => (
        <div key={index} className="relative">
          <img
            src={image}
            alt={`${name} ${index + 2}`}
            className="w-full h-full object-cover cursor-pointer hover:brightness-95 transition-all"
            onClick={() => setSelectedImage(index + 1)}
          />
          {index === 3 && images.length > 5 && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer hover:bg-opacity-40 transition-all">
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
