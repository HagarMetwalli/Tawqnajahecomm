import React from "react";
import "../LogoutConfirm/LogoutConfirm.css";
import { Link, useNavigate } from "react-router-dom";

import profilepicture from "../../assets/profileicon.png";
import accountimg from "../../assets/account-img.png";
import marketingimg from "../../assets/m-img.png";
import survimg from "../../assets/surv-img.png";
import logoutimg from "../../assets/logout-img.png";

import { BaseUrl } from "../../App";
import BuyerServicesUrl from "../../BuyerServicesUrl";

export default function LogoutConfirm() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      // Call backend logout
      await fetch(BaseUrl + BuyerServicesUrl.LogOut, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      navigate("/accounttype");
    }
  };

  return (
    <div className="logout-wrapper container" style={{ marginTop: "180px" }}>
      {/* ==== SIDEBAR ==== */}
      <div className="marketing-sidebar acc-profile mt-5">

        <Link to="/profileaccount" className="side-btn white">
          <img className="px-3" src={profilepicture} alt="" />
          حسابي الشخصي
        </Link>

        <Link to="/bankaccount" className="side-btn white">
          <img className="px-3" src={accountimg} alt="" />
          الحساب البنكي
        </Link>

        <Link to="/marketing" className="side-btn white">
          <img className="px-3" src={marketingimg} alt="" />
          التسويق
        </Link>

        <Link to="/contracts" className="side-btn white">
          <img className="px-3" src={survimg} alt="" />
          التقييم والعقود
        </Link>

        <Link to="/logoutconfirm" className="side-btn logout active text-white">
          <img className="px-3" src={logoutimg} alt="" />
          تسجيل الخروج
        </Link>

      </div>

      {/* ==== LOGOUT CONTENT ==== */}
      <div className="logout-content">
        <h2 className="logout-title">هل تريد تسجيل الخروج ؟</h2>

        <button className="logout-main-btn" onClick={handleLogout}>
          تسجيل الخروج
        </button>
      </div>
    </div>
  );
}
