import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, CheckCircle, Wrench, Zap, Thermometer, Clock, Shield, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const services = [
    {
      icon: Wrench,
      title: "Plumbing Services",
      description: "Leaks, pipe repairs, water heaters, drain cleaning, and emergency plumbing.",
      features: ["24/7 Emergency Service", "Licensed Plumbers", "Warranty Included"],
      link: "/plumbing"
    },
    {
      icon: Thermometer,
      title: "HVAC Services", 
      description: "AC installation, heating repair, duct cleaning, and system maintenance.",
      features: ["Energy Efficient Solutions", "Same-Day Service", "Free Estimates"],
      link: "/hvac"
    },
    {
      icon: Zap,
      title: "Electrical Services",
      description: "Wiring, circuit breakers, lighting installation, and electrical safety.",
      features: ["Safety Inspections", "Code Compliance", "Licensed Electricians"],
      link: "/electrical"
    }
  ];

  const trustSignals = [
    { icon: Shield, text: "Licensed & Insured" },
    { icon: Clock, text: "24/7 Emergency Service" },
    { icon: Users, text: "500+ Happy Customers" },
    { icon: Star, text: "5-Star Rated" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Austin's Trusted Home Services Experts
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Professional plumbing, HVAC, and electrical services. Licensed, insured, and available 24/7 for emergencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+15125551234">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  <Phone className="h-5 w-5" />
                  Call Now: (512) 555-1234
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  Request Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center">
                <signal.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="font-semibold text-foreground">{signal.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Home Services in <span className="gradient-text">Austin</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From emergency repairs to planned installations, we're your one-stop solution for all home services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-professional transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link}>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Emergency Service Available 24/7</h2>
          <p className="text-xl mb-8 text-white/90">
            Burst pipe? No heat? Electrical emergency? We're here to help, day or night.
          </p>
          <a href="tel:+15125551234">
            <Button variant="hero" size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Phone className="h-5 w-5" />
              Call Emergency Line: (512) 555-1234
            </Button>
          </a>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll contact you within 24 hours.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
