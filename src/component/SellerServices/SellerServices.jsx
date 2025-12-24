import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SellerServices.css";
import { Link } from "react-router-dom";

export default function SellerServices() {
  return (
    <div className="services-section section-block pt-3 mt-5">
      <h2 className="section-title container pb-3">خدماتنا</h2>

      <div className="services-row">

        {/* الطلبات الجديدة */}
        <Link to="/seller/sellerneworders" className="service-card">
          <i className="fa-solid fa-cart-shopping service-icon"></i>
          <h3>الطلبات الجديدة</h3>
        </Link>

        {/* إدارة الطلبات */}
        <Link to="/seller/sellerconfirmedorders" className="service-card">
          <i className="fa-solid fa-folder-open service-icon"></i>
          <h3>إدارة الطلبات</h3>
        </Link>

        {/* الحسابات المالية */}
        <Link to="/seller/sellerfinancialdashboard" className="service-card">
          <i className="fa-solid fa-receipt service-icon"></i>
          <h3>الحسابات المالية</h3>
        </Link>

        {/* الطلبات الملغاة */}
        <Link to="/seller/sellercanceledorders" className="service-card">
          <i className="fa-solid fa-xmark service-icon"></i>
          <h3>الطلبات الملغاة</h3>
        </Link>

      </div>
    </div>
  );
}
