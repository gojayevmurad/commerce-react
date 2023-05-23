import React from "react";
import "./profile.scss";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className="container">
        <h2 className="profile_header">My account</h2>
      </div>

      <div className="container">
        <div className="profile_content">
          <SideBar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Profile;
