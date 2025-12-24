import React from "react";
import "./Marketing.css";

import profileimg from "../../assets/profile-img.png";
import myadvertisements from "../../assets/myadvertisements.png";
import marketinglogo from "../../assets/marketing-logo.png";
import marketingimg from "../../assets/m-img.png";
import addadvertisements from "../../assets/addadvertisements.png";
import logoutimg from "../../assets/logout-img.png";
import { Link } from "react-router-dom";

export default function Marketing() {
  return (
    <div className="mmarketing-page mt-5 mb-5">
      <div className="container mt-5 mb-5 pb-5">
        <div className="row mb-5 pb-5">

          {/* ====== SIDEBAR ====== */}
          <div className="m-marketing-sidebar mt-3 mb-5 col-md-6">

            <Link to="/profileaccount" className="side-btn white mt-5 ">
              <img src={profileimg} alt="" />
              <span className="px-2">حسابي الشخصي</span>
            </Link>

            <Link to="/marketing" className="side-btn active">
              <img src={marketingimg} alt="" />
              <span className="px-2">التسويق</span>
            </Link>

            <Link to="/advertisementdetails" className="side-btn white">
              <img src={myadvertisements} alt="" />
              <span className="px-2">إعلاناتي</span>
            </Link>

            <Link to="/addadvertisement" className="side-btn white">
              <img src={addadvertisements} alt="" />
              <span className="px-2">إضافة إعلان</span>
            </Link>

            <Link to="/logoutconfirm" className="side-btn logout">
              <img src={logoutimg} alt="" />
              <span className="px-2">تسجيل الخروج</span>
            </Link>

          </div>

          {/* ====== MAIN CONTENT ====== */}
          <div className="marketing-content col-md-6">
            <img src={marketinglogo} alt="طوق النجاة" className="marketing-logo" />

            <p className="marketing-text">
              انضم لبرنامج التسويق بالعمولة وابدأ بكسب عمولات علي
              <br /> كل مستخدم يستخدم كودك الخاص كلما زاد عدد
              <br /> المستخدمين. زادت أرباحك!
            </p>

            <button className="marketing-main-btn">طلب تسويق</button>
          </div>

        </div>
      </div>
    </div>
  );
}
