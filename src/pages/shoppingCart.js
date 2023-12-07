import React from "react";
import image1 from "../images/cars/Ford.jpg";
import image2 from "../images/cars/BMW.jpg";
import image3 from "../images/cars/Toyota.jpg";
import image4 from "../images/cars/Mercedes-Benz.jpg";
import image5 from "../images/cars/Maserati.jpg";

const ShoppingCartPage = () => {
  const product1 = {
    slogen: "Chirstmas 35% off",
    name: "Ford Focus",
    image: image1,
    price: 120,
    discount: 80,
  };
  const product2 = {
    slogen: "Chirstmas 10% off",
    name: "BMW X5",
    image: image2,
    price: 300,
    discount: 270,
  };
  const product3 = {
    slogen: "Thanksgiving 35% off",
    name: "Toyota RAV4",
    image: image3,
    price: 150,
    discount: 100,
  };
  const product4 = {
    slogen: "Thanksgiving 20% off",
    name: "Mercedes-Benz C300",
    image: image4,
    price: 350,
    discount: 290,
  };
  const product5 = {
    slogen: "Outstanding",
    name: "Maserati MC20 ",
    image: image5,
    price: 1580,
    discount: 1380,
  };
  let shoppingGoods = [
    [product1, 1],
    [product2, 1],
    [product3, 2],
    [product4, 1],
    [product5, 3],
  ];

  const QuantityHandlerPlus = (e) => {
    let index = e.target.name;
    shoppingGoods[index][1]++;
    // e.target.value = shoppingGoods[index][1];
    console.log(index);
  };
  const QuantityHandlerMinus = (e) => {
    let index = e.target.name;
    shoppingGoods[index][1]--;
    // e.target.value = shoppingGoods[index][1];
    // console.log(e.target.getElementById("qty"));
  };
  const totalCost = shoppingGoods.reduce(
    (cost, good) => (cost = cost + good[0].discount * good[1]),
    0
  );
  const totalQuantity = shoppingGoods.reduce(
    (count, good) => (count = count + good[1]),
    0
  );
  const shippingFee = totalCost > 150 ? 0 : 150;

  return (
    <div className="shoppingCart">
      <div className="shoppinglist">
        {!shoppingGoods && <h2>Your Shopping Cart is empty </h2>}
        {shoppingGoods && (
          <table>
            {shoppingGoods.map((g, index) => {
              return (
                <tr>
                  <td id="td1">
                    <p>{index}</p>
                    <input key={index} type="radio" name={g[0].name} checked />
                  </td>
                  <td id="td2">
                    <div className="imageContainer">
                      <img src={g[0].image} alt={g[0].name} />
                    </div>
                  </td>
                  <td id="td3">
                    <div className="info">
                      <div className="up">
                        <p>{g[0].name}</p>
                      </div>
                      <div className="bottom">
                        <div className="price">
                          <p>NT${g[0].price}</p>
                        </div>
                        <div className="discount">
                          <p>NT${g[0].discount}</p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td id="td4">
                    <div className="info">
                      <div className="up right">
                        <button>delete</button>
                      </div>
                      <div className="bottom right">
                        <p>
                          數量：
                          <button
                            key={index}
                            name={`${index}`}
                            onClick={QuantityHandlerPlus}
                          >
                            +
                          </button>
                          <input
                            id="qty"
                            type="number"
                            name={index}
                            min="0"
                            step="1"
                            value={g[1]}
                          />
                          <button
                            name={`${index}`}
                            onClick={QuantityHandlerMinus}
                          >
                            -
                          </button>
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td>
                <div className="info right">
                  <p>共 {`${shoppingGoods.length} 種商品`}</p>
                </div>
              </td>
              <td>
                <div className="info right">
                  <p>商品金額</p>
                  <p>運費 (150up免運)</p>
                  <p>合計</p>
                </div>
              </td>
              <td>
                <div className="info right">
                  <p>NT${totalCost}</p>
                  <p>NT${shippingFee}</p>
                  <p>NT${totalCost + shippingFee}</p>
                </div>
              </td>
            </tr>
          </table>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartPage;
