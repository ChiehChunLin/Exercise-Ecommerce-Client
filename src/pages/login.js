import React, { useState } from "react";
import { useNavigate } from "react-router";
// import AuthService from "../services/auth_service";

const LoginPage = () => {
  //   let { currentUser, setCurrentUser } = props;
  //   const navigate = useNavigate();
  //   let [email, setEmail] = useState("");
  //   let [password, setPassword] = useState("");
  //   let [message, setMessage] = useState("");

  //   //Event Listener Handler
  //   const EmailHandler = (e) => {
  //     setEmail(e.target.value);
  //   };
  //   const PasswordHandler = (e) => {
  //     setPassword(e.target.value);
  //   };
  //   const LoginHandler = () => {
  //     AuthService.login(email, password)
  //       .then((response) => {
  //         console.log(response.data);
  //         if (response.data.token) {
  //           localStorage.setItem("user", JSON.stringify(response.data));
  //         }
  //         window.alert(
  //           "Login successfully. You are now redirect to the profile page."
  //         );
  //         setCurrentUser(AuthService.getCurrentUser());
  //         navigate("/profile");
  //       })
  //       .catch((err) => {
  //         console.log(err.response);
  //         setMessage(err.response.data);
  //       });
  //   };

  return (
    <div style={{ padding: "3rem" }} className="col-md-12">
      <div>
        {/* {message && (
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        )} */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            // onChange={EmailHandler}
            type="text"
            className="form-control"
            name="email"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            // onChange={PasswordHandler}
            type="password"
            className="form-control"
            name="password"
          />
        </div>
        <br />
        <div className="form-group">
          {/* <button onClick={LoginHandler} className="btn btn-primary btn-block"> */}
          <button className="btn btn-primary btn-block">
            <span>Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
