import "./SearchBar.scss";

export default function SearchBar({ handleInputChange }) {
  return (
    <input
      className="search"
      type="text"
      onChange={handleInputChange}
      placeholder="Enter patient ID"
    />
  );
}
