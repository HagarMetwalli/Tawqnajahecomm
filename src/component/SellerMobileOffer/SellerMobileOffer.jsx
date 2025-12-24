import React, { useState } from "react";
import "../SellerMobileOffer/SellerMobileOffer.css";

import mobile from "../../assets/mobile.jpg";
import img2 from "../../assets/key.jpg";
import img3 from "../../assets/winter-shirt.jpg";

import rating from "../../assets/Star.png";
import installement from "../../assets/installement.png";
import international from "../../assets/international.png";
import Lstore from "../../assets/lorfi-store.jpg";
import productrating from "../../assets/product-rating.png";
import insta from "../../assets/insta.png";
import whatsapp from "../../assets/whatsapp.png";
import facebook from "../../assets/facebook.png";

export default function SellerMobileOffer() {
  const images = [mobile, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <div className="product-page pt-1 container mb-5 pb-5">

      <h1 className="product-heading pt-5 mt-3 mb-5" >
        تفاصيل المنتج / <span className="comm">هاتف ذكي</span>
      </h1>

      <div className="product-wrapper col-md-6">

        <div className="bproduct-image-box">
          <img
            src={images[currentIndex]}
            alt="product"
            className="main-image"
          />

          <button className="slide-btn right" onClick={prevSlide}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="slide-btn left" onClick={nextSlide}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        {/* معلومات المنتج */}
        <div className="product-info col-md-6">
          <h2 className="product-title">هاتف ذكي</h2>

          <div className="rating-row">
            <img src={rating} alt="" />
            <span className="rate-number">4.8</span>
          </div>

          <div className="price-row">
            <span className="current-price">1999.99 ر.س</span>
          </div>

          <p className="product-desc2">
            هاتف بتقنية حديثة يدعم أحدث الميزات ويوفر أداءً عاليًا.
          </p>
        </div>
      </div>

      {/* الخدمات */}
      <div className="action mt-3 mb-3 d-flex justify-content-center">
        <div className="installement">
          <img src={installement} alt="" />
          <h4 className="text1 text-white">شحن دولي وداخلي</h4>
        </div>
        <div className="international">
          <img src={international} alt="" />
          <h4 className="text2 text-white">تقسيط</h4>
        </div>
      </div>

      {/* كارت المتجر */}
      <div className="product-bottom-box mt-5 mb-5">
        <div className="seller-box mt-4">

          <div className="seller-info-wrap">
            <img src={Lstore} className="seller-img" alt="seller" />
            <div className="seller-info">
              <h4 className="seller-name">متجر لورفي</h4>
              <p className="seller-location">
                الرياض، المملكة العربية السعودية
              </p>
            </div>
          </div>

          <div className="share-icons">
            <img src={facebook} />
            <img src={whatsapp} />
            <img src={insta} />
          </div>
        </div>

        <hr className="divider" />

        {/* التقييم */}
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
