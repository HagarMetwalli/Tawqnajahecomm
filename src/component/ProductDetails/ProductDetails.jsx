import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../ProductDetails/ProductDetails.css";

import installement from '../../assets/installement.png';
import international from '../../assets/international.png';
import Lstore from '../../assets/lorfi-store.jpg';
import productrating from '../../assets/product-rating.png';
import insta from '../../assets/insta.png';
import whatsapp from '../../assets/whatsapp.png';
import facebook from '../../assets/facebook.png';
import { IoStar } from "react-icons/io5";

import { BaseUrl } from "../../App";
import BuyerServicesUrl from "../../BuyerServicesUrl";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log(BaseUrl + BuyerServicesUrl.GetProductById.replace("{id}", id))

    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          BaseUrl + BuyerServicesUrl.GetProductById.replace("{id}", id),
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setProduct(response.data.data);
      } catch (err) {
        console.error("حدث خطأ أثناء جلب بيانات المنتج:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h2 className="text-center mt-5">جاري تحميل بيانات المنتج...</h2>;
  }

  if (!product) {
    return <h2 className="text-center mt-5">المنتج غير موجود</h2>;
  }

  const images = product.images || [product.image]; // افتراض أن API يعيد مصفوفة images أو صورة واحدة
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="product-page pt-2 container mt-5">

      <h1 className="product-heading">
        تفاصيل المنتج / <span className="comm">ذات صلة</span>
      </h1>

      <div className="product-wrapper md:col-md-6 col-12">

        <div className="product-image-boxdetails">
          <img src={images[currentIndex]} alt={product.name} className="main-image" />

          {images.length > 1 && (
            <>
              <button className="slide-btn right" onClick={prevSlide}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button className="slide-btn left" onClick={nextSlide}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </>
          )}
        </div>

        <div className="product-infoprodetails col-md-6">
          <h2 className="product-titleprodetails">{product.name}</h2>

          <div className="rating-rowdetails">
            <span className="star-wrapperprodetails">
              <IoStar />
            </span>
            <span className="rate-numberprodetails">{product.rate}</span>
          </div>

          <div className="price-row">
            <span className="current-price">{product.price} ر.س</span>
            {product.oldPrice && <span className="old-price">{product.oldPrice} ر.س</span>}
            {product.discount && <span className="discount">{product.discount}%</span>}
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
          {[...Array(5)].map((_, idx) => (
            <img key={idx} src={productrating} alt="star" />
          ))}
        </div>
      </div>

      {/* ===================== منتجات مشابهة ===================== */}
      {/* يمكن لاحقًا جلبها من API حسب نفس الفئة */}
    </div>
  );
}
