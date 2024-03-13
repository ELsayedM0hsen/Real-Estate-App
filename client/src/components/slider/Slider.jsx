import React, { useEffect, useState } from "react";
import "./slider.scss";

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);

  const changSlider = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length-1);
      } else {
        setImageIndex(imageIndex-1);
      }
    } else {
      if (imageIndex === images.length-1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex+1);
      }
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img
              src="/arrow.png"
              alt="arrow"
              onClick={() => changSlider("left")}
            />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="image" />
          </div>
          <div className="arrow">
            <img
              src="/arrow.png"
              className="right"
              alt="arrow"
              onClick={() => changSlider("right")}
            />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="image" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            key={index}
            alt="image"
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
