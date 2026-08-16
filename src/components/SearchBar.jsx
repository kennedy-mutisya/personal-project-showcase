function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-wrapper">
      <label htmlFor="project-search" className="sr-only">
        Search projects
      </label>

      <span className="search-icon">🔍</span>

      <input
        id="project-search"
        type="search"
        role="searchbox"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search projects, technologies, or categories..."
      />
    </div>
  );
}

export default SearchBar;
