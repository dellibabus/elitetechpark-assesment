import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FaHeart, FaBars, FaTimes, FaHome, FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";

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
    <header className="fixed top-0 left-0 w-full z-50 bg-white p-4 text-red-500 shadow-md transition-all duration-300 ease-in-out">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Recipe App Logo" className="w-auto h-12 mr-2" />
          <span className="text-xl font-bold text-red-500 italic tracking-wide">
            Zesty
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <SearchBar />
          <Link
            to="/favorites"
            className="flex items-center bg-red-500 text-white py-3 px-5 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out transform"
          >
            <FaHeart className="mr-2" /> Favorites
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-red-600 transition-transform duration-300">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`bg-white w-full h-full p-6 text-red-600 transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end">
            <button onClick={toggleMenu} className="text-red-600">
              <FaTimes size={30} />
            </button>
          </div>

          <ul className="space-y-6 mt-8 text-start">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="flex items-center justify-start space-x-3 text-xl hover:text-red-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <FaHome /> <span>Home</span>
              </Link>
            </li>
            <li>
              <button
                onClick={handleSearchClick}
                className="flex items-center justify-start space-x-3 text-xl hover:text-red-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <FaSearch /> <span>Search</span>
              </button>
            </li>
            <li>
              <Link
                to="/favorites"
                onClick={toggleMenu}
                className="flex items-center justify-start space-x-3 text-xl hover:text-red-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <FaHeart /> <span>Favorites</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {isSearchVisible && (
        <div className="w-full flex justify-center mt-3 transition-all duration-300 ease-in-out transform">
          <SearchBar />
          <button
            onClick={() => setIsSearchVisible(false)}
            className="ml-2 text-red-500 text-sm font-semibold"
          >
            ✖
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
