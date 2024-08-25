import React from "react";
import Banner from "./Banner";

const App = () => {
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg"
  ];

  return (
    <div>
      <Banner images={images} />
    </div>
  );
};

export default App;
