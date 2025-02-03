import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Globe, Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Header = () => {
  const [currency, setCurrency] = useState("USD");
  const [totalAmount] = useState(1234.56);
  const location = useLocation();

  // Show total price only on rent-campervan page
  const showTotalPrice = location.pathname === "/rent-campervan";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">RVnCamp</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden items-center space-x-4 lg:flex lg:space-x-6">
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
            {showTotalPrice && (
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
            )}
            <Button variant="default" size="sm">
              Login
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="ml-auto flex items-center lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>
                  <span className="text-2xl font-bold text-primary">RVnCamp</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col space-y-4">
                <Link
                  to="/"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  Home
                </Link>
                <Link
                  to="/manage-trip"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  Manage Your Trip
                </Link>
                <Link
                  to="/contact"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  Contact Us
                </Link>
                <Link
                  to="/download"
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  Download
                </Link>
                <div className="flex flex-col space-y-4 pt-4 border-t">
                  {showTotalPrice && (
                    <div className="flex items-center justify-between">
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
                  )}
                  <Button variant="default" size="sm" className="w-full">
                    Login
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;