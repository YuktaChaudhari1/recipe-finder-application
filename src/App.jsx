import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./components/Home";
import RecipeDetails from "./components/RecipeDetails";
import Search from "./components/Search";
import AddRecipe from "./components/AddRecipe";
import { useState, useEffect } from "react";
import cardData from "./Data/cardData";
import Footer from "./Footer";

function App() {
  const [recipes, setRecipes] = useState(cardData);

  // Load recipes from localStorage + cardData
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes([...cardData, ...savedRecipes]);
  }, []);

  const addNewRecipe = (recipe) => {
    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    const updatedRecipes = [...savedRecipes, recipe];

    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    setRecipes([...cardData, ...updatedRecipes]);
  };

  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home cardData={recipes} />} />
          <Route path="/recipes" element={<recipes recipes={recipes} />} />
          <Route
            path="/recipe/:id"
            element={<RecipeDetails recipes={recipes} />}
          />
          <Route
            path="/add-recipe"
            element={<AddRecipe addNewRecipe={addNewRecipe} />}
          />
          <Route path="/search" element={<Search recipes={recipes} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
