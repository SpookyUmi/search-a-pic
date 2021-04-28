import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import "./styles.scss";

const Results = ({ images, isOpen, setIsOpen, setPhotoIndex, photoIndex }) => (
  <section className="images__gallery">
    {images.map((image, index) => (
      <div
        className="images__gallery__item"
        key={image.id}
        onClick={() => { setIsOpen(true) }}
      >
        <img
          className="pixabay__image"
          src={image.largeImageURL}
          alt={image.tags}
          onClick={() => { setPhotoIndex(index) }}
        />
      </div>
    ))}
    {isOpen && (
      <Lightbox
        mainSrc={images[photoIndex].largeImageURL}
        nextSrc={images[(photoIndex + 1) % images.length].largeImageURL}
        prevSrc={images[(photoIndex + images.length - 1) % images.length].largeImageURL}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() =>
          setPhotoIndex((photoIndex + images.length - 1) % images.length)
        }
        onMoveNextRequest={() =>
          setPhotoIndex((photoIndex + 1) % images.length)
        }
      />
    )}
  </section>
);

export default Results;
