import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import SearchBar from "../components/SearchBar";

describe("SearchBar", () => {
  test("displays the current search value", () => {
    render(<SearchBar searchTerm="React" onSearchChange={jest.fn()} />);

    expect(screen.getByRole("searchbox")).toHaveValue("React");
  });

  test("calls onSearchChange when user types", async () => {
    const user = userEvent.setup();

    const handleSearchChange = jest.fn();

    render(<SearchBar searchTerm="" onSearchChange={handleSearchChange} />);

    await user.type(screen.getByRole("searchbox"), "React");

    expect(handleSearchChange).toHaveBeenCalled();
    expect(handleSearchChange).toHaveBeenLastCalledWith("t");
  });
});
