import React from "react";
import "./popup.scss";

const WelcomePopup = ({ closePopup }) => {
  return (
    <>
      <div
        className="welcome_popup--overlay"
        onClick={() => closePopup(false)}
      ></div>
      <div className="welcome_popup">
        <div className="welcome_popup--content">
          <div
            className="welcome_popup--content__close"
            onClick={() => closePopup(false)}
          >
            ×
          </div>
          <p className="popup_off text-secondary">
            GET UP TO <span className="text-primary">25% OFF</span>
          </p>
          <p className="popup_header text-secondary">Sign up to Wolmart</p>
          <p className="popup_text">
            Subscribe to the Wolmart market newsletter to receive updates on
            special offers.
          </p>
          <form method="POST">
            <input type="email" placeholder="Your email address" />
            <button>Submit</button>
          </form>
          <label>
            <input type="checkbox" />
            Don't show this popup again.
          </label>
        </div>
      </div>
    </>
  );
};

export default WelcomePopup;
