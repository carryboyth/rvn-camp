
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

interface DateSelectorProps {
  departureDate?: Date;
  returnDate?: Date;
  onDepartureDateChange: (date: Date | undefined) => void;
  onReturnDateChange: (date: Date | undefined) => void;
}

const DateSelector = ({
  departureDate,
  returnDate,
  onDepartureDateChange,
  onReturnDateChange,
}: DateSelectorProps) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Departure Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal h-12 bg-white border-gray-200"
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                {departureDate ? (
                  format(departureDate, "PPP")
                ) : (
                  <span className="text-gray-500">Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white" align="start">
              <Calendar
                mode="single"
                selected={departureDate}
                onSelect={onDepartureDateChange}
                initialFocus
                className="rounded-md border"
                disabled={(date) =>
                  date < new Date() || (returnDate && date > returnDate)
                }
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Return Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal h-12 bg-white border-gray-200"
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                {returnDate ? (
                  format(returnDate, "PPP")
                ) : (
                  <span className="text-gray-500">Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white" align="start">
              <Calendar
                mode="single"
                selected={returnDate}
                onSelect={onReturnDateChange}
                initialFocus
                className="rounded-md border"
                disabled={(date) =>
                  date < new Date() || (departureDate && date < departureDate)
                }
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default DateSelector;
