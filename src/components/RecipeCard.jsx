import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const RecipeCard = ({ recipe, onFavoriteToggle }) => {
  const handleFavoriteToggle = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onFavoriteToggle(recipe);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.05]">
      <Link to={`/recipe/${recipe.id}`} className="block">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-52 md:h-64 lg:h-72 object-cover rounded-t-2xl transition-all duration-300"
        />

        <div className="p-4 md:p-5">
          <h3 className="font-semibold text-lg md:text-xl text-gray-800 mb-2 line-clamp-2">
            {recipe.title}
          </h3>

          <p className="text-green-600 hover:text-green-700 text-base md:text-lg font-medium underline transition-colors">
            View Recipe
          </p>
        </div>
      </Link>

      <div className="absolute bottom-4 right-4">
        <button
          onClick={handleFavoriteToggle}
          className="p-3 md:p-4 bg-white rounded-full text-xl border border-gray-300 hover:border-red-500 shadow-md hover:shadow-lg transition-all duration-300"
        >
          {recipe.isFavorite ? (
            <FaHeart className="text-red-500 hover:text-red-700 transition-colors" />
          ) : (
            <FaRegHeart className="text-gray-500 hover:text-red-500 transition-colors" />
          )}
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
