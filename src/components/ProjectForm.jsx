import { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.title.trim() || !formData.description.trim()) {
      return;
    }

    onAddProject({
      title: formData.title.trim(),
      description: formData.description.trim(),
    });

    setFormData({
      title: "",
      description: "",
    });
  };

  return (
    <section className="form-section">
      <h2>Add Project</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>

          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter project title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>

          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter project description"
            rows="4"
          />
        </div>

        <button type="submit" className="add-button">
          Add Project
        </button>
      </form>
    </section>
  );
}

export default ProjectForm;
