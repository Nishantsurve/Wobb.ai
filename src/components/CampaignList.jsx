import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CampaignCard from "./CampaignCard";
import "./CampaignList.css";

const CampaignList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [payoutFilter, setPayoutFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const navigate = useNavigate();

  const campaigns = [
    {
      id: 1,
      brandName: "Product Promotion",
      payoutDetails: "Barter",
      category: "Marketing",
      hiringProgress: { hired: 10, slots: 20 },
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "Promote our new product line.",
    },
    // Add other campaigns here...
    {
      id: 2,
      brandName: "E Commerce Influencer",
      payoutDetails: "Fixed Pay",
      category: "E-commerce",
      hiringProgress: { hired: 5, slots: 15 },
      image: "https://cdn.prod.website-files.com/6716c18e45760446b740a31c/6718383c4640d6c6ec84ca4b_2.3%2520ecommerce%2520integration-p-800.webp",
      description: "Collaborate for a social media campaign.",
    },
    {
      id: 3,
      brandName: "Social Media Influencer",
      payoutDetails: "Refund",
      category: "Social Media",
      hiringProgress: { hired: 8, slots: 10 },
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Create content for our upcoming event.",
    },
    {
      id: 4,
      brandName: "Brand Campaign",
      payoutDetails: "Refund",
      category: "Branding",
      hiringProgress: { hired: 8, slots: 10 },
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "Create content for our upcoming event.",
    },
    {
      id: 5,
      brandName: "Content Creation",
      payoutDetails: "Refund",
      category: "Content",
      hiringProgress: { hired: 8, slots: 10 },
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Create content for our upcoming event.",
    },
    {
      id: 6,
      brandName: "Influencer Collaboration",
      payoutDetails: "Barter",
      category: "Influencer",
      hiringProgress: { hired: 12, slots: 20 },
      image: "https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Promote our eco-friendly products.",
    },
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePayoutFilterChange = (event) => {
    setPayoutFilter(event.target.value);
  };

  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleCampaignClick = (id) => {
    navigate(`/campaign/${id}`); // Navigate to the campaign detail route
  };

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch = campaign.brandName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          campaign.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPayout = payoutFilter === "All" || campaign.payoutDetails === payoutFilter;
    const matchesCategory = categoryFilter === "All" || campaign.category === categoryFilter;
    return matchesSearch && matchesPayout && matchesCategory;
  });

  return (
    <div className="campaign-list">
      <h2 className="campaign-title">Active Campaigns</h2>
      
      {/* Search and Filters */}
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search campaigns..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        <select value={payoutFilter} onChange={handlePayoutFilterChange} className="filter-dropdown">
          <option value="All">All Payouts</option>
          <option value="Barter">Barter</option>
          <option value="Fixed Pay">Fixed Pay</option>
          <option value="Refund">Refund</option>
        </select>
        <select value={categoryFilter} onChange={handleCategoryFilterChange} className="filter-dropdown">
          <option value="All">All Categories</option>
          <option value="Marketing">Marketing</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Social Media">Social Media</option>
          <option value="Branding">Branding</option>
          <option value="Content">Content</option>
          <option value="Influencer">Influencer</option>
        </select>
      </div>

      {/* Campaign Grid */}
      <div className="campaign-scroll-container">
        <div className="campaign-grid">
          {filteredCampaigns.map((campaign) => (
            <div key={campaign.id} onClick={() => handleCampaignClick(campaign.id)}>
              <CampaignCard campaign={campaign} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignList;