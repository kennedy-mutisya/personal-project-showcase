import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import ProjectForm from "../components/ProjectForm";

describe("ProjectForm", () => {
  test("renders the project form", () => {
    render(<ProjectForm onAddProject={jest.fn()} />);

    expect(
      screen.getByRole("heading", {
        name: "Add Project",
      }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Title")).toBeInTheDocument();

    expect(screen.getByLabelText("Description")).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Add Project",
      }),
    ).toBeInTheDocument();
  });

  test("submits a new project", async () => {
    const user = userEvent.setup();

    const handleAddProject = jest.fn();

    render(<ProjectForm onAddProject={handleAddProject} />);

    await user.type(screen.getByLabelText("Title"), "Weather App");

    await user.type(
      screen.getByLabelText("Description"),
      "A React weather application.",
    );

    await user.click(
      screen.getByRole("button", {
        name: "Add Project",
      }),
    );

    expect(handleAddProject).toHaveBeenCalledTimes(1);

    expect(handleAddProject).toHaveBeenCalledWith({
      title: "Weather App",
      description: "A React weather application.",
    });
  });

  test("does not submit an empty project", async () => {
    const user = userEvent.setup();

    const handleAddProject = jest.fn();

    render(<ProjectForm onAddProject={handleAddProject} />);

    await user.click(
      screen.getByRole("button", {
        name: "Add Project",
      }),
    );

    expect(handleAddProject).not.toHaveBeenCalled();
  });
});
