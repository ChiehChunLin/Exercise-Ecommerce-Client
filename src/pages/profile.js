import React from "react";
import MyCollection from "../components/collection-component";
import MyOrderRecord from "../components/orderRecord-component";
import image1 from "../images/cars/Ford.jpg";
import image2 from "../images/cars/BMW.jpg";
import image3 from "../images/cars/Toyota.jpg";
import image4 from "../images/cars/Mercedes-Benz.jpg";
// import AuthService from "../services/auth_service";

const ProfilePage = () => {
  //   let { currentUser, setCurrentUser } = props;
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
  let products = [product1, product2, product3, product4];

  const order1 = {
    orderNumber: 231114012883,
    orderStatus: "已送達",
    orderGoods: [product1, product2],
  };
  const order2 = {
    orderNumber: 202311287487,
    orderStatus: "配送中",
    orderGoods: [product2, product3, product4],
  };
  let orders = [order1, order2];
  return (
    <div className="profile">
      {/* {!currentUser && (
        <div>You must login first before getting your profile.</div>
      )}
      {currentUser && ( */}
      <div className="personal_info">
        <h1>This is profile page.</h1>
        <h3>My Information</h3>
        <p>Name (ID)</p>
        <p>email</p>
        <p>phone</p>
        {/* <header className="jumbotron">
            <h3>
              <strong>{currentUser.user.username}</strong>
            </h3>
          </header>
          <p>
            <strong>Token: {currentUser.token}</strong>
          </p>
          <p>
            <strong>ID: {currentUser.user._id}</strong>
          </p>
          <p>
            <strong>email: {currentUser.user.email}</strong>
          </p> */}
      </div>
      <h3>My Collection</h3>
      <div className="personal_favorite">
        {products &&
          products.map((product) => {
            return <MyCollection product={product} />;
          })}
      </div>
      <h3>My Order History</h3>
      <div className="order_history">
        {orders &&
          orders.map((order) => {
            return <MyOrderRecord order={order} />;
          })}
      </div>
    </div>
  );
};

export default ProfilePage;
