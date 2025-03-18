import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./Profile.css";

const Profile = () => {
  // State for profile image
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/150" // Default placeholder image
  );

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Set the uploaded image as the profile image
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  // Sample data for analytics (all months)
  const analyticsData = [
    { name: "Jan", campaigns: 5 },
    { name: "Feb", campaigns: 8 },
    { name: "Mar", campaigns: 12 },
    { name: "Apr", campaigns: 7 },
    { name: "May", campaigns: 10 },
    { name: "Jun", campaigns: 15 },
    { name: "Jul", campaigns: 9 },
    { name: "Aug", campaigns: 11 },
    { name: "Sep", campaigns: 6 },
    { name: "Oct", campaigns: 14 },
    { name: "Nov", campaigns: 8 },
    { name: "Dec", campaigns: 13 },
  ];

  // Sample data for past campaigns
  const pastCampaigns = [
    {
      id: 1,
      brandName: "Product Promotion",
      payoutDetails: "Barter",
      status: "Completed",
      date: "2023-01-15",
    },
    {
      id: 2,
      brandName: "E Commerce Influencer",
      payoutDetails: "Fixed Pay",
      status: "Completed",
      date: "2023-02-20",
    },
    {
      id: 3,
      brandName: "Social Media Influencer",
      payoutDetails: "Refund",
      status: "Completed",
      date: "2023-03-25",
    },
  ];

  return (
    <div className="profile-container">
      <h1>Profile</h1>

      {/* Profile Information */}
      <div className="profile-info">
        <div className="profile-image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-image"
          />
          <label htmlFor="profile-image-upload" className="upload-label">
            Upload Image
            <input
              id="profile-image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }} // Hide the default file input
            />
          </label>
        </div>
        <div className="profile-details">
          <h2>John Doe</h2>
          <p>Influencer</p>
          <p>Email: john.doe@example.com</p>
          <p>Location: New York, USA</p>
        </div>
      </div>

      {/* Analytics */}
      <div className="analytics-section">
        <h2>Campaign Analytics</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={analyticsData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="campaigns" fill="#007bff" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Past Campaigns */}
      <div className="past-campaigns-section">
        <h2>Past Campaigns</h2>
        <table className="campaigns-table">
          <thead>
            <tr>
              <th>Brand Name</th>
              <th>Payout Details</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {pastCampaigns.map((campaign) => (
              <tr key={campaign.id}>
                <td>{campaign.brandName}</td>
                <td>{campaign.payoutDetails}</td>
                <td>{campaign.status}</td>
                <td>{campaign.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;