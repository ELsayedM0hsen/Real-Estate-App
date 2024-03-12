import React from "react";
import "./filter.scss";
import search from "../../../public/search.png";

const Filter = () => {
  return (
    <div className="filter">
      <div className="top">
        <h1>Search results for</h1>
        <div className="item">
          <label>Location</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="City Location"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label>Type</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label>Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            min={0}
            max={10000}
            placeholder="any"
          />
        </div>
        <div className="item">
          <label>Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            min={0}
            max={10000}
            placeholder="any"
          />
        </div>
        <div className="item">
          <label>Bedroom</label>
          <input type="text" placeholder="any" />
        </div>
        <button>
          <img src={search} alt="search" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
