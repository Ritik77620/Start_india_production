import React from 'react';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from '@formspree/react';
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: undefined as Date | undefined,
    venue: "",
    guestCount: "",
    message: "",
    preferredPackage: ""
  });

/*const [state, handleSubmit] = useForm("xvgqzrzp"); 
  if (state.succeeded) {
    return <p>title: "Message Sent!",
    description: "Thank you for contacting us. We'll get back to you within 24 hours."</p>;
  }*/



  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    try {
      axios({
        method: "POST", 
        url: "https://formspree.io/f/xqalvwpq",
        data: {
          ...formData
        }
      }).then(()=> {
          setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: undefined,
      venue: "",
      guestCount: "",
      message: "",
      preferredPackage: ""
    });
      })
    } catch (error) {
      
    }
    
    
    // Reset form
  
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@cenmophotography.com", "bookings@cenmophotography.com"],
      description: "Send us your requirements"
    },
    {
      icon: MapPin,
      title: "Studio Address",
      details: ["123 Photography Street", "Creative District, Mumbai 400001"],
      description: "Visit us for portfolio viewing"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 10 AM - 7 PM", "Sun: 11 AM - 5 PM"],
      description: "Available for consultations"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Get in <span className="text-gold">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            Ready to create magical memories? We'd love to hear about your special day and discuss how 
            we can capture every precious moment with our cinematic style.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-dark-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours with a personalized quote.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Phone & Event Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="eventType" className="text-foreground">Event Type *</Label>
                      <Select value={formData.eventType} onValueChange={(value) => handleInputChange("eventType", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="pre-wedding">Pre-Wedding Shoot</SelectItem>
                          <SelectItem value="engagement">Engagement</SelectItem>
                          <SelectItem value="birthday">Birthday Party</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Event Date & Preferred Package */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-foreground">Event Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal mt-1"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formData.eventDate ? format(formData.eventDate, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={formData.eventDate}
                            onSelect={(date) => setFormData(prev => ({ ...prev, eventDate: date }))}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <Label htmlFor="package" className="text-foreground">Preferred Package</Label>
                      <Select value={formData.preferredPackage} onValueChange={(value) => handleInputChange("preferredPackage", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select package" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bronze">Bronze - ₹25,000</SelectItem>
                          <SelectItem value="silver">Silver - ₹45,000</SelectItem>
                          <SelectItem value="gold">Gold - ₹75,000</SelectItem>
                          <SelectItem value="premium">Premium - ₹1,25,000</SelectItem>
                          <SelectItem value="custom">Custom Package</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Venue & Guest Count */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="venue" className="text-foreground">Venue/Location</Label>
                      <Input
                        id="venue"
                        value={formData.venue}
                        onChange={(e) => handleInputChange("venue", e.target.value)}
                        placeholder="Event venue or location"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="guestCount" className="text-foreground">Expected Guest Count</Label>
                      <Input
                        id="guestCount"
                        value={formData.guestCount}
                        onChange={(e) => handleInputChange("guestCount", e.target.value)}
                        placeholder="Approximate number of guests"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-foreground">Tell us about your vision</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Share your ideas, special requirements, or any questions you have..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-gold text-primary-foreground hover:shadow-gold transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Contact <span className="text-gold">Information</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Get in touch with us through any of these channels. We're here to help bring your vision to life.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index} 
                    className="bg-card border-border hover:border-gold transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <info.icon className="h-8 w-8 text-gold mb-4" />
                      <h3 className="text-lg font-semibold mb-2 text-foreground">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground mb-1">{detail}</p>
                      ))}
                      <p className="text-sm text-muted-foreground mt-2">{info.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Follow Our Work</h3>
                  <p className="text-muted-foreground mb-4">
                    Stay updated with our latest work and behind-the-scenes content on social media.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                      <Youtube className="h-6 w-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="space-y-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full bg-gradient-gold text-primary-foreground hover:shadow-gold transition-all duration-300"
                >
                  <a href="tel:+919876543210">Call Now: +91 98765 43210</a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="w-full border-gold text-gold hover:bg-gold hover:text-primary-foreground"
                >
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                    WhatsApp Chat
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get quick answers to common questions about our services and booking process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How far in advance should I book?",
                answer: "We recommend booking 3-6 months in advance, especially for peak wedding season (October-March)."
              },
              {
                question: "Do you travel for destination weddings?",
                answer: "Yes! We love destination weddings. Travel costs are additional and discussed during consultation."
              },
              {
                question: "How long until we receive our photos?",
                answer: "Edited photos are delivered within 2-4 weeks, with sneak peeks shared within 48 hours."
              },
              {
                question: "Can we customize packages?",
                answer: "Absolutely! We create custom packages tailored to your specific needs and budget."
              },
              {
                question: "What's included in the videography?",
                answer: "Cinematic highlight reels, ceremony coverage, reception moments, and professional editing."
              },
              {
                question: "Do you provide raw footage?",
                answer: "Raw footage can be provided for an additional fee. We typically deliver professionally edited content."
              }
            ].map((faq, index) => (
              <Card 
                key={index} 
                className="bg-card border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;