import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FaHeart, FaBars, FaTimes, FaHome, FaSearch } from "react-icons/fa";
import logo from "../assets/logo1.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchClick = () => {
    setIsSearchVisible(true);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white p-4 text-green-500 shadow-md transition-all duration-300 ease-in-out">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Recipe App Logo" className="w-auto h-12 mr-2" />
          <span className="text-xl font-bold text-green-500 italic tracking-wide">
            Zesty
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <SearchBar />
          <Link
            to="/favorites"
            className="flex items-center bg-green-500 text-white py-3 px-5 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out transform"
          >
            <FaHeart className="mr-2" /> Favorites
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-green-500 transition-transform duration-300 hover:scale-110"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop with Blur Effect */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleMenu}
        ></div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-green-500 hover:text-green-700 transition duration-300"
            >
              <FaTimes size={24} />
            </button>
          </div>

          <ul className="space-y-4 p-6">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="flex items-center space-x-3 text-lg text-green-500 hover:text-green-700 transition duration-300"
              >
                <FaHome /> <span>Home</span>
              </Link>
            </li>
            <li>
              <button
                onClick={handleSearchClick}
                className="flex items-center space-x-3 text-lg text-green-500 hover:text-green-700 transition duration-300"
              >
                <FaSearch /> <span>Search</span>
              </button>
            </li>
            <li>
              <Link
                to="/favorites"
                onClick={toggleMenu}
                className="flex items-center space-x-3 text-lg text-green-500 hover:text-green-700 transition duration-300"
              >
                <FaHeart /> <span>Favorites</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Search Bar for Mobile */}
      {isSearchVisible && (
        <div className="w-full flex justify-center mt-3 transition-all duration-300 ease-in-out transform">
          <SearchBar />
          <button
            onClick={() => setIsSearchVisible(false)}
            className="ml-2 text-green-500 text-sm font-semibold hover:text-green-700"
          >
            ✖
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;