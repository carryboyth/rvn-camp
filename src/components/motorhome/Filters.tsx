import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FiltersProps {
  onFilterChange: (filters: any) => void;
}

const Filters = ({ onFilterChange }: FiltersProps) => {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCapacity, setSelectedCapacity] = useState<string[]>([]);

  const features = [
    "Kitchen",
    "Bathroom",
    "AC",
    "WiFi",
    "TV",
    "Solar Panels",
  ];

  const types = [
    "Hilux Revo",
    "Hilux Champ",
    "Triton",
    "D-Max",
  ];

  const capacities = [
    "2 Passengers",
    "4 Passengers",
    "6 Passengers",
  ];

  const handleFeatureChange = (feature: string, checked: boolean) => {
    const newFeatures = checked
      ? [...selectedFeatures, feature]
      : selectedFeatures.filter((f) => f !== feature);
    setSelectedFeatures(newFeatures);
    onFilterChange({ features: newFeatures, priceRange, types: selectedTypes, capacity: selectedCapacity });
  };

  const handleTypeChange = (type: string, checked: boolean) => {
    const newTypes = checked
      ? [...selectedTypes, type]
      : selectedTypes.filter((t) => t !== type);
    setSelectedTypes(newTypes);
    onFilterChange({ features: selectedFeatures, priceRange, types: newTypes, capacity: selectedCapacity });
  };

  const handleCapacityChange = (capacity: string, checked: boolean) => {
    const newCapacity = checked
      ? [...selectedCapacity, capacity]
      : selectedCapacity.filter((c) => c !== capacity);
    setSelectedCapacity(newCapacity);
    onFilterChange({ features: selectedFeatures, priceRange, types: selectedTypes, capacity: newCapacity });
  };

  return (
    <Card className="p-6 space-y-6">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                defaultValue={[0, 500]}
                max={500}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mt-2"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="type">
          <AccordionTrigger>Vehicle Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {types.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={`type-${type}`}
                    checked={selectedTypes.includes(type)}
                    onCheckedChange={(checked) =>
                      handleTypeChange(type, checked as boolean)
                    }
                  />
                  <Label htmlFor={`type-${type}`}>{type}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="capacity">
          <AccordionTrigger>Capacity</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {capacities.map((capacity) => (
                <div key={capacity} className="flex items-center space-x-2">
                  <Checkbox
                    id={`capacity-${capacity}`}
                    checked={selectedCapacity.includes(capacity)}
                    onCheckedChange={(checked) =>
                      handleCapacityChange(capacity, checked as boolean)
                    }
                  />
                  <Label htmlFor={`capacity-${capacity}`}>{capacity}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="features">
          <AccordionTrigger>Features</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <Checkbox
                    id={`feature-${feature}`}
                    checked={selectedFeatures.includes(feature)}
                    onCheckedChange={(checked) =>
                      handleFeatureChange(feature, checked as boolean)
                    }
                  />
                  <Label htmlFor={`feature-${feature}`}>{feature}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default Filters;