import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const buscar = () => {
    if (query.trim() !== "") {
      onSearch(query.trim());
    }
  };

  const ApretarBoton = (e) => {
    if (e.key === "Enter") {
      buscar();
    }
  };
    return (
    <div className="searchbar-wrapper">
      <div className="searchbar-container">
        <span className="searchbar-icon">🎬</span>
        <input
          className="searchbar-input"
          type="text"
          placeholder="Buscar película o serie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={ApretarBoton}
        />
        <button className="searchbar-button" onClick={buscar}>
          Buscar
        </button>
      </div>
    </div>
  );

}

export default SearchBar