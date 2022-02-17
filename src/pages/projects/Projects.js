import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projectsHeader, projects } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

function Projects(props) {
  const theme = props.theme;

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-projects">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
      </div>
      <div className="repo-cards-div-main">
        {projects.data.map((repo, index) => {
          return <ProjectCard key={index} repo={repo} theme={theme} />;
        })}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Projects;
