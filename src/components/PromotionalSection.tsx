import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const PromotionalSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      id: 1,
      title: "CampTrip x AirAsia",
      subtitle: "Low Fare",
      description: "ตั๋วเที่ยวบินสุดคุ้ม",
      buttonText: "จองด่วน",
      bgColor: "bg-gradient-to-r from-red-500 to-red-600",
      image: "/lovable-uploads/36e1489f-0a29-4aa0-9fa0-178c0b50d209.png"
    },
    {
      id: 2,
      title: "#DiscoverThailand",
      subtitle: "เที่ยวกิ่วฮุ่นใน",
      description: "โรงแรมสุดฮอต 50%",
      period: "14 - 27 ก.ค.",
      buttonText: "จองด่วน",
      bgColor: "bg-gradient-to-r from-blue-600 to-purple-600",
      image: "/lovable-uploads/36e1489f-0a29-4aa0-9fa0-178c0b50d209.png"
    },
    {
      id: 3,
      title: "CampTrip",
      subtitle: "เปิดประสบการณ์",
      description: "ท่องโลกอย่างมีระดับกับ",
      brand: "CAMPING ADVENTURES",
      buttonText: "จองด่วน",
      bgColor: "bg-gradient-to-r from-green-600 to-blue-600",
      image: "/lovable-uploads/36e1489f-0a29-4aa0-9fa0-178c0b50d209.png"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promotions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promotions.length) % promotions.length);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          โปรโมชั่นและข่าวสาร
        </h2>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {promotions.map((promo) => (
                <div
                  key={promo.id}
                  className={`w-full flex-shrink-0 ${promo.bgColor} relative overflow-hidden min-h-[300px]`}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: `url(${promo.image})` }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 md:p-12 text-white h-full flex items-center">
                    <div className="max-w-md">
                      <div className="text-2xl md:text-4xl font-bold mb-2">
                        {promo.title}
                      </div>
                      <div className="text-xl md:text-3xl font-semibold mb-4">
                        {promo.subtitle}
                      </div>
                      <div className="text-lg mb-2">
                        {promo.description}
                      </div>
                      {promo.period && (
                        <div className="text-sm mb-4 bg-white/20 inline-block px-3 py-1 rounded-full">
                          {promo.period}
                        </div>
                      )}
                      {promo.brand && (
                        <div className="text-lg font-semibold mb-4">
                          {promo.brand}
                        </div>
                      )}
                      <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        {promo.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-blue-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalSection;