
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Search, Navigation } from "lucide-react";

interface Campsite {
  id: string;
  name: string;
  description: string;
  location: string;
  amenities: string[];
  activities: string[];
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  image: string;
  lat: number;
  lng: number;
  featured: boolean;
}

interface SearchMapProps {
  campsites: Campsite[];
  hoveredCampsite: string | null;
  onCampsiteClick: (id: string) => void;
}

const SearchMap = ({ campsites, hoveredCampsite, onCampsiteClick }: SearchMapProps) => {
  const [selectedCampsite, setSelectedCampsite] = useState<string | null>(null);

  // Mock map implementation - in a real app, you'd use Google Maps, Mapbox, etc.
  return (
    <div className="relative w-full h-96 lg:h-[600px] bg-gray-100 rounded-xl overflow-hidden">
      {/* Map Background */}
      <div 
        className="w-full h-full bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-green-900/20" />
        
        {/* Map Controls */}
        <div className="absolute top-4 left-4 right-4 z-10">
          <Button 
            className="w-full bg-white text-gray-900 hover:bg-gray-50 flex items-center gap-2 shadow-md"
            onClick={() => {
              // In a real app, this would trigger a map search
              console.log('Search this area');
            }}
          >
            <Search className="h-4 w-4" />
            ค้นหาในพื้นที่นี้
          </Button>
        </div>

        {/* Zoom Controls */}
        <div className="absolute top-20 right-4 z-10 flex flex-col gap-1">
          <Button size="sm" variant="outline" className="w-10 h-10 p-0 bg-white">+</Button>
          <Button size="sm" variant="outline" className="w-10 h-10 p-0 bg-white">-</Button>
          <Button size="sm" variant="outline" className="w-10 h-10 p-0 bg-white">
            <Navigation className="h-4 w-4" />
          </Button>
        </div>

        {/* Campsite Markers */}
        {campsites.map((campsite, index) => (
          <div
            key={campsite.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 ${
              hoveredCampsite === campsite.id ? 'scale-110 z-20' : 'z-10'
            }`}
            style={{
              left: `${20 + (index % 3) * 30}%`,
              top: `${30 + Math.floor(index / 3) * 25}%`
            }}
            onClick={() => {
              setSelectedCampsite(campsite.id);
              onCampsiteClick(campsite.id);
            }}
            onMouseEnter={() => setSelectedCampsite(campsite.id)}
            onMouseLeave={() => setSelectedCampsite(null)}
          >
            {/* Price Marker */}
            <div className={`
              bg-white border-2 border-green-600 rounded-full px-3 py-1 shadow-lg
              ${hoveredCampsite === campsite.id || selectedCampsite === campsite.id ? 'bg-green-600 text-white' : 'text-green-600'}
              transition-colors duration-200
            `}>
              <span className="font-semibold text-sm">
                ฿{campsite.price.toLocaleString()}
              </span>
            </div>

            {/* Popup on Hover */}
            {selectedCampsite === campsite.id && (
              <Card className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 shadow-xl z-30">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={campsite.image}
                      alt={campsite.name}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                    {campsite.featured && (
                      <Badge className="absolute top-2 left-2 bg-red-600 hover:bg-red-700 text-xs">
                        แนะนำ
                      </Badge>
                    )}
                  </div>
                  <div className="p-3">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-semibold text-sm line-clamp-1">{campsite.name}</h4>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs">{campsite.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 mb-2">
                      <MapPin className="h-3 w-3" />
                      <span className="text-xs">{campsite.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-1">
                        <span className="font-bold text-sm">฿{campsite.price.toLocaleString()}</span>
                        <span className="text-xs text-gray-600">/คืน</span>
                      </div>
                      <Button size="sm" className="text-xs px-2 py-1 h-auto bg-green-600 hover:bg-green-700">
                        ดูรายละเอียด
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        ))}

        {/* Map Attribution */}
        <div className="absolute bottom-2 right-2 text-xs text-white bg-black/50 px-2 py-1 rounded">
          Map data © Thailand Tourism
        </div>
      </div>
    </div>
  );
};

export default SearchMap;
