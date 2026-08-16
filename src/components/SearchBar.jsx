function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-container">
      <label htmlFor="search" className="sr-only">
        Search Projects
      </label>

      <input
        id="search"
        type="search"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search Projects"
      />
    </div>
  );
}

export default SearchBar;
