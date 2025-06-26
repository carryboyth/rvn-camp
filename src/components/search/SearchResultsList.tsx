
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Wifi, Car, Droplets, Home, Zap, PawPrint, Utensils, Flame, Eye, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

interface SearchResultsListProps {
  campsites: Campsite[];
  onCampsiteHover: (id: string) => void;
  onCampsiteLeave: () => void;
}

const SearchResultsList = ({ campsites, onCampsiteHover, onCampsiteLeave }: SearchResultsListProps) => {
  const navigate = useNavigate();

  const amenityIcons: Record<string, any> = {
    wifi: Wifi,
    toilet: Home,
    shower: Droplets,
    electricity: Zap,
    "pet-friendly": PawPrint,
    restaurant: Utensils,
    firepit: Flame,
    parking: Car
  };

  const amenityLabels: Record<string, string> = {
    wifi: "Wi-Fi",
    toilet: "ห้องน้ำ",
    shower: "อาบน้ำ",
    electricity: "ไฟฟ้า",
    "pet-friendly": "สัตว์เลี้ยงได้",
    restaurant: "ร้านอาหาร",
    firepit: "กองไฟ",
    parking: "ที่จอดรถ"
  };

  return (
    <div className="space-y-6">
      {campsites.map((campsite) => (
        <Card 
          key={campsite.id}
          className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          onMouseEnter={() => onCampsiteHover(campsite.id)}
          onMouseLeave={onCampsiteLeave}
        >
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="relative md:w-80 h-64 md:h-56">
                <img
                  src={campsite.image}
                  alt={campsite.name}
                  className="w-full h-full object-cover"
                />
                {campsite.featured && (
                  <Badge className="absolute top-3 left-3 bg-red-600 hover:bg-red-700">
                    แนะนำ
                  </Badge>
                )}
                {campsite.originalPrice && campsite.originalPrice > campsite.price && (
                  <Badge className="absolute top-3 right-3 bg-green-600 hover:bg-green-700">
                    ลด {Math.round(((campsite.originalPrice - campsite.price) / campsite.originalPrice) * 100)}%
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 p-6">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
                        {campsite.name}
                      </h3>
                      <div className="flex items-center gap-1 ml-4">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{campsite.rating}</span>
                        <span className="text-gray-500 text-sm">({campsite.reviewCount})</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-gray-600 mb-3">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{campsite.location}</span>
                    </div>

                    <p className="text-gray-700 text-sm line-clamp-2 mb-4">
                      {campsite.description}
                    </p>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {campsite.amenities.slice(0, 6).map((amenity) => {
                        const Icon = amenityIcons[amenity];
                        const label = amenityLabels[amenity];
                        return Icon ? (
                          <div key={amenity} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                            <Icon className="h-3 w-3" />
                            <span>{label}</span>
                          </div>
                        ) : null;
                      })}
                      {campsite.amenities.length > 6 && (
                        <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          +{campsite.amenities.length - 6} อื่นๆ
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Price and Actions */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-baseline gap-2">
                      {campsite.originalPrice && campsite.originalPrice > campsite.price && (
                        <span className="text-sm text-gray-500 line-through">
                          ฿{campsite.originalPrice.toLocaleString()}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-gray-900">
                        ฿{campsite.price.toLocaleString()}
                      </span>
                      <span className="text-gray-600">/คืน</span>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/campsite/${campsite.id}`);
                        }}
                        className="flex items-center gap-1"
                      >
                        <Eye className="h-4 w-4" />
                        ดูรายละเอียด
                      </Button>
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/campsite/${campsite.id}?action=book`);
                        }}
                        className="bg-green-600 hover:bg-green-700 flex items-center gap-1"
                      >
                        <Calendar className="h-4 w-4" />
                        จองเลย
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SearchResultsList;
