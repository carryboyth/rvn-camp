import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchResults from "@/components/motorhome/SearchResults";
import TopFilters from "@/components/motorhome/TopFilters";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const MotorhomeResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = location.state || {};
  
  const [departureDate, setDepartureDate] = useState<Date | undefined>(
    searchParams.departureDate ? new Date(searchParams.departureDate) : undefined
  );
  const [returnDate, setReturnDate] = useState<Date | undefined>(
    searchParams.returnDate ? new Date(searchParams.returnDate) : undefined
  );
  const [filters, setFilters] = useState({
    features: [],
    priceRange: [0, 10000],
    types: [],
    capacity: [],
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Search
          </Button>
          
          {/* Top Filters */}
          <TopFilters
            departureDate={departureDate}
            returnDate={returnDate}
            onDepartureDateChange={setDepartureDate}
            onReturnDateChange={setReturnDate}
            onFilterChange={setFilters}
          />
        </div>

        {/* Results */}
        <SearchResults filters={filters} />
      </main>

      <Footer />
    </div>
  );
};

export default MotorhomeResults;
