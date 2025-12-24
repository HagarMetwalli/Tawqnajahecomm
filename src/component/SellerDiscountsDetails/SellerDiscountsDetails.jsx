import React, { useState } from "react";
import "../SellerDiscountsDetails/SellerDiscountsDetails.css";

import saleFriday from "../../assets/sale-friday.jpg";
import rating from "../../assets/Star.png";
import installement from "../../assets/installement.png";
import international from "../../assets/international.png";
import Lstore from "../../assets/lorfi-store.jpg";
import productrating from "../../assets/product-rating.png";
import insta from "../../assets/insta.png";
import whatsapp from "../../assets/whatsapp.png";
import facebook from "../../assets/facebook.png";

export default function SellerDiscountsDetails() {
  const images = [saleFriday, saleFriday, saleFriday];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <div className="product-page container pb-3 pt-5 mb-5">

      <h1 className="product-heading   pt-4 ">
        تفاصيل الإعلان / <span className="comm">ذات صلة</span>
      </h1>

      <div className="product-wrapper ">

        {/* IMAGE */}
        <div className="bproduct-image-box">
          <img src={images[currentIndex]} alt="product" className="main-image" />

          <button className="slide-btn right" onClick={prevSlide}>
            ‹
          </button>
          <button className="slide-btn left" onClick={nextSlide}>
            ›
          </button>
        </div>

        {/* INFO */}
        <div className="product-info">
          <h2 className="product-title">تخفيضات الجمعة السوداء</h2>

          <div className="rating-row">
            <img src={rating} alt="" />
            <span className="rate-number">4.9</span>
          </div>

          <div className="price-row">
            <span className="current-price">99.99 ر.س</span>
            <span className="old-price">149.99 ر.س</span>
            <span className="discount">30%</span>
          </div>

          <p className="product-desc2">
            عروض مذهلة على منتجات الجمعة السوداء لفترة محدودة.
          </p>
        </div>
      </div>

      {/* ACTION */}
      <div className="action d-flex mt-4">
        <div className="installement">
          <img src={installement} alt="" />
          <h4 className="text-white">شحن دولي وداخلي</h4>
        </div>
        <div className="international">
          <img src={international} alt="" />
          <h4 className="text-white">تقسيط</h4>
        </div>
      </div>

      {/* SELLER */}
      <div className="product-bottom-box">
        <div className="seller-box">
          <div className="seller-info-wrap">
            <img src={Lstore} className="seller-img" alt="" />
            <div>
              <h4>متجر لورفي</h4>
              <p>الرياض، السعودية</p>
            </div>
          </div>

          <div className="share-icons">
            <img src={facebook} />
            <img src={whatsapp} />
            <img src={insta} />
          </div>
        </div>

        <hr />

        <h3 className="rate-title">تقييمك للمنتج</h3>
        <div className="stars">
          <img src={productrating} />
          <img src={productrating} />
          <img src={productrating} />
          <img src={productrating} />
          <img src={productrating} />
        </div>
      </div>
    </div>
  );
}
