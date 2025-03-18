import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo Section */}
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
              color: "#002244",
              fontSize: "25px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Wobb
          </span>
        </div>

        {/* Navbar Toggle Button */}
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

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            {/* Features Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={(e) => e.preventDefault()}
              >
                Features
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    Automated Campaign Manager
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Influencer Discovery
                  </Link>
                </li>
              </ul>
            </li>

            {/* Resources Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={(e) => e.preventDefault()}
              >
                Resources
              </button>
              <ul className="dropdown-menu">
                <div className="row">
                  <div className="col-md-6">
                    <li>
                      <Link className="dropdown-item" to="/">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Customer
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Help Centre
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Become an Affiliate
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Integrations
                      </Link>
                    </li>
                  </div>
                </div>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Login & Signup Buttons */}
        <div>
          <ul className="nav-links">
            <li>
              <button className="btn btn-outline-primary">Log In</button>
            </li>
            <li>
              <button className="btn btn-primary">Get Started - It's Free</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;