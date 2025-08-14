import React from "react";
import { Link } from "react-router-dom";

function Cards({ id, img, title, desc, details }) {
  return (
    <Link to={`/recipe/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl w-80">
        <img src={img} alt={title} className="h-48 w-full object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-orange-600 mb-2">{desc}</p>
          <p className="text-gray-600 mb-2">{details}</p>
        </div>
      </div>
    </Link>
  );
}

export default Cards;
