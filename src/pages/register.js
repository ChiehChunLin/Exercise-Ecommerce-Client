import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import AuthService from "../services/auth_service";

const RegisterPage = () => {
  //   const navigate = useNavigate();
  //   let [username, setUsername] = useState("");
  //   let [email, setEmail] = useState("");
  //   let [password, setPassword] = useState("");
  //   let [role, setRole] = useState("");
  //   let [message, setMessage] = useState("");
  let [gender, setGender] = useState("male");
  let [showPassword, setShowPassword] = useState(false);

  //   //Event Listener Handler
  //   const UsernameHandler = (e) => {
  //     setUsername(e.target.value);
  //   };
  //   const EmailHandler = (e) => {
  //     setEmail(e.target.value);
  //   };
  //   const PasswordHandler = (e) => {
  //     setPassword(e.target.value);
  //   };
  //   const RoleHandler = (e) => {
  //     setRole(e.target.value);
  //   };
  const GenderHandlerMale = (e) => {
    setGender("male");
  };
  const GenderHandlerFemale = (e) => {
    setGender("female");
  };
  //   const RegisterHandler = (e) => {
  //     AuthService.register(username, email, password, role)
  //       .then(() => {
  //         window.alert(
  //           "Registration succeeds, You are now redirect to the login page."
  //         );
  //         navigate("/login");
  //       })
  //       .catch((err) => {
  //         console.log(err.response);
  //         setMessage(err.response.data);
  //       });
  //   };

  const ShowPasswordHandler = (e) => {
    setShowPassword(!showPassword);
    //why cannot use DOM to control element type?
    // var x = document.getElementById("password");
    // console.log(x);
    // if (x.type == "password") {
    //   x.type = "text";
    // } else {
    //   x.type = "password";
    // }
  };
  return (
    <div style={{ padding: "3rem" }} className="col-md-12">
      <div>
        <div>
          {/* {message && <div className="alert alert-danger">{message}</div>} */}
          <label htmlFor="username">Username</label>
          <input
            // onChange={UsernameHandler}
            type="text"
            className="form-control"
            name="username"
          />
        </div>
        <br />
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
            type={showPassword ? "text" : "password"}
            className="form-control"
            name="password"
            id="password"
          />
          <input
            id="showPassword"
            type="checkbox"
            onChange={ShowPasswordHandler}
          />
          <label for="showPassword">Show Password</label>
        </div>
        <br />
        <div className="form-group">
          <div className="gender">
            <label for="gender">Gender : </label>
            <input
              id="male"
              type="radio"
              name="gender"
              value="male"
              checked
              onChange={GenderHandlerMale}
            />
            <label for="male">男性 </label>
            <input
              id="female"
              type="radio"
              name="gender"
              value="female"
              onChange={GenderHandlerFemale}
            />
            <label for="female">女性</label>
          </div>
        </div>
        <br />
        <div className="form-group">
          <label for="age">Age：</label>
          <input
            id="age"
            type="number"
            name="age"
            min="0"
            max="150"
            step="1"
            required
          />
        </div>

        <br />
        <div className="form-group">
          <label htmlFor="telephone">Phone Number (09xx-xxxxxx)</label>
          <input
            minlength="8"
            maxlength="11"
            id="tele"
            type="text"
            className="form-control"
            name="telephone"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            // onChange={PasswordHandler}
            type="address"
            className="form-control"
            name="address"
          />
        </div>
        <br />
        {/* <button onClick={RegisterHandler} className="btn btn-primary"> */}
        <button className="btn btn-primary">
          <span>Register</span>
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
