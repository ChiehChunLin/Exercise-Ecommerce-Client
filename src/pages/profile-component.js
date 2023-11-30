import React from "react";
// import AuthService from "../services/auth_service";

const ProfileComponent = () => {
  //   let { currentUser, setCurrentUser } = props;
  return (
    <div style={{ padding: "3rem" }}>
      {/* {!currentUser && (
        <div>You must login first before getting your profile.</div>
      )}
      {currentUser && ( */}
      <div className="personal_info">
        <h1>In profile page.</h1>
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
      <div className="personal_favorite">
        <p>items</p>
        <p>price</p>
      </div>
      <div className="order_history">
        <p>order number</p>
        <p>date</p>
        <p>items</p>
        <p>total price</p>
      </div>
      {/* )} */}
    </div>
  );
};

export default ProfileComponent;
