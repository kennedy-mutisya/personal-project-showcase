function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <span>{project.title.charAt(0).toUpperCase()}</span>
      </div>

      <div className="project-content">
        <div className="project-top">
          <span className="project-category">{project.category}</span>
        </div>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="technology-list">
          {project.technologies.map((technology) => (
            <span key={technology} className="technology-tag">
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
