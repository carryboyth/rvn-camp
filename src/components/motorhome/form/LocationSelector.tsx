
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Building } from "lucide-react";
import { useEffect } from "react";

interface LocationSelectorProps {
  type: "pickup" | "destination";
  value: string;
  onValueChange: (value: string) => void;
  options: string[];
}

const LocationSelector = ({
  type,
  value,
  onValueChange,
  options,
}: LocationSelectorProps) => {
  const isPickup = type === "pickup";
  const Icon = isPickup ? MapPin : Building;
  const label = isPickup ? "Pick-up Location" : "Destination";
  const placeholder = isPickup ? "Pick-up Location" : "Select destination";

  // Set first option as default value on component mount
  useEffect(() => {
    if (!value && options.length > 0) {
      onValueChange(options[0]);
    }
  }, [options, value, onValueChange]);

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>
      <Select onValueChange={onValueChange} value={value || options[0]}>
        <SelectTrigger className="h-12">
          <SelectValue>
            {value ? (
              <div className="flex items-center">
                <Icon className="w-4 h-4 mr-2" />
                <span>{value}</span>
              </div>
            ) : (
              <div className="flex items-center text-black">
                <Icon className="w-4 h-4 mr-2" />
                <span>{placeholder}</span>
              </div>
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-white z-50 border shadow-lg">
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LocationSelector;
