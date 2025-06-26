
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchFilters from "@/components/search/SearchFilters";
import SearchResultsList from "@/components/search/SearchResultsList";
import SearchMap from "@/components/search/SearchMap";
import StickySearchBar from "@/components/search/StickySearchBar";
import { Button } from "@/components/ui/button";
import { Map, List, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SearchFilters {
  priceRange: [number, number];
  accommodationTypes: string[];
  amenities: string[];
  activities: string[];
}

const mockCampsites = [
  {
    id: "1",
    name: "Mountain View Campsite",
    description: "Beautiful campsite nestled in a pine forest with scenic mountain views.",
    location: "Chiang Mai, Thailand",
    amenities: ["wifi", "toilet", "pet-friendly", "firepit"],
    activities: ["hiking", "photography"],
    rating: 4.5,
    reviewCount: 128,
    price: 1500,
    originalPrice: 1800,
    image: "/lovable-uploads/b047e00a-8752-47a7-8444-d4d4063f3d7a.png",
    lat: 18.7883,
    lng: 98.9853,
    featured: true
  },
  {
    id: "2",
    name: "Riverside Glamping Resort",
    description: "Luxury glamping experience with river views and modern amenities.",
    location: "Kanchanaburi, Thailand",
    amenities: ["wifi", "toilet", "electricity", "restaurant"],
    activities: ["fishing", "kayaking", "cycling"],
    rating: 4.8,
    reviewCount: 89,
    price: 2500,
    originalPrice: 3000,
    image: "/lovable-uploads/151cc02e-01af-45b1-81cf-f52357614380.png",
    lat: 14.0227,
    lng: 99.5328,
    featured: false
  },
  {
    id: "3",
    name: "Beachfront Camping Paradise",
    description: "Stunning beachfront location with sunset views and water activities.",
    location: "Phuket, Thailand",
    amenities: ["wifi", "toilet", "shower", "beach-access"],
    activities: ["swimming", "snorkeling", "surfing"],
    rating: 4.6,
    reviewCount: 156,
    price: 2000,
    originalPrice: 2200,
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    lat: 7.8804,
    lng: 98.3923,
    featured: true
  }
];

const SearchResults = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<'list' | 'map'>('list');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    priceRange: [0, 5000],
    accommodationTypes: [],
    amenities: [],
    activities: []
  });
  const [hoveredCampsite, setHoveredCampsite] = useState<string | null>(null);

  const filteredCampsites = mockCampsites.filter(campsite => {
    const priceInRange = campsite.price >= filters.priceRange[0] && campsite.price <= filters.priceRange[1];
    const amenitiesMatch = filters.amenities.length === 0 || filters.amenities.some(amenity => campsite.amenities.includes(amenity));
    const activitiesMatch = filters.activities.length === 0 || filters.activities.some(activity => campsite.activities.includes(activity));
    
    return priceInRange && amenitiesMatch && activitiesMatch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Sticky Search Bar */}
      <StickySearchBar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          {/* Mobile View Toggle */}
          <div className="lg:hidden flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Button
                variant={view === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setView('list')}
                className="flex items-center gap-2"
              >
                <List className="h-4 w-4" />
                รายการ
              </Button>
              <Button
                variant={view === 'map' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setView('map')}
                className="flex items-center gap-2"
              >
                <Map className="h-4 w-4" />
                แผนที่
              </Button>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(true)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              ตัวกรอง
            </Button>
          </div>

          {/* Desktop Filter Sidebar + Mobile Filter Modal */}
          <SearchFilters 
            filters={filters}
            onFiltersChange={setFilters}
            showMobile={showFilters}
            onCloseMobile={() => setShowFilters(false)}
          />

          {/* Results Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              แคมป์ไซต์ที่พบ
            </h1>
            <p className="text-gray-600">
              พบ {filteredCampsites.length} แห่งจากการค้นหาของคุณ
            </p>
          </div>

          {/* Split Layout */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Column - Results List */}
            <div className={`${view === 'list' || window.innerWidth >= 1024 ? 'block' : 'hidden'} lg:block lg:w-1/2`}>
              <SearchResultsList 
                campsites={filteredCampsites}
                onCampsiteHover={setHoveredCampsite}
                onCampsiteLeave={() => setHoveredCampsite(null)}
              />
            </div>

            {/* Right Column - Map */}
            <div className={`${view === 'map' || window.innerWidth >= 1024 ? 'block' : 'hidden'} lg:block lg:w-1/2`}>
              <div className="sticky top-24">
                <SearchMap 
                  campsites={filteredCampsites}
                  hoveredCampsite={hoveredCampsite}
                  onCampsiteClick={(campsiteId) => navigate(`/campsite/${campsiteId}`)}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
