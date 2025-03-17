import React from "react";
import './Features.css'; // Import the CSS file

const Features = () => {
  return (
    <section className="features">
      <h2>Why Choose Wobb?</h2>
      <div className="features-list">
        <div className="feature-card">
          <h3>Powered by AI</h3>
          <p>Automate influencer selection and content quality checks seamlessly.</p>
        </div>
        <div className="feature-card">
          <h3>Global Influencer Community</h3>
          <p>Access a database of 400M influencers, with 200K actively registered on Wobb.</p>
        </div>
        <div className="feature-card">
          <h3>Shopify & WooCommerce Integrations</h3>
          <p>Easily manage creator orders with built-in platform support.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;