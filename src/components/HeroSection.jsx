import React, { useState, useEffect, useMemo } from "react";
import "./HeroSection.css";
const HeroSection = () => {
  const phrases = useMemo(() => ["Barter Campaigns", "Marketplace Reviews", "UGC Content"], []);
  
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhrase((prevPhrase) => {
        const currentIndex = phrases.indexOf(prevPhrase);
        const nextIndex = (currentIndex + 1) % phrases.length;
        return phrases[nextIndex];
      });
    }, 3000); // Changes every 30 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [phrases]);

  return (
    <section className="hero">
      <div className="hero-text">
      <br/>
      <a class="dropdown-item" href="/automate-barter-campaigns">Automate Barter Campaigns with AI for 7 Days &#8594;</a>
        <h1>Instantly Partner with Influencers for <span style={{ color: "#007BFF", fontWeight: "bold" }}>{currentPhrase}</span></h1>
        <p>
          Run campaigns where influencers promote your brand in exchange for<br/> products. Automate hiring and content quality checks with AI, and discover <br/>the perfect creators from a 400M+ influencer database.
        </p>

        <button className="start-campaign">Start Your Free Campaign</button>

        <img 
          src="https://cdn.prod.website-files.com/6716c18e45760446b740a31c/6717ea4669c5bdb33aa4937b_discovery.webp" 
          alt="Influencer Discovery" className="hero-img" 
          style={{
            width: '70%',       // 70% of the container's width
            height: '60%',      // 60% of the container's height
            objectFit: 'contain', // Ensures the image maintains its aspect ratio without being cropped
            margin: '20px auto', // Centers the image
            display: 'block'     // Ensures it respects margin settings
          }} 
        />
      </div>
    </section>
  );
};

export default HeroSection;
