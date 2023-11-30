import { useState } from "react";

//ref: https://www.freecodecamp.org/news/build-an-image-carousel-with-react-and-framer-motion/

const ImageCarouselComponent = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <div className="imgCarousel">
      <div className="carousel">
        <div className="display">
          <div className="slide_direction left" onClick={handlePrevious}>
            <i className="fi fi-sr-angle-circle-left"></i>
          </div>
          <img key={currentIndex} src={images[currentIndex]} alt="test" />

          <div className="slide_direction right" onClick={handleNext}>
            <i className="fi fi-sr-angle-circle-right"></i>
          </div>
        </div>
        <div className="indicator">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? "slick-active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarouselComponent;
