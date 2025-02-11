
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Stats from '@/components/Stats';

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-red-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="text-left space-y-6 fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">
                Taste the Tradition of{' '}
                <span className="text-primary bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  Odisha
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover our premium collection of authentic pickles and spices, crafted with care in Balasore
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="group hover:scale-105 transition-transform duration-300"
                  asChild
                >
                  <Link to="/products">
                    Explore Products
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:scale-105 transition-transform duration-300"
                  asChild
                >
                  <Link to="/about">About Us</Link>
                </Button>
              </div>
            </div>

            {/* Animated Pickle Jar */}
            <div className="relative h-[500px] fade-in">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-80 bg-white/30 rounded-3xl p-4 backdrop-blur-sm border border-white/20 shadow-xl hover:scale-105 transition-transform duration-500 animate-float">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-3xl"></div>
                  <img 
                    src="/lovable-uploads/ff687e93-a99c-438b-a47f-0614bfee860e.png"
                    alt="Pickle Jar"
                    className="w-full h-full object-contain animate-pulse-subtle"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -inset-4 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500/20 rounded-full animate-ping"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-red-400/20 rounded-full animate-ping delay-150"></div>
                  <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-red-300/20 rounded-full animate-ping delay-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-white">
        <div className="container mx-auto px-4">
          <Stats />
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 slide-up">
            Our Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add product cards here */}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 slide-up">
            <h2 className="text-4xl font-bold mb-6">
              Preserving Tradition, Delivering Quality
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At Sudevi Foods, we combine traditional recipes with modern food processing techniques to bring you the authentic taste of Odisha's culinary heritage.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-transform duration-300"
              asChild
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass-morphism rounded-2xl p-12 text-center space-y-6 hover:scale-[1.02] transition-transform duration-500">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join us in bringing the authentic taste of Odisha to tables across India. Become a Sudevi Foods partner today.
            </p>
            <Button
              size="lg"
              className="group hover:scale-105 transition-transform duration-300"
              asChild
            >
              <Link to="/partner">
                Partner With Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
