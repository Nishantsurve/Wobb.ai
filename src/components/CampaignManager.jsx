import React, { useState } from "react";
import './CampaignManager.css'; // Import the CSS file

const CampaignManager = () => {
  const [selectedStep, setSelectedStep] = useState(1);

  // Step data
  const steps = [
    {
      id: 1,
      title: "Post Your Campaign",
      description:
        "Add your brand, product details, and creative ideas. Creators will start applying within minutes.",
      buttonText: "Get started for free",
      imageAlt: "Post a campaign image",
      imageSrc: "https://cdn.prod.website-files.com/6716c18e45760446b740a31c/67182f615f5ae6f89a3a8dfe_2.1%2520Post%2520a%2520campaign-p-800.webp",
    },
    {
      id: 2,
      title: "Select Creators",
      description:
        "Review applications and approve the best-fit creators manually, or auto-approve eligible ones.",
      buttonText: "Get started for free",
      imageAlt: "Inbound application image",
      imageSrc: "https://cdn.prod.website-files.com/6716c18e45760446b740a31c/671831678cbb69c3b51a9933_2.2.%2520Inbound%2520Application-p-800.webp",
    },
    {
      id: 3,
      title: "Ship Your Products",
      description:
        "Send products to creators easily with integrations like Shopify and WooCommerce for seamless ordering.",
      buttonText: "Get started for free",
      imageAlt: "Ecommerce integrations",
      imageSrc: "https://cdn.prod.website-files.com/6716c18e45760446b740a31c/6718383c4640d6c6ec84ca4b_2.3%2520ecommerce%2520integration-p-800.webp",
    },
    {
      id: 4,
      title: "Review Content",
      description:
        "Creators upload their photos or videos. Review manually or let AI check the content for accuracy, saving you time.",
      buttonText: "Get started for free",
      imageAlt: "Deliverables image",
      imageSrc: "https://cdn.prod.website-files.com/6716c18e45760446b740a31c/671838bb09f47dab2c4b284e_3.3%2520Deliverables-p-800.webp",
    },
    {
      id: 5,
      title: "Get It Live",
      description:
        "Approved creators will share the content on their social accounts, putting your brand in front of millions.",
      buttonText: "Get started for free",
      imageAlt: "Content measurement image",
      imageSrc: "https://cdn.prod.website-files.com/6716c18e45760446b740a31c/6718392aad065f3c8286b4c5_4.3%2520Content%2520Measurement-p-800.webp",
    },
  ];

  return (
    <section className="campaign-manager">
      <h2>How it works</h2>
      <div className="steps-nav">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`step ${selectedStep === step.id ? "active" : ""}`}
            onClick={() => setSelectedStep(step.id)}
          >
            {step.id}. {step.title}
          </div>
        ))}
      </div>
      <div className="step-content">
        <div className="content-left">
          <h3>{steps[selectedStep - 1].title}</h3>
          <p>{steps[selectedStep - 1].description}</p>
          <button>{steps[selectedStep - 1].buttonText}</button>
        </div>
        <div className="content-right">
          <img
            src={steps[selectedStep - 1].imageSrc}
            alt={steps[selectedStep - 1].imageAlt}
          />
        </div>
      </div>
    </section>
  );
};

export default CampaignManager;