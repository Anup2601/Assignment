import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import Logo from '../assets/bid_logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1  lg:grid-cols-4 gap-12">
          {/* Address and Contact Section */}
          <div className="space-y-8 ml-18 mt-16">
            <div>
              <h3 className="text-xl font-bold">Address:</h3>
              <p className="text-white-300 underline font-semibold cursor-pointer">
                Level 1, 12 Sample St, Sydney NSW 2000
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold">Contact:</h3>
              <p className="text-white-300 font-semibold cursor-pointer">+91 123 456 7890</p>
              <p className="text-white-300 underline font-semibold cursor-pointer">contact@bidai.in</p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Facebook className="size-6 text-black hover:bg-gray-400 cursor-pointer bg-white rounded-full p-0.5" />
              <Instagram className="w-6 h-6 text-white-400 hover:text-gray-400 cursor-pointer" />
              <Twitter className="w-6 h-6 text-white-400 hover:text-gray-400  cursor-pointer" />
              <Linkedin className="w-6 h-6 text-white-400 hover:text-gray-400  cursor-pointer" />
              <Youtube className="w-6 h-6 text-white-400 hover:text-gray-400  cursor-pointer" />
            </div>
          </div>
          
          {/* Product Section */}
          <div className='ml-64'>
            <h3 className="text-xl font-bold mb-6 mt-16 ">Product</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white-300 font-semibold hover:text-white transition-colors cursor-pointer">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-white-300 font-semibold  hover:text-white transition-colors cursor-pointer">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-white-300 font-semibold hover:text-white transition-colors cursor-pointer">
                  Security
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company Section */}
          <div className='ml-24'>
            <h3 className="text-xl font-bold mb-6 mt-16">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white-300 font-semibold hover:text-white transition-colors cursor-pointer">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white-300 font-semibold hover:text-white transition-colors cursor-pointer">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          
          {/* Logo Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-bl-full  p-18 w-1200 h-72 flex items-center justify-center">
              {/* Replace this with your actual logo image */}
              <img 
                src={Logo} 
                alt="BiD.ai Logo" 
                className="max-w-full max-h-full object-contain"
              /> 
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white-600 mt-12 pt-6 p-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white-400 text-sm mb-4 md:mb-0">
              © 2025 bidai. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-white-400 hover:text-white text-sm underline transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white-400 hover:text-white text-sm underline transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white-400 hover:text-white text-sm underline transition-colors">
                Cookies Set
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;