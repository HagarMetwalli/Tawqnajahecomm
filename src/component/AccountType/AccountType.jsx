import React, { useState } from "react";
import "./AccountType.css";

import registerbg from "../../assets/register-bg.png";
import logo from "../../assets/logo.png";

import bluecart from "../../assets/bluecart.png";
import sellerIcon from "../../assets/Vector1.png";

import { useNavigate } from "react-router-dom";

export default function AccountType() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");

  return (
    <div className="registeration account-type">
      <div className="container-fluid ">
        <div className="row">

          <div className="image account col-12 col-md-6 p-0">
<img
  src={registerbg}
  alt="img"
  style={{ width: "68%" }}
/>
          </div>

          <div className="form col-12 col-md-6 d-flex flex-column text-end pt-5 pb-0 mb-0 mt-5 " style={{    paddingLeft:"18px"}}>

            <div className=" text-center pt-5">
              <img src={logo} alt="logo" />
            </div>

            <h3 className="account-title mt-3 text-center">
              اختر نوع الحساب الذي يناسب احتياجاتك.
            </h3>

            <div className="options-row mt-4">

              {/* مشتري */}
              <div
                className={`account-box ${selected === "buyer" ? "active" : ""}`}
                onClick={() => {
                  setSelected("buyer");
                  navigate("/customer/register");
                }}
              >
                <img
                  src={bluecart}
                  className={`account-icon ${selected === "buyer" ? "white-icon" : ""}`}
                  alt="buyer"
                />
                <p className="option-text">مشتري</p>
              </div>

              {/* بائع */}
              <div
                className={`account-box ${selected === "seller" ? "active" : ""}`}
            onClick={() => {
  setSelected("seller");
    navigate("/seller/sellerregister");   // ✅ بائع
}}

              >
                <img
                  src={sellerIcon}
                  className={`account-icon ${selected === "seller" ? "white-icon" : ""}`}
                  alt="seller"
                />
                <p className="option-text">بائع</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
