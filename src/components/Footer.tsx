import { Mail, Facebook, Instagram, Phone, Home, Users, Shield, Info } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  const handlePartnerRegistration = () => {
    navigate("/partner-registration");
  };

  const handlePartnerLogin = () => {
    navigate("/partner-login");
  };

  const handleAdminLogin = () => {
    navigate("/admin-login");
  };

  return (
    <footer className="bg-luxury-dark border-t border-luxury-charcoal">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Main Menu */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Home className="h-5 w-5 text-luxury-silver" />
              <h3 className="text-lg font-semibold text-luxury-pearl">Main Menu</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/" 
                  className="text-luxury-silver hover:text-luxury-pearl transition-colors duration-300 text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/rent-campervan" 
                  className="text-luxury-silver hover:text-luxury-pearl transition-colors duration-300 text-sm"
                >
                  Campervan Rentals
                </a>
              </li>
              <li>
                <a 
                  href="/book-campsite" 
                  className="text-luxury-silver hover:text-luxury-pearl transition-colors duration-300 text-sm"
                >
                  Campsites
                </a>
              </li>
              <li>
                <a 
                  href="/manage-trip" 
                  className="text-luxury-silver hover:text-luxury-pearl transition-colors duration-300 text-sm"
                >
                  My Trips
                </a>
              </li>
              <li>
                <a 
                  href="/promotions" 
                  className="text-luxury-silver hover:text-luxury-pearl transition-colors duration-300 text-sm"
                >
                  Promotions
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="text-luxury-silver hover:text-luxury-pearl transition-colors duration-300 text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* For Partners */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Users className="h-5 w-5 text-luxury-silver" />
              <h3 className="text-lg font-semibold text-luxury-pearl">For Partners</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Button
                  onClick={handlePartnerRegistration}
                  variant="ghost"
                  className="text-luxury-silver hover:text-luxury-pearl transition-colors duration-300 text-sm p-0 h-auto font-normal justify-start"
                >
                  Partner Registration
                </Button>
              </li>
              <li>
                <Button
                  onClick={handlePartnerLogin}
                  variant="ghost"
                  className="text-luxury-silver hover:text-luxury-pearl transition-colors duration-300 text-sm p-0 h-auto font-normal justify-start"
                >
                  Partner Login
                </Button>
              </li>
            </ul>
          </div>

          {/* For Admins */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="h-5 w-5 text-luxury-silver" />
              <h3 className="text-lg font-semibold text-luxury-pearl">For Admins</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Button
                  onClick={handleAdminLogin}
                  variant="ghost"
                  className="text-luxury-silver hover:text-luxury-pearl transition-colors duration-300 text-sm p-0 h-auto font-normal justify-start"
                >
                  Admin Login
                </Button>
              </li>
            </ul>
          </div>

          {/* General Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Info className="h-5 w-5 text-luxury-silver" />
              <h3 className="text-lg font-semibold text-luxury-pearl">General Info</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/about" 
                  className="text-luxury-silver hover:text-luxury-pearl transition-colors duration-300 text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="/privacy" 
                  className="text-luxury-silver hover:text-luxury-pearl transition-colors duration-300 text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="/terms" 
                  className="text-luxury-silver hover:text-luxury-pearl transition-colors duration-300 text-sm"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="pt-6 border-t border-luxury-charcoal">
              <h4 className="text-sm font-medium text-luxury-pearl mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-luxury-silver hover:text-luxury-pearl transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-luxury-silver hover:text-luxury-pearl transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-luxury-silver hover:text-luxury-pearl transition-colors duration-300"
                  aria-label="Line Official"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-6">
              <h4 className="text-sm font-medium text-luxury-pearl mb-4">Newsletter</h4>
              <p className="text-xs text-luxury-silver mb-4">
                Subscribe to receive updates about new destinations and special offers.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-luxury-charcoal border-luxury-charcoal text-luxury-pearl placeholder:text-luxury-silver text-sm"
                    required
                  />
                  <Button 
                    type="submit" 
                    variant="default" 
                    size="sm"
                    className="bg-luxury-silver text-luxury-dark hover:bg-luxury-pearl"
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-luxury-charcoal mt-12 pt-8">
          <div className="text-center">
            <p className="text-sm text-luxury-silver">
              © 2025 RVnCamp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
