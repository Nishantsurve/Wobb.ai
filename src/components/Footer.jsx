import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="newsletter-section">
        <div className="newsletter-info">
          <h2>Join Our Newsletter</h2>
          <p>support@wobb.ai</p>
        </div>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
      <br/>
      <div className="footer-sections">
        <div>
          <h3>Wobb</h3>
          <img
            src="https://cdn.prod.website-files.com/6716c18e45760446b740a31c/67193f36f698007bbf11b35e_g2%20badge%202.avif"
            alt="Wobb"
            className="footer-logo"
          />
        </div>
        <div>
          <h3>Home</h3>
          <p>Pricing</p>
          <p>Reviews</p>
          <p>Automated Campaign Manager</p>
          <p>New</p>
          <p>Influencer Discovery</p>
          <p>FAQs</p>
        </div>
        <div>
          <h3>Resources</h3>
          <p>Blog</p>
          <p>Customer Stories</p>
          <p>Help Centre</p>
          <p>Become an Affiliate</p>
        </div>
        <div>
          <h3>Tools</h3>
          <p>Fake Followers Checker</p>
          <p>Engagement Rate Checker</p>
          <p>Influencer Profile Analytics</p>
        </div>
        <div>
          <h3>How We Compare</h3>
          <p>Upfluence vs. Wobb</p>
          <p>Modash vs. Wobb</p>
          <p>Aspire vs. Wobb</p>
          <p>Grin vs. Wobb</p>
          <p>HypeAuditor vs. Wobb</p>
          <p>Traackr vs. Wobb</p>
        </div>
      </div>

      <p>© 2024 Wobb | <a href="#terms">Terms</a> | <a href="#privacy">Privacy</a></p>
    </footer>
  );
};

export default Footer;
