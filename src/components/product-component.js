import React from "react";

const ProductComponent = ({ product }) => {
  return (
    <div className="product">
      <div className="imageContainer">
        <img src={"product.image"} alt="product.name" />
      </div>
      <div className="slogen">
        <p>product.slogen</p>
      </div>
      <div className="name">
        <p>product.name</p>
      </div>
      <div className="price">
        <p className="originPrice">product.originPrice</p>
        <p className="discountPrice">product.discountPrice</p>
      </div>
    </div>
  );
};

export default ProductComponent;
