import React from "react";
import CampaignCard from "./CampaignCard";
import "./CampaignList.css"; // Import the CSS file

const CampaignList = () => {
  const campaigns = [
    {
      id: 1,
      brandName: "Product Promotion",
      payoutDetails: "Barter",
      hiringProgress: { hired: 10, slots: 20 },
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "Promote our new product line.",
    },
    {
      id: 2,
      brandName: "E Commerce Influencer",
      payoutDetails: "Fixed Pay",
      hiringProgress: { hired: 5, slots: 15 },
      image: "https://cdn.prod.website-files.com/6716c18e45760446b740a31c/6718383c4640d6c6ec84ca4b_2.3%2520ecommerce%2520integration-p-800.webp",
      description: "Collaborate for a social media campaign.",
    },
    {
      id: 3,
      brandName: "Social Media Influencer",
      payoutDetails: "Refund",
      hiringProgress: { hired: 8, slots: 10 },
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Create content for our upcoming event.",
    },
    {
      id: 4,
      brandName: "Brand Campaign",
      payoutDetails: "Refund",
      hiringProgress: { hired: 8, slots: 10 },
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "Create content for our upcoming event.",
    },
    {
      id: 5,
      brandName: "Content Creation",
      payoutDetails: "Refund",
      hiringProgress: { hired: 8, slots: 10 },
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Create content for our upcoming event.",
    },
    {
      id: 6,
      brandName: "Influencer Collaboration",
      payoutDetails: "Barter",
      hiringProgress: { hired: 12, slots: 20 },
      image: "https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Promote our eco-friendly products.",
    },
  ];

  return (
    <div className="campaign-list">
      <h2 className="campaign-title">Active Campaigns</h2>
      <div className="campaign-scroll-container">
        <div className="campaign-grid">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignList;