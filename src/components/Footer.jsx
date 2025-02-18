import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 py-6 mt-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
        
        
        <div>
          <h2 className="text-2xl font-bold text-red-600">Zesty</h2>
          <p className="text-sm text-gray-700 mt-2 max-w-xs">
            Discover, Cook, and Enjoy the Best Recipes!
          </p>
        </div>

     
        <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm">
          <a href="#" className="hover:text-red-500 transition duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-red-500 transition duration-300">Terms of Service</a>
          <a href="#" className="hover:text-red-500 transition duration-300">Contact Us</a>
        </div>

     
        <div className="flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-red-500 transition duration-300">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-gray-700 hover:text-red-500 transition duration-300">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-gray-700 hover:text-red-500 transition duration-300">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-gray-700 hover:text-red-500 transition duration-300">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>

      
      <div className="border-t border-gray-300 mt-6 pt-4 text-red-500 text-sm text-center">
        &copy; {new Date().getFullYear()} Zesty. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
