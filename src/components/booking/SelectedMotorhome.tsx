
import { Car, Calendar, Clock, Wallet } from "lucide-react";

interface SelectedMotorhomeProps {
  motorhome: {
    name: string;
    brand: string;
    price: number;
    image: string;
    pickupLocation: string;
    dropoffLocation: string;
  };
  startDate?: string;
  endDate?: string;
  totalDays?: number;
  totalPrice?: number;
}

const SelectedMotorhome = ({ 
  motorhome, 
  startDate, 
  endDate, 
  totalDays = 0,
  totalPrice = 0 
}: SelectedMotorhomeProps) => {
  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="border-t pt-4">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Car className="h-5 w-5" />
        Selected Motorhome
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        <img
          src={motorhome.image}
          alt={motorhome.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="space-y-3">
          <div>
            <p className="font-medium">{motorhome.name}</p>
            <p className="text-muted-foreground">{motorhome.brand}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm"><span className="font-medium">Pick-up:</span> {formatDate(startDate)}</p>
              <p className="text-sm"><span className="font-medium">Drop-off:</span> {formatDate(endDate)}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm"><span className="font-medium">Duration:</span> {totalDays} days</p>
          </div>

          <div className="flex items-center gap-2">
            <Wallet className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm"><span className="font-medium">Total Price:</span> ${totalPrice.toLocaleString()}</p>
          </div>

          <div>
            <p className="text-sm"><span className="font-medium">Pick-up Location:</span> {motorhome.pickupLocation}</p>
            <p className="text-sm"><span className="font-medium">Drop-off Location:</span> {motorhome.dropoffLocation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedMotorhome;
