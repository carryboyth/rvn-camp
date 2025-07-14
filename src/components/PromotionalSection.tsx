const PromotionalSection = () => {
  const promotions = [
    {
      id: 1,
      title: "ที่พักเหนือระดับ",
      subtitle: "กับราคาสุดพิเศษ",
      description: "สุดคุ้ม 20% / จองวันนี้",
      buttonText: "จองวันนี้",
      bgColor: "bg-gradient-to-r from-blue-500 to-blue-600",
      image: "/lovable-uploads/36e1489f-0a29-4aa0-9fa0-178c0b50d209.png",
      discount: "20%",
      brandLogo: "Trip.com | BUJH | Hotels"
    },
    {
      id: 2,
      title: "คุ้มสองต่อ",
      subtitle: "เมื่อจองเที่ยวบิน",
      description: "Trip Coins ที่ใช้ระลอกเลยคืน",
      buttonText: "จองวันนี้",
      bgColor: "bg-gradient-to-r from-cyan-400 to-blue-500",
      image: "/lovable-uploads/36e1489f-0a29-4aa0-9fa0-178c0b50d209.png",
      icon: "✈️",
      coins: "+2"
    },
    {
      id: 3,
      title: "เที่ยวบินกรุงโลก",
      subtitle: "ยกระดับการเดินทาง Singapore Airlines",
      description: "ร่วมกับชมองเมื่อลงจอง ฿1,500",
      buttonText: "จองวันนี้",
      bgColor: "bg-gradient-to-r from-blue-800 to-blue-900",
      image: "/lovable-uploads/36e1489f-0a29-4aa0-9fa0-178c0b50d209.png",
      airline: "Singapore Airlines",
      price: "฿1,500"
    }
  ];


  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          โปรโมชั่นและข่าวสาร
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* 3 Images per Row Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
            {promotions.map((promo) => (
              <div
                key={promo.id}
                className={`${promo.bgColor} relative overflow-hidden min-h-[280px] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{ backgroundImage: `url(${promo.image})` }}
                />
                
                {/* Content */}
                <div className="relative z-10 p-6 text-white h-full flex flex-col justify-between">
                  {/* Header */}
                  {promo.brandLogo && (
                    <div className="text-xs font-medium mb-2 opacity-90">
                      {promo.brandLogo}
                    </div>
                  )}
                  
                  {/* Main Content */}
                  <div className="flex-1">
                    {promo.coins && (
                      <div className="text-3xl font-bold mb-2">
                        {promo.coins} {promo.icon}
                      </div>
                    )}
                    
                    {promo.discount && (
                      <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-3">
                        สุดคุ้ม {promo.discount}
                      </div>
                    )}
                    
                    <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                      {promo.title}
                    </h3>
                    <p className="text-lg md:text-xl font-semibold mb-3 opacity-90">
                      {promo.subtitle}
                    </p>
                    <p className="text-sm md:text-base mb-4 opacity-80">
                      {promo.description}
                    </p>
                    
                    {promo.airline && (
                      <div className="text-sm font-medium mb-2 opacity-90">
                        {promo.airline}
                      </div>
                    )}
                    
                    {promo.price && (
                      <div className="text-lg font-bold mb-3">
                        ร่วมกับชมองเมื่อลงจอง {promo.price}
                      </div>
                    )}
                  </div>
                  
                  {/* Button */}
                  <button className="bg-white text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors self-start">
                    {promo.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalSection;