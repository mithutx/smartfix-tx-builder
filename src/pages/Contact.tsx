import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "(512) 555-1234",
      secondary: "24/7 Emergency Line",
      action: "tel:+15125551234",
      buttonText: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us", 
      primary: "info@smartfixtexas.com",
      secondary: "We respond within 24 hours",
      action: "mailto:info@smartfixtexas.com",
      buttonText: "Send Email"
    },
    {
      icon: MapPin,
      title: "Service Area",
      primary: "Austin & Surrounding Areas",
      secondary: "Travis County, Texas",
      action: "#service-areas",
      buttonText: "View Areas"
    }
  ];

  const serviceAreas = [
    "Austin", "Cedar Park", "Round Rock", "Georgetown", "Pflugerville",
    "Leander", "Lakeway", "Bee Cave", "West Lake Hills", "Rollingwood",
    "Sunset Valley", "Manchaca", "Buda", "Kyle", "Dripping Springs"
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 5:00 PM" },
    { day: "Emergency Service", hours: "24/7 Available" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact SmartFixTexas
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Ready to get started? We're here to help with all your plumbing, HVAC, 
              and electrical needs. Contact us today for fast, reliable service.
            </p>
            <a href="tel:+15125551234">
              <Button variant="hero" size="lg">
                <Phone className="h-5 w-5" />
                Call Now: (512) 555-1234
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">
              Choose the contact method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-professional transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold mb-2">{method.primary}</p>
                  <p className="text-muted-foreground mb-4">{method.secondary}</p>
                  <a href={method.action}>
                    <Button variant="outline" className="w-full">
                      {method.buttonText}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Business Hours */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm title="Request Service or Ask a Question" />
            </div>
            
            <div className="space-y-8">
              {/* Business Hours */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className={`flex justify-between items-center ${
                        schedule.day === "Emergency Service" ? "border-t pt-3 mt-3" : ""
                      }`}>
                        <span className={`font-medium ${
                          schedule.day === "Emergency Service" ? "text-red-600" : ""
                        }`}>
                          {schedule.day}
                        </span>
                        <span className={`${
                          schedule.day === "Emergency Service" ? "text-red-600 font-semibold" : "text-muted-foreground"
                        }`}>
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="shadow-card bg-gradient-primary text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5" />
                    <span>Need Immediate Help?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 mb-4">
                    For urgent plumbing, HVAC, or electrical emergencies, 
                    call our 24/7 emergency line.
                  </p>
                  <a href="tel:+15125551234">
                    <Button variant="secondary" className="w-full">
                      <Phone className="h-4 w-4" />
                      Emergency: (512) 555-1234
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20" id="service-areas">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Service Areas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We proudly serve Austin and surrounding communities throughout Travis County
            </p>
          </div>
          
          <Card className="shadow-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-4">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-muted-foreground">
                  Don't see your area listed? <a href="tel:+15125551234" className="text-primary hover:underline">Call us</a> to confirm service availability.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;