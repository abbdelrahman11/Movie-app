import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <Link to="/">
          <h2 className="first-logo">Movie-app</h2>
        </Link>

        <h2 className=" second-logo">Logo</h2>
      </div>
    </div>
  );
};

export default Header;
