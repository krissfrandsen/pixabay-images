import React from "react";
import Search from "../Search";
import Card from "../Card";
import Container from "../Container";
import PropTypes from "prop-types";
import "./styles.css";

const Hero = (props) => {
  const { setInputValue, handleSearch, images, inputValue, newImages } = props;

  return (
    <section className="hero">
      <div className="header">
        <Search
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSearch={handleSearch}
        />
      </div>
      <Container>
        <Card images={images} />
        {images.length === 0 ? (
          <h1>No images found</h1>
        ) : (
          <div className="btnContainer">
            <button onClick={() => newImages("previous")}>Previous</button>
            <button onClick={() => newImages("next")}>Next</button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Hero;

Hero.prototype = {
  setInputValue: PropTypes.func,
  handleSearch: PropTypes.func,
  images: PropTypes.array,
  inputValue: PropTypes.string,
  newImages: PropTypes.array,
};
