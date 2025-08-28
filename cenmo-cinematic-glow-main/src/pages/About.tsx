import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Award, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import aboutPhotographer from "@/assets/about-photographer.jpg";

const About = () => {
  const values = [
    {
      icon: Camera,
      title: "Creative Excellence",
      description: "We push the boundaries of creativity to deliver unique and stunning visuals that tell your story.",
    },
    {
      icon: Award,
      title: "Professional Quality",
      description: "10+ years of experience ensuring every shot meets the highest standards of professional photography.",
    },
    {
      icon: Users,
      title: "Personal Connection",
      description: "We believe in building relationships with our clients to capture authentic, heartfelt moments.",
    },
    {
      icon: Heart,
      title: "Passion Driven",
      description: "Our love for photography and videography shines through in every project we undertake.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="text-gold">Cenmo Photography</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded with a passion for capturing life's most precious moments, Cenmo Photography 
                has been creating cinematic wedding memories for over a decade. Our journey began with 
                a simple belief: every love story deserves to be told beautifully.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We specialize in wedding photography and videography, bringing together technical 
                excellence and artistic vision to create timeless memories that couples will treasure forever.
              </p>
              <Button 
                asChild 
                className="bg-gradient-gold text-primary-foreground hover:shadow-gold transition-all duration-300"
              >
                <Link to="/contact">Work With Us</Link>
              </Button>
            </div>
            <div className="animate-fade-in">
              <img 
                src={aboutPhotographer} 
                alt="Professional Photographer" 
                className="w-full h-96 object-cover rounded-xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-dark-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our <span className="text-gold">Story</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              What started as a passion project has evolved into a full-service photography and videography 
              studio. We've had the privilege of documenting over 500 weddings, each one unique and special 
              in its own way. Our team combines years of experience with cutting-edge equipment to deliver 
              results that exceed expectations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From intimate elopements to grand celebrations, we approach every wedding with the same level 
              of dedication and attention to detail. Our cinematic style has made us one of the most 
              sought-after wedding photographers in the region.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gold">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and shape the way we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-gold transition-all duration-300 transform hover:scale-105 hover:shadow-gold group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <value.icon className="h-12 w-12 text-gold mx-auto mb-6 group-hover:animate-float" />
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-dark-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold mb-6 text-gold">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To capture and preserve life's most precious moments through exceptional photography 
                and videography. We strive to create visual stories that evoke emotion and stand the 
                test of time, ensuring that every couple's unique love story is beautifully documented.
              </p>
            </div>
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold mb-6 text-gold">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be recognized as the premier wedding photography and videography studio, known for 
                our cinematic style, technical excellence, and exceptional client experience. We aim 
                to set new standards in the industry while maintaining our personal, heartfelt approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlight */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gold">10+ Years</span> of Creative Excellence
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A decade of capturing love stories, perfecting our craft, and building lasting relationships 
              with our clients. Every wedding teaches us something new, and we bring that accumulated 
              wisdom to every project.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">500+</div>
                <div className="text-muted-foreground">Weddings Captured</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">1000+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">50k+</div>
                <div className="text-muted-foreground">Memories Preserved</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;