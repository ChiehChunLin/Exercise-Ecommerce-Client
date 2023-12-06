import React, { useState } from "react";

const CollectionComponent = ({ product }) => {
  const [btnLike, setBtnLike] = useState(true);

  const iconHandler = (e) => {
    setBtnLike(!btnLike);
  };
  return (
    <div className="product">
      <div className="icon">
        <button onClick={iconHandler}>
          {btnLike ? (
            <i className="fi fi-ss-heart"></i>
          ) : (
            <i className="fi fi-rs-heart"></i>
          )}
        </button>
      </div>
      <div className="imageContainer">
        <img src={product.image} alt="product.name" />
      </div>
      <div className="info">
        <p id="slogen">{product.slogen}</p>
        <p id="name">{product.name}</p>
        <div className="money">
          <div className="price">
            <p>NT${product.price}</p>
          </div>
          <div className="discount">
            <p>NT${product.discount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionComponent;
