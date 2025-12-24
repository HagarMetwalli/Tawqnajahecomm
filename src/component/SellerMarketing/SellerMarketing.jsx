import React from "react";
import "../SellerMarketing/SellerMarketing.css";
import profileimg from "../../assets/profile-img.png"; 
import accountimg from "../../assets/account-img.png"; 
import marketinglogo from "../../assets/marketing-logo.png"; 
import marketingimg from "../../assets/m-img.png"; 

import survimg from "../../assets/surv-img.png"; 
import logoutimg from "../../assets/logout-img.png"; 
import { Link } from "react-router-dom";


export default function SellerMarketing() {
  return (
    <div className="marketing-wrapper container mt-5">

      {/* اليمين — القائمة */}
 <div className="marketing-sidebar mt-5">

  <button className="side-btn">
    <Link to="/seller/sellerprofileaccount" className="text-dark text-decoration-none">
      <img src={profileimg} alt="Profile" />
      حسابي الشخصي
    </Link>
  </button>

  <button className="side-btn">
    <Link to="/seller/sellerbankaccount" className="text-dark text-decoration-none">
      <img src={accountimg} alt="Bank Account" />
      الحساب البنكي
    </Link>
  </button>

  <button className="side-btn active">
    <Link to="/seller/sellermarketing" className="text-white text-decoration-none">
      <img src={marketingimg} alt="Marketing" />
      التسويق
    </Link>
  </button>

  <button className="side-btn">
    <Link to="/seller/sellercontractpage" className="text-dark text-decoration-none">
      <img src={survimg} alt="Contracts" />
      التقييم والعقود
    </Link>
  </button>

  <button className="side-btn logout">
    <Link to="/seller/sellerlogoutconfirm" className="text-white text-decoration-none">
      <img src={logoutimg} alt="Logout" />
      تسجيل الخروج
    </Link>
  </button>

</div>

      {/* الشمال — المحتوى */}
      <div className="marketing-contentt mt-5">

        <img src={marketinglogo} alt="طوق النجاة" className="marketing-logo" />


        <p className="marketing-text">
انضم لبرنامج التسويق بالعمولة وابدأ بكسب عمولات علي 
<br/> كل مستخدم يستخدم كودك الخاص كلما زاد عدد
<br/> المستخدمين. زادت ارباحك!        </p>

        <button className="marketing-btn">طلب تسويق</button>
      </div>

    </div>
  );
}
