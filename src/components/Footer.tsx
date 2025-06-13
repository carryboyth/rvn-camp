
import { Mail } from "lucide-react";
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

  return (
    <footer className="border-t bg-muted">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic space-y-2">
              <p>888,Luangphaeng rd.</p>
              <p>Bangkok,10520 Thailand</p>
              <p>Phone: 063 891 6161</p>
              <p>Email: rvncamp@carryboy.com</p>
            </address>
          </div>

          {/* Site Map */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Site Map</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/manage-trip"
                  className="hover:text-primary transition-colors"
                >
                  Manage Your Trip
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/download"
                  className="hover:text-primary transition-colors"
                >
                  Download
                </a>
              </li>
              <li>
                <Button
                  onClick={handlePartnerRegistration}
                  variant="outline"
                  className="w-full justify-start p-0 h-auto bg-transparent border-none hover:bg-transparent hover:text-primary transition-colors text-left font-normal"
                >
                  Partner Registration
                </Button>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to receive updates about new destinations and special
              offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  required
                />
                <Button type="submit" variant="default">
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
