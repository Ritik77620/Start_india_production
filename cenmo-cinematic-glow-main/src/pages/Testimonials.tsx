import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Heart, Camera } from "lucide-react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah & Michael Johnson",
      event: "Wedding - December 2023",
      rating: 5,
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=100&h=100&fit=crop&crop=face",
      testimonial: "Cenmo Photography exceeded all our expectations! From our first meeting to receiving our final photos, the entire experience was seamless and magical. They captured every precious moment of our wedding day with such artistry and emotion. The cinematic quality of our wedding film brings tears of joy every time we watch it.",
      highlight: "Absolutely magical experience!"
    },
    {
      name: "Priya & Raj Patel",
      event: "Wedding - October 2023", 
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      testimonial: "We cannot thank Cenmo Photography enough for the incredible work they did on our wedding day. The attention to detail, the creative shots, and the way they captured the emotions of our family and friends was simply outstanding. The drone footage added such a unique dimension to our memories.",
      highlight: "Outstanding attention to detail!"
    },
    {
      name: "Emily & David Chen",
      event: "Pre-Wedding & Wedding - August 2023",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      testimonial: "From our engagement shoot to our wedding day, the team was professional, creative, and so much fun to work with. They made us feel comfortable in front of the camera and captured our personalities perfectly. The quality of the photos and videos is exceptional - truly cinematic!",
      highlight: "Professional and creative team!"
    },
    {
      name: "Ananya & Vikram Sharma",
      event: "Traditional Indian Wedding - November 2023",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b589?w=100&h=100&fit=crop&crop=face",
      testimonial: "Our three-day wedding celebration was beautifully documented by Cenmo Photography. They understood our cultural traditions and captured every ritual with respect and artistry. The golden hour shots and the drone footage of our venue were absolutely breathtaking. Highly recommended!",
      highlight: "Understood our cultural traditions perfectly!"
    },
    {
      name: "Jessica & Mark Thompson",
      event: "Destination Wedding - September 2023",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      testimonial: "Planning a destination wedding was stressful, but having Cenmo Photography as our photographers was the best decision we made. They were flexible, accommodating, and produced the most stunning photos and videos. Our guests are still talking about how professional and unobtrusive they were.",
      highlight: "Best decision for our destination wedding!"
    },
    {
      name: "Kavya & Arjun Reddy",
      event: "Engagement & Wedding - January 2024",
      rating: 5,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
      testimonial: "The entire experience with Cenmo Photography was phenomenal. They captured our love story beautifully from our engagement session to our wedding day. The editing is top-notch, and the final delivery exceeded our expectations. We've recommended them to all our friends!",
      highlight: "Phenomenal experience from start to finish!"
    }
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction", icon: Heart },
    { number: "500+", label: "Happy Couples", icon: Camera },
    { number: "4.9/5", label: "Average Rating", icon: Star },
    { number: "95%", label: "Referral Rate", icon: Quote }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Client <span className="text-gold">Testimonials</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            Don't just take our word for it. Here's what our amazing couples have to say about their 
            experience working with Cenmo Photography for their special moments.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="h-8 w-8 text-gold mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-gold transition-all duration-300 transform hover:scale-105 hover:shadow-gold animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-gold mb-4" />
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 text-gold fill-current" />
                    ))}
                  </div>

                  {/* Highlight */}
                  <h3 className="text-lg font-semibold text-gold mb-3">
                    "{testimonial.highlight}"
                  </h3>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {testimonial.testimonial}
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.event}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-20 bg-dark-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Makes Us <span className="text-gold">Special</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our clients consistently highlight these aspects of working with Cenmo Photography.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cinematic Quality",
                description: "Clients love our unique cinematic style that transforms ordinary moments into extraordinary memories.",
                icon: Camera
              },
              {
                title: "Professional Service",
                description: "From planning to delivery, our professional approach ensures a seamless and stress-free experience.",
                icon: Star
              },
              {
                title: "Emotional Storytelling",
                description: "We don't just capture events; we tell your unique love story through our lens with genuine emotion.",
                icon: Heart
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="bg-card border-border text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <feature.icon className="h-12 w-12 text-gold mx-auto mb-6" />
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              See More <span className="text-gold">Reviews</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Read more testimonials from our happy clients on Google Reviews and see why couples 
              choose Cenmo Photography for their most important moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-gradient-gold text-primary-foreground hover:shadow-gold transition-all duration-300"
              >
                <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                  View Google Reviews
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-gold text-gold hover:bg-gold hover:text-primary-foreground"
              >
                <Link to="/contact">Share Your Experience</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join Our <span className="text-gold">Happy Couples</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let us create beautiful memories for your special day. Book a consultation today and 
              discover why our clients consistently rate us 5 stars.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-gold text-primary-foreground hover:shadow-gold transition-all duration-300"
            >
              <Link to="/contact">Book Your Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;