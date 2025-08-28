import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Video, Plane, Palette, Star, ArrowRight, Play } from "lucide-react";
import heroWedding from "@/assets/hero-wedding.jpg";
import weddingVenue from "@/assets/wedding-venue.jpg";
import dronePhoto from "@/assets/drone-photography.jpg";

const Index = () => {
  const services = [
    {
      icon: Camera,
      title: "Wedding Photography",
      description: "Capturing your special day with cinematic perfection and artistic flair.",
    },
    {
      icon: Video,
      title: "Cinematic Videography",
      description: "Creating stunning video stories that bring your memories to life.",
    },
    {
      icon: Plane,
      title: "Drone Shoots",
      description: "Aerial perspectives that add a unique dimension to your moments.",
    },
    {
      icon: Palette,
      title: "Professional Editing",
      description: "High-class photo and video editing that transforms good into extraordinary.",
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Couples" },
    { number: "10+", label: "Years Experience" },
    { number: "1000+", label: "Events Covered" },
    { number: "50k+", label: "Photos Captured" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroWedding})` }}
        >
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="text-foreground">Cinematic</span>
            <br />
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Wedding Memories
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up">
            Capturing life's most precious moments with artistic excellence and cinematic flair
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-gold text-primary-foreground hover:shadow-gold transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/book">
                Book Your Shoot Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-gold text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300"
            >
              <Link to="/portfolio">
                <Play className="mr-2 h-5 w-5" />
                View Our Work
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-dark-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Our <span className="text-gold">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From intimate moments to grand celebrations, we capture every emotion with professional excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-gold transition-all duration-300 transform hover:scale-105 hover:shadow-gold group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <service.icon className="h-12 w-12 text-gold mx-auto mb-6 group-hover:animate-float" />
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 bg-dark-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gold">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A glimpse into our portfolio of beautiful moments and stunning cinematography
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src={weddingVenue} 
                alt="Wedding Photography" 
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-primary-foreground">
                  View Gallery
                </Button>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src={dronePhoto} 
                alt="Drone Photography" 
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-primary-foreground">
                  View Videos
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-gold text-primary-foreground hover:shadow-gold transition-all duration-300"
            >
              <Link to="/portfolio">
                View Complete Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create <span className="text-gold">Magic</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your vision and create something extraordinary together. 
              Book your consultation today and let's bring your story to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-gold text-primary-foreground hover:shadow-gold transition-all duration-300"
              >
                <Link to="/contact">Get in Touch</Link>
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

export default Index;