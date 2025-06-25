
import React, { useState } from "react";
import { ImageModal } from "./ImageModal";
import { ImageGrid } from "./ImageGrid";
import { FullViewGallery } from "./FullViewGallery";

interface CampsiteGalleryProps {
  images: string[];
  name: string;
  fullView?: boolean;
}

export const CampsiteGallery = ({ images, name, fullView = false }: CampsiteGalleryProps) => {
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

  if (fullView) {
    return (
      <>
        <FullViewGallery images={images} name={name} onImageClick={openModal} />
        <ImageModal
          images={images}
          name={name}
          selectedImage={selectedImage}
          isOpen={showModal}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
          onSelectImage={setSelectedImage}
        />
      </>
    );
  }

  return (
    <>
      <ImageGrid images={images} name={name} onImageClick={openModal} />
      <ImageModal
        images={images}
        name={name}
        selectedImage={selectedImage}
        isOpen={showModal}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
        onSelectImage={setSelectedImage}
      />
    </>
  );
};
