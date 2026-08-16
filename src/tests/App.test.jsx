import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import App from "../App";

describe("App", () => {
  test("renders the portfolio projects", () => {
    render(<App />);

    expect(screen.getByText("Creative Portfolio")).toBeInTheDocument();

    expect(screen.getByText("E-Commerce Platform")).toBeInTheDocument();

    expect(screen.getByText("Task Management App")).toBeInTheDocument();
  });

  test("allows users to add projects", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.type(
      screen.getByLabelText("Project Title"),
      "Mobile Banking App",
    );

    await user.type(screen.getByLabelText("Category"), "Mobile Development");

    await user.type(
      screen.getByLabelText("Description"),
      "A mobile banking application.",
    );

    await user.type(screen.getByLabelText("Technologies"), "React Native");

    await user.click(
      screen.getByRole("button", {
        name: "+ Add Project",
      }),
    );

    expect(screen.getByText("Mobile Banking App")).toBeInTheDocument();
  });

  test("filters projects dynamically", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.type(screen.getByRole("searchbox"), "E-Commerce");

    expect(screen.getByText("E-Commerce Platform")).toBeInTheDocument();

    expect(screen.queryByText("Creative Portfolio")).not.toBeInTheDocument();
  });

  test("can search by technology", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.type(screen.getByRole("searchbox"), "React");

    expect(screen.getByText("Creative Portfolio")).toBeInTheDocument();

    expect(screen.getByText("E-Commerce Platform")).toBeInTheDocument();
  });

  test("shows an empty state for unmatched searches", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.type(screen.getByRole("searchbox"), "XYZ Project 999");

    expect(screen.getByText("No projects found")).toBeInTheDocument();

    expect(
      screen.getByText("Try another search term or add a new project."),
    ).toBeInTheDocument();
  });
});
