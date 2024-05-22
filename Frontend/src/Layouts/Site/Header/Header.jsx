import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../../Context/Context"
import "./Header.css"
const Header = () => {
  const { basketItems } = useContext(MainContext);
  return (
    <header>
      <div className="header">
        <div className="header__top">
          <div className="header__top__left">
            <ul>
              <li>
                <Link to="">
                  <i class="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link>
                  <i class="fa-brands fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link>
                  <i class="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link>
                  <i class="fa-brands fa-linkedin-in"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="header__top__right">
            <ul>
              <li>
                <Link to="">
                  <i class="fa-solid fa-phone"></i>
                </Link>
                <span>(+1) 234 5678 9101</span>
              </li>
              <li>
                <Link>
                  <i class="fa-solid fa-envelope"></i>
                </Link>
                <span> shop@yourdomain.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="header__bottom">
          <div className="header__bottom__left">
            <Link to="/">Selling <span>.</span></Link>
          </div>
          <div className="header__bottom__right">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link>Products</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Special</Link>
              </li>
              <li>
                <Link>Testimonials</Link>
              </li>
              <li>
                <Link to="basket">Cart({basketItems.length})</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
