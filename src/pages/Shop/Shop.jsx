import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // for reading query params
import PageHeader from "../../components/PageHeader";
import Search from "./Search";
import Pagination from "./Pagination";
import ShopCategory from "./ShopCategory";
import ProductCards from "./ProductCards";
import { FaWhatsapp } from "react-icons/fa";
import Data from "/src/products.json";

// A helper function that slugifies category names:
// e.g. "Meal Moments" -> "meal-moments"
function slugify(text = "") {
  return text
    .toLowerCase()
    .split(" ")
    .join("-");
}

const showResult = "Showing 01 - 12 of 43 Results";

const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // For pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // 1) Grab the query param from URL
  const location = useLocation(); // e.g. "/shop?category=healthy-bites"
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get("category"); // e.g. "healthy-bites"

  useEffect(() => {
    let cat = categoryParam || "all"; // default if ?category= not present
    if (cat.toLowerCase() === "all") {
      setProducts(Data);
      setSelectedCategory("All");
    } else {
      // Filter data by comparing slugified product.category with the param
      const filtered = Data.filter(
        (item) => slugify(item.category) === cat.toLowerCase() 
      );
      setProducts(filtered);
      setSelectedCategory(cat);
    }
    // Reset pagination to first page on category change
    setCurrentPage(1);
  }, [categoryParam]);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // WhatsApp icon
  const handleWhatsAppClick = () => {
    const phoneNumber = "917259232905";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div>
      <PageHeader title={"Our Shop Pages"} curPage={"Shop"} />

      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            {/* Left Sidebar */}
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} GridList={GridList} />
                {/* Notice we don't pass a filterItem anymore 
                    Just pass selectedCategory so it can highlight the correct category. */}
                <ShopCategory selectedCategory={selectedCategory} />
              </aside>
            </div>

            {/* Main Content */}
            <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showResult}</p>
                  <div
                    className={`product-view-mode ${
                      GridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>
                <div>
                  <ProductCards products={currentProducts} GridList={GridList} />
                </div>
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp icon */}
      <div
        onClick={handleWhatsAppClick}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "50%",
          padding: "15px",
          cursor: "pointer",
          zIndex: 1000,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <FaWhatsapp size={30} />
      </div>
    </div>
  );
};

export default Shop;
