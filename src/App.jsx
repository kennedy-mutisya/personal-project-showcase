import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectSection from "./components/ProjectSection";

import initialProjects from "./data/projects";
import filterProjects from "./utils/filterProjects";

function App() {
  // Shared project state lives here because both the
  // form and project section depend on it.
  const [projects, setProjects] = useState(initialProjects);

  // Search state is shared with SearchBar and is used
  // to determine which projects should be displayed.
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddProject = (newProject) => {
    setProjects((previousProjects) => [
      ...previousProjects,
      {
        id: Date.now(),
        ...newProject,
      },
    ]);
  };

  // filteredProjects is derived data, so it does not
  // need its own useState.
  const filteredProjects = filterProjects(projects, searchTerm);

  return (
    <div className="app">
      <Header />

      <main className="main-container">
        <ProjectForm onAddProject={handleAddProject} />

        <ProjectSection
          projects={filteredProjects}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      </main>

      <footer className="footer">
        <p>Built with React · Personal Project Showcase</p>
      </footer>
    </div>
  );
}

export default App;
