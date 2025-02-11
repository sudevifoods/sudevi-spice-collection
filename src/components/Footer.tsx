
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Sudevi</h3>
            <p className="text-gray-600">
              Premium pickles and spices from the heart of Odisha
            </p>
            <div className="flex space-x-4">
              {/* Add social media links here */}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-600 hover:text-primary">Products</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-primary">Careers</Link></li>
              <li><Link to="/partner" className="text-gray-600 hover:text-primary">Partner With Us</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-600 hover:text-primary">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/shipping" className="text-gray-600 hover:text-primary">Shipping Policy</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2 text-gray-600">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>1730/2463/9212, Badakhualanae, Near Balangi College, Sunhat Unit No 30, Balasore, Odisha - 756002</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Phone size={18} />
                <span>+91 7008172411</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Mail size={18} />
                <span>sudevifoods@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Sudevi Foods Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
