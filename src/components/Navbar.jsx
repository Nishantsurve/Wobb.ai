import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="https://cdn.prod.website-files.com/6716c18e45760446b740a31c/6716c18e45760446b740a3b6_logo%2520final%2520one%25205-p-500.png"
            alt="Wobb"
            style={{
              width: "40px",
              height: "auto",
              display: "block",
            }}
          />
          <span
            style={{
              fontWeight: "bold",
              color: "#002244", // Bootstrap blue color
              fontSize: "25px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Wobb
          </span>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
  onClick={(e) => {
    e.preventDefault();
    // Handle click logic here
  }}
              >
                Features
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Automated Campaign Manager
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Influencer Discovery
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul className="dropdown-menu">
                <div className="row">
                  <div className="col-md-6">
                    <li>
                      <a className="dropdown-item" href="#">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Customer
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Help Centre
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Become an Affiliate
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Integrations
                      </a>
                    </li>
                  </div>
                  
                </div>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="nav-links">
          {/*<a className="nav-link active" aria-current="page" href="#">
             */} <button>Log In</button>{/*
            </a>*/}
            <li>
              <button className="get-started">Get Started - It's Free</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;