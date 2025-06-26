
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import { MapPin, Calendar as CalendarIcon, Users, Search } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { DateRange } from "react-day-picker";

const StickySearchBar = () => {
  const [date, setDate] = useState<DateRange | undefined>();
  const [selectedLocation, setSelectedLocation] = useState("เชียงใหม่");
  const [guests, setGuests] = useState({ adults: 2, children: 0 });

  const locations = [
    "เชียงใหม่",
    "กรุงเทพมหานคร", 
    "ภูเก็ต",
    "กระบี่",
    "เกาะสมุย",
    "พัทยา",
    "หัวหิน",
    "เขาใหญ่"
  ];

  return (
    <div className="sticky top-16 z-30 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row gap-3">
          {/* Location */}
          <div className="flex-1 min-w-0">
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="h-12 bg-white border-gray-200">
                <SelectValue>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-600" />
                    <span className="truncate">{selectedLocation}</span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-white z-50">
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date Range */}
          <div className="flex-1 min-w-0">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-12 w-full justify-start text-left font-normal bg-white border-gray-200",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 text-green-600" />
                  <span className="truncate">
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, "dd/MM")} - {format(date.to, "dd/MM")}
                        </>
                      ) : (
                        format(date.from, "dd/MM/yyyy")
                      )
                    ) : (
                      "เลือกวันที่"
                    )}
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white z-50" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                  className="rounded-xl"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Guests */}
          <div className="flex-1 min-w-0">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="h-12 w-full justify-start text-left font-normal bg-white border-gray-200"
                >
                  <Users className="mr-2 h-4 w-4 text-green-600" />
                  <span className="truncate">{guests.adults + guests.children} คน</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-white z-50" align="start">
                <div className="space-y-4 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">ผู้ใหญ่</div>
                      <div className="text-sm text-gray-500">อายุ 13 ปีขึ้นไป</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setGuests(prev => ({ ...prev, adults: Math.max(1, prev.adults - 1) }))}
                        className="h-8 w-8 rounded-full p-0"
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{guests.adults}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setGuests(prev => ({ ...prev, adults: prev.adults + 1 }))}
                        className="h-8 w-8 rounded-full p-0"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">เด็ก</div>
                      <div className="text-sm text-gray-500">อายุ 2-12 ปี</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setGuests(prev => ({ ...prev, children: Math.max(0, prev.children - 1) }))}
                        className="h-8 w-8 rounded-full p-0"
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{guests.children}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setGuests(prev => ({ ...prev, children: prev.children + 1 }))}
                        className="h-8 w-8 rounded-full p-0"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Search Button */}
          <Button className="h-12 px-6 bg-green-600 hover:bg-green-700 whitespace-nowrap">
            <Search className="w-4 h-4 mr-2" />
            ค้นหา
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickySearchBar;
