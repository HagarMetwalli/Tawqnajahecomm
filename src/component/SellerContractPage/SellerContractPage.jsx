import React, { useState } from "react";
import "./SellerContractPage.css";

import star from "../../assets/con-star.png";

export default function SellerContractPage() {

  // 🔵 لازم هنا 
  const [activeTab, setActiveTab] = useState("contract");

  return (
    <div className="contract-page container  ">

      {/* ==== Tabs Header ==== */}
      <div className="tabs-header mt-5 mb-5 pt-5 pb-5">
        <button
          className={activeTab === "contract" ? "tab active" : "tab"}
          onClick={() => setActiveTab("contract")}
        >
          التعاقد
        </button>

        <button
          className={activeTab === "rates" ? "tab active" : "tab"}
          onClick={() => setActiveTab("rates")}
        >
          التقييمات
        </button>

        {/* 🔵 Moving indicator */}
        <div className={`tab-indicator ${activeTab}`}></div>
      </div>

      {/* ===== Contract Content ===== */}
      {activeTab === "contract" && (
        <div className="contract-section fade-animation">

          <div className="date-box input-inline">
            <div className="date-inline-content">
              <span className="date-label-inline">تاريخ التعاقد:</span>
              <span className="date-value-inline">1 / 5 / 2025</span>
            </div>
          </div>

          <div className="date-box input-inline">
            <div className="date-inline-content">
              <span className="date-label-inline">تاريخ الانتهاء:</span>
              <span className="date-value-inline">1 / 8 / 2025</span>
            </div>
          </div>

          <button className="renew-btn ">طلب تجديد</button>
        </div>
      )}

      {/* ===== Ratings Content ===== */}
      {activeTab === "rates" && (
        <div className="rates-section fade-animation">

          <div className="rate-box">
            <div className="rate-header">
              <h1>التقييم العام</h1>

              <div className="rate-number">
                4.3 <img src={star} alt="star" />
              </div>
            </div>

            {/* Rows */}
            <div className="rate-row">
              <span className="rate-percentage">60%</span>
              <div className="rate-progress"><span style={{ width: "60%" }}></span></div>
              <span className="rate-label">5 ⭐</span>
            </div>

            <div className="rate-row">
              <span className="rate-percentage">20%</span>
              <div className="rate-progress"><span style={{ width: "20%" }}></span></div>
              <span className="rate-label">4 ⭐</span>
            </div>

            <div className="rate-row">
              <span className="rate-percentage">10%</span>
              <div className="rate-progress"><span style={{ width: "10%" }}></span></div>
              <span className="rate-label">3 ⭐</span>
            </div>

            <div className="rate-row">
              <span className="rate-percentage">7%</span>
              <div className="rate-progress"><span style={{ width: "7%" }}></span></div>
              <span className="rate-label">2 ⭐</span>
            </div>

            <div className="rate-row">
              <span className="rate-percentage">3%</span>
              <div className="rate-progress"><span style={{ width: "3%" }}></span></div>
              <span className="rate-label">1 ⭐</span>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
