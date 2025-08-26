import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { CheckCircle, Zap, Phone, Lightbulb, Power, Shield, AlertTriangle } from "lucide-react";

const Electrical = () => {
  const services = [
    {
      category: "Electrical Repairs",
      icon: Zap,
      items: [
        "Circuit breaker replacement",
        "Outlet & switch repair", 
        "Electrical troubleshooting",
        "Power restoration",
        "Emergency electrical repairs"
      ]
    },
    {
      category: "Electrical Installation",
      icon: Power,
      items: [
        "Electrical panel upgrades",
        "New outlet installation",
        "Ceiling fan installation",
        "EV charger installation",
        "Generator installation"
      ]
    },
    {
      category: "Lighting Services",
      icon: Lightbulb,
      items: [
        "Interior lighting installation",
        "Outdoor lighting systems",
        "LED upgrades",
        "Landscape lighting",
        "Smart lighting controls"
      ]
    },
    {
      category: "Safety & Inspection",
      icon: Shield,
      items: [
        "Electrical safety inspections",
        "Code compliance updates",
        "GFCI installation",
        "Smoke detector installation",
        "Home electrical audits"
      ]
    }
  ];

  const safetyFeatures = [
    {
      title: "Licensed Electricians",
      description: "All work performed by Texas-licensed electricians with years of experience."
    },
    {
      title: "Code Compliant",
      description: "Every installation meets or exceeds local electrical codes and safety standards."
    },
    {
      title: "Safety First",
      description: "We prioritize safety in every job, protecting your family and property."
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
              <Zap className="h-12 w-12 text-secondary" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Professional Electrical Services in Austin
              </h1>
            </div>
            <p className="text-xl text-white/90 mb-8">
              Safe, reliable electrical services from licensed electricians. From minor repairs 
              to major installations, we ensure your electrical systems are safe and up to code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+15125551234">
                <Button variant="hero" size="lg">
                  <Phone className="h-5 w-5" />
                  Call Now: (512) 555-1234
                </Button>
              </a>
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Schedule Inspection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Warning */}
      <section className="py-8 bg-yellow-50 border-l-4 border-yellow-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="h-6 w-6 text-yellow-600" />
            <p className="text-yellow-800 font-medium">
              <strong>Safety Warning:</strong> Electrical work can be dangerous. Always hire licensed professionals 
              for electrical repairs and installations to protect your family and property.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete <span className="gradient-text">Electrical Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From simple repairs to complex installations, our licensed electricians provide 
              safe, code-compliant electrical services for your home or business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <service.icon className="h-4 w-4 text-white" />
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

      {/* Safety Features */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Safety & Quality Guaranteed</h2>
            <p className="text-xl text-muted-foreground">
              When it comes to electrical work, safety and quality are non-negotiable.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => (
              <Card key={index} className="text-center shadow-card">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Electrical Emergency?</h2>
          <p className="text-xl mb-8 text-white/90">
            Power outages, sparking outlets, or burning smells? Don't wait - electrical emergencies 
            require immediate attention from licensed professionals.
          </p>
          <a href="tel:+15125551234">
            <Button variant="hero" size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Phone className="h-5 w-5" />
              Emergency Electrical: (512) 555-1234
            </Button>
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Request Electrical Service</h2>
              <p className="text-xl text-muted-foreground">
                Need an electrician? Contact us for safe, professional electrical services.
              </p>
            </div>
            <ContactForm title="Request Electrical Service" defaultService="electrical" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Electrical;