import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Video, Plane, Heart, Calendar, Palette, Film, Edit } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Wedding Photography",
      description: "Capture every precious moment of your special day with our cinematic wedding photography. From getting ready shots to the final dance, we document your love story with artistic flair.",
      features: ["Engagement Sessions", "Bridal Portraits", "Ceremony Coverage", "Reception Documentation", "Family Portraits"],
      badge: "Most Popular"
    },
    {
      icon: Video,
      title: "Cinematic Videography",
      description: "Create a stunning wedding film that brings your memories to life. Our cinematic approach captures not just the events, but the emotions and atmosphere of your day.",
      features: ["Highlight Reels", "Full Ceremony Films", "Reception Videos", "Drone Footage", "Same Day Edits"],
      badge: "Premium"
    },
    {
      icon: Heart,
      title: "Pre-Wedding Shoots",
      description: "Beautiful engagement and pre-wedding sessions that capture your love story in stunning locations. Perfect for save-the-dates and wedding invitations.",
      features: ["Location Scouting", "Outfit Changes", "Multiple Locations", "Edited Gallery", "Print-Ready Images"],
      badge: null
    },
    {
      icon: Calendar,
      title: "Birthday & Party Shoots",
      description: "Make your celebrations memorable with professional photography and videography for birthdays, anniversaries, and special occasions.",
      features: ["Event Documentation", "Candid Moments", "Group Photos", "Cake Cutting", "Party Highlights"],
      badge: null
    },
    {
      icon: Film,
      title: "Event Coverage",
      description: "Professional documentation of corporate events, cultural celebrations, and special occasions with attention to detail and storytelling.",
      features: ["Corporate Events", "Cultural Celebrations", "Awards Ceremonies", "Product Launches", "Conference Coverage"],
      badge: null
    },
    {
      icon: Plane,
      title: "Drone Shoots",
      description: "Add a unique perspective to your events with stunning aerial photography and videography using professional drone equipment.",
      features: ["Aerial Photography", "Cinematic Drone Videos", "Venue Overviews", "Landscape Shots", "Creative Angles"],
      badge: "New"
    },
    {
      icon: Edit,
      title: "Short Film & Reels Editing",
      description: "Professional editing services for short films, social media reels, and promotional videos with cinematic quality.",
      features: ["Social Media Reels", "Short Films", "Promotional Videos", "Music Videos", "Commercial Edits"],
      badge: null
    },
    {
      icon: Palette,
      title: "High-Class Photo & Video Editing",
      description: "Transform your photos and videos with our professional editing services, bringing out the best in every shot.",
      features: ["Color Grading", "Retouching", "Cinematic Effects", "Audio Enhancement", "Custom Styling"],
      badge: "Professional"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="text-gold">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            From intimate moments to grand celebrations, we offer comprehensive photography and videography 
            services tailored to capture your unique story with professional excellence.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-gradient-gold text-primary-foreground hover:shadow-gold transition-all duration-300 animate-fade-in"
          >
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-dark-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-gold transition-all duration-300 transform hover:scale-105 hover:shadow-gold group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="h-12 w-12 text-gold group-hover:animate-float" />
                    {service.badge && (
                      <Badge variant="secondary" className="bg-gold text-primary-foreground">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gold">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From initial consultation to final delivery, we ensure a seamless experience throughout your journey with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We discuss your vision, preferences, and requirements to understand your unique story."
              },
              {
                step: "02", 
                title: "Planning",
                description: "Detailed planning including timeline, locations, and shot lists tailored to your event."
              },
              {
                step: "03",
                title: "Capture",
                description: "Professional photography and videography on your special day with cinematic excellence."
              },
              {
                step: "04",
                title: "Delivery",
                description: "Expertly edited photos and videos delivered in your preferred format within agreed timeframe."
              }
            ].map((process, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl font-bold text-gold mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Begin Your <span className="text-gold">Journey</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your vision and create a customized package that perfectly fits your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-gold text-primary-foreground hover:shadow-gold transition-all duration-300"
              >
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-gold text-gold hover:bg-gold hover:text-primary-foreground"
              >
                <Link to="/packages">View Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;