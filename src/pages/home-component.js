import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ImageCarousel from "../components/imageCarousel-component";

const HomeComponent = (props) => {
  let { PromotionPhotoCarousel } = props;
  return (
    <main>
      <div className="promotion">
        <h1>✿ Merry Christmas and Happy New Year ✿</h1>
        <h2>-------- Best sale 60% off --------</h2>
        <ImageCarousel images={PromotionPhotoCarousel} />
      </div>
    </main>
  );
};

export default HomeComponent;
