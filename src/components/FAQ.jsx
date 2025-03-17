import React from "react";
import "./FAQ.css";
const FAQ = () => {
  return (
    <section className="faq">
      <h1>Frequently asked questions</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        {/* FAQ 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How does Wobb streamline the influencer hiring process?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionPanelsStayOpenExample"
          >
            <div className="accordion-body">
              Wobb automates hiring, helping you find and onboard influencers quickly, saving you time compared to manual searches.
            </div>
          </div>
        </div>

        {/* FAQ 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How does Wobb ensure content quality?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionPanelsStayOpenExample"
          >
            <div className="accordion-body">
              Wobb’s AI gives instant feedback to creators, helping them create content that fits your brief. This cuts down on revisions and speeds up the process.
            </div>
          </div>
        </div>

        {/* FAQ 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How fast can I get my content?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionPanelsStayOpenExample"
          >
            <div className="accordion-body">
              Once the creator receives your product, they typically upload content within 5 days. About 80% of tasks are completed within a week based on our experience.
            </div>
          </div>
        </div>

        {/* FAQ 4 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Do creators share content on their social media?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionPanelsStayOpenExample"
          >
            <div className="accordion-body">
              Yes! If your campaign includes social media posting, influencers will share the approved content on their accounts for the agreed duration.
            </div>
          </div>
        </div>
        
        {/* FAQ 5 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Can Wobb work for agencies?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionPanelsStayOpenExample"
          >
            <div className="accordion-body">
              Definitely! Wobb is ideal for agencies managing multiple brands and products. You can run campaigns for all your clients from a single account and streamline content creation.
            </div>
          </div>
        </div>

        {/* FAQ 6 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Is Wobb free to use?
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionPanelsStayOpenExample"
          >
            <div className="accordion-body">
              Wobb is free for those starting out with barter campaigns. As your needs grow, you can upgrade to our Pro plan, and you can also use our influencer discovery tool for a small additional fee.
            </div>
          </div>
        </div>

        {/* FAQ 7 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              Is influencer discovery included in the Free plan?
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionPanelsStayOpenExample"
          >
            <div className="accordion-body">
              No, influencer discovery is a separate tool with its own pricing. However, you can access it for a small fee even if you’re on the Free plan.
            </div>
          </div>
        </div>
      </div>
      <br /><br />
    </section>
  );
};

export default FAQ;