import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchRecipes } from "../redux/recipeSlice";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchRecipes(searchQuery));
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-3 w-full max-w-md mx-auto">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search recipes..."
        className="w-full p-3 rounded-lg border border-gray-300 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-900 transition-all duration-300"
      />
      <button 
        type="submit" 
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg transition-all duration-300"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
