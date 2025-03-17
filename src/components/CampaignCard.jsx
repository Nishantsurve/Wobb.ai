import React from "react";

const CampaignCard = ({ campaign }) => {
  const { brandName, payoutDetails, hiringProgress, image, description } = campaign;

  return (
    <div className="campaign-card">
      <img src={image} alt={brandName} className="campaign-image" />
      <h3>{brandName}</h3>
      <p>{description}</p>
      <div className="payout-details">
        <strong>Payout:</strong> {payoutDetails}
      </div>
      <div className="hiring-progress">
        <strong>Hiring Progress:</strong> {hiringProgress.hired} / {hiringProgress.slots}
      </div>
    </div>
  );
};

export default CampaignCard;