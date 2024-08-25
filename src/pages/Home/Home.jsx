import React from 'react';
import Banner from './Banner';
import HomeCategory from './HomeCategory';
import Register from './Register';
import LocationSprade from './LocationSprade';
import AboutUs from './AboutUs';
import AppSection from './AppSection';
import Sponsor from './Sponsor';
import CategoryShowCase from './CategoryShowCase';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon

const Home = () => {
  const handleWhatsAppClick = () => {
    // Replace with your desired phone number
    const phoneNumber = '1234567890';
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div>
      <Banner />
      <HomeCategory />
      {/* <CategoryShowCase/> */}
      {/* <Register/> */}
      <LocationSprade />
      <AboutUs />
      {/* <AppSection/> */}
      {/* <Sponsor/> */}

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
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        }}
      >
        <FaWhatsapp size={30} />
      </div>
    </div>
  );
};

export default Home;
