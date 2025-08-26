import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { CheckCircle, Thermometer, Phone, Snowflake, Flame, Wind, Gauge } from "lucide-react";

const HVAC = () => {
  const services = [
    {
      category: "Air Conditioning",
      icon: Snowflake,
      items: [
        "AC installation & replacement",
        "AC repair & maintenance", 
        "Duct cleaning & sealing",
        "Thermostat installation",
        "Energy efficiency upgrades"
      ]
    },
    {
      category: "Heating Systems",
      icon: Flame,
      items: [
        "Furnace installation & repair",
        "Heat pump services",
        "Boiler maintenance",
        "Heating system upgrades",
        "Emergency heating repair"
      ]
    },
    {
      category: "Indoor Air Quality",
      icon: Wind,
      items: [
        "Air purification systems",
        "Humidity control",
        "Ventilation improvement",
        "Duct cleaning",
        "Filter replacement"
      ]
    },
    {
      category: "Maintenance & Tune-ups",
      icon: Gauge,
      items: [
        "Seasonal maintenance",
        "System inspections",
        "Preventive care plans",
        "Energy audits",
        "Performance optimization"
      ]
    }
  ];

  const benefits = [
    {
      title: "Austin Climate Experts",
      description: "We understand Texas heat and humidity. Our solutions are designed for Austin's unique climate challenges."
    },
    {
      title: "Energy Efficient Solutions", 
      description: "Save money on utility bills with high-efficiency HVAC systems and smart thermostat installations."
    },
    {
      title: "Same-Day Service",
      description: "When your AC breaks in Texas heat, we prioritize emergency repairs to get you comfortable fast."
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
              <Thermometer className="h-12 w-12 text-secondary" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Expert HVAC Services in Austin
              </h1>
            </div>
            <p className="text-xl text-white/90 mb-8">
              Stay comfortable year-round with professional heating and cooling services. 
              From AC installation to emergency repairs, we keep Austin homes and businesses comfortable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+15125551234">
                <Button variant="hero" size="lg">
                  <Phone className="h-5 w-5" />
                  Call Now: (512) 555-1234
                </Button>
              </a>
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Schedule Maintenance
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
              Complete <span className="gradient-text">HVAC Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From installation to maintenance, we provide comprehensive heating and cooling services 
              to keep your home comfortable in any season.
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

      {/* Benefits Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our HVAC Services?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-card">
                <CardContent className="pt-8">
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Beat the Texas Heat</h2>
          <p className="text-xl mb-8 text-white/90">
            Don't wait for your AC to break down. Schedule preventive maintenance to avoid costly repairs 
            and ensure peak performance during Austin's hottest months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15125551234">
              <Button variant="hero" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="h-5 w-5" />
                Call for AC Service
              </Button>
            </a>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Maintenance
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Request HVAC Service</h2>
              <p className="text-xl text-muted-foreground">
                Need heating or cooling service? Get in touch and we'll help you stay comfortable.
              </p>
            </div>
            <ContactForm title="Request HVAC Service" defaultService="hvac" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HVAC;