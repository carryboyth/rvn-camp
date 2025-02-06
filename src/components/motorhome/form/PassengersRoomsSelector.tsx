
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Users, Building } from "lucide-react";

interface PassengersRoomsSelectorProps {
  passengers: string;
  rooms: string;
  onPassengersChange: (value: string) => void;
  onRoomsChange: (value: string) => void;
}

const PassengersRoomsSelector = ({
  passengers,
  rooms,
  onPassengersChange,
  onRoomsChange,
}: PassengersRoomsSelectorProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Passengers & Rooms</label>
      <div className="grid grid-cols-2 gap-4">
        <Select value={passengers} onValueChange={onPassengersChange}>
          <SelectTrigger className="h-12">
            <SelectValue>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                <span>{passengers} Passengers</span>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-white z-50 border shadow-lg">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num} Passengers
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={rooms} onValueChange={onRoomsChange}>
          <SelectTrigger className="h-12">
            <SelectValue>
              <div className="flex items-center">
                <Building className="w-4 h-4 mr-2" />
                <span>{rooms} Room(s)</span>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-white z-50 border shadow-lg">
            {[1, 2, 3, 4].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num} Room(s)
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default PassengersRoomsSelector;
