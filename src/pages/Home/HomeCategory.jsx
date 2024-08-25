
import { Link } from "react-router-dom";

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
    {
        imgUrl: 'https://i.pinimg.com/736x/7b/ff/f4/7bfff4fa12ac9b75bc6cefbbd9a8245b.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Nutrient Boosters',
    },
    {
        imgUrl: 'https://i.pinimg.com/736x/66/ac/ff/66acfff1f0d72aebfac412b5822b1804.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Sprouted Flour',
    },
    {
        imgUrl: 'https://i.pinimg.com/736x/96/00/1e/96001ec5e2088ec4486d472fcc9bba0d.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Meal Moments',
    },
    {
        imgUrl: 'https://i.pinimg.com/736x/37/c0/bc/37c0bc060908db489eec419954762236.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Healthy Bites',
    },
    {
        imgUrl: 'https://i.pinimg.com/736x/fe/76/2c/fe762c7bfd9c99af0d8081164af6939c.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Pure Extracts',
    },
    {
        imgUrl: 'https://i.pinimg.com/736x/11/66/b8/1166b8888b880f4c20567311276b75cf.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Activated Millet/Flour',
    },
]

const HomeCategory = () => {
  return (
    <div className="category-section style-4 padding-tb">
    <div className="container">
        <div className="section-header text-center">
            <span className="subtitle">{subTitle}</span>
            <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
            <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
                {categoryList.map((val, i) => (
                    <div className="col" key={i}>
                        <Link to="/shop" className="category-item">
                            <div className="category-inner">
                                <div className="category-thumb">
                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                </div>
                                <div className="category-content">
                                    <div className="cate-icon">
                                        <i className={`${val.iconName}`}></i>
                                    </div>
                                    <Link to="/shop"><h6>{val.title}</h6></Link>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="text-center mt-5">
                <Link to="/shop" className="lab-btn"><span>{btnText}</span></Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default HomeCategory