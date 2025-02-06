
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchResults from "@/components/motorhome/SearchResults";
import Filters from "@/components/motorhome/Filters";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MotorhomeResults = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    features: [],
    priceRange: [0, 500],
    types: [],
    capacity: [],
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Search
          </Button>
          <h1 className="text-2xl font-bold">Available Motorhomes</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <aside className="md:col-span-1">
            <Filters onFilterChange={setFilters} />
          </aside>
          <div className="md:col-span-3">
            <SearchResults filters={filters} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MotorhomeResults;
