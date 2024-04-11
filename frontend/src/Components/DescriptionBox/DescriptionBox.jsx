import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Elevate your wardrobe with our carefully curated selection of stylish
          clothing. From casual essentials to sophisticated pieces, we offer a
          range of options to suit every taste and occasion. Explore our
          collection today and redefine your personal style with ease and
          confidence. Shop now for the perfect look.
        </p>
        <p>
          Discover timeless elegance with our curated collection of premium
          clothing. Elevate your style effortlessly. Shop now for the latest
          trends and classic essentials.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
