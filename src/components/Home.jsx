import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import initialCardData from "../Data/cardData";
import AddRecipe from "./AddRecipe";
import { FaBowlFood } from "react-icons/fa6";
import { TbClover } from "react-icons/tb";
import Footer from "../Footer";

const images = [
  "./OIP.jpeg",
  "./img2.jpeg",
  "./img3.jpeg",
  "./img4.jpeg",
  "./img5.jpg",
];
function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("recipes");

    if (savedData) {
      // Use existing saved data
      setCardData(JSON.parse(savedData));
    } else {
      // First time load, save initialCardData to localStorage
      setCardData(initialCardData);
      localStorage.setItem("recipes", JSON.stringify(initialCardData));
    }
  }, []);

  useEffect(() => {
    if (cardData.length > 0) {
      localStorage.setItem("recipes", JSON.stringify(cardData));
    }
  }, [cardData]);

  //Auto Slide Every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-amber-50 ">
      {/* slider */}
      <div className=" w-full h-[700px] overflow-hidden">
        <div className="absolute z-50">
          <h4 className=" text-white text-5xl ml-5 font-bold font-serif items-center flex gap-3 mt-70">
            Better food better mood.
            <FaBowlFood />
          </h4>
          <div className="text-2xl ml-3 text-red-200 font-bold mt-3">
            Cooking is like making love, you do it well,<br></br> or you do not
            do it at all.
            <TbClover className="text-4xl inline-block text-red-500" />
          </div>
        </div>
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="min-w-full h-[550px] md:h-[700px] flex items-center justify-center bg-black"
            >
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="h-full  object-left-bottom  w-full"
              />
            </div>
          ))}
        </div>
        {/*Dots*/}
        <div className="absolute bottom-4 left-1/2  -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-3 h-3 rounded-full ${
                currentIndex === idx ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(idx)}
            ></button>
          ))}
        </div>
      </div>

      {/*Category section*/}
      <div className="cardMain">
        <h1 className="text-5xl font-bold my-4 p-5 text-rose-900  text-center underline ">
          Card Data
        </h1>
        <div className="cards ">
          <div className="cards-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center py-16 ">
            {cardData.map((item) => {
              return (
                <Cards
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  details={item.details}
                  cookingTime={item.cookingTime}
                  ingredients={item.ingredients}
                  instructions={item.instructions}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
