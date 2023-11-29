import React from "react";

const FooterComponent = () => {
  return (
    <footer>
      <div className="info">
        <h1>關於我們</h1>
        <ul>
          <li>查詢商品</li>
          <li>我的帳戶</li>
          <li>退款政策</li>
          <li>隱私政策</li>
        </ul>
        <br />
        <h1>第一購物網股份有限公司</h1>
        <p>客服專線：0800-092-000 | 客服時間：09:00-18:00</p>
        <p>
          信箱：myFirstEcommerce@fakemail.com | 地址：556南投縣信義鄉玉山北峰1號
        </p>
        <p>Copyright © myFirstEcommerce All Rgihts Reserved.</p>
      </div>
      <div className="icons">
        <a href="#">
          <i className="fi fi-brands-facebook" alt="facebook"></i>
        </a>
        <a href="#">
          <i className="fi fi-brands-instagram" alt="instagram"></i>
        </a>
        <a href="#">
          <i className="fi fi-brands-line" alt="line"></i>
        </a>
        <a href="#">
          <i className="fi fi-brands-youtube" alt="youtube"></i>
        </a>
      </div>
      <div className="h-line"></div>
      <div className="warning">
        <p>此網站僅作為練習用途，不具備任何購買功能</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
