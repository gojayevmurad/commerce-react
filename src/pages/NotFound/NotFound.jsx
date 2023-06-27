import React from "react";
import "./notfound.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="page_notfound">
      <p className="back_image">Oops!</p>
      <span>404 - səhifə tapılmadı</span>
      <p>
        Axtardığınız səhifə mövcud deyil, silinib, ünvanı dəyişirilib və ya
        müvəqqəti olaraq əlçatan deyil.
      </p>
      <button onClick={() => navigate("/")}>Əsas səhifəyə qayıt</button>
      <i className="w-icon-shipping"></i>
    </div>
  );
};

export default NotFound;
