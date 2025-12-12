import React, { useState } from "react";
import "../Shopping/Shopping.css";

import item1 from "../../assets/wool.jpg";
import item2 from "../../assets/wintershirt.jpg";
import item3 from "../../assets/classic.png";

import star from "../../assets/Star 3.png";
import carticon from "../../assets/carticon.png";

export default function Shopping() {
  const [price, setPrice] = useState(10);

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
      desc: "تيشيرت عملي خامته جيدة",
      oldPrice: 450,
      price: 250,
      discount: 20,
    },
    {
      id: 3,
      img: item3,
      name: "بنطلون كلاسيك",
      rate: 4.9,
      desc: "بنطلون بيج فورمال",
      oldPrice: 450,
      price: 250,
      discount: 20,
    },
  ];

  return (
    <div className="category-page ">
      <div className="container">
        <div className="row">

          {/* ===== SIDEBAR ===== */}
          <div className="col-md-3 filter-column pt-5">
            <div className="box">

              <h3 className="sidebar-title ">اختيار التصنيف</h3>

              {/* ✅ الفئة */}
              <div className="catsec">
                <h4 className="heading-filter">الفئة</h4>
                <label><input type="checkbox" /> حريمي</label>
                <label><input type="checkbox" /> رجالي</label>
                <label><input type="checkbox" /> أطفال</label>
                <label><input type="checkbox" /> أحذية</label>
              </div>

              <hr />

              {/* ✅ الأقسام */}
              <div className="catsec">
                <h4 className="heading-filter">الأقسام</h4>

                {/* إلكترونيات */}
                <p className="section-title">إلكترونيات</p>
                <label><input type="checkbox" /> موبايلات</label>
                <label><input type="checkbox" /> سماعات</label>
                <label><input type="checkbox" /> لابتوبات</label>
                <label><input type="checkbox" /> إكسسوارات</label>

                <hr />

                {/* ملابس */}
                <p className="section-title">ملابس</p>
                <label><input type="checkbox" /> حريمي</label>
                <label><input type="checkbox" /> رجالي</label>
                <label><input type="checkbox" /> أطفال</label>
                <label><input type="checkbox" /> أحذية</label>

                <hr />

                {/* أثاث */}
                <p className="section-title">أثاث</p>
                <label><input type="checkbox" /> كنب</label>
                <label><input type="checkbox" /> طاولات</label>
                <label><input type="checkbox" /> كراسي</label>
                <label><input type="checkbox" /> خزائن</label>

                <hr />

                {/* ألعاب */}
                <p className="section-title">ألعاب</p>
                <label><input type="checkbox" /> ذكاء</label>
                <label><input type="checkbox" /> سيارات</label>
                <label><input type="checkbox" /> دمى</label>
                <label><input type="checkbox" /> بلايستيشن</label>

                <hr />

                {/* مطبخ */}
                <p className="section-title">مطبخ</p>
                <label><input type="checkbox" /> خلاطات</label>
                <label><input type="checkbox" /> أدوات</label>
                <label><input type="checkbox" /> سكاكين</label>
                <label><input type="checkbox" /> أطقم</label>

                <hr />

                {/* صحة */}
                <p className="section-title">صحة</p>
                <label><input type="checkbox" /> أجهزة قياس</label>
                <label><input type="checkbox" /> مساج</label>
                <label><input type="checkbox" /> بخار</label>
                <label><input type="checkbox" /> عناية</label>

                <hr />

                {/* السوق */}
                <p className="section-title">السوق</p>
                <label><input type="checkbox" /> مواد غذائية</label>
                <label><input type="checkbox" /> منظفات</label>
                <label><input type="checkbox" /> معلبات</label>
                <label><input type="checkbox" /> مستلزمات</label>
              </div>

              <hr />

              {/* ✅ السعر */}
              <div className="filter-section">
                <h4 className="heading-filter">السعر</h4>
                <p className="price-range-text">ر.س 2 - ر.س {price}</p>
                <input
                  type="range"
                  min="2"
                  max="100"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="price-slider"
                />
              </div>

            </div>
          </div>

          {/* ===== PRODUCTS ===== */}
          <div className="col-md-9 shopping-left pt-5">
            <h1 className="breadcrumb-title">التسوق</h1>
            <p className="results">النتيجة 1 - 12 من 214526</p>

            <div className="customer-products-grid">
              {products.map((p) => (
                <div className="customer-product-card" key={p.id}>
                  <div className="customer-discount">{p.discount}%</div>

                  <img src={p.img} className="customer-product-img" alt="product" />

                  <div className="heart">
                    <i className="fa fa-heart heart-icon position-absolute" />
                  </div>

                  <div className="d-flex justify-content-between">
                    <h3 className="customer-product-name">{p.name}</h3>
                    <div className="customer-rate">
                      <img src={star} alt="" /> {p.rate}
                    </div>
                  </div>

                  <p className="customer-desc">{p.desc}</p>

                  <div className="customer-price">
                    <span className="new">{p.price} ر.س</span>
                    <span className="old">{p.oldPrice} ر.س</span>
                  </div>

                  <button className="customer-add-btn">
                    <span>إضافة للعربة</span>
                    <img src={carticon} alt="cart" />
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
