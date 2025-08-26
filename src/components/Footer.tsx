import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl">SmartFixTexas</span>
            </Link>
            <p className="text-primary-foreground/80">
              Austin's trusted home services professionals. Licensed, insured, and available 24/7 for emergencies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/plumbing" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Plumbing Services
                </Link>
              </li>
              <li>
                <Link to="/hvac" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  HVAC Services
                </Link>
              </li>
              <li>
                <Link to="/electrical" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Electrical Services
                </Link>
              </li>
              <li>
                <span className="text-primary-foreground/80">Emergency Repairs</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-secondary" />
                <a href="tel:+15125551234" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  (512) 555-1234
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-secondary" />
                <a href="mailto:info@smartfixtexas.com" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  info@smartfixtexas.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80">Austin, TX</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-secondary" />
                <div className="text-primary-foreground/80">
                  <div>Mon-Fri: 7AM-8PM</div>
                  <div>Sat: 8AM-6PM</div>
                  <div>Sun: 9AM-5PM</div>
                  <div className="text-secondary font-semibold mt-2">24/7 Emergency Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 SmartFixTexas. All rights reserved. Licensed & Insured.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;