
import React, { useState } from "react";
import { Camera, Grid3x3, X, ChevronLeft, ChevronRight } from "lucide-react";

interface MotorhomeGalleryProps {
  images: string[];
  name: string;
}

export const MotorhomeGallery = ({ images, name }: MotorhomeGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openModal = (index: number) => {
    setSelectedImage(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Only display first 5 images
  const displayImages = images.slice(0, 5);

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[400px] rounded-xl overflow-hidden mb-8">
        {/* Main large image - left side */}
        <div className="col-span-2 row-span-2 relative group cursor-pointer">
          <img
            src={displayImages[0]}
            alt={name}
            className="w-full h-full object-cover group-hover:brightness-95 transition-all duration-300"
            onClick={() => openModal(0)}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
        </div>

        {/* Top right images - 2 small squares */}
        {displayImages.slice(1, 3).map((image, index) => (
          <div key={index} className="relative group cursor-pointer">
            <img
              src={image}
              alt={`${name} ${index + 2}`}
              className="w-full h-full object-cover group-hover:brightness-95 transition-all duration-300"
              onClick={() => openModal(index + 1)}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
          </div>
        ))}

        {/* Bottom right images - 2 small squares */}
        {displayImages.slice(3, 5).map((image, index) => (
          <div key={index + 2} className="relative group cursor-pointer">
            <img
              src={image}
              alt={`${name} ${index + 4}`}
              className="w-full h-full object-cover group-hover:brightness-95 transition-all duration-300"
              onClick={() => openModal(index + 3)}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
            {/* Show "View all" overlay on last image if more than 5 total */}
            {index === 1 && images.length > 5 && (
              <div 
                className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center cursor-pointer hover:bg-opacity-50 transition-all"
                onClick={() => openModal(4)}
              >
                <div className="text-white text-center">
                  <Grid3x3 className="h-6 w-6 mx-auto mb-2" />
                  <span className="text-sm font-medium">
                    ดูรูปทั้งหมด {images.length} รูป
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation buttons */}
            {images.length > 1 && (
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

            {/* Main image */}
            <img
              src={images[selectedImage]}
              alt={`${name} ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded">
              {selectedImage + 1} / {images.length}
            </div>

            {/* Thumbnail strip */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 ${
                    selectedImage === index ? 'border-white' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
