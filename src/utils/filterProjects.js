function filterProjects(projects, searchTerm) {
  const search = searchTerm.trim().toLowerCase();

  if (!search) {
    return projects;
  }

  return projects.filter((project) =>
    `${project.title} ${project.description}`.toLowerCase().includes(search),
  );
}

export default filterProjects;
