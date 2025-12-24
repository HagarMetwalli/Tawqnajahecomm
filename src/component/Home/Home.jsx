import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import lock from "../../assets/lock-icon.png";
import shopbtn from "../../assets/shop-arrow.png";
import avatar from "../../assets/rateproduct.png";
import "./Home.css";
import customerbanner from "../../assets/customerbanner.jpg";
import electronicsbanner from "../../assets/electronicsbanner.jpg";
import gamesbanner from "../../assets/gamesbanner.jpg";
import furniturebanner from "../../assets/furniturebanner.jpg";
import marketbanner from "../../assets/marketbanner.jpg";
import kitchenbanner from "../../assets/kitchenbanner.jpg";
import Categories from "../Categories/Categories";
import ProductsSection from "../ProductsSection/ProductsSection";
import Offerstawqnajah from "../Offerstawqnajah/Offerstawqnajah";
import SuccessPartners from "../SuccessPartners/SuccessPartners";
import OffersTawq from "../OffersTawq/OffersTawq";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import CategoryDetails from "../CategoryDetails/CategoryDetails";
import CategoryPage from "../CategoryPage/CategoryPage";

export default function Home() {
   const navigate = useNavigate(); 
  const [animate, setAnimate] = useState(false);
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: "أحدث صيحات الموضة",
      desc: "استمتعي بتجربة تسوق عصرية بأفضل الأسعار",
      imgSrc: customerbanner,
    },
    {
      title: "إلكترونيات بأحدث التقنيات",
      desc: "موبايلات – لابتوبات – أجهزة ذكية",
      imgSrc: electronicsbanner,
    },
    {
      title: "قسم الألعاب",
      desc: "أقوى الألعاب والإكسسوارات بأفضل سعر",
      imgSrc: gamesbanner,
    },
    {
      title: "قسم الأثاث",
      desc: "أثاث عصري يناسب كل الأذواق",
      imgSrc: furniturebanner,
    },
    {
      title: "قسم السوبر ماركت",
      desc: "كل احتياجات البيت في مكان واحد",
      imgSrc: marketbanner,
    },
    {
      title: "قسم المطبخ",
      desc: "أدوات مطبخ عملية وعصرية",
      imgSrc: kitchenbanner,
    },
  ];

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="hero-wrapper pt-5 mt-4">
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

          {/* التقييم */}
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

      <Categories />

       <ProductsSection /> 
      {/* <Offerstawqnajah />  */}
      {/* <OffersTawq/> */}
      <SuccessPartners />
    </div>
  );
}
