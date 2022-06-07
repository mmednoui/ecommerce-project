import React from "react";
import "./CategoryFilter.css";
const CategoryFilter = () => {
  return (
    <div>
      <h1>Dresses</h1>
      <div className="filter_container">
        <div className="filter">
          <span className="filter_text"> Filter Products :</span>
          <select name="" id="">
            <option value="" disabled selected>
              Color
            </option>
            <option value="">White</option>
            <option value="">Red</option>
            <option value="">Black</option>
            <option value="">Blue</option>
            <option value="">Yellow</option>
            <option value="">Green</option>
          </select>
          <select name="" id="">
            <option value="" disabled selected>
              Size
            </option>
            <option value="">XS</option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
          </select>
        </div>
        <div className="filter">
          <span className="filter_text"> Sort Products :</span>
          <select name="" id="">
            <option value="" selected>
              Newest
            </option>
            <option value="">Price (asc)</option>
            <option value="">Price (desc)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
