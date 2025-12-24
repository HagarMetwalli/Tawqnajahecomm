import React from "react";
import "./SellerLogoutConfirm.css";
import profilepicture from "../../assets/profile-img.png";
import profileimg from "../../assets/profile-img.png"; 

import accountimg from "../../assets/account-img.png";
import marketingimg from "../../assets/m2.png";
import survimg from "../../assets/surv-img.png";
import logoutimg from "../../assets/logout-img.png";
import { Link, useNavigate } from "react-router-dom";

export default function SellerLogoutConfirm() {
  const navigate = useNavigate();
  return (
    <div className="logout-wrapper container">

      {/* اليمين - القائمة الجانبية */}
  <div className="marketing-sidebar mt-5">

  <button className="side-btn">
    <Link to="/seller/sellerprofileaccount" className="text-dark text-decoration-none">
      <img src={profileimg} alt="Profile" className="px-2" />
      حسابي الشخصي
    </Link>
  </button>

  <button className="side-btn">
    <Link to="/seller/sellerbankaccount" className="text-dark text-decoration-none">
      <img src={accountimg} alt="Bank Account" className="px-2" />
      الحساب البنكي
    </Link>
  </button>

  <button className="side-btn ">
    <Link to="/seller/sellermarketing" className=" text-dark text-decoration-none">
      <img src={marketingimg} alt="Marketing" className="px-2" />
      التسويق
    </Link>
  </button>

  <button className="side-btn">
    <Link to="/seller/sellercontractpage" className="text-dark text-decoration-none">
      <img src={survimg} alt="Contracts" className="px-2" />
      التقييم والعقود
    </Link>
  </button>

  <button className="side-btn logout">
    <Link to="/seller/sellerlogoutconfirm" className="text-white text-decoration-none">
      <img src={logoutimg} alt="Logout" className="px-2" />
      تسجيل الخروج
    </Link>
  </button>

</div>

      {/* الشمال - محتوى تسجيل الخروج */}
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
