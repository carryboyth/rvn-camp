import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer className="border-t bg-muted">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic space-y-2">
              <p>123 Adventure Road</p>
              <p>Bangkok, Thailand 10110</p>
              <p>Phone: +66 2 123 4567</p>
              <p>Email: info@rvncamp.com</p>
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