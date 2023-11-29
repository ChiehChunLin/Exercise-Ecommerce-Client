import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ImageCarousel from "./imageCarousel-component";

const HomeComponent = (props) => {
  let { PromotionPhotoCarousel } = props;
  return (
    <main>
      <div className="promotion">
        <h1>✿ Merry Christmas and Happy New Year ✿</h1>
        <h2>-------- Best sale 60% off --------</h2>
        <ImageCarousel images={PromotionPhotoCarousel} />
        {/* <div className="img_container">
          
        </div> */}
        {/* <ul>
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
        </ul> */}
      </div>
    </main>
  );
};

export default HomeComponent;
