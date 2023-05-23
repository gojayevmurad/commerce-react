import React from "react";

const OurDiff = () => {
  return (
    <div className="container">
      <div className="our--diff">
        <div className="our--diff__el">
          <i className="fa-solid fa-truck-fast"></i>
          <div>
            <h4>Pulsuz Karqo & Qaytarmaq</h4>
            <p>$99 və üzəri üçün</p>
          </div>
        </div>
        <div className="our--diff__el">
          <i className="fa-solid fa-file-invoice"></i>
          <div>
            <h4>Təhlükəsiz Ödəniş</h4>
            <p>Təhlükəsiz ödənişi təmin edirik</p>
          </div>
        </div>
        <div className="our--diff__el">
          <i className="fa-solid fa-money-bill-wheat"></i>
          <div>
            <h4>Geri Ödəmə Zəmanəti</h4>
            <p>Son 30 gün ərzində</p>
          </div>
        </div>
        <div className="our--diff__el">
          <i className="fa-solid fa-comments"></i>
          <div>
            <h4>Müştəri xidməti</h4>
            <p>Zəng və ya email 7/24</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDiff;
