import React from "react";
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  return (
    <div className="header">
      <img className="header-logo" src="./images/string-logo.svg" />

      <div className="header-search">
        <input type="text" placeholder="Search..." className="search-input" />
        <SearchIcon className="search-icon" />
      </div>

      <div className="header-nav">
        <div className="header-option">
          {/* <span className="option-one">Hello Guest</span> */}
          <span className="option-two">Explore</span>
        </div>

        <div className="header-option">
          {/* <span className="option-one">Returns</span> */}
          <span className="option-two">Become a Seller</span>
        </div>

        <div className="header-option">
          {/* <span className="option-one">Your</span> */}
          <span className="option-two">Sign In</span>
        </div>

        <div className="header-option">
          {/* <span className="option-one">Hello Guest</span> */}
          <span className="option-two-join">Join</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
