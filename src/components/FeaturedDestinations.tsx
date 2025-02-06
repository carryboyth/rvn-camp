
import { ArrowRight } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Chiang Mai",
    image: "https://images.unsplash.com/photo-1598935898639-81586f7d2129",
    description: "Mountain trails & cultural experiences",
  },
  {
    id: 2,
    name: "Phuket",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5",
    description: "Coastal drives & beach camping",
  },
  {
    id: 3,
    name: "Khao Yai",
    image: "https://images.unsplash.com/photo-1586500036706-41963de24d8b",
    description: "National parks & wildlife",
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                
                <button className="flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
                  Explore
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
