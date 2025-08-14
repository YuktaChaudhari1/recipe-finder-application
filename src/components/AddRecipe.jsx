import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRecipe({ addNewRecipe }) {
  const [recipe, setRecipe] = useState({
    id: Date.now(),
    img: "",
    title: "",
    desc: "",
    cookingTime: "",
    ingredients: "",
    instructions: "",
    details: "",
    reviews: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert ingredients & reviews to arrays
    const finalRecipe = {
      ...recipe,
      ingredients: recipe.ingredients.split("\n"),
      reviews: recipe.reviews.split("\n"),
    };

    addNewRecipe(finalRecipe);
    navigate("/"); // Redirect to Home
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-3xl mx-auto p-6 bg-amber-50 shadow rounded-lg  ">
        <h2 className="text-2xl font-bold mb-4 mt-20">Add New Recipe</h2>

        <input
          type="text"
          name="title"
          placeholder="Recipe Title"
          value={recipe.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="desc"
          placeholder="Short Description"
          value={recipe.desc}
          onChange={handleChange}
          className="w-full border p-2 rounded mt-2"
          required
        />
        <input
          type="text"
          name="cookingTime"
          placeholder="Cooking Time"
          value={recipe.cookingTime}
          onChange={handleChange}
          className="w-full border p-2 rounded mt-2"
          required
        />
        <textarea
          name="ingredients"
          placeholder="Ingredients (one per line)"
          value={recipe.ingredients}
          onChange={handleChange}
          className="w-full border p-2 rounded h-28 mt-2"
          required
        />
        <textarea
          name="instructions"
          placeholder="Instructions"
          value={recipe.instructions}
          onChange={handleChange}
          className="w-full border p-2 rounded h-28 mt-2"
          required
        />
        <textarea
          name="details"
          placeholder="Extra Details"
          value={recipe.details}
          onChange={handleChange}
          className="w-full border p-2 rounded mt-2"
        />
        <textarea
          name="reviews"
          placeholder="Reviews (one per line)"
          value={recipe.reviews}
          onChange={handleChange}
          className="w-full border p-2 rounded h-20 mt-2"
        />
        <input
          type="text"
          name="img"
          placeholder="Image URL"
          value={recipe.img}
          onChange={handleChange}
          className="w-full border p-2 rounded mt-2"
        />

        <button
          type="submit"
          className="bg-rose-700 text-white px-4 py-2 rounded hover:bg-rose-800 mt-4"
        >
          Add Recipe
        </button>
      </div>
    </form>
  );
}

export default AddRecipe;
