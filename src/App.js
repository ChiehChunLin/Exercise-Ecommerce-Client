import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/header-component";
import NavComponent from "./components/nav-component";
import HomeComponent from "./pages/home-component";
import FootComponent from "./components/footer-component";
import LoginComponent from "./pages/login-component";
import RegisterComponent from "./pages/register-component";
import ProfileComponent from "./pages/profile-component";
import PurchaseComponent from "./pages/purchase-component";
import "./styles/style.css";
import "../node_modules/@flaticon/flaticon-uicons/css/all/all.css";
import image1 from "./images/promotion/christmas_card.jpg";
import image2 from "./images/promotion/christmas_diner.jpg";
import image3 from "./images/promotion/christmas_family.jpg";
import image4 from "./images/promotion/christmas_snowman.jpg";

function App() {
  //  React project, encountering the "Module not found: Can't resolve 'import fs from "fs"' error
  //  Fail npx react-image-carousel: npm ERR! could not determine executable to run
  // can't give path as variable, because the image relative path is different from index.html. App.js or component
  const PromotionPhotoCarousel = [image1, image2, image3, image4];

  return (
    <div className="App">
      <HeaderComponent />
      <NavComponent />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <HomeComponent PromotionPhotoCarousel={PromotionPhotoCarousel} />
          }
        />
        <Route path="/login" exact element={<LoginComponent />} />
        <Route path="/register" exact element={<RegisterComponent />} />
        <Route path="/profile" exact element={<ProfileComponent />} />
        <Route path="/purchase" exact element={<PurchaseComponent />} />
      </Routes>
      <FootComponent />
    </div>
  );
}

export default App;

// Icon from: https://www.flaticon.com/icon-fonts-most-downloaded/2
// Photo from: https://www.pexels.com/zh-tw/search/christmas%20family/
