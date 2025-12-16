import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Offerstawqnajah.css";
import item1 from "../../assets/wool.jpg"
import item2 from "../../assets/wintershirt.jpg"
import item3 from "../../assets/classic.png"


import star from "../../assets/Star 3.png";
import carticon from "../../assets/whitecarts.png";

export default function Offerstawqnajah() {
  const navigate = useNavigate();

const sections = [
  {
    title: "الملابس",
    products: [
      { id: 1, img: item1, name: "بلوزة صوف", desc: "دفء وأناقة", oldPrice: 450, price: 250, rate: 4.9, discount: 20 },
      { id: 2, img: item2, name: "تيشيرت شتوي", desc: "خامة ثقيلة", oldPrice: 400, price: 240, rate: 4.8, discount: 20 },
      { id: 3, img: item3, name: "بنطلون كلاسيك", desc: "ستايل فورمال", oldPrice: 500, price: 299, rate: 4.9, discount: 40 },
      { id: 4, img: item1, name: "جاكيت شتوي", desc: "مقاوم للبرد", oldPrice: 600, price: 399, rate: 4.7, discount: 35 },
    ],
  },

  {
    title: "الإلكترونيات",
    products: [
      { id: 5, img: item3, name: "سماعة بلوتوث", desc: "جودة عالية", oldPrice: 500, price: 299, rate: 4.6, discount: 30 },
    ],
  },

  {
    title: "الألعاب",
    products: [
      { id: 6, img: item1, name: "يد بلايستيشن", desc: "تحكم دقيق", oldPrice: 300, price: 199, rate: 4.8, discount: 25 },
    ],
  },

  {
    title: "السوبر ماركت",
    products: [
      { id: 7, img: item2, name: "منظف أرضيات", desc: "رائحة منعشة", oldPrice: 90, price: 60, rate: 4.5, discount: 20 },
    ],
  },
];

  return (
    <div className="products-wrapper">
      {sections.map((sec, index) => (
        <div key={index}>
       <div className="customer-products-header container pt-5 pb-3 d-flex justify-content-between align-items-center">
  <h2 className="customer-products-title">عروض طوق نجاة</h2>

  <span
    className="customer-view-more"
    onClick={() => navigate("/productssection")}
    style={{ cursor: "pointer" }}
  >
    رؤية المزيد
  </span>
</div>


          <div className="customer-products-grid container">
            {sec.products.slice(0, 4).map((p) => (
  <ProductCard key={p.id} p={p} navigate={navigate} />

            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProductCard({ p, navigate }) {
 return (
    <Link
      to={`/product/${p.id}`}
      className="customer-product-card"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="customer-discount">{p.discount}%</div>

      <img src={p.img} className="customer-product-img" alt={p.name} />

      <div className="heart">
        <i className="fa fa-heart heart-icon position-absolute" />
      </div>

      <div className="d-flex justify-content-around gap-5">
        <h3 className="customer-product-name">{p.name}</h3>
        <div className="customer-rate">
          <img src={star} /> {p.rate}
        </div>
      </div>

      <p
        className="customer-desc"
        dangerouslySetInnerHTML={{ __html: p.desc }}
      ></p>

      <div className="customer-price">
        <span className="new">{p.price} ر.س</span>
        <span className="old">{p.oldPrice} ر.س</span>
      </div>

      <button
        className="customer-add-btn"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          navigate("/paymentpage");
        }}
      >
        <span className="carts">إضافة للعربة</span>
        <img src={carticon} />
      </button>
    </Link>
  );
}
