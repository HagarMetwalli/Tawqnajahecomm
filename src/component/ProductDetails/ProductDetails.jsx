import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../ProductDetails/ProductDetails.css";

import installement from '../../assets/installement.png';
import international from '../../assets/international.png';
import Lstore from '../../assets/lorfi-store.jpg';
import productrating from '../../assets/product-rating.png';
import insta from '../../assets/insta.png';
import whatsapp from '../../assets/whatsapp.png';
import facebook from '../../assets/facebook.png';
import { IoStar } from "react-icons/io5";

export default function ProductDetails() {

  const products = [
    {
      id: 1,
      img: require("../../assets/wool.jpg"),
      name: "بلوزة صوف",
      rate: 4.9,
      desc: "بلوزة من الصوف لونها اسود تعطي جمال وأناقة",
      oldPrice: 450,
      price: 250,
      discount: 20,
    },
    {
      id: 2,
      img: require("../../assets/classic.png"),
      name: "بنطلون كلاسيك",
      rate: 4.9,
      desc: "بنطلون كلاسيك بيج يكسر من الامام يعطي مظهر فورمال",
      oldPrice: 450,
      price: 250,
      discount: 20,
    },
    {
      id: 3,
      img: require("../../assets/wintershirt.jpg"),
      name: "تيشيرت شتوي",
      rate: 4.9,
      desc: "تيشيرت عملي وعصري خامته جيدة من الصوف",
      oldPrice: 450,
      price: 250,
      discount: 20,
    },
    {
      id: 4,
      img: require("../../assets/wool.jpg"),
      name: "بلوزة صوف",
      rate: 4.9,
      desc: "بلوزة من الصوف لونها اسود تعطي جمال وأنوثة",
      oldPrice: 450,
      price: 250,
      discount: 20,
    },
  ];

  const { id } = useParams();
  const product = products.find((item) => item.id == id);

  // ✅ Hooks لازم تيجي قبل أي شرط
  const images = product ? [product.img] : [];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!product) {
    return (
      <h2 className="text-center mt-5">
        المنتج غير موجود
      </h2>
    );
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="product-page pt-2 container mt-5">

      <h1 className="product-heading">
        تفاصيل المنتج / <span className="comm">ذات صلة</span>
      </h1>

      <div className="product-wrapper md:col-md-6 col-12">

        <div className="product-image-boxdetails">
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

        <div className="product-infoprodetails col-md-6">
          <h2 className="product-titleprodetails">{product.name}</h2>

          <div className="rating-rowdetails">
            <span className="star-wrapperprodetails">
              <IoStar />
            </span>
            <span className="rate-numberprodetails">
              {product.rate}
            </span>
          </div>

          <div className="price-row">
            <span className="current-price">{product.price} ر.س</span>

            {product.oldPrice && (
              <span className="old-price">{product.oldPrice} ر.س</span>
            )}

            {product.discount && (
              <span className="discount">{product.discount}%</span>
            )}
          </div>

          <p className="product-descpro2">{product.desc}</p>
        </div>

      </div>

      <div className="action mt-3 mb-3 d-flex justify-content-center">
        <div className="installement">
          <img src={installement} className="image" />
          <h4 className="text1 text-white">شحن دولي وداخلي</h4>
        </div>

        <div className="international">
          <img src={international} />
          <h4 className="text2 text-white">تقسيط</h4>
        </div>
      </div>

      <div className="product-bottom-box mt-5 mb-5">

        <div className="seller-box mt-4">
          <div className="seller-info-wrap">
            <img src={Lstore} className="seller-img" alt="seller" />
            <div className="seller-info">
              <h4 className="seller-name">متجر لورفي</h4>
              <p className="seller-location">الرياض، المملكة العربية السعودية</p>
            </div>
          </div>

          <div className="share-icons">
            <img src={facebook} />
            <img src={whatsapp} />
            <img src={insta} />
          </div>
        </div>

        <hr className="divider" />

        <h3 className="rate-title">تقييمك للمنتج</h3>

        <div className="stars">
          <img src={productrating} />
          <img src={productrating} />
          <img src={productrating} />
          <img src={productrating} />
          <img src={productrating} />
        </div>

      </div>

      {/* ===================== منتجات مشابهة ===================== */}
      <div className="similar-products container mt-5">

        <div className="similar-header d-flex justify-content-between">
          <h2 className="similar-title">منتجات مشابهة</h2>
          <span className="similar-more">رؤية المزيد</span>
        </div>

        <div className="similar-grid">
          {products.map((item) => (
            <div className="similar-card" key={item.id}>

              <div className="discount-tag">20%</div>

              <img src={item.img} className="similar-img" />

              <div className="similar-info">
                <h3 className="similar-name">{item.name}</h3>

                <p className="similar-desc">{item.desc}</p>

                <div className="similar-price">
                  <span className="new">{item.price} ر.س</span>
                  <span className="old">{item.oldPrice} ر.س</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
