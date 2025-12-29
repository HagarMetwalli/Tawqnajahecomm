import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import lock from "../../assets/lock-icon.png";
import avatar from "../../assets/rateproduct.png";
import "./Home.css";
import customerbanner from "../../assets/customerbanner.jpg";
import electronicsbanner from "../../assets/electronicsbanner.jpg";
import gamesbanner from "../../assets/gamesbanner.jpg";
import furniturebanner from "../../assets/furniturebanner.jpg";
import marketbanner from "../../assets/marketbanner.jpg";
import kitchenbanner from "../../assets/kitchenbanner.jpg";
import SuccessPartners from "../SuccessPartners/SuccessPartners";
import { BaseUrl } from "../../App"; 
import BuyerServicesUrl from "../../BuyerServicesUrl";
// Product card component
const ProductCard = ({ product, onClick }) => (
  <div className="product-card" onClick={() => onClick(product.id)} style={{ cursor: "pointer" }}>
    <img src={product.image[0]} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.priceAfterDiscount || product.price} {product.currency_type}</p>
  </div>
);

export default function Home() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  const [current, setCurrent] = useState(0);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const slides = [
    { title: "أحدث صيحات الموضة", desc: "استمتعي بتجربة تسوق عصرية بأفضل الأسعار", imgSrc: customerbanner },
    { title: "إلكترونيات بأحدث التقنيات", desc: "موبايلات – لابتوبات – أجهزة ذكية", imgSrc: electronicsbanner },
    { title: "قسم الألعاب", desc: "أقوى الألعاب والإكسسوارات بأفضل سعر", imgSrc: gamesbanner },
    { title: "قسم الأثاث", desc: "أثاث عصري يناسب كل الأذواق", imgSrc: furniturebanner },
    { title: "قسم السوبر ماركت", desc: "كل احتياجات البيت في مكان واحد", imgSrc: marketbanner },
    { title: "قسم المطبخ", desc: "أدوات مطبخ عملية وعصرية", imgSrc: kitchenbanner },
  ];

  useEffect(() => setAnimate(true), []);

  useEffect(() => {
    const interval = setInterval(() => setCurrent(prev => (prev + 1) % slides.length), 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Fetch categories & products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const resProducts = await axios.get(BaseUrl + BuyerServicesUrl.GetProductList, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const products = resProducts.data.data;

        const grouped = products.reduce((acc, product) => {
          const category = product.categoryName || "غير مصنف";
          if (!acc[category]) acc[category] = [];
          acc[category].push(product);
          return acc;
        }, {});

        const categoriesArray = Object.keys(grouped).map(key => ({
          categoryName: key,
          products: grouped[key],
        }));

        setCategories(categoriesArray);
      } catch (err) {
        console.error("حدث خطأ أثناء جلب البيانات:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handler عند النقر على أي منتج
  const handleProductClick = (id) => {
    navigate(`/product-details/${id}`);
  };

  return (
    <div className="hero-wrapper pt-5 mt-4" dir="rtl">
      {/* Hero Section */}
      <div className={`hero-container ${animate ? "animate" : ""}`}>
        <div className="hero-left">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.imgSrc}
              alt=""
              className={`slide-image ${index === current ? 'fade-in' : 'fade-out'}`}
            />
          ))}
        </div>

        <div className="hero-right">
          <span className="hero-tag">
            <img className="lock" src={lock} alt="آمن" />
            <p className="web-text mb-0">أفضل موقع للتسوق الإلكتروني</p>
          </span>

          <h1 className="hero-heading">{slides[current].title}</h1>
          <p className="web-order">{slides[current].desc}</p>

          <div className="products-info">
            <button
              className="customerbtn tn-nav-app-btn d-flex justify-content-center align-items-center"
              onClick={() => navigate("/marketing")}
            >
              <p className="btn-text mb-0">تسوق الآن</p>
              <i className="fa-solid fa-arrow-left ms-2"></i>
            </button>

            <Link to="/offerstawqnajah" className="btn-text">
              شاهد جميع المنتجات
            </Link>
          </div>

          {/* Ratings */}
          <div className="home-rating">
            <div className="icons-stack">
              <i className="plusicon">+</i>
              <img src={avatar} alt="" className="img-1" />
              <img src={avatar} alt="" className="img-2" />
              <img src={avatar} alt="" className="img-3" />
            </div>
            <div className="rate-box-text">
              <span className="ratemaintext">+ 4.9 تقييم</span>
              <p className="rate-sub mb-0">ثقة أكثر من 2000 عميل</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories & Products */}
      {loading ? (
        <p className="text-center mt-5">جاري تحميل المنتجات...</p>
      ) : (
        categories.map(cat => (
          <div key={cat.categoryName} className="category-section">
            <h2>{cat.categoryName}</h2>
            <div className="products-grid">
              {cat.products.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={handleProductClick} // تمرير الحدث
                />
              ))}
            </div>
          </div>
        ))
      )}

      <SuccessPartners />
    </div>
  );
}
