import React from "react";
import PropTypes from "prop-types";

const Card = ({ images }) => {
  return (
    <>
      {images.map((image) => (
        <div key={image.id} className="card">
          <a
            href={image.largeImageURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={image.webformatURL}
              alt="photograph"
              className="card__image"
            />
            <div className="card__info">
              <div className="card__user">
                <span className="user">{image.user}</span>
              </div>
              <div className="card__interaction">
                <span className="comments-number">{image.comments}</span>
                <span className="comments">
                  <i class="far fa-comment"></i>
                </span>
                <span className="likes-number">{image.likes}</span>
                <span className="likes">
                  <i className="fas fa-heart"></i>
                </span>
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default Card;

Card.prototype = {
  images: PropTypes.array,
  image: PropTypes.string,
};
