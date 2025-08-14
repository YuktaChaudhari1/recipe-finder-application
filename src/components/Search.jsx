import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

function Search({ recipes }) {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    setSearchTerm(query.trim().toLowerCase());
  };

  // If no search term → show all recipes
  const filteredRecipes =
    searchTerm === ""
      ? recipes
      : recipes.filter((recipe) => {
          return (
            recipe.title.toLowerCase().includes(searchTerm) ||
            (recipe.ingredients &&
              recipe.ingredients
                .join(" ")
                .toLowerCase()
                .includes(searchTerm)) ||
            (recipe.description &&
              recipe.description.toLowerCase().includes(searchTerm))
          );
        });

  // Remove duplicates based on ID
  const uniqueRecipes = filteredRecipes.filter(
    (recipe, index, self) => index === self.findIndex((r) => r.id === recipe.id)
  );

  return (
    <div className="p-6 bg-amber-50">
      {/* Search Box */}
      <div className="relative w-full mb-6 mt-20">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 pl-10 rounded w-full focus:outline-none focus:ring bg-white focus:ring-yellow-400"
        />
        <IoSend
          onClick={handleSearch}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer hover:text-white"
        />
      </div>

      {/* Cards */}
      {uniqueRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {uniqueRecipes.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <img
                src={recipe.img}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl font-bold mt-2 text-stone-900">
                {recipe.title}
              </h2>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No recipes found.</p>
      )}
    </div>
  );
}

export default Search;
