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
            <span className="text-primary">25% ENDİRİM </span> ƏLDƏ EDİN
          </p>
          <p className="popup_header text-secondary">
            DNP-də Qeydiyyatdan Keçin
          </p>
          <p className="popup_text">
            Mağazamızın xəbərlərinə abunə olaraq xüsusi təkliflərdən dərhal
            xəbərdar ola bilərsiniz.
          </p>
          <form method="POST">
            <input type="email" placeholder="Your email address" />
            <button>Submit</button>
          </form> 
          <label>
            <input type="checkbox" />
            Bunu bir daha göstərmə.
          </label>
        </div>
      </div>
    </>
  );
};

export default WelcomePopup;
