import { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    technologies: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    // Remove the validation message once the user
    // starts correcting the form.
    if (error) {
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = formData.title.trim();
    const description = formData.description.trim();
    const category = formData.category.trim();

    if (!title) {
      setError("Please enter a project title.");
      return;
    }

    if (!description) {
      setError("Please enter a project description.");
      return;
    }

    if (!category) {
      setError("Please enter a project category.");
      return;
    }

    const technologies = formData.technologies
      .split(",")
      .map((technology) => technology.trim())
      .filter(Boolean);

    onAddProject({
      title,
      description,
      category,
      technologies,
    });

    setFormData({
      title: "",
      description: "",
      category: "",
      technologies: "",
    });

    setError("");
  };

  return (
    <section className="form-card">
      <div className="section-intro">
        <span className="section-label">CREATE</span>

        <h2>Add a New Project</h2>

        <p>Add your latest work to the portfolio.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="title">Project Title</label>

            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. E-Commerce Platform"
            />
          </div>

          <div className="form-field">
            <label htmlFor="category">Category</label>

            <input
              id="category"
              name="category"
              type="text"
              value={formData.category}
              onChange={handleChange}
              placeholder="e.g. Web Development"
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="description">Description</label>

          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your project..."
            rows="4"
          />
        </div>

        <div className="form-field">
          <label htmlFor="technologies">Technologies</label>

          <input
            id="technologies"
            name="technologies"
            type="text"
            value={formData.technologies}
            onChange={handleChange}
            placeholder="React, CSS, JavaScript"
          />

          <small>Separate technologies with commas.</small>
        </div>

        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}

        <button type="submit" className="primary-button">
          + Add Project
        </button>
      </form>
    </section>
  );
}

export default ProjectForm;
