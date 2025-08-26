import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Users, Award, Heart, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Every job is completed with the highest safety standards to protect your family and property."
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "We treat every customer like family, providing honest, transparent service you can trust."
    },
    {
      icon: Award,
      title: "Quality Work",
      description: "Our licensed professionals deliver exceptional workmanship backed by guarantees."
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "We show up on time, complete work as promised, and stand behind our service."
    }
  ];

  const certifications = [
    "Texas Licensed Plumbers",
    "HVAC Certified Technicians", 
    "Licensed Electricians",
    "Insured & Bonded",
    "Better Business Bureau Member",
    "Austin Chamber of Commerce"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About SmartFixTexas
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Your trusted Austin home services partner since 2020. We're a local, family-owned business 
              committed to providing honest, reliable plumbing, HVAC, and electrical services to our neighbors.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                <Phone className="h-5 w-5" />
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Austin Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  SmartFixTexas was founded with a simple mission: to provide Austin homeowners with 
                  honest, reliable home services they can trust. As Austin natives, we understand the 
                  unique challenges that come with maintaining homes in Central Texas.
                </p>
                <p>
                  From the scorching summer heat that tests your AC to the occasional freeze that 
                  can burst pipes, we've seen it all. Our team of licensed professionals brings 
                  years of experience and local knowledge to every job.
                </p>
                <p>
                  What sets us apart is our commitment to treating every customer like family. 
                  We provide upfront pricing, quality workmanship, and stand behind every service 
                  with our satisfaction guarantee.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Users className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold text-lg">500+ Happy Customers</h3>
                      <p className="text-muted-foreground">Serving Austin families since 2020</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Clock className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold text-lg">24/7 Emergency Service</h3>
                      <p className="text-muted-foreground">Available when you need us most</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Award className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold text-lg">100% Satisfaction Guarantee</h3>
                      <p className="text-muted-foreground">We don't consider the job done until you're happy</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do, from how we treat customers to 
              the quality of work we deliver.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-card">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Licensed & Certified</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We maintain all required licenses and certifications to ensure quality, 
              safety, and compliance with local codes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-muted rounded-lg">
                <Award className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Community */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Proud to Serve Austin</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            As a local Austin business, we're committed to giving back to our community. 
            We support local charities, sponsor youth sports teams, and believe in making 
            Austin an even better place to live.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="bg-secondary hover:bg-secondary-dark">
                <Phone className="h-5 w-5" />
                Contact Us Today
              </Button>
            </Link>
            <a href="tel:+15125551234">
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Call: (512) 555-1234
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;