
import CountUp from 'react-countup';
import { Link } from "react-router-dom";

const subTitle = "Why Choose Us";
const title = "Become a Marchant";
const desc = "Transform your health with our premium, preservative-free products. Explore our diverse range of natural, nutritious foods on our easy-to-navigate website. Simply visit, browse, and start your journey to better health with every purchase. Experience the benefits of pure, wholesome nutrition today!";
const btnText = "Get Started";

const countList = [
    {
        iconName: 'icofont-users-alt-4',
        count: '12600',
        text: 'Happy Customers',
    },
    {
        iconName: 'icofont-graduate-alt',
        count: '30',
        text: 'Certified Products',
    },
    // {
    //     iconName: 'icofont-notification',
    //     count: '100',
    //     text: 'Rewards and GitCards',
    // },
]

const AboutUs = () => {
  return (
    <div className="instructor-section style-2 padding-tb section-bg-ash">
    <div className="container">
        <div className="section-wrapper">
            <div className="row g-4 justify-content-center row-cols-1 row-cols-md-2 row-cols-xl-3 align-items-center">
                <div className="col">
                    {countList.map((val, i) => (
                        <div className="count-item" key={i}>
                            <div className="count-inner">
                                <div className="count-icon">
                                    <i className={val.iconName}></i>
                                </div>
                                <div className="count-content">
                                    <h2><span className="count"><CountUp end={val.count} /></span><span>+</span></h2>
                                    <p>{val.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col">
                    <div className="instructor-content">
                        {/* <span className="subtitle">{subTitle}</span> */}
                        <h2 className="subtitle">{subTitle}</h2>
                        <p>{desc}</p>
                        <Link to="/shop" className="lab-btn"><span>{btnText}</span></Link>
                    </div>
                </div>
                <div className="col">
                    {/* <div className="instructor-thumb">
                        <img src="src/assets/images/instructor/01.png" alt="" />
                    </div> */}
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AboutUs