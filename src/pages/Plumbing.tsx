import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { CheckCircle, Wrench, Phone, Clock, Shield, DollarSign } from "lucide-react";

const Plumbing = () => {
  const services = [
    {
      category: "Emergency Plumbing",
      items: [
        "Burst pipe repair",
        "Sewage backup cleanup", 
        "Water heater failures",
        "Drain blockages",
        "Leak detection & repair"
      ]
    },
    {
      category: "Water Heater Services",
      items: [
        "Water heater installation",
        "Tankless water heaters",
        "Water heater repair",
        "Water heater maintenance",
        "Energy efficient upgrades"
      ]
    },
    {
      category: "Pipe & Drain Services",
      items: [
        "Pipe installation & repair",
        "Drain cleaning",
        "Sewer line repair",
        "Pipe relining",
        "Video pipe inspection"
      ]
    },
    {
      category: "Fixture Installation",
      items: [
        "Toilet installation & repair",
        "Faucet replacement",
        "Shower & bathtub installation",
        "Garbage disposal installation",
        "Bathroom renovations"
      ]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Plumbing emergencies don't wait. Neither do we."
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "All work guaranteed with proper licensing and insurance."
    },
    {
      icon: DollarSign,
      title: "Upfront Pricing",
      description: "No surprises. Clear estimates before we start work."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-6">
              <Wrench className="h-12 w-12 text-secondary" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Professional Plumbing Services in Austin
              </h1>
            </div>
            <p className="text-xl text-white/90 mb-8">
              From emergency repairs to new installations, our licensed plumbers provide reliable, 
              high-quality service you can trust. Available 24/7 for plumbing emergencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+15125551234">
                <Button variant="hero" size="lg">
                  <Phone className="h-5 w-5" />
                  Call Now: (512) 555-1234
                </Button>
              </a>
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Get Free Estimate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete <span className="gradient-text">Plumbing Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether it's a minor repair or major installation, we handle all your plumbing needs with expertise and care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Wrench className="h-4 w-4 text-white" />
                    </div>
                    <span>{service.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose SmartFixTexas Plumbing?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Plumbing Emergency?</h2>
          <p className="text-xl mb-8 text-white/90">
            Don't let a plumbing emergency flood your day. Our emergency plumbers are standing by 24/7.
          </p>
          <a href="tel:+15125551234">
            <Button variant="hero" size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Phone className="h-5 w-5" />
              Emergency Plumbing: (512) 555-1234
            </Button>
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Request Plumbing Service</h2>
              <p className="text-xl text-muted-foreground">
                Need a plumber? Fill out the form below and we'll get back to you quickly.
              </p>
            </div>
            <ContactForm title="Request Plumbing Service" defaultService="plumbing" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Plumbing;