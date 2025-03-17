import React from "react";
import "./CampaignCard.css"; // Import the CSS file for CampaignCard

const CampaignCard = ({ campaign }) => {
  const { brandName, payoutDetails, hiringProgress, image, description } = campaign;
  const { hired, slots } = hiringProgress;
  const progressPercentage = (hired / slots) * 100;

  // Icon for payout details
  const payoutIcon =
    payoutDetails === "Barter"
      ? "🔄"
      : payoutDetails === "Fixed Pay"
      ? "💰"
      : "💸"; // Refund

  return (
    <div className="campaign-card">
      <img src={image} alt={brandName} />
      <div className="card-content">
        <h3>{brandName}</h3>
        <p>{description}</p>
        <div className="payout-details">
          <span className="payout-icon">{payoutIcon}</span>
          <strong>Payout:</strong> {payoutDetails}
        </div>
        <div className="hiring-progress">
          <div className="circular-progress">
            <div
              className="progress"
              style={{
                background: `conic-gradient(#007bff ${progressPercentage}%, #e0e0e0 ${progressPercentage}% 100%)`,
              }}
            ></div>
            <span className="progress-text">
              {hired}/{slots}
            </span>
          </div>
          <strong>Hiring Progress</strong>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;