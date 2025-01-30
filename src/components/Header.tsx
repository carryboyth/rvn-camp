import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Globe } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const [currency, setCurrency] = useState("USD");
  const [totalAmount] = useState(1234.56); // Example amount

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">RVnCamp</span>
        </Link>

        <nav className="ml-auto flex items-center space-x-4 lg:space-x-6">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            to="/manage-trip"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Manage Your Trip
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact Us
          </Link>
          <Link
            to="/download"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Download
          </Link>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">
                {totalAmount.toLocaleString(undefined, {
                  style: "currency",
                  currency: currency,
                })}
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-medium">{currency}</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setCurrency("USD")}>
                    USD
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setCurrency("THB")}>
                    THB
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Button variant="default" size="sm">
              Login
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;