import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-links">
          <li className="product">
            Products <i className="far fa-chevron-down"></i>
          </li>
          <li className="collection">Collections</li>
          <li className="gifts">Gifts</li>
          <li className="our-magazine">Our Magazine</li>
          <li className="search">
            <i class="fa fa-search" aria-hidden="true"></i>
          </li>
          <li className="login">Login</li>
          <li className="signup">SignUp</li>
        </ul>
      </nav>
    </>
  );
}
