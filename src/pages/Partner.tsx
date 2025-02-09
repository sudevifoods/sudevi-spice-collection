
import { useState } from 'react';
import { ArrowRight, Building2, HandshakeIcon, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Partner = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handlePartnerSubmit = () => {
    toast.success("Thank you for your interest! We'll contact you soon.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 slide-in-left">
              <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6">
                Partner With <span className="text-primary">Sudevi</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                Join us in bringing the authentic taste of Odisha to tables across India. Let's grow together.
              </p>
              <Button
                size="lg"
                className="group hover:scale-105 transition-transform duration-300"
                onClick={handlePartnerSubmit}
              >
                Become a Partner
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="flex-1 relative slide-in-right">
              <div
                className="product-hover cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="relative z-10 product-image">
                  <img
                    src="/placeholder.svg"
                    alt="Product Showcase"
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 fade-in">
            Why Partner With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Established Brand",
                description: "Join a trusted name in the spice industry with over 25 years of excellence"
              },
              {
                icon: TrendingUp,
                title: "Growth Potential",
                description: "Access to growing market with proven business model and support"
              },
              {
                icon: HandshakeIcon,
                title: "Strong Support",
                description: "Comprehensive training, marketing, and operational support"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="glass-morphism p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <benefit.icon className="w-12 h-12 mx-auto mb-6 text-primary float" />
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="glass-morphism rounded-2xl p-12 text-center max-w-4xl mx-auto hover:scale-[1.02] transition-transform duration-500">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Take the first step towards a successful partnership. Join the Sudevi Foods family today.
            </p>
            <Button
              size="lg"
              className="group hover:scale-105 transition-transform duration-300"
              onClick={handlePartnerSubmit}
            >
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
