import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const RecipeCard = ({ recipe, onFavoriteToggle }) => {
  const handleFavoriteToggle = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onFavoriteToggle(recipe);
  };

  return (
    <div className="relative overflow-hidden rounded-lg bg-white shadow-xl transition-all transform duration-300 hover:scale-105">
      <Link to={`/recipe/${recipe.id}`}>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />

        <div className="p-4">
          <h3 className="font-semibold text-md text-gray-800 h-16 overflow-hidden mb-2">
            {recipe.title}
          </h3>

          <p className="text-red-600 hover:text-red-700 text-lg font-medium">
            View Recipe
          </p>
        </div>
      </Link>

      <div className="absolute bottom-4 right-4">
        <button
          onClick={handleFavoriteToggle}
          className="p-2 bg-white rounded-full text-xl border-2 border-gray-300 hover:border-red-500 transition-all duration-200"
        >
          {recipe.isFavorite ? (
            <FaHeart className="text-red-500 hover:text-red-700" />
          ) : (
            <FaRegHeart className="text-gray-500 hover:text-red-500" />
          )}
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
