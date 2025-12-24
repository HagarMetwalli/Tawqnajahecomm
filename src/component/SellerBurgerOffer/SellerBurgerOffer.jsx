import React, { useState } from "react";
import "../SellerBurgerOffer/SellerBurgerOffer.css";

import burger1 from "../../assets/burger-sale.jpg";
import burger2 from "../../assets/burger-sale.jpg";
import burger3 from "../../assets/burger-sale.jpg";

import rating from "../../assets/Star.png";
import installement from "../../assets/installement.png";
import international from "../../assets/international.png";
import Lstore from "../../assets/lorfi-store.jpg";
import productrating from "../../assets/product-rating.png";
import insta from "../../assets/insta.png";
import whatsapp from "../../assets/whatsapp.png";
import facebook from "../../assets/facebook.png";

export default function SellerBurgerOffer() {
  const images = [burger1, burger2, burger3];
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="product-page container pb-5 pt-5 mb-5">
      <h1 className="product-heading pt-5 mb-5">
        تفاصيل الإعلان / <span className="comm">عرض البرجر</span>
      </h1>

      <div className="product-wrapper mb-4">
        <div className="bproduct-image-box">
          <img src={images[currentIndex]} className="main-image " alt="" />
        </div>

        <div className="product-info">
          <h2 className="product-title">عرض البرجر</h2>

          <div className="rating-row">
            <img src={rating} alt="" />
            <span className="rate-number">4.7</span>
          </div>

          <div className="price-row">
            <span className="current-price">29.99 ر.س</span>
          </div>

          <p className="product-desc2">
            وجبة برجر شهية بسعر مميز لفترة محدودة.
          </p>
        </div>
      </div>

      <div className="action d-flex justify-content-center">
        <div className="installement">
          <img src={installement} alt="" />
          <h4 className="text-white">توصيل سريع</h4>
        </div>
        <div className="international">
          <img src={international} alt="" />
          <h4 className="text-white">دفع عند الاستلام</h4>
        </div>
      </div>

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
