import React, { useState } from "react";
import "../WinterjacketDetails/WinterjacketDetails.css";

import jacket1 from "../../assets/winter-shirt.jpg";
import jacket2 from "../../assets/winter-shirt.jpg";
import jacket3 from "../../assets/winter-shirt.jpg";

import rating from "../../assets/Star.png";
import installement from "../../assets/installement.png";
import international from "../../assets/international.png";
import Lstore from "../../assets/lorfi-store.jpg";
import productrating from "../../assets/product-rating.png";
import insta from "../../assets/insta.png";
import whatsapp from "../../assets/whatsapp.png";
import facebook from "../../assets/facebook.png";

export default function WinterjacketDetails() {
  const images = [jacket1, jacket2, jacket3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="product-page mt-5 pt-5 container c">

      {/* العنوان */}
      <h1 className="product-heading pt-5 mt-5">
        تفاصيل الإعلان / <span className="comm">جاكيت شتوي</span>
      </h1>

      <div className="product-wrapper">

        {/* الصور */}
        <div className="bproduct-image-box">
          <img
            src={images[currentIndex]}
            alt="جاكيت شتوي"
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
        <div className="product-info">
          <h2 className="product-title">جاكيت شتوي</h2>

          <div className="rating-row">
            <img src={rating} alt="rating" />
            <span className="rate-number">4.9</span>
          </div>

          <div className="price-row">
            <span className="current-price">149.99 ر.س</span>
          </div>

          <p className="product-desc2">
            جاكيت شتوي أنيق بخامة عالية الجودة، مناسب لأيام البرد القارس،
            مريح في اللبس ويجمع بين الأناقة والدفء.
          </p>
        </div>
      </div>

      {/* مميزات */}
      <div className="action mt-3 mb-3 d-flex justify-content-center">
        <div className="installement">
          <img src={installement} alt="" />
          <h4 className="text1 text-white">شحن داخلي</h4>
        </div>

        <div className="international">
          <img src={international} alt="" />
          <h4 className="text2 text-white">تقسيط</h4>
        </div>
      </div>

      {/* المتجر */}
      <div className="product-bottom-box mt-5 mb-5">
        <div className="seller-box">
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
            <img src={facebook} alt="" />
            <img src={whatsapp} alt="" />
            <img src={insta} alt="" />
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
