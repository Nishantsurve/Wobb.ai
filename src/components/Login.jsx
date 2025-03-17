import React from "react";
import "./Login.css"; // Optional: For custom styling

const Login = () => {
  return (
    <div className="login-container">
      {/* Header */}
      <h1>Log In</h1>

      {/* Google Login Button */}
      <button className="google-login-button">
        Continue with Google
      </button>

      {/* Email/Phone Input */}
      <div className="input-group">
        <label htmlFor="emailOrPhone">Registered Email or Phone *</label>
        <div className="input-with-prefix">
          <span className="prefix">+91</span>
          <input
            type="text"
            id="emailOrPhone"
            placeholder="Enter your registered email or phone"
          />
        </div>
      </div>

      {/* Password Input */}
      <div className="input-group">
        <label htmlFor="password">Password *</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
        />
      </div>

      {/* Footer Links */}
      <div className="footer-links">
        <div className="contact-us">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="https://lens.google.com" target="_blank" rel="noopener noreferrer">
                Google Lens
              </a>
            </li>
            <li>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                Google Link
              </a>
            </li>
            <li>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                Google Link
              </a>
            </li>
          </ul>
        </div>

        <div className="login-info">
          <p>
            <strong>Login to get started</strong>
            <br />
            If not yet registered, click on sign up to get started.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;