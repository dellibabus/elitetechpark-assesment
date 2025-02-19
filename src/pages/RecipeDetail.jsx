import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { addFavorite, removeFavorite } from "../redux/recipeSlice";
import Loading from "../components/Loading";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.recipes.favorites);

  const isFavorite = favorites.some((fav) => fav.idMeal === id);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=a352f5325e714f8e8b7d161f2f18e9d6`
        );
        setRecipe(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipeDetails();
  }, [id]);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
      toast.info("Removed from Favorites");
    } else {
      dispatch(addFavorite({ idMeal: id, strMeal: recipe.title, strMealThumb: recipe.image }));
      toast.success("Added to Favorites");
    }
  };

  if (!recipe) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto p-4 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="object-cover rounded-md w-full h-96"
          />
          <div className="flex flex-col mt-4">
            <h1 className="text-3xl font-bold text-gray-800">{recipe.title}</h1>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4 gap-4">
              <button
                onClick={() => navigate(-1)}
                className="w-full sm:w-auto px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors duration-200"
              >
                Go Back
              </button>
              <button
                onClick={toggleFavorite}
                className={`w-full sm:w-auto px-8 py-3 border-2 flex items-center justify-center gap-5 ${
                  isFavorite
                    ? "border-red-600 text-red-600"
                    : "border-gray-300 text-gray-600"
                } font-semibold rounded-md hover:bg-gray-100 transition-all duration-200`}
              >
                {isFavorite ? <FaHeart /> : <FaRegHeart />}{" "}
                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white p-6 rounded-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Ingredients:</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.name}</li>
            ))}
          </ul>
          <div className="mb-4">
            <h3 className="font-bold text-gray-800">Preparation Time:</h3>
            <p className="text-gray-600">{recipe.readyInMinutes} minutes</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Serving Size:</h3>
            <p className="text-gray-600">{recipe.servings} servings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
