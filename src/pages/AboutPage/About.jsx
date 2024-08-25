import React from 'react'
import PageHeader from '../../components/PageHeader';
const subTitle = "About Our Brand";
const title = "Nourish to Flourish";
const desc = "Pavana and Deepak, the powerhouse behind Nutriio, believe in the power of nutrition to transform lives. Their journey began four years ago with a simple yet profound goal: to provide children with healthy, natural alternatives to the artificially flavored foods dominating the market. Starting with their signature nutritional health mixes for kids, they quickly realized the need for wholesome, nutritious options for people of all ages. This led them to expand their offerings to include sprouted flours, activated millets, and ready-to-cook products, all designed to nourish and support a healthy lifestyle from 6 months onwards.";
const year = "30+";
const expareance = "Years Of Experiences";

const aboutList = [
    {
        imgUrl: '/src/assets/images/about/icon/01.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Skilled Instructors',
        desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
    {
        imgUrl: '/src/assets/images/about/icon/02.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Get Certificate',
        desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
    {   
        imgUrl: '/src/assets/images/about/icon/03.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Online Classes',
        desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
]

const About = () => {
  return (
    <div>
        <PageHeader title={'About Our Brand'} curPage={'About'} />
        <div className="about-section style-3 padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
                        <div className="col">
                            <div className="about-left">
                                <div className="about-thumb">
                                    <img src="/src/assets/images/about/pavana.jpg" height="500px" width="470px" alt="about" />
                                </div>
                                <div className="abs-thumb">
                                    <img src="/src/assets/images/about/deepak.jpeg" height="270px" width="300" alt="about" />
                                </div>
                                {/* <div className="about-left-content">
                                    <h3>{year}</h3>
                                    <p>{expareance}</p>
                                </div> */}
                            </div>
                        </div>
                        <div className="col">
                            <div className="about-right">
                                <div className="section-header">
                                    <span className="subtitle">{subTitle}</span>
                                    <h2 className="title">{title}</h2>
                                    <h3>Our Story</h3>
                                    <p>{desc}</p>
                                    <br></br>
                                    <h3>Our Vision</h3>
                                    <p>
                                    Our vision is to revive ancient, time-tested recipes and promote the use of indigenous ingredients, with the ultimate goal of regaining our lost health and well-being. We are committed to prioritizing nutrition by using high-quality, natural ingredients in every product we create. At Nutriio, we go beyond just offering healthy food—we also strive to educate parents and caregivers, empowering them to make informed decisions about their family's health.
                                    </p>

                                    <br></br>
                                    <h3>Our Mission</h3>
                                    <p>Our mission is to nurture a generation that naturally embraces healthy eating, starting with the well-being of children. By fostering these habits early on, we aim to create a positive ripple effect that extends to families and communities, benefiting society as a whole. At Nutriio, we believe that healthy eating should be effortless and accessible, making it more than just a choice—it’s a way of life.</p>
                                </div>
                                {/* <div className="section-wrapper">
                                    <ul className="lab-ul">
                                        {aboutList.map((val, i) => (
                                            <li key={i}>
                                                <div className="sr-left">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                </div>
                                                <div className="sr-right">
                                                    <h5>{val.title}</h5>
                                                    <p>{val.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default About