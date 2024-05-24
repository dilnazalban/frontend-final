// src/components/Projects/Projects.js
import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectItems";
import { ProjectContext, ProjectProvider } from "./ProjectContext";
import { AiFillGithub,  AiFillInstagram} from "react-icons/ai";

function Projects() {
  const projects = useContext(ProjectContext);

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Мои проекты
        </h1>
        <p style={{ color: "white" }}>
          Проекты созданные мной
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col key={index} md={5} className="project-card">
              <ProjectCard
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
              />
            </Col>
          ))}
        </Row>
        <Col md={12} className="home-about-social">
            <h2>
               <span className="color">Связаться </span> со мной
            </h2>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/dilnazalban"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/di.madnessm/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
      </Container>
    </Container>
  );
}

export default Projects;

