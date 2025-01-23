import React from "react";
import { useNavigate } from "react-router-dom";

function slugify(text = "") {
  return text
    .toLowerCase()
    .split(" ")
    .join("-");
}

const SelectCategory = ({ selected }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const val = e.target.value; // e.g. "healthy-bites"
    navigate(`/shop?category=${val}`);
  };

  return (
    <select
      value={slugify(selected)} 
      onChange={handleChange}
    >
      <option value="all">All Categories</option>
      <option value="nutrient-boosters">Nutrient Boosters</option>
      <option value="sprouted-flour">Sprouted Flour</option>
      <option value="meal-moments">Meal Moments</option>
      <option value="healthy-bites">Healthy Bites</option>
      <option value="pure-extracts">Pure Extracts</option>
      <option value="activated-millet/flour">Activated Millet Flour</option>
    </select>
  );
};

export default SelectCategory;
