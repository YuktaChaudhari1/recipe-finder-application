import React from "react";
import logo from "./assets/recipelogo.png";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <div className=" bg-rose-900  fixed w-full flex items-center justify-between  z-30 ">
          <div className="logo">
            <img
              src={logo}
              alt="logo"
              className="h-20 w-20 rounded-b-full justify-start"
            />
          </div>
          <ul className="navbar flex gap-0 sm:gap-6 items-center right-0 sm:right-6 font-semibold ">
            <li
              className="pages hover:bg-yellow-500 active:bg-yellow-500 bg-transparent cursor-pointer transition duration-200  rounded-3xl p-3 text-white "
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="pages  hover:bg-yellow-500 bg-transparent active:bg-yellow-500 cursor-pointer transition duration-200  rounded-3xl p-2 text-white"
              onClick={() => navigate("/recipe/1")}
            >
              Recipes
            </li>
            <li
              className="pages  hover:bg-yellow-500 active:bg-yellow-500  bg-transparent cursor-pointer transition duration-200  rounded-3xl p-2 text-white"
              onClick={() => navigate("/add-recipe")}
            >
              Add Recipe
            </li>
            <li
              className="pages  hover:bg-yellow-500 active:bg-yellow-500  bg-transparent cursor-pointer transition duration-200  rounded-3xl p-2 text-white"
              onClick={() => navigate("/search")}
            >
              Search
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
