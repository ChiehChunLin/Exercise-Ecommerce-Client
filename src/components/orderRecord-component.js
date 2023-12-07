import React from "react";

import image1 from "../images/promotion/christmas_card.jpg";
import image2 from "../images/promotion/christmas_diner.jpg";
import image3 from "../images/promotion/christmas_family.jpg";
import image4 from "../images/promotion/christmas_snowman.jpg";

const OrderComponent = ({ order }) => {
  const { orderGoods } = order;
  const totalCost = orderGoods.reduce(
    (cost, good) => (cost = cost + good[0].discount * good[1]),
    0
  );
  const totalQuantity = orderGoods.reduce(
    (count, good) => (count = count + good[1]),
    0
  );

  return (
    <div className="orderBlock">
      {/* <table>
        <tr>
          <td className="left">訂單編號: {order.orderNumber}</td>
          <td className="right HighLight">{order.orderStatus}</td>
        </tr>
        <tr> //為何用rowspan 放入image就無法顯示合併cell的效果?
          <td rowspan="3" className="left imageTd">
            {orderGoods &&
              orderGoods.map((g) => {
                return (
                  <div className="imageShort">
                    <img src={g.image} alt="item" />
                  </div>
                );
              })}
          </td>
          <td className="right">{`共${orderQuantity}件商品`}</td>
        </tr>
        <tr>
          <td className="right"></td>
        </tr>
        <tr>
          <td className="right">{`訂單金額NT$${totalCost}`}</td>
        </tr>
        <tr>
          <td className="right" colspan="2">
            <button>線上客服</button>
            <button>申請退貨</button>
            <button>物流詳情</button>
            <button>評價</button>
          </td>
        </tr>
      </table> */}
      <table>
        <tr>
          <td className="left">訂單編號: {order.orderNumber}</td>
          <td className="right HighLight">{order.orderStatus}</td>
        </tr>
        <tr>
          <td className="left imageTd">
            {orderGoods &&
              orderGoods.map((g, index) => {
                return (
                  <div className="imageShort">
                    <img key={index} src={g[0].image} alt="item" />
                    <div className="count">
                      <p>x{`${g[1]}`}</p>
                    </div>
                  </div>
                );
              })}
          </td>
          <td className="right">
            {`共 ${totalQuantity} 件商品`}
            <p></p>
            {`訂單金額 NT$${totalCost}`}
          </td>
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
