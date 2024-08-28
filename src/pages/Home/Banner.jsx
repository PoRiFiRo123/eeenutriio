import React, { useState, useEffect } from "react";

const images = [
  "https://i.pinimg.com/736x/04/eb/6d/04eb6d315e418ec41f542e82958f2ccf.jpg",
  "https://i.pinimg.com/736x/b1/36/f9/b136f987da9c205c51598b5ce27d8e67.jpg",
  "https://i.pinimg.com/736x/b1/4b/6d/b14b6d94d50074645243724f09f4c783.jpg",
  "https://i.pinimg.com/736x/b4/11/dc/b411dc606c8775696b957f5a69479062.jpg",
];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [containerHeight, setContainerHeight] = useState("100vh");

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth <= 768) {
        setContainerHeight("40vh"); // Mobile devices
      } else {
        setContainerHeight("100vh"); // Laptops and larger screens
      }
    };

    updateHeight(); // Set the initial height
    window.addEventListener("resize", updateHeight); // Update height on window resize

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 5000); // Change image every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <div
      className="slideshow-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        width: "100%",
        height: containerHeight, // Responsive height based on screen size
        margin: "0", // No margin, image covers the whole screen
        paddingTop: "90px", // Space for the navbar on top
        overflow: "hidden",
      }}
    >
      <img
        src={images[currentImage]}
        alt={`Slide ${currentImage + 1}`}
        className="slideshow-image"
        style={{
          width: "100%",
          height: "100%", // Full height minus the navbar
          objectFit: "contain", // Adjusted to 'contain' to ensure the whole image is visible
          display: "block",
        }}
      />
      <button
        className="prev"
        onClick={prevImage}
        style={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          zIndex: 2,
        }}
      >
        &#10094;
      </button>
      <button
        className="next"
        onClick={nextImage}
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          zIndex: 2,
        }}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Banner;
