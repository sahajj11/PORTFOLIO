// Projects.js
import React from "react";
import "./Projects.css"
import { useNavigate } from "react-router";

const projects = [
  {
    title: "YouTube Clone",
    description: "A fully responsive YouTube clone built with React and YouTube API.",
    technologies: ["React", "API", "CSS"],
    github: "https://github.com/yourusername/youtube-clone",
    liveDemo: "https://youtube-clone-demo.com",
    img:"",
  },
  {
    title: "Ghar.com",
    description: "A real estate platform similar to Airbnb for renting homes.",
    technologies: ["MERN Stack", "Node.js", "Express"],
    github: "https://github.com/yourusername/ghar.com",
    liveDemo: "https://ghar.com",
  },
  {
    title: "Ghar.com",
    description: "A real estate platform similar to Airbnb for renting homes.",
    technologies: ["MERN Stack", "Node.js", "Express"],
    github: "https://github.com/yourusername/ghar.com",
    liveDemo: "https://ghar.com",
  },
  // Add more projects here
];

const Projects = () => {
  const navigate=useNavigate()
  return (
    <>
    <button className="back-button" onClick={()=>navigate("/")}>
      Back
    </button>
    <div id="projects" className="projects-section">
      <h2 className="text-center my-5">Projects</h2>
      <div className="container">
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card project-card h-100">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">GitHub</a>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    </>
  );
};

export default Projects;
