import React from 'react';
import PageHeader from '../../components/PageHeader';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon

const subTitle = "About Our Brand";
const title = "Nourish to Flourish";
const desc = "Pavana and Deepak, the powerhouse behind Nutriio, believe in the power of nutrition to transform lives. Their journey began four years ago with a simple yet profound goal: to provide children with healthy, natural alternatives to the artificially flavored foods dominating the market. Starting with their signature nutritional health mixes for kids, they quickly realized the need for wholesome, nutritious options for people of all ages. This led them to expand their offerings to include sprouted flours, activated millets, and ready-to-cook products, all designed to nourish and support a healthy lifestyle from 6 months onwards.";

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
                  <img src="src/assests/images/about/deepak.jpeg" height="270px" width="300" alt="about" />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                  <h5 style={{ marginRight: '50px' }}>Pavana</h5>
                  <h5>Deepak</h5>
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
                  <p>Our vision is to revive ancient, time-tested recipes and promote the use of indigenous ingredients, with the ultimate goal of regaining our lost health and well-being. We are committed to prioritizing nutrition by using high-quality, natural ingredients in every product we create. At Nutriio, we go beyond just offering healthy food—we also strive to educate parents and caregivers, empowering them to make informed decisions about their family's health.</p>
                  <br></br>
                  <h3>Our Mission</h3>
                  <p>Our mission is to nurture a generation that naturally embraces healthy eating, starting with the well-being of children. By fostering these habits early on, we aim to create a positive ripple effect that extends to families and communities, benefiting society as a whole. At Nutriio, we believe that healthy eating should be effortless and accessible, making it more than just a choice—it’s a way of life.</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917259232905" // Replace with your WhatsApp number
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          width: '60px',
          height: '60px',
          bottom: '40px',
          right: '40px',
          backgroundColor: '#25d366',
          color: 'white',
          borderRadius: '50px',
          textAlign: 'center',
          fontSize: '30px',
          boxShadow: '2px 2px 3px #999',
          zIndex: '100',
        }}
      >
        <FaWhatsapp style={{ marginTop: '16px' }} />
      </a>
    </div>
  );
}

export default About;
