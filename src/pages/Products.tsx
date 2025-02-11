
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Mango Pickle",
    description: "Traditional Odia style mango pickle made with authentic spices",
    image: "/lovable-uploads/ff687e93-a99c-438b-a47f-0614bfee860e.png",
    category: "Pickles"
  },
  {
    id: 2,
    name: "Lemon Pickle",
    description: "Tangy and spicy lemon pickle prepared with traditional recipe",
    image: "/lovable-uploads/ff687e93-a99c-438b-a47f-0614bfee860e.png",
    category: "Pickles"
  },
  {
    id: 3,
    name: "Mixed Spices",
    description: "Special blend of authentic Odia spices",
    image: "/lovable-uploads/ff687e93-a99c-438b-a47f-0614bfee860e.png",
    category: "Spices"
  }
];

const Products = () => {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of authentic pickles and spices, crafted with traditional recipes
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-48 mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
