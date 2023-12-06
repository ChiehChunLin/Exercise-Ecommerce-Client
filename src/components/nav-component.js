import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavComponent = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/logout">
            Logout
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/shoppingCart">
            ShoppingCart
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/car">
            【Car】
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/phone">
            【Phone】
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/beverage">
            【Beverage】
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
