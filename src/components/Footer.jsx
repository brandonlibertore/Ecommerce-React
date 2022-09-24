import React from "react";
import Logo from "../assets/Library.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row row__column ">
          <a href="/Ecommerce-React">
            <figure className="footer__logo">
              <img src={Logo} alt="" className="footer__logo--img" />
            </figure>
          </a>
          <div className="footer__list">
            <a href="/Ecommerce-React" className="footer__link">
              Home
            </a>
            <span className="footer__link no-cursor">About</span>
            <a href="/Ecommerce-React/books" className="footer__link">
              Books
            </a>
            <a href="/Ecommerce-React/cart" className="footer__link">
              Cart
            </a>
          </div>
          <div className="footer__copyright">Copyright &copy; 2022 Library</div>
        </div>
      </div>
    </footer>
  );
}
