import { Link } from "react-router-dom";
import { Camera, Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-gold" />
              <span className="text-xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                Cenmo Photography
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Capturing life's most precious moments with cinematic excellence. 
              10+ years of creating timeless memories through professional photography and videography.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                About Us
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                Our Services
              </Link>
              <Link to="/portfolio" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                Portfolio
              </Link>
              <Link to="/packages" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                Packages
              </Link>
              <Link to="/testimonials" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                Testimonials
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <nav className="flex flex-col space-y-2">
              <span className="text-muted-foreground text-sm">Wedding Photography</span>
              <span className="text-muted-foreground text-sm">Pre-Wedding Shoots</span>
              <span className="text-muted-foreground text-sm">Event Coverage</span>
              <span className="text-muted-foreground text-sm">Drone Photography</span>
              <span className="text-muted-foreground text-sm">Video Editing</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gold" />
                <span className="text-muted-foreground text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gold" />
                <span className="text-muted-foreground text-sm">info@cenmophotography.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gold mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  123 Photography Street,<br />
                  Creative District, Mumbai 400001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Cenmo Photography. All rights reserved. | Designed with passion for capturing memories.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;