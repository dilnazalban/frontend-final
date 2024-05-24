import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      title: " reactsession ",
      ghLink: "https://github.com/dilnazalban/reactsession"
    },
    {
      title: " DjangoApp ",
      ghLink: "https://github.com/dilnazalban/DjangoApp"
    },
    {
      title: " project ",
      ghLink: "https://github.com/dilnazalban/project"
    },
    {
      title: " 7Task ",
      ghLink: "https://github.com/dilnazalban/7Task"
    },
    {
      title: " 8task ",
      ghLink: "https://github.com/dilnazalban/8task"
    },
    {
      title: " 9task",
      ghLink: "https://github.com/dilnazalban/9task"
    },
    {
      title: " 10task",
      ghLink: "https://github.com/dilnazalban/10task"
    },
    
  ]);

  return (
    <ProjectContext.Provider value={projects}>
      {children}
    </ProjectContext.Provider>
  );
};
