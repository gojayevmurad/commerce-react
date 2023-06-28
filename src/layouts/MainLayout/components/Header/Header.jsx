import React from "react";
import TopHeader from "./TopHeader";
import MainHeader from "./MainHeader";
import BottomHeader from "./BottomHeader";
import "./header.scss";

const Header = ({ auth, setSideBasket }) => {
  return (
    <div className="header">
      <TopHeader auth={auth} />
      <MainHeader setSideBasket={setSideBasket} />
      <BottomHeader />
    </div>
  );
};

export default Header;
