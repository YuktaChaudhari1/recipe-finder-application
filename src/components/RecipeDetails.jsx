import React from "react";
import { useParams, Link } from "react-router-dom";
import cardData from "../Data/cardData";

function RecipeDetails() {
  const { id } = useParams();

  //get localStorage recipes
  const strongRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

  const allRecipes = [...cardData, ...strongRecipes];

  const recipe = allRecipes.find((item) => item.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="p-8 text-center ">
        <h2 className="text-2xl font-bold text-red-600">Recipe not found</h2>
        <Link
          to="/"
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          &larr; Back to recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-amber-50 rounded shadow ">
      <img
        src={recipe.img}
        alt={recipe.title}
        className="w-full h-[700px] mt-15 rounded"
      />
      <h1 className="text-4xl font-bold my-4 text-rose-600">{recipe.title}</h1>
      <p className="mb-4 text-lg font-semibold">{recipe.desc}</p>
      <div className="text-gray-700 whitespace-pre-line">{recipe.details}</div>

      <div className="border-4 rounded-full p-3 text-center  bg-amber-300 w-40 mt-1.5 hover:text-white">
        Time: {recipe.cookingTime}
      </div>

      <div className="relative flex gap-8">
        {/* Right side - Ingredients */}
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold mb-2 border-b pb-1">
            Ingredients
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-2xl font-bold">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Left side - Instructions */}
        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-2 border-b pb-1">
            Instructions
          </h2>
          <ul className=" list-inside space-y-1 text-gray-700 text-2xl font-semibold">
            {recipe.instructions?.split("\n").map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10">
        {/* Review Section Heading */}
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2">Reviews</h2>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recipe.reviews?.map((review, index) => {
            const [text, name] = review.split(" - ");
            return (
              <div
                key={index}
                className="bg-white shadow-2xl rounded-2xl p-5 border hover:shadow-xl transition duration-300"
              >
                <p className="text-gray-700 italic mb-3">"{text}"</p>
                <p className=" font-bold text-right text-red-400">"{name}"</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Back button */}
      <div>
        <Link
          to="/"
          className="inline-block mt-6 text-blue-600 hover:underline"
        >
          &larr; Back to recipes
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetails;
