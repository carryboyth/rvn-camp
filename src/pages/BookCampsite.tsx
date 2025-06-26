
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MapPin, Calendar as CalendarIcon, Users, Tent, Car, Home, Search, Star, Filter, Map } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { DateRange } from "react-day-picker";
import SearchHero from "@/components/campsite/SearchHero";
import FeaturedCampsites from "@/components/campsite/FeaturedCampsites";
import FilterSidebar from "@/components/campsite/FilterSidebar";
import PartnerCallToAction from "@/components/campsite/PartnerCallToAction";

const BookCampsite = () => {
  const navigate = useNavigate();
  const [showMap, setShowMap] = React.useState(false);
  const [filters, setFilters] = React.useState({
    priceRange: [0, 5000],
    amenities: [],
    activities: [],
    accommodationType: ""
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50" style={{ fontFamily: 'Kanit, sans-serif' }}>
      <Header />
      
      {/* Hero Section */}
      <SearchHero onSearch={() => navigate("/search")} />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="lg:w-1/4">
            <FilterSidebar 
              filters={filters} 
              onFiltersChange={setFilters}
              showMap={showMap}
              onToggleMap={() => setShowMap(!showMap)}
            />
          </div>
          
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                แคมป์ไซต์แนะนำ
              </h2>
              <div className="flex items-center gap-2">
                <Button
                  variant={showMap ? "default" : "outline"}
                  size="sm"
                  onClick={() => setShowMap(!showMap)}
                  className="flex items-center gap-2"
                >
                  <Map className="h-4 w-4" />
                  {showMap ? "ซ่อนแผนที่" : "แสดงแผนที่"}
                </Button>
              </div>
            </div>
            
            {/* Featured Campsites */}
            <FeaturedCampsites showMap={showMap} />
          </div>
        </div>
        
        {/* Partner Call to Action */}
        <PartnerCallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default BookCampsite;
