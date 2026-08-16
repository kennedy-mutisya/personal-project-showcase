import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import SearchBar from "../components/SearchBar";

describe("SearchBar", () => {
  test("renders the search input", () => {
    render(<SearchBar searchTerm="" onSearchChange={jest.fn()} />);

    expect(screen.getByRole("searchbox")).toBeInTheDocument();
  });

  test("calls onSearchChange when typing", async () => {
    const user = userEvent.setup();
    const onSearchChange = jest.fn();

    render(<SearchBar searchTerm="" onSearchChange={onSearchChange} />);

    await user.type(screen.getByRole("searchbox"), "React");

    expect(onSearchChange).toHaveBeenCalled();
  });

  test("displays the current search term", () => {
    render(<SearchBar searchTerm="React" onSearchChange={jest.fn()} />);

    expect(screen.getByRole("searchbox")).toHaveValue("React");
  });
});
