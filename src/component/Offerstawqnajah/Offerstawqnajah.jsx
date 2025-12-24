import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Offerstawqnajah/Offerstawqnajah.css"; // make sure this file contains the responsive CSS

// الملابس
import item1 from "../../assets/wool.jpg";
import item2 from "../../assets/wintershirt.jpg";
import item3 from "../../assets/classic.png";

// الإلكترونيات
import airpods from "../../assets/airpods.jpg";
import watch from "../../assets/smartwatch.jpg";
import keyboard from "../../assets/keyb.jpg";
import laptop from "../../assets/lap.jpg";

// الأثاث
import furn1 from "../../assets/furn1.jpg";
import furn2 from "../../assets/furn2.jpg";
import furn3 from "../../assets/furn3.jpg";
import furn4 from "../../assets/furn4.jpg";

// المطبخ
import kitchen1 from "../../assets/kitchen1.jpg";
import kitchen2 from "../../assets/kitchen2.jpg";
import kitchen3 from "../../assets/kitchen3.jpg";
import kitchen4 from "../../assets/kitchen4.jpg";

// الألعاب
import game1 from "../../assets/game1.jpg";
import game2 from "../../assets/game2.jpg";
import game3 from "../../assets/game3.jpg";
import game4 from "../../assets/gamesimg.jpg";

// الصحة
import health1 from "../../assets/health1.jpg";
import health2 from "../../assets/health2.jpg";
import health3 from "../../assets/health3.jpg";
import health4 from "../../assets/health4.jpg";

// السوق
import market1 from "../../assets/market1.jpg";
import market2 from "../../assets/market2.jpg";
import market3 from "../../assets/market3.jpg";
import market4 from "../../assets/market4.jpg";

import star from "../../assets/Star 3.png";
import carticon from "../../assets/whitecarts.png";

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
      { id: 5, img: airpods, name: "سماعات بلوتوث", desc: "صوت نقي", oldPrice: 300, price: 220, rate: 4.9, discount: 25 },
      { id: 6, img: watch, name: "ساعة ذكية", desc: "متابعة صحية", oldPrice: 500, price: 380, rate: 4.8, discount: 20 },
      { id: 7, img: keyboard, name: "كيبورد RGB", desc: "إضاءة احترافية", oldPrice: 250, price: 180, rate: 4.7, discount: 20 },
      { id: 8, img: laptop, name: "لابتوب عملي", desc: "أداء قوي", oldPrice: 3500, price: 2999, rate: 4.9, discount: 15 },
    ],
  },

  {
    title: "الأثاث",
    products: [
      { id: 9, img: furn1, name: "كرسي مريح", desc: "تصميم عصري", oldPrice: 400, price: 299, rate: 4.8, discount: 25 },
      { id: 10, img: furn2, name: "طاولة قهوة", desc: "خشب طبيعي", oldPrice: 500, price: 350, rate: 4.9, discount: 30 },
      { id: 11, img: furn3, name: "كنبة فاخرة", desc: "3 مقاعد", oldPrice: 1500, price: 1199, rate: 5.0, discount: 20 },
      { id: 12, img: furn4, name: "وحدة تخزين", desc: "مودرن", oldPrice: 800, price: 599, rate: 4.7, discount: 20 },
    ],
  },

  {
    title: "المطبخ",
    products: [
      { id: 13, img: kitchen1, name: "خلاط كهربائي", desc: "قوة عالية", oldPrice: 300, price: 199, rate: 4.9, discount: 20 },
      { id: 14, img: kitchen2, name: "مقلاة جرانيت", desc: "غير لاصقة", oldPrice: 200, price: 150, rate: 4.8, discount: 25 },
      { id: 15, img: kitchen3, name: "غلاية كهربائية", desc: "سعة كبيرة", oldPrice: 180, price: 130, rate: 4.7, discount: 20 },
      { id: 16, img: kitchen4, name: "طقم أواني", desc: "خامة ممتازة", oldPrice: 500, price: 380, rate: 4.8, discount: 20 },
    ],
  },

  {
    title: "الألعاب",
    products: [
      { id: 17, img: game1, name: "لعبة تركيب", desc: "تنمية الذكاء", oldPrice: 80, price: 55, rate: 4.9, discount: 20 },
      { id: 18, img: game2, name: "سيارة تحكم", desc: "سرعة عالية", oldPrice: 150, price: 110, rate: 4.8, discount: 25 },
      { id: 19, img: game3, name: "دمية أطفال", desc: "ناعمة", oldPrice: 60, price: 40, rate: 4.7, discount: 20 },
      { id: 20, img: game4, name: "لعبة ذكاء", desc: "تركيز أعلى", oldPrice: 90, price: 65, rate: 4.9, discount: 20 },
    ],
  },

  {
    title: "الصحة",
    products: [
      { id: 21, img: health1, name: "ميزان ذكي", desc: "دقة عالية", oldPrice: 250, price: 180, rate: 4.8, discount: 20 },
      { id: 22, img: health2, name: "جهاز مساج", desc: "راحة فورية", oldPrice: 300, price: 230, rate: 5.0, discount: 25 },
      { id: 23, img: health3, name: "جهاز بخار", desc: "نضارة البشرة", oldPrice: 200, price: 150, rate: 4.7, discount: 20 },
      { id: 24, img: health4, name: "فرشاة كهربائية", desc: "تنظيف عميق", oldPrice: 180, price: 130, rate: 4.8, discount: 20 },
    ],
  },

  {
    title: "السوق",
    products: [
      { id: 25, img: market1, name: "منتج غذائي", desc: "جودة ممتازة", oldPrice: 30, price: 20, rate: 4.6, discount: 15 },
      { id: 26, img: market2, name: "سلعة يومية", desc: "طازجة", oldPrice: 25, price: 18, rate: 4.7, discount: 20 },
      { id: 27, img: market3, name: "منظف منزلي", desc: "قوة تنظيف", oldPrice: 40, price: 28, rate: 4.8, discount: 30 },
      { id: 28, img: market4, name: "مستلزمات", desc: "اقتصادي", oldPrice: 20, price: 14, rate: 4.7, discount: 15 },
    ],
  },
];

export default function Offerstawqnajah() {
  const navigate = useNavigate();

  return (
    <div className="offersproducts-wrapper mb-5 pb-5">
      <div className="offers container ">
        {sections.map((sec, index) => (
          <section key={index} className="">
            <div className="offerscustomer-products-header  ">
              <h2 className="offerscustomer-products-title ">{sec.title}</h2>
              {/* <span className="customer-view-more">رؤية المزيد</span> */}
            </div>

            {/* الكروت Bootstrap Responsive: change to col-md-3 for 4 columns at md and up */}
            <div className="row g-4 ">
              {sec.products.map((p) => (
                <div key={p.id} className="col-12 col-sm-6 col-md-3 pb-5 pt-4">
                  <ProductCard p={p} navigate={navigate} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------
      Component: Product Card
------------------------------------------------------------- */

function ProductCard({ p, navigate }) {
  return (
    <Link
      to="/productssection"
      state={{ product: p }}
      className="offerscustomer-product-card d-block h-100 d-flex flex-column mt-2"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="offerscustomer-discount">{p.discount}%</div>

      <img src={p.img} className="offerscustomer-product-img" alt={p.name} />

      <button className="customer-heart" aria-label="wishlist">
        <i className="fa fa-heart heart-icon" />
      </button>

      {/* card body grows to push button to bottom */}
      <div className="offerscustomer-card-body px-3 mt-2 ">
        <div className="d-flex justify-content-between align-items-start">
          <h3 className="offerscustomer-product-name">{p.name}</h3>
          <div className="customer-rate">
            <img src={star} alt="rate" style={{ width: 16, marginInlineStart: 6 }} /> {p.rate}
          </div>
        </div>

        <p className="offerscustomer-desc">{p.desc}</p>

        <div className="offerscustomer-price">
          <span className="new">{p.price} ر.س</span>
          <span className="old">{p.oldPrice} ر.س</span>
        </div>
      </div>

      <div className="offerscustomer-card-actions px-3 pb-1">
        <button
          className="offerscustomer-add-btn"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            navigate("/paymentpage");
          }}
        >
          <span className="carts">إضافة للعربة</span>
          <img src={carticon} alt="cart" />
        </button>
      </div>
    </Link>
  );
}