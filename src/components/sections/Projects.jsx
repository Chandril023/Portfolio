import { useState, useEffect } from 'react';
import user_info from "../../data/user_info.js";
import Project from "../Project.jsx";

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = window.innerWidth >= 1024 ? 3 : 1; // 3 projects for large devices, 1 for small

  const totalProjects = user_info.projects.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  // Get the projects to display for the current page
  const currentProjects = user_info.projects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  // Handle page changes
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  // Automatically change page after a fixed interval (e.g., 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage(prev => (prev === totalPages ? 1 : prev + 1));
    }, 5000); // Change page every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [currentPage, totalPages]);

  return (
    <>
      <h6 className="text-black text-left mx-5 lg:mx-20 my-20 text-3xl font-bold mb-8 dark:text-gray-200">
    cd /home/projects
  </h6>
      <section
        id="projects"
        className="overflow-x-auto flex items-center justify-center gap-8 md:gap-12 lg:px-16 flex-wrap bg-white dark:bg-transparent"
      >
      

        {/* Render Projects */}
        <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {currentProjects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              link={project.link}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center gap-4 mt-6 text-black dark:text-white">
          <button
            onClick={handlePrevPage}
            className="px-4 py-2 bg-opacity-30 backdrop-blur-md rounded-lg text-black dark:text-white border border-white hover:bg-white hover:text-black dark:bg-opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white transition duration-300"
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="text-black dark:text-white text-xl">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            className="px-4 py-2 bg-opacity-30 backdrop-blur-md rounded-lg text-black dark:text-white border border-white hover:bg-white hover:text-black dark:bg-opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white transition duration-300"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
}

export default Projects;
