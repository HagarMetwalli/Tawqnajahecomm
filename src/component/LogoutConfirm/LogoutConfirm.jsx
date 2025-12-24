import React from "react";
import "../LogoutConfirm/LogoutConfirm.css";

import profilepicture from "../../assets/profileicon.png";
import accountimg from "../../assets/account-img.png";
import marketingimg from "../../assets/m-img.png";
import survimg from "../../assets/surv-img.png";

import myadvertisements from "../../assets/myadvertisements.png";
import addadvertisements from "../../assets/addadvertisements.png";
import logoutimg from "../../assets/logout-img.png";

import { Link, useNavigate } from "react-router-dom";

export default function LogoutConfirm() {
  const navigate = useNavigate();
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

        {/* === ACTIVE BUTTON === */}
        <Link to="/logoutconfirm" className="side-btn logout active text-white">
          <img className="px-3" src={logoutimg} alt="" />
          تسجيل الخروج
        </Link>

      </div>

      {/* ==== LOGOUT CONTENT ==== */}
      <div className="logout-content">
        <h2 className="logout-title">هل تريد تسجيل الخروج ؟</h2>

   <button
      className="logout-main-btn"
      onClick={() => navigate("/accounttype")}
    >
      تسجيل الخروج
    </button>
      </div>

    </div>
  );
}
