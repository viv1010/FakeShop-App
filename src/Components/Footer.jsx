import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-about">
              <div className="footer-logo">
                <NavLink to="#">
                  <img src="img/footer-logo.png" alt="" />
                </NavLink>
              </div>
              <h1>FakeShop</h1>
              <p>Your Shopping Stop.</p>
            </div>
          </div>

          <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
            <div className="footer-widget">
              <h6>Categories</h6>
              <ul>
                <li>
                  <NavLink to="/products">Men's Wear</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Women's Wear</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Jewelery</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Electronics</NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2  col-md-3 col-sm-6">
            <div className="footer-widget">
              <h6>Links</h6>
              <ul>
                <li>
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="/">Payment Methods</NavLink>
                </li>
                <li>
                  <NavLink to="/">Delivery</NavLink>
                </li>
                <li>
                  <NavLink to="/">Return {"&"} Exchanges</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
            <div className="footer-widget">
              <h6>NewsLetter</h6>
              <div className="footer-newslatter">
                <p>
                  Be the first to know about new arrivals, look books, sales{" "}
                  {"&"} promos!
                </p>
                <form action="#">
                  <input type="text" placeholder="Your Email" />
                  <button type="submit">
                    <span>
                      <i className="fa fa-envelope" arial-hidden="true"></i>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="footer-copyright-text">
              <p>Copyright &copy; 2022 All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
