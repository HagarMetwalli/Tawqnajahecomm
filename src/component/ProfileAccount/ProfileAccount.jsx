import React, { useState } from "react";
import "../ProfileAccount/ProfileAccount.css";
import { Link } from "react-router-dom";

// ==== Images ====
import avatarImg from "../../assets/avatar.jpg";
import profilepicture from "../../assets/profileicon.png";
import marketingimg from "../../assets/m-img.png";
import myadvertisements from "../../assets/myadvertisements.png";
import addadvertisements from "../../assets/addadvertisements.png";
import logoutimg from "../../assets/logout-img.png"; 
import darkmarketing from "../../assets/dark-marketing.png";

export default function ProfileAccount() {
  const [code, setCode] = useState("+966");
  const [showCodes, setShowCodes] = useState(false);
  const [phone, setPhone] = useState("");

  const countries = [
    { key: "+966", name: "السعودية" },
    { key: "+971", name: "الإمارات" },
    { key: "+20", name: "مصر" },
    { key: "+962", name: "الأردن" },
    { key: "+974", name: "قطر" },
  ];

  return (
    <div className="cprofile-wrapper container  accordion-collapse mt-5 pt-5 mb-5 pb-5 ">

      {/* ===== SIDEBAR ===== */}
      <div className="cprofilemarketing-sidebar acc-profile mt-5 pt-5 mb-5">

        <Link to="/profileaccount" className="side-btn active text-white fw-bold mt-5 ">
          <img className="px-3" src={profilepicture} alt="" />
          حسابي الشخصي
        </Link>

        <Link to="/marketing" className="side-btn white">
          <img className="px-3" src={darkmarketing} alt="" />
          التسويق
        </Link>

        <Link to="/advertisementdetails" className="side-btn white">
          <img className="px-3" src={myadvertisements} alt="" />
          إعلاناتي
        </Link>

        <Link to="/addadvertisement" className="side-btn white">
          <img className="px-3" src={addadvertisements} alt="" />
          إضافة إعلان
        </Link>

        <Link to="/logoutconfirm" className="side-btn logout">
          <img className="px-3" src={logoutimg} alt="" />
          تسجيل الخروج
        </Link>

      </div>

      {/* ===== MAIN PROFILE CONTENT ===== */}
      <div className="profile-content mt-5 pt-5 mb-5">

        <div className="profile-avatar-wrapper mt-4">
          <div className="avatar-circle">
            <img src={avatarImg} className="profile-avatar" alt="avatar" />
            <button className="avatar-edit-btn">
              <i className="fa-solid fa-pen"></i>
            </button>
          </div>
        </div>

        <form className="profile-form">

          <div className="form-group">
            <label className="fw-bolder mb-2 pb-3">اسم المحل / البائع</label>
            <input className="form-input" placeholder="ادخل اسم المستخدم" />
          </div>

          <div className="form-group">
            <label className="fw-bolder mb-2 pb-3">البريد الإلكتروني</label>
            <input className="form-input" placeholder="email@example.com" />
          </div>

          <div className="form-group">
            <label className="fw-bolder mb-2 pb-3">العنوان</label>
            <input className="form-input" placeholder="الرياض، السعودية" />
          </div>

          {/* Phone */}
        <div className="form-group">
  <label className="fw-bolder mb-2 pb-3">رقم الهاتف</label>

  <div className="profilephone-box">

    {/* مفتاح الدولة */}
    <div
      className="pcode-box"
      tabIndex={0}
      onClick={() => setShowCodes(!showCodes)}
    >
      <span className="arrow">▼</span>
      <span className="code-text">{code}</span>

      {showCodes && (
        <ul className="codes-list">
          {countries.map((c, i) => (
            <li
              key={i}
              onClick={() => {
                setCode(c.key);
                setShowCodes(false);
              }}
            >
              {c.key} ({c.name})
            </li>
          ))}
        </ul>
      )}
    </div>

    {/* خانة الرقم */}
    <input
      type="text"
      className="phone-input mt-3"
      placeholder="789 456 123"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
    />
  </div>
</div>


          <div className="save-wrapper">
            <button type="button" className="save-btn">حفظ</button>
          </div>

        </form>
      </div>
    </div>
  );
}
