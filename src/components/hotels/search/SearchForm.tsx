
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
    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Location</label>
          <Select value={searchLocation} onValueChange={setSearchLocation}>
            <SelectTrigger className="h-12 bg-white border-gray-200">
              <SelectValue>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                  {searchLocation}
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-white border shadow-lg">
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                    {location}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Check-in</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="h-12 w-full justify-start text-left font-normal bg-white border-gray-200"
              >
                <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                {checkIn ? format(checkIn, "PPP") : <span className="text-gray-500">Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white border shadow-lg" align="start">
              <CalendarComponent
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                initialFocus
                className="rounded-md border"
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Check-out</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="h-12 w-full justify-start text-left font-normal bg-white border-gray-200"
              >
                <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                {checkOut ? format(checkOut, "PPP") : <span className="text-gray-500">Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white border shadow-lg" align="start">
              <CalendarComponent
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                initialFocus
                className="rounded-md border"
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Guests</label>
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger className="h-12 bg-white border-gray-200">
              <SelectValue>
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4 text-gray-500" />
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
      </div>
      
      <div className="mt-6">
        <Button 
          onClick={onSearch} 
          className="w-full md:w-auto h-12 px-8 bg-primary hover:bg-primary/90"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchForm;
