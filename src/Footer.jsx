import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-rose-900 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Links */}
        <div className="space-y-2">
          <h2 className="font-bold text-xl">RecipeSite</h2>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>Recipes</li>
            <li>Add Recipe</li>
            <li>Search</li>
          </ul>
        </div>

        {/* Center Links */}
        <div className="space-y-2">
          <h2 className="font-bold text-xl">More</h2>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-bold text-xl mb-2">Get Recipe Updates</h2>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email here"
              className="p-2 rounded text-black flex-1 bg-white"
            />
            <button className="bg-white text-rose-500 px-4 py-2 rounded hover:bg-gray-200">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 mt-6 justify-center text-2xl text-rose-700">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-rose-300 transition-colors"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-rose-300 transition-colors"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-rose-300 transition-colors"
        >
          <FaTwitter />
        </a>
        <a
          href="https://pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-rose-300 transition-colors"
        >
          <FaPinterestP />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-rose-300 transition-colors"
        >
          <FaYoutube />
        </a>
      </div>

      <div className="text-xs text-center mt-6">
        © 2025 RecipeSite. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
