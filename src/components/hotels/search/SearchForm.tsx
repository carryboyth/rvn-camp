
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Users } from "lucide-react";
import { format } from "date-fns";

interface SearchFormProps {
  searchLocation: string;
  setSearchLocation: (value: string) => void;
  checkIn: Date | undefined;
  setCheckIn: (date: Date | undefined) => void;
  checkOut: Date | undefined;
  setCheckOut: (date: Date | undefined) => void;
  guests: string;
  setGuests: (value: string) => void;
  onSearch: () => void;
  locations: string[];
}

const SearchForm = ({
  searchLocation,
  setSearchLocation,
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  guests,
  setGuests,
  onSearch,
  locations,
}: SearchFormProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-end">
      <div className="flex-1">
        <label className="text-sm font-medium mb-2 block">Location</label>
        <Select value={searchLocation} onValueChange={setSearchLocation}>
          <SelectTrigger className="h-12">
            <SelectValue>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                {searchLocation}
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-white border shadow-lg">
            {locations.map((location) => (
              <SelectItem key={location} value={location}>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  {location}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex-1">
        <label className="text-sm font-medium mb-2 block">Check-in</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-12 w-full justify-start text-left font-normal"
            >
              <Calendar className="mr-2 h-4 w-4" />
              {checkIn ? format(checkIn, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-white border shadow-lg" align="start">
            <CalendarComponent
              mode="single"
              selected={checkIn}
              onSelect={setCheckIn}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      
      <div className="flex-1">
        <label className="text-sm font-medium mb-2 block">Check-out</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-12 w-full justify-start text-left font-normal"
            >
              <Calendar className="mr-2 h-4 w-4" />
              {checkOut ? format(checkOut, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-white border shadow-lg" align="start">
            <CalendarComponent
              mode="single"
              selected={checkOut}
              onSelect={setCheckOut}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      
      <div className="w-32">
        <label className="text-sm font-medium mb-2 block">Guests</label>
        <Select value={guests} onValueChange={setGuests}>
          <SelectTrigger className="h-12">
            <SelectValue>
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                {guests} {parseInt(guests) === 1 ? 'Guest' : 'Guests'}
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-white border shadow-lg">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <Button onClick={onSearch} className="h-12 px-8">
        Search
      </Button>
    </div>
  );
};

export default SearchForm;
