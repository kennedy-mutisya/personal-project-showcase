import { render, screen } from "@testing-library/react";

import ProjectCard from "../components/ProjectCard";

describe("ProjectCard", () => {
  const project = {
    id: 1,
    title: "Portfolio Website",
    description: "A responsive personal portfolio.",
    category: "Web Design",
    technologies: ["React", "CSS"],
  };

  test("renders project information", () => {
    render(<ProjectCard project={project} />);

    expect(
      screen.getByRole("heading", {
        name: "Portfolio Website",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("A responsive personal portfolio."),
    ).toBeInTheDocument();

    expect(screen.getByText("Web Design")).toBeInTheDocument();

    expect(screen.getByText("React")).toBeInTheDocument();

    expect(screen.getByText("CSS")).toBeInTheDocument();
  });
});
