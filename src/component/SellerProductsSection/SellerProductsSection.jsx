import React from "react";
import { Link, useNavigate } from "react-router-dom";      
import "./SellerProductsSection.css";

import item1 from "../../assets/wool.jpg";
import item2 from "../../assets/wintershirt.jpg";
import item3 from "../../assets/classic.png";

import star from "../../assets/Star 3.png";
import carticon from "../../assets/whitecarts.png";

export default function SellerProductsSection() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      img: item1,
      name: "بلوزة صوف",
      rate: 4.9,
      desc: "بلوزة من الصوف لونها اسود تعطي جمال وأناقة",
      oldPrice: 450,
      price: 250,
      discount: 20,
    },
    {
      id: 2,
      img: item2,
      name: "تيشيرت شتوي",
      rate: 4.9,
      desc: "تيشيرت عملي وعصري خامته جيدة من الصوف",
      oldPrice: 450,
      price: 250,
      discount: 20,
    },
    {
      id: 3,
      img: item3,
      name: "بنطلون كلاسيك",
      rate: 4.9,
      desc: "بنطلون كلاسيك بيج يكسر من الامام يعطي مظهر فورمال",
      oldPrice: 450,
      price: 250,
      discount: 20,
    },
    {
      id: 4,
      img: item1,
      name: "بلوزة صوف",
      rate: 4.9,
      desc: "بلوزة من الصوف لونها اسود تعطي جمال وأنوثة",
      oldPrice: 450,
      price: 250,
      discount: 20,
    },
  ];

  return (
    <>
      <div className="products-wrapper ">

        {/* ==== GRID ==== */}
        <div className="customer-products-grid container mb-5 mt-5">
          {products.map((p) => (
            <Link
              to={`/seller/sellerproduct/${p.id}`}   // ✅ الرابط الصحيح
              key={p.id}
              className="customer-product-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="customer-discount">{p.discount}%</div>

              <img
                src={p.img}
                className="customer-product-img"
                alt={p.name}
              />

              <div className="heart">
                <i className="fa fa-heart heart-icon position-absolute" />
              </div>

              <div className="d-flex justify-content-between px-3">
                <h3 className="customer-product-name">{p.name}</h3>
                <div className="customer-rate">
                  <img src={star} alt="star" /> {p.rate}
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
                <img src={carticon} alt="cart" />
              </button>

            </Link>
          ))}
        </div>

      </div>
    </>
  );
}
