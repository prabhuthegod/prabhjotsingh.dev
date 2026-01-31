import React from "react";

const projects = [
  { title: "Portfolio Website", description: "React + Tailwind CSS portfolio.", link: "#" },
  { title: "Todo App", description: "CRUD Todo app with local storage.", link: "#" },
  { title: "E-commerce App", description: "Full-stack app with Stripe.", link: "#" },
  { title: "Blog Platform", description: "Content platform built with Next.js.", link: "#" },
  { title: "Weather App", description: "Live weather app using API.", link: "#" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="border rounded-lg p-6 hover:shadow-xl hover:scale-105 transform transition duration-300 bg-white dark:bg-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <span className="text-blue-500 font-medium hover:underline">View Project</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
