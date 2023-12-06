import React from "react";

import image1 from "../images/promotion/christmas_card.jpg";
import image2 from "../images/promotion/christmas_diner.jpg";
import image3 from "../images/promotion/christmas_family.jpg";
import image4 from "../images/promotion/christmas_snowman.jpg";

const OrderComponent = ({ order }) => {
  const { orderGoods } = order;
  const orderQuantity = orderGoods.length;
  const totalCost = orderGoods.reduce(
    (cost, good) => (cost = cost + good.discount),
    0
  );

  return (
    <div className="orderBlock">
      <table>
        <tr>
          <td className="left">訂單編號: {order.orderNumber}</td>
          <td className="right">{order.orderStatus}</td>
        </tr>
        <tr>
          <td className="left imageTd">
            {orderGoods &&
              orderGoods.map((g) => {
                return (
                  <div className="imageShort">
                    <img src={g.image} alt="item" />
                  </div>
                );
              })}
          </td>
          <td className="right">{`共${orderQuantity}件商品訂單金額NT$${totalCost}`}</td>
        </tr>
        <tr>
          <td className="right" colspan="2">
            <button>線上客服</button>
            <button>申請退貨</button>
            <button>物流詳情</button>
            <button>評價</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default OrderComponent;
