import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/36e1489f-0a29-4aa0-9fa0-178c0b50d209.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up">
          Discover Thailand's Beauty<br />on Your Terms
        </h1>
        <p className="text-xl text-white/90 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Plan your perfect road trip with our curated campervan experiences
        </p>
        
        <div className="max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="bg-white p-4 rounded-lg shadow-lg flex gap-4">
            <input
              type="text"
              placeholder="Where do you want to go?"
              className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary px-6 py-2 rounded-md text-white font-semibold hover:bg-primary/90 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;