import React, { useEffect, useState } from "react";
import SellerServices from "../SellerServices/SellerServices";
import SellerRelatedProducts from "../SellerRelatedProducts/SellerRelatedProducts";
import banner from "../../assets/banner-bg.png";
import "../SellerHome/SellerHome.css";

export default function SellerHome() {

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 150);
  }, []);

  return (
    <>
      {/* ===== Banner Section ===== */}
        <div className="mystorepage">

      <div className={`home-banner ${animate ? "animate" : ""}`}>
        <img src={banner} alt="banner" className="banner-img" />

        <div className="banner-overlay"></div>

   <div className="banner-text">
  <h1 className="main-title text-anim right">مرحباً بكم في طوق نجاة</h1>
  
  <h3 className="sub-title text-anim left">
    منصتك الآمنة للتسوق وعرض منتجاتك بسهولة
  </h3>

  <h4 className="text-anim bottom">
    يسعدنا تصفحك موقعنا طوق نجاة
  </h4>
</div>

      </div>

      {/* ===== Services Section ===== */}
      <div className="home-section mt-0">
        <SellerServices />
      </div>

      {/* ===== Related Products Section ===== */}
      <div className="home-section mb-5 pb-5">
        <SellerRelatedProducts />
      </div>
      </div>
    </>
  );
}
