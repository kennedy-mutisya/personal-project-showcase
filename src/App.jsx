import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

import initialProjects from "./data/projects";
import filterProjects from "./utils/filterProjects";

import "./styles/App.css";

function App() {
  // Projects are stored in the parent component because both
  // ProjectForm and ProjectList need access to the project data.
  const [projects, setProjects] = useState(initialProjects);

  // Search state is also kept here because the search term
  // determines which projects are displayed in ProjectList.
  const [searchTerm, setSearchTerm] = useState("");

  // Adds a new project to the existing project array.
  // Date.now() provides a simple unique ID for this small application.
  const handleAddProject = (newProject) => {
    setProjects((previousProjects) => [
      ...previousProjects,
      {
        id: Date.now(),
        ...newProject,
      },
    ]);
  };

  // Only matching projects are passed to ProjectList.
  // Keeping the original projects array unchanged makes the
  // search feature easier to manage.
  const filteredProjects = filterProjects(projects, searchTerm);

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <ProjectForm onAddProject={handleAddProject} />

        <section className="projects-section">
          <div className="projects-heading">
            <h2>My Projects</h2>

            <span>{filteredProjects.length} projects</span>
          </div>

          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

          <ProjectList projects={filteredProjects} />
        </section>
      </main>
    </div>
  );
}

export default App;
