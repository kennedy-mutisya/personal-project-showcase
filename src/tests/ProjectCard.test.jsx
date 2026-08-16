import { render, screen } from "@testing-library/react";
import ProjectCard from "../components/ProjectCard";

describe("ProjectCard", () => {
  test("renders the project title and description", () => {
    const project = {
      id: 1,
      title: "Portfolio Website",
      description: "A responsive portfolio website.",
    };

    render(<ProjectCard project={project} />);

    expect(
      screen.getByRole("heading", {
        name: "Portfolio Website",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("A responsive portfolio website."),
    ).toBeInTheDocument();
  });
});
