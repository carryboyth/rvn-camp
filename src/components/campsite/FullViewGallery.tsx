
import React from "react";

interface FullViewGalleryProps {
  images: string[];
  name: string;
  onImageClick: (index: number) => void;
}

export const FullViewGallery = ({ images, name, onImageClick }: FullViewGalleryProps) => {
  return (
    <div className="bg-white rounded-lg p-6 border">
      <h2 className="text-xl font-semibold mb-4">Photos</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
            <img
              src={image}
              alt={`${name} ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onClick={() => onImageClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
