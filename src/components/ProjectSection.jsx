import SearchBar from "./SearchBar";
import ProjectList from "./ProjectList";

function ProjectSection({ projects, searchTerm, onSearchChange }) {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <div>
          <span className="section-label">PORTFOLIO</span>

          <h2>Featured Projects</h2>

          <p>A collection of my recent work and experiments.</p>
        </div>

        <div className="project-count">
          <strong>{projects.length}</strong>
          <span>Projects</span>
        </div>
      </div>

      <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />

      <ProjectList projects={projects} />
    </section>
  );
}

export default ProjectSection;
