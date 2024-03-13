import React from "react";
import "./slider.scss";

const Slider = ({ images }) => {
  return (
    <div className="slider">
      <div className="bigImage">
        <img src={images[0]} alt="image" />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img src={image} key={index} alt="image" />
        ))}
      </div>
    </div>
  );
};

export default Slider;
