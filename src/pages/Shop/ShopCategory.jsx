/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import Data from "/src/products.json";

// We'll re-use the same slugify function here or define it again
function slugify(text = "") {
  return text
    .toLowerCase()
    .split(" ")
    .join("-");
}

const title = "All Categories";

const ShopCategory = ({ selectedCategory }) => {
  // Collect unique category names from data
  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">{title}</h5>
      </div>
      <div>
        {/* "All" link goes to /shop?category=all */}
        <Link
          to="/shop?category=all"
          className={`btn m-2 ${
            selectedCategory.toLowerCase() === "all" ? "bg-warning" : ""
          }`}
        >
          All
        </Link>

        {menuItems.map((Val, id) => {
          const categorySlug = slugify(Val); // e.g. "healthy-bites"
          return (
            <Link
              to={`/shop?category=${categorySlug}`}
              className={`btn m-2 ${
                slugify(selectedCategory) === categorySlug ? "bg-warning" : ""
              }`}
              key={id}
            >
              {Val}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ShopCategory;
