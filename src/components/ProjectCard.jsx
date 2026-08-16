function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <span>✦</span>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;
