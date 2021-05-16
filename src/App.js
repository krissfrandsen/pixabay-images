import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import PropTypes from "prop-types";
import "./styles.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(inputValue);
    setInputValue("");
  };

  const newImages = (direction) => {
    if (direction === "next") {
      setCurrentPage((prevCurrent) => prevCurrent + 1);
    } else if (direction === "previous" && currentPage !== 1) {
      setCurrentPage((prevCurrent) => prevCurrent - 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${search}&image_type=photo&per_page=9&page=${currentPage}&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => setImages(data.hits));
  }, [search, currentPage]);

  return (
    <div className="App">
      <Hero
        images={images}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSearch={handleSearch}
        newImages={newImages}
      />
    </div>
  );
};

export default App;

App.PropTypes = {
  images: PropTypes.array,
  currentPage: PropTypes.number,
  search: PropTypes.string,
  inputValue: PropTypes.string,
  event: PropTypes.string,
  data: PropTypes.array,
};
