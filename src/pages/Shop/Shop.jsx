import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import Search from "./Search";
import Pagination from "./Pagination";
import ShopCategory from "./ShopCategory";
import PopularPost from "./PopularPost";
import ProductCards from "./ProductCards";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon
import Data from "/src/products.json";

const showResult = "Showing 01 - 12 of 43 Results";

const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);

  // Category active colors
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Category based filtering
  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => newVal.category === curcat);
    setSelectedCategory(curcat);
    setProducts(newItem);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '917259232905'; // Replace with your desired phone number
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div>
      <PageHeader title={"Our Shop Pages"} curPage={"Shop"} />

      {/* Shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
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
                  <ProductCards
                    products={currentProducts}
                    GridList={GridList}
                  />
                </div>
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} GridList={GridList} />
                <ShopCategory
                  filterItem={filterItem}
                  setItem={setProducts}
                  menuItems={menuItems}
                  setProducts={setProducts}
                  selectedCategory={selectedCategory}
                />
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp icon */}
      <div 
        onClick={handleWhatsAppClick} 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          padding: '15px',
          cursor: 'pointer',
          zIndex: 1000,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <FaWhatsapp size={30} />
      </div>
    </div>
  );
};

export default Shop;
