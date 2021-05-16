import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Search = ({ inputValue, setInputValue, handleSearch }) => {
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for an image"
        autoFocus
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Search;

Search.prototype = {
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func,
  handleSearch: PropTypes.func,
};
