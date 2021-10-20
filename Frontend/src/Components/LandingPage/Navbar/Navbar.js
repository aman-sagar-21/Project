import React from "react";
import "./Navbar.css";
import image1 from "../images/img1.jpeg"
import image2 from "../images/img2.jpeg"
import { useState } from "react";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className="head w-100">
      <div className="tansparentshading">
        <p>TRAVELLER'S SCOUT</p>
        <span>A globetrotter's guide,</span>
        
        <span> curated by globetrotters around the world</span>
      </div>
      <div>
        <nav
          className={
            isScrolled
              ? "scrolled navbar navbar-expand-lg navbar-light"
              : "navbar navbar-expand-lg navbar-light"
          }
        >
       
          <div style={{ marginRight: "10px" }}>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ backgroundColor: "white" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Seachplaces">
                  Search Places
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Shareexperience" role="button">
                  Share Experience
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/Login">
                  Log In
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="cara">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={image1}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={image2}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
