import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon


import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";
// import Review from "../../components/Review";
import MostPopularPost from "../../components/Sidebar/MostPopularPost";
import ProductDisplay from "./ProductDisplay";
const reviwtitle = "Add a Review";

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .then((data) => setResult(data.filter((p) => p.id == id)));

  }, []);

  const handleWhatsAppClick = () => {
    // Replace with your desired phone number
    const phoneNumber = '917259232905';
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };


  const result = product.filter((p) => p.id === id);
  return (
    
    <div>
      <PageHeader title={"OUR SHOP SINGLE"} curPage={"Shop / Single Product"} />

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

      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="product-details">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                      <div className="product-thumb">
                        <div className="swiper-container pro-single-top">
                          <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={"true"}
                            autoplay={{
                              delay: 2000,
                              disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            navigation={{
                              prevEl: ".pro-single-prev",
                              nextEl: ".pro-single-next",
                            }}
                          >
                            {result.map((item, i) => (
                              <SwiperSlide key={i}>
                                <div className="single-thumb">
                                  <img src= {`${item.img}`}  alt="" />
                                </div>
                              </SwiperSlide>
                    
                            ))}
                            
                          </Swiper>
                          <div className="pro-single-next">
                            <i className="icofont-rounded-left"></i>
                          </div>
                          <div className="pro-single-prev">
                            <i className="icofont-rounded-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="post-content">
                        <div>
                          {
                            result.map(item => <ProductDisplay item={item} key={item.id}/>)
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* <div className="review">
                  <Review />
                </div> */}
              </article>
            </div>
            <div className="col-lg-4 col-md-7 col-12">
              <aside className="ps-lg-4">
{/*                 <MostPopularPost /> */}
                {/* <Tags /> */}
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
