export default function SearchBar({ searchText, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchText}
      onChange={onChange}
      className="search-bar"
    />
  );
}
