import React, { useState } from "react";
import fetcher from "./Services";

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    fetcher()
      .then((data) => {
        // handle the search results here
      });
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
