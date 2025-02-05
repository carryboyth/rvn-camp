
import { Car } from "lucide-react";

interface SelectedMotorhomeProps {
  motorhome: {
    name: string;
    brand: string;
    price: number;
    image: string;
    pickupLocation: string;
    dropoffLocation: string;
  };
}

const SelectedMotorhome = ({ motorhome }: SelectedMotorhomeProps) => {
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
        <div>
          <p className="font-medium">{motorhome.name}</p>
          <p className="text-muted-foreground">{motorhome.brand}</p>
          <p className="mt-2">
            <span className="font-medium">Pick-up:</span>{" "}
            {motorhome.pickupLocation}
          </p>
          <p>
            <span className="font-medium">Drop-off:</span>{" "}
            {motorhome.dropoffLocation}
          </p>
          <p className="mt-2 text-lg font-semibold">
            ${motorhome.price} per day
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectedMotorhome;
