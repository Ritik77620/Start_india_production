import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Camera, Video, Plane, Clock, Users, Image } from "lucide-react";
import { Link } from "react-router-dom";

const Packages = () => {
  const packages = [
    {
      name: "Bronze",
      price: "₹25,000",
      duration: "4 Hours",
      badge: null,
      description: "Perfect for intimate celebrations and smaller events",
      features: [
        "4 hours of photography coverage",
        "50+ edited high-resolution photos",
        "Online gallery for easy sharing",
        "Basic photo editing and enhancement",
        "Personal photographer consultation"
      ],
      addOns: ["Additional hour: ₹3,000", "Printed album: ₹5,000"],
      icon: Camera
    },
    {
      name: "Silver",
      price: "₹45,000", 
      duration: "6 Hours",
      badge: null,
      description: "Great for medium-sized events with extended coverage",
      features: [
        "6 hours of photography coverage",
        "100+ edited high-resolution photos",
        "Online gallery with download access",
        "Professional photo editing",
        "Pre-event consultation",
        "Basic videography highlights (2-3 mins)"
      ],
      addOns: ["Drone coverage: ₹8,000", "Additional videographer: ₹10,000"],
      icon: Video
    },
    {
      name: "Gold",
      price: "₹75,000",
      duration: "8 Hours", 
      badge: "Most Popular",
      description: "Comprehensive coverage for your complete wedding day",
      features: [
        "8 hours of photography & videography",
        "200+ edited high-resolution photos",
        "10-15 minute cinematic highlight reel",
        "Online gallery with unlimited downloads",
        "Professional editing and color grading",
        "Pre-wedding consultation & planning",
        "Same day sneak peek photos"
      ],
      addOns: ["Drone package: ₹12,000", "Premium album: ₹15,000"],
      icon: Star
    },
    {
      name: "Premium",
      price: "₹1,25,000",
      duration: "Full Day",
      badge: "Premium",
      description: "Ultimate luxury package with complete documentation",
      features: [
        "Full day coverage (12+ hours)",
        "500+ edited high-resolution photos", 
        "30-45 minute cinematic wedding film",
        "Drone photography and videography included",
        "Multiple camera angles and operators",
        "Professional editing suite processing",
        "Luxury photo album and USB drive",
        "Pre-wedding shoot included",
        "Live streaming setup available"
      ],
      addOns: ["Extra drone operator: ₹15,000", "Photo booth setup: ₹20,000"],
      icon: Plane
    }
  ];

  const addOnServices = [
    {
      name: "Drone Coverage",
      price: "₹8,000 - ₹15,000",
      description: "Stunning aerial photography and videography",
      icon: Plane
    },
    {
      name: "Extra Hour Coverage",
      price: "₹3,000 - ₹5,000",
      description: "Extend your photography session",
      icon: Clock
    },
    {
      name: "Additional Team Member",
      price: "₹8,000 - ₹12,000",
      description: "Extra photographer or videographer",
      icon: Users
    },
    {
      name: "Premium Album Design",
      price: "₹10,000 - ₹25,000",
      description: "Luxury photo album with custom design",
      icon: Image
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Wedding <span className="text-gold">Packages</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            Choose the perfect package for your special day. Each package is carefully crafted to provide 
            exceptional value while capturing every precious moment of your celebration.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-dark-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`bg-card border-border hover:border-gold transition-all duration-300 transform hover:scale-105 hover:shadow-gold relative animate-fade-in ${
                  pkg.badge === "Most Popular" ? "border-gold shadow-gold" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge 
                      variant="secondary" 
                      className={`${
                        pkg.badge === "Most Popular" 
                          ? "bg-gold text-primary-foreground" 
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {pkg.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <pkg.icon className="h-12 w-12 text-gold mx-auto mb-4" />
                  <CardTitle className="text-2xl text-foreground">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-gold">{pkg.price}</div>
                  <div className="text-sm text-muted-foreground">{pkg.duration}</div>
                  <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Popular Add-ons:</h4>
                    {pkg.addOns.map((addOn, addOnIndex) => (
                      <div key={addOnIndex} className="text-xs text-muted-foreground mb-1">
                        • {addOn}
                      </div>
                    ))}
                  </div>

                  <Button 
                    asChild 
                    className={`w-full transition-all duration-300 ${
                      pkg.badge === "Most Popular"
                        ? "bg-gradient-gold text-primary-foreground hover:shadow-gold" 
                        : "bg-secondary text-secondary-foreground hover:bg-gold hover:text-primary-foreground"
                    }`}
                  >
                    <Link to="/contact">Choose Package</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Add-On <span className="text-gold">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhance your package with these additional services to create the perfect coverage for your special day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOnServices.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-gold transition-all duration-300 transform hover:scale-105 hover:shadow-gold group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <service.icon className="h-10 w-10 text-gold mx-auto mb-4 group-hover:animate-float" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{service.name}</h3>
                  <div className="text-xl font-bold text-gold mb-3">{service.price}</div>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package Section */}
      <section className="py-20 bg-dark-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need a <span className="text-gold">Custom</span> Package?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every wedding is unique, and we understand that sometimes our standard packages might not fit 
              perfectly. We're happy to create a custom package tailored specifically to your needs, budget, 
              and vision. Let's discuss your requirements and build something special together.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold mb-2">Flexible</div>
                <div className="text-muted-foreground">Pricing & Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold mb-2">Tailored</div>
                <div className="text-muted-foreground">To Your Vision</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold mb-2">Personal</div>
                <div className="text-muted-foreground">Consultation</div>
              </div>
            </div>

            <Button 
              asChild 
              size="lg"
              className="bg-gradient-gold text-primary-foreground hover:shadow-gold transition-all duration-300"
            >
              <Link to="/contact">Create Custom Package</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Payment & Booking Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Booking & <span className="text-gold">Payment</span> Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Booking Process</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2"></span>
                      <span>Initial consultation to discuss your needs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2"></span>
                      <span>Package selection and customization</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2"></span>
                      <span>Contract signing and advance payment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2"></span>
                      <span>Pre-event planning and preparation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Payment Terms</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2"></span>
                      <span>30% advance to confirm booking</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2"></span>
                      <span>50% payment 7 days before event</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2"></span>
                      <span>Remaining 20% on event completion</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2"></span>
                      <span>Multiple payment methods accepted</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;