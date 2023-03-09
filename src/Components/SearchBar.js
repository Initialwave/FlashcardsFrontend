import React, { useState,useEffect, useCallback } from "react";


const SearchBar = ({doFilter}) => {
  const [searchTerm, setSearchTerm] = useState([]);

  const handleInputChange = event => {
    if(event.target.value){
      setSearchTerm(event.target.value.split(" "));
      doFilter(searchTerm);
    } else {
      setSearchTerm([]);
    }

  };

  
  const handleSubmit = useCallback(event => {
    event.preventDefault(); // prevent the form from submitting normally
    // fetcher(searchTerm).then(data => {
    //   // handle the search results here
    // });
    if(event.target.firstChild.value){
      setSearchTerm(event.target.firstChild.value.split(" "));
      doFilter(searchTerm);
    }
  //  handleInputChange(event);
  });

  useEffect(() => {
    const handleEnterKey = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        handleInputChange(event);
      }
    };
    document.addEventListener("keydown", handleEnterKey);
    return () => {
      document.removeEventListener("keydown", handleEnterKey);
    };
  }, [handleSubmit]);

  return (
    
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm.join(" ")}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );

}

export default SearchBar;
