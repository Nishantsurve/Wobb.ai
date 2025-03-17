import React from "react";

const reviews = [
  {
    name: "David K",
    role: "CEO, Small Business",
    review: "Wobb has a pretty solid database where you can gather data on influencers. The best part is automated outreach."
  },
  {
    name: "Jayati Goel",
    role: "Founder, Hanoor Herbals",
    review: "We're getting 100+ pre-qualified applications on average, saving us time to focus on important work."
  },
  // Add more reviews as needed
];

const Reviews = () => {
  return (
    <section className="reviews">
      <h2>What Our Customers Say</h2>
      <div className="review-cards">
        {reviews.map((rev, index) => (
          <div key={index} className="review-card">
            <p>{rev.review}</p>
            <h4>{rev.name}</h4>
            <small>{rev.role}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
