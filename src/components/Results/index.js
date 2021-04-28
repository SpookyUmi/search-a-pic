import React from 'react';
import "./styles.scss";

const Results = ({ images }) => (
  <section className="images__gallery">
    {images.map(image => (
      <div
        className="images__gallery__item"
        key={image.id}
      >
        <img
          className="pixabay__image"
          src={image.largeImageURL}
          alt={image.tags}
        />
      </div>
    ))}
  </section>
);

export default Results;
