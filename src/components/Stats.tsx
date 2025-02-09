
import { useEffect, useState } from 'react';
import { Users, ShoppingBag, Award, ThumbsUp } from 'lucide-react';

const Stats = () => {
  const [count, setCount] = useState({
    customers: 0,
    products: 0,
    experience: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => ({
        customers: Math.min(prev.customers + 50, 10000),
        products: Math.min(prev.products + 1, 50),
        experience: Math.min(prev.experience + 1, 25),
        satisfaction: Math.min(prev.satisfaction + 1, 98)
      }));
    }, 20);

    const timeout = setTimeout(() => clearInterval(interval), 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
      <div className="flex flex-col items-center space-y-2 fade-in">
        <Users className="w-8 h-8 text-primary animate-bounce" />
        <h3 className="text-3xl font-bold">{count.customers.toLocaleString()}+</h3>
        <p className="text-muted-foreground">Happy Customers</p>
      </div>
      <div className="flex flex-col items-center space-y-2 fade-in" style={{ animationDelay: '200ms' }}>
        <ShoppingBag className="w-8 h-8 text-primary animate-bounce" />
        <h3 className="text-3xl font-bold">{count.products}+</h3>
        <p className="text-muted-foreground">Product Varieties</p>
      </div>
      <div className="flex flex-col items-center space-y-2 fade-in" style={{ animationDelay: '400ms' }}>
        <Award className="w-8 h-8 text-primary animate-bounce" />
        <h3 className="text-3xl font-bold">{count.experience}+</h3>
        <p className="text-muted-foreground">Years Experience</p>
      </div>
      <div className="flex flex-col items-center space-y-2 fade-in" style={{ animationDelay: '600ms' }}>
        <ThumbsUp className="w-8 h-8 text-primary animate-bounce" />
        <h3 className="text-3xl font-bold">{count.satisfaction}%</h3>
        <p className="text-muted-foreground">Customer Satisfaction</p>
      </div>
    </div>
  );
};

export default Stats;
