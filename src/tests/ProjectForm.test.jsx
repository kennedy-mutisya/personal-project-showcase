import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import ProjectForm from "../components/ProjectForm";

describe("ProjectForm", () => {
  test("renders the project form", () => {
    render(<ProjectForm onAddProject={jest.fn()} />);

    expect(
      screen.getByRole("heading", {
        name: "Add a New Project",
      }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Project Title")).toBeInTheDocument();

    expect(screen.getByLabelText("Description")).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "+ Add Project",
      }),
    ).toBeInTheDocument();
  });

  test("adds a new project", async () => {
    const user = userEvent.setup();
    const onAddProject = jest.fn();

    render(<ProjectForm onAddProject={onAddProject} />);

    await user.type(screen.getByLabelText("Project Title"), "Weather App");

    await user.type(screen.getByLabelText("Category"), "Web Development");

    await user.type(
      screen.getByLabelText("Description"),
      "A weather application built with React.",
    );

    await user.type(
      screen.getByLabelText("Technologies"),
      "React, CSS, JavaScript",
    );

    await user.click(
      screen.getByRole("button", {
        name: "+ Add Project",
      }),
    );

    expect(onAddProject).toHaveBeenCalledWith({
      title: "Weather App",
      description: "A weather application built with React.",
      category: "Web Development",
      technologies: ["React", "CSS", "JavaScript"],
    });
  });

  test("shows an error when title is empty", async () => {
    const user = userEvent.setup();
    const onAddProject = jest.fn();

    render(<ProjectForm onAddProject={onAddProject} />);

    await user.click(
      screen.getByRole("button", {
        name: "+ Add Project",
      }),
    );

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Please enter a project title.",
    );

    expect(onAddProject).not.toHaveBeenCalled();
  });

  test("clears the form after successful submission", async () => {
    const user = userEvent.setup();

    render(<ProjectForm onAddProject={jest.fn()} />);

    const title = screen.getByLabelText("Project Title");

    const description = screen.getByLabelText("Description");

    const category = screen.getByLabelText("Category");

    await user.type(title, "Blog App");

    await user.type(description, "A personal blog application.");

    await user.type(category, "Web Development");

    await user.click(
      screen.getByRole("button", {
        name: "+ Add Project",
      }),
    );

    expect(title).toHaveValue("");
    expect(description).toHaveValue("");
    expect(category).toHaveValue("");
  });
});
