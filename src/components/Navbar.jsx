import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">Prabhjot Singh</div>
        <ul className="flex space-x-6 items-center">
          <li><a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400">Contact</a></li>
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-200 dark:bg-gray-700 p-2 rounded"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
