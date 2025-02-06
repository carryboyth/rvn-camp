
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchButtonProps {
  onClick: () => void;
}

const SearchButton = ({ onClick }: SearchButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg"
    >
      <Search className="w-5 h-5 mr-2" />
      Search Motorhome & Hotel
    </Button>
  );
};

export default SearchButton;
