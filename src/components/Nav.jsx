import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from "../assets/Library.svg";

const Nav = () => {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <div className="nav__container">
        <a href="/Ecommerce-React">
          <img src={LibraryLogo} className="logo" alt="" />
        </a>
      </div>
      <ul className="nav__links">
        <li className="nav__list">
          <a href="/Ecommerce-React" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__list">
          <a href="/Ecommerce-React/books" className="nav__link">
            Books
          </a>
        </li>
        <button className="btn__menu" onClick={openMenu}>
          <FontAwesomeIcon icon="bars" />
        </button>
        <li className="nav__icon">
          <a href="/Ecommerce-React/cart" className="nav__link">
            <FontAwesomeIcon icon="shopping-cart" />
          </a>
          <span className="cart__length">3</span>
        </li>
      </ul>
      <div className="menu__backdrop">
        <button className="btn__menu btn__menu--close" onClick={closeMenu}>
          <FontAwesomeIcon icon="times" />
        </button>
        <ul className="menu__links">
          <li className="menu__list">
            <a href="/Ecommerce-React" className="menu__link">
              Home
            </a>
          </li>
          <li className="menu__list">
            <a href="/Ecommerce-React/books" className="menu__link">
              Books
            </a>
          </li>
          <li className="menu__list">
            <a href="/Ecommerce-React/cart" className="menu__link">
              Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;