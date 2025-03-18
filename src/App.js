import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import CampaignManager from "./components/CampaignManager";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CampaignList from "./components/CampaignList";
import CampaignDetail from "./components/CampaignDetail";
import Profile from "./components/Profile";

const AppContent = () => {
  const location = useLocation(); // Get the current route location

  return (
    <div>
      {/* Always show the Navbar */}
      <Navbar />

      {/* Conditionally render components based on the route */}
      {location.pathname === "/" && (
        <>
          <HeroSection />
          <CampaignList />
          <Features />
          <CampaignManager />
          <Reviews />
          <FAQ />
        </>
      )}

      {/* Routes for specific components */}
      <Routes>
        <Route path="/campaign/:id" element={<CampaignDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {/* Always show the Footer */}
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;