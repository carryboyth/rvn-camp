
import { Calendar } from "@/components/ui/calendar";

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
    <div className="space-y-2">
      <div className="flex justify-between">
        <label className="text-sm font-medium">Travel Dates</label>
        <label className="text-sm font-medium">Drop off date</label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Calendar
            mode="single"
            selected={departureDate}
            onSelect={onDepartureDateChange}
            className="rounded-md border bg-white"
            disabled={(date) =>
              date < new Date() || (returnDate && date > returnDate)
            }
          />
        </div>
        <div className="space-y-2">
          <Calendar
            mode="single"
            selected={returnDate}
            onSelect={onReturnDateChange}
            className="rounded-md border bg-white"
            disabled={(date) =>
              date < new Date() || (departureDate && date < departureDate)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default DateSelector;
