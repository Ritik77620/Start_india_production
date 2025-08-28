import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { CalendarIcon, Check, Star, Camera, Video, Plane, Clock, CreditCard, Banknote } from "lucide-react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const Book = () => {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [eventDate, setEventDate] = useState<Date | undefined>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    venue: "",
    guestCount: "",
    specialRequests: ""
  });

  const packages = [
    {
      id: "bronze",
      name: "Bronze",
      price: 25000,
      duration: "4 Hours",
      icon: Camera,
      features: [
        "4 hours of photography coverage",
        "50+ edited high-resolution photos",
        "Online gallery for easy sharing",
        "Basic photo editing and enhancement",
        "Personal photographer consultation"
      ]
    },
    {
      id: "silver",
      name: "Silver",
      price: 45000,
      duration: "6 Hours",
      icon: Video,
      features: [
        "6 hours of photography coverage",
        "100+ edited high-resolution photos",
        "Online gallery with download access",
        "Professional photo editing",
        "Pre-event consultation",
        "Basic videography highlights (2-3 mins)"
      ]
    },
    {
      id: "gold",
      name: "Gold",
      price: 75000,
      duration: "8 Hours",
      icon: Star,
      badge: "Most Popular",
      features: [
        "8 hours of photography & videography",
        "200+ edited high-resolution photos",
        "10-15 minute cinematic highlight reel",
        "Online gallery with unlimited downloads",
        "Professional editing and color grading",
        "Pre-wedding consultation & planning",
        "Same day sneak peek photos"
      ]
    },
    {
      id: "premium",
      name: "Premium",
      price: 125000,
      duration: "Full Day",
      icon: Plane,
      badge: "Premium",
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
      ]
    }
  ];

  const addOns = [
    { id: "drone", name: "Drone Coverage", price: 12000, description: "Aerial photography and videography" },
    { id: "extra-hour", name: "Extra Hour", price: 4000, description: "Additional coverage time" },
    { id: "album", name: "Premium Album", price: 15000, description: "Luxury photo album design" },
    { id: "team", name: "Additional Photographer", price: 10000, description: "Extra team member" },
    { id: "editing", name: "Rush Editing", price: 8000, description: "Priority editing (1 week delivery)" },
    { id: "livestream", name: "Live Streaming", price: 18000, description: "Live stream setup for virtual guests" }
  ];

  const selectedPackageData = packages.find(pkg => pkg.id === selectedPackage);
  const selectedAddOnData = addOns.filter(addon => selectedAddOns.includes(addon.id));
  
  const packagePrice = selectedPackageData?.price || 0;
  const addOnPrice = selectedAddOnData.reduce((sum, addon) => sum + addon.price, 0);
  const totalPrice = packagePrice + addOnPrice;
  const advanceAmount = Math.round(totalPrice * 0.3);

  const handleAddOnToggle = (addOnId: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnId) 
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const handleBooking = () => {
    if (!selectedPackage || !eventDate || !formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to proceed with booking.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Booking Initiated!",
      description: "We'll contact you within 24 hours to confirm your booking and payment details.",
    });
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Book Your <span className="text-gold">Shoot</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            Select your perfect package, choose your date, and let's create magical memories together. 
            Secure your booking with just a 30% advance payment.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Package Selection */}
          <div className="lg:col-span-2 space-y-8">
            {/* Package Selection */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Choose Your Package</CardTitle>
                <p className="text-muted-foreground">Select the package that best fits your needs</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {packages.map((pkg) => (
                    <Card 
                      key={pkg.id}
                      className={`cursor-pointer transition-all duration-300 hover:shadow-gold ${
                        selectedPackage === pkg.id 
                          ? "border-gold bg-gold/5" 
                          : "border-border hover:border-gold"
                      }`}
                      onClick={() => setSelectedPackage(pkg.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <pkg.icon className="h-5 w-5 text-gold" />
                            <span className="font-semibold text-foreground">{pkg.name}</span>
                          </div>
                          {pkg.badge && (
                            <Badge variant="secondary" className="bg-gold text-primary-foreground text-xs">
                              {pkg.badge}
                            </Badge>
                          )}
                        </div>
                        <div className="text-2xl font-bold text-gold mb-1">
                          ₹{pkg.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground mb-3">{pkg.duration}</div>
                        <div className="space-y-1">
                          {pkg.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <Check className="h-3 w-3 text-gold mt-0.5 flex-shrink-0" />
                              <span className="text-xs text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                          {pkg.features.length > 3 && (
                            <div className="text-xs text-gold">+{pkg.features.length - 3} more features</div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Add-Ons */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Add-On Services</CardTitle>
                <p className="text-muted-foreground">Enhance your package with additional services</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {addOns.map((addon) => (
                    <div 
                      key={addon.id}
                      className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-gold transition-colors"
                    >
                      <Checkbox
                        id={addon.id}
                        checked={selectedAddOns.includes(addon.id)}
                        onCheckedChange={() => handleAddOnToggle(addon.id)}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <Label htmlFor={addon.id} className="font-medium text-foreground cursor-pointer">
                            {addon.name}
                          </Label>
                          <span className="text-gold font-semibold">
                            +₹{addon.price.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{addon.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Event Details */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Event Details</CardTitle>
                <p className="text-muted-foreground">Tell us about your special day</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <Label htmlFor="eventType" className="text-foreground">Event Type *</Label>
                    <Select value={formData.eventType} onValueChange={(value) => setFormData(prev => ({ ...prev, eventType: value }))}>
                      <SelectTrigger>
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

                {/* Event Date */}
                <div>
                  <Label className="text-foreground">Event Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {eventDate ? format(eventDate, "PPP") : "Pick your event date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={eventDate}
                        onSelect={setEventDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="venue" className="text-foreground">Venue/Location</Label>
                    <Input
                      id="venue"
                      value={formData.venue}
                      onChange={(e) => setFormData(prev => ({ ...prev, venue: e.target.value }))}
                      placeholder="Event venue"
                    />
                  </div>
                  <div>
                    <Label htmlFor="guestCount" className="text-foreground">Guest Count</Label>
                    <Input
                      id="guestCount"
                      value={formData.guestCount}
                      onChange={(e) => setFormData(prev => ({ ...prev, guestCount: e.target.value }))}
                      placeholder="Number of guests"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="requests" className="text-foreground">Special Requests</Label>
                  <Textarea
                    id="requests"
                    value={formData.specialRequests}
                    onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
                    placeholder="Any special requirements or requests..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            <Card className="bg-card border-border sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedPackageData ? (
                  <>
                    <div className="flex justify-between items-center pb-2 border-b border-border">
                      <div>
                        <div className="font-semibold text-foreground">{selectedPackageData.name} Package</div>
                        <div className="text-sm text-muted-foreground">{selectedPackageData.duration}</div>
                      </div>
                      <div className="text-gold font-semibold">
                        ₹{selectedPackageData.price.toLocaleString()}
                      </div>
                    </div>

                    {selectedAddOnData.length > 0 && (
                      <div className="space-y-2">
                        <div className="font-medium text-foreground">Add-ons:</div>
                        {selectedAddOnData.map((addon) => (
                          <div key={addon.id} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{addon.name}</span>
                            <span className="text-gold">+₹{addon.price.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex justify-between items-center pt-2 border-t border-border">
                      <div className="font-semibold text-foreground">Total Amount:</div>
                      <div className="text-xl font-bold text-gold">
                        ₹{totalPrice.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-gold/10 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <CreditCard className="h-4 w-4 text-gold" />
                        <span className="font-medium text-foreground">Advance Payment</span>
                      </div>
                      <div className="text-2xl font-bold text-gold">
                        ₹{advanceAmount.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        30% to confirm booking
                      </div>
                    </div>

                    {eventDate && (
                      <div className="bg-dark-lighter rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <CalendarIcon className="h-4 w-4 text-gold" />
                          <span className="font-medium text-foreground">Event Date</span>
                        </div>
                        <div className="text-foreground">{format(eventDate, "PPP")}</div>
                      </div>
                    )}

                    <Button 
                      onClick={handleBooking}
                      size="lg" 
                      className="w-full bg-gradient-gold text-primary-foreground hover:shadow-gold transition-all duration-300"
                    >
                      Confirm Booking
                    </Button>

                    <div className="text-xs text-muted-foreground text-center">
                      By confirming, you agree to our terms and conditions. We'll contact you within 24 hours for payment processing.
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Select a package to see pricing details</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Payment Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-4 w-4 text-gold" />
                  <span className="text-sm text-muted-foreground">30% advance to confirm</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gold" />
                  <span className="text-sm text-muted-foreground">50% payment 7 days before event</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Banknote className="h-4 w-4 text-gold" />
                  <span className="text-sm text-muted-foreground">Remaining 20% on completion</span>
                </div>
              </CardContent>
            </Card>

            {/* Need Help */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-foreground mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Have questions about packages or need a custom quote?
                </p>
                <Button 
                  asChild 
                  variant="outline" 
                  size="sm"
                  className="w-full border-gold text-gold hover:bg-gold hover:text-primary-foreground"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;