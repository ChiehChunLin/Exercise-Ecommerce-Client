import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="carousel">
      {/* <img key={currentIndex} src={images[currentIndex]} /> */}

      <div className="indicator">
        <div className="slide_direction left" onClick={handlePrevious}>
          <i className="fi fi-sr-angle-circle-left"></i>
        </div>
        <img key={currentIndex} src={images[currentIndex]} alt="test" />

        {/* {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))} */}

        <div className="slide_direction right" onClick={handleNext}>
          <i className="fi fi-sr-angle-circle-right"></i>
        </div>
      </div>
      {/* <div className="dotSerial">
        <ul>
          <li className="slick-active">
            <button>●</button>
          </li>
          <li className="">
            <button>○</button>
          </li>
          <li className="">
            <button>○</button>
          </li>
          <li className="">
            <button>○</button>
          </li>
          <li className="">
            <button>○</button>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default ImageCarouselComponent;
