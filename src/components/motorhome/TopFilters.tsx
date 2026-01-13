import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface TopFiltersProps {
  departureDate?: Date;
  returnDate?: Date;
  onDepartureDateChange: (date: Date | undefined) => void;
  onReturnDateChange: (date: Date | undefined) => void;
  onFilterChange: (filters: any) => void;
}

const TopFilters = ({
  departureDate,
  returnDate,
  onDepartureDateChange,
  onReturnDateChange,
  onFilterChange,
}: TopFiltersProps) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const types = ["Hilux Revo", "Hilux Champ", "Triton", "D-Max"];
  const features = ["Kitchen", "Bathroom", "AC", "WiFi", "TV", "Solar Panels"];

  const handleTypeChange = (type: string, checked: boolean) => {
    const newTypes = checked
      ? [...selectedTypes, type]
      : selectedTypes.filter((t) => t !== type);
    setSelectedTypes(newTypes);
    onFilterChange({ types: newTypes, features: selectedFeatures });
  };

  const handleFeatureChange = (feature: string, checked: boolean) => {
    const newFeatures = checked
      ? [...selectedFeatures, feature]
      : selectedFeatures.filter((f) => f !== feature);
    setSelectedFeatures(newFeatures);
    onFilterChange({ types: selectedTypes, features: newFeatures });
  };

  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      {/* Departure Date */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="gap-2 h-10">
            <Calendar className="h-4 w-4" />
            {departureDate ? format(departureDate, "d MMM yyyy") : "วันรับรถ"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <CalendarComponent
            mode="single"
            selected={departureDate}
            onSelect={onDepartureDateChange}
            disabled={(date) => date < new Date()}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      {/* Return Date */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="gap-2 h-10">
            <Calendar className="h-4 w-4" />
            {returnDate ? format(returnDate, "d MMM yyyy") : "วันคืนรถ"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <CalendarComponent
            mode="single"
            selected={returnDate}
            onSelect={onReturnDateChange}
            disabled={(date) => (departureDate ? date <= departureDate : date < new Date())}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      {/* Vehicle Type Filter */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="h-10">
            Vehicle type
            {selectedTypes.length > 0 && (
              <span className="ml-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {selectedTypes.length}
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56" align="start">
          <div className="space-y-3">
            {types.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox
                  id={`type-${type}`}
                  checked={selectedTypes.includes(type)}
                  onCheckedChange={(checked) =>
                    handleTypeChange(type, checked as boolean)
                  }
                />
                <Label htmlFor={`type-${type}`} className="cursor-pointer">
                  {type}
                </Label>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>

      {/* Features Filter */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="h-10">
            Features
            {selectedFeatures.length > 0 && (
              <span className="ml-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {selectedFeatures.length}
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56" align="start">
          <div className="space-y-3">
            {features.map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <Checkbox
                  id={`feature-${feature}`}
                  checked={selectedFeatures.includes(feature)}
                  onCheckedChange={(checked) =>
                    handleFeatureChange(feature, checked as boolean)
                  }
                />
                <Label htmlFor={`feature-${feature}`} className="cursor-pointer">
                  {feature}
                </Label>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TopFilters;
