import React from 'react';
import "./styles.scss";

const Results = ({ images }) => (
  <section className="results__container">
    {images.map(image => (
      <div
        className="results__image__container"
        key={image.id}
      >
        <img
          className="results__image"
          src={image.largeImageURL}
          alt={image.tags}
        />
      </div>
    ))}
  </section>
);

export default Results;
