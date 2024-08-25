/* eslint-disable react/jsx-no-target-blank */

import { Link } from "react-router-dom";

const title = "About Nutriio";
const desc = "Explore our diverse range of natural, nutritious foods on our easy-to-navigate website. Simply visit, browse, and start your journey to better health with every purchase!";
const ItemTitle = "Quick Links";
const quickTitle = "Categories";


const addressList = [
    {
        iconName: 'icofont-google-map',
        text: 'Bangalore, Karnataka',
    },
    {
        iconName: 'icofont-phone',
        text: '+91 72592 32905',
    },
    {
        iconName: 'icofont-envelope',
        text: 'hello@nutriio.in',
    },
]

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: 'https://www.facebook.com/nutriio.in/',
        className: 'facebook',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: 'https://in.linkedin.com/company/nutriio-products',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: 'https://www.instagram.com/nutriioproducts/',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: 'https://in.pinterest.com/Nutriioproducts/',
        className: 'pinterest',
    },
]

const ItemList = [
    {
        text: 'All Products',
        link: '/shop',
    },
    {
        text: 'Shop',
        link: '/shop',
    },
    {
        text: 'Blog',
        link: '/blog',
    },
    {
        text: 'About',
        link: '/about',
    },
    {
        text: 'Policy',
        link: '#',
    },
    {
        text: 'FAQs',
        link: '/about',
    }
]

const quickList = [
    {
        text: 'Nutrient Boosters',
        link: '#',
    },
    {
        text: 'Sprouted Flour',
        link: '#',
    },
    {
        text: 'Meal Moments',
        link: '#',
    },
    {
        text: 'Healthy Bites',
        link: '#',
    },
    {
        text: 'Pure Extracts',
        link: '#',
    },
    {
        text: 'Activated Millet/Flour',
        link: '#',
    },
]

const Footer = () => {
  return (
    <footer className="style-2">
    <div className="footer-top dark-view padding-tb">
        <div className="container">
            <div className="row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center">
                <div className="col">
                    <div className="footer-item our-address">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <div className="title">
                                    <h4>{title}</h4>
                                </div>
                                <div className="content">
                                    <p>{desc}</p>
                                    <ul className="lab-ul office-address">
                                        {addressList.map((val, i) => (
                                            <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                        ))}
                                    </ul>
                                    <ul className="lab-ul social-icons">
                                        {socialList.map((val, i) => (
                                            <li key={i}>
                                                <a href={val.siteLink} className={val.className}><i className={val.iconName}></i></a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="footer-item">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <div className="title">
                                    <h4>{ItemTitle}</h4>
                                </div>
                                <div className="content">
                                    <ul className="lab-ul">
                                        {ItemList.map((val, i) => (
                                            <li key={i}><a href={val.link}>{val.text}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="footer-item">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <div className="title">
                                    <h4>{quickTitle}</h4>
                                </div>
                                <div className="content">
                                    <ul className="lab-ul">
                                        {quickList.map((val, i) => (
                                            <li key={i}><a href={val.link}>{val.text}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    
                </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <div className="container">
            <div className="section-wrapper">
                <p>&copy; 2024 Designed by<Link to="/">Nutriio</Link>  </p>
                
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer