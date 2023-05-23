import React from "react";
import TopHeader from "./TopHeader";
import MainHeader from "./MainHeader";
import BottomHeader from "./BottomHeader";

const Header = ({ auth }) => {
  return (
    <div>
      <TopHeader auth={auth} />
      <MainHeader />
      <BottomHeader />
    </div>
  );
};

export default Header;
