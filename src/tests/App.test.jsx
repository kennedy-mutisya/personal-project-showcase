import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import App from "../App";

describe("App", () => {
  test("renders the initial projects", () => {
    render(<App />);

    expect(screen.getByText("Project 1")).toBeInTheDocument();

    expect(screen.getByText("Project 2")).toBeInTheDocument();

    expect(screen.getByText("Project 3")).toBeInTheDocument();
  });

  test("allows a user to add a new project", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.type(screen.getByLabelText("Title"), "E-Commerce Website");

    await user.type(
      screen.getByLabelText("Description"),
      "An online shopping application.",
    );

    await user.click(
      screen.getByRole("button", {
        name: "Add Project",
      }),
    );

    expect(screen.getByText("E-Commerce Website")).toBeInTheDocument();

    expect(
      screen.getByText("An online shopping application."),
    ).toBeInTheDocument();
  });

  test("filters projects using the search input", async () => {
    const user = userEvent.setup();

    render(<App />);

    const searchInput = screen.getByRole("searchbox");

    await user.type(searchInput, "Project 1");

    expect(screen.getByText("Project 1")).toBeInTheDocument();

    expect(screen.queryByText("Project 2")).not.toBeInTheDocument();

    expect(screen.queryByText("Project 3")).not.toBeInTheDocument();
  });

  test("searches project descriptions", async () => {
    const user = userEvent.setup();

    render(<App />);

    const searchInput = screen.getByRole("searchbox");

    await user.type(searchInput, "first project");

    expect(screen.getByText("Project 1")).toBeInTheDocument();

    expect(screen.queryByText("Project 2")).not.toBeInTheDocument();
  });

  test("displays a message when no projects match", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.type(
      screen.getByRole("searchbox"),
      "Something That Does Not Exist",
    );

    expect(screen.getByText("No projects found")).toBeInTheDocument();

    expect(
      screen.getByText("Try another search term or add a new project."),
    ).toBeInTheDocument();
  });
});
