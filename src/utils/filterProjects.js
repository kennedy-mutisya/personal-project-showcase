function filterProjects(projects, searchTerm) {
  const search = searchTerm.trim().toLowerCase();

  if (!search) {
    return projects;
  }

  return projects.filter((project) => {
    const searchableContent = [
      project.title,
      project.description,
      project.category,
      ...project.technologies,
    ]
      .join(" ")
      .toLowerCase();

    return searchableContent.includes(search);
  });
}

export default filterProjects;
