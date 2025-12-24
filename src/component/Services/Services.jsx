import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Services.css";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="services-section ">
      <h2 className="section-title container pb-3 ">خدماتنا</h2>

      <div className="services-row">

        {/* الطلبات الجديدة */}
        <Link to="/neworders" className="service-card">
          <i className="fa-solid fa-cart-shopping service-icon"></i>
          <h3>الطلبات الجديدة</h3>
        </Link>

        {/* إدارة الطلبات */}
        <Link to="/confirmedorders" className="service-card">
          <i className="fa-solid fa-folder-open service-icon"></i>
          <h3>إدارة الطلبات</h3>
        </Link>

        {/* الحسابات المالية */}
        <Link to="" className="service-card">
          <i className="fa-solid fa-receipt service-icon"></i>
          <h3>الحسابات المالية</h3>
        </Link>

        {/* الطلبات الملغاة */}
        <Link to="/canceledorders" className="service-card">
          <i className="fa-solid fa-xmark service-icon"></i>
          <h3>الطلبات الملغاة</h3>
        </Link>

      </div>
    </div>
  );
}
