import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-purple-600 text-white text-center">
      <h1 className="text-5xl font-bold mb-4 animate-fadeIn">Hi, I'm DevName</h1>
      <p className="text-xl mb-6 animate-fadeIn delay-200">Full-Stack Developer | React | Node.js | UI/UX Enthusiast</p>
      <div className="flex space-x-4 mb-6">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-100 transition">GitHub</a>
        <a href="mailto:youremail@example.com" className="bg-white text-red-600 px-4 py-2 rounded hover:bg-gray-100 transition">Email</a>
      </div>
      <a
        href="#projects"
        className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition animate-bounce"
      >
        See My Work
      </a>
    </section>
  );
};

export default Hero;
