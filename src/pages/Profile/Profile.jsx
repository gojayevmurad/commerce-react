import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./profile.scss";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import { toast } from "react-hot-toast";
import MetaData from "../../components/MetaData";
import { getUserDataAsync } from "../../redux/profile/profileSlice";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDataAsync(toast));
  });

  return (
    <>
      <MetaData title="DNP || HESABIM" />
      <div className="container">
        <h2 className="profile_header">Mənim hesabım</h2>
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
