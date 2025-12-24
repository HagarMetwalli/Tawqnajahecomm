import React from "react";
import "./ConfirmedOrders.css";
import { useNavigate, useLocation } from "react-router-dom";
import wintershirt from "../../assets/winter-shirt.jpg";

export default function ConfirmedOrders() {
  const navigate = useNavigate();
  const location = useLocation();

  const orders = [
    {
      id: 1,
      title: "جاكيت شتوي",
      desc: "جاكيت أنيق بتخفيض خاص.",
      price: "149.99",
      qty: 1,
      img: wintershirt,
    },
  ];
 const goToDetails = (id) => {
    navigate(`/confirmordersdetails`);
  };
  return (
    <div className="confirmorders-page mt-5 pt-5 pb-5  mobileorders">
      <div className="container mt-5 pt-4 mb-5 pb-5 ">
        <div className="row">

          {/* ===== التابات ===== */}
          <div className="col-lg-3 d-lg-flex justify-content-start tabssection mb-5 pb-5">
            <div className="orders-right-tabs ">

              <button
                className={`cright-tab cright-btn3 ${
                  location.pathname === "/confirmedorders" ? "active" : ""
                }`}
                onClick={() => navigate("/confirmedorders")}
              >
                الطلبات الحالية
              </button>

              <button
                className={`cright-tab cright-btn2 ${
                  location.pathname === "/shippedorders" ? "" : ""
                }`}
                onClick={() => navigate("/shippedorders")}
              >
                الطلبات المكتملة
              </button>

              <button
                className={`cright-tab cright-btn3 ${
                  location.pathname === "/canceledorders" ? "" : ""
                }`}
                onClick={() => navigate("/canceledorders")}
              >
                الطلبات الملغية
              </button>

            </div>
          </div>

          {/* ===== الكروت ===== */}
          <div className="col-lg-9 col-12 justify-content-start">
            <div className="cards-wrapper mt-5">
              {orders.map((order) => (
                <div key={order.id} className="corder-mobile-card"
                onClick={() => goToDetails(order.id)}
  style={{ cursor: "pointer" }}>
                  <img
                    src={order.img}
                    alt={order.title}
                    className="corder-mobile-img"
                  />

                  <div className="order-mobile-content">
                    <h3 className="corder-mobile-title">{order.title}</h3>
                    <p className="corder-mobile-desc">{order.desc}</p>

                    <div className="order-bottom-row">
                      <span className="order-badge">x{order.qty}</span>
                      <span className="corder-type">ملابس</span>
                      <span className="confirmorder-price">
                        {order.price} ر.س
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
