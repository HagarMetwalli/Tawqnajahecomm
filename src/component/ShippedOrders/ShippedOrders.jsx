import React from 'react'
import '../ShippedOrders/ShippedOrders.css'
import img from "../../assets/winter-shirt.jpg";
import { useNavigate, useLocation } from "react-router-dom";

export default function ShippedOrders() {

  const navigate = useNavigate(); 
  const location = useLocation();

  const orders = [
    {
      id: 1,
      title: "جاكيت شتوي",
      desc: "جاكيت أبيض - تخفيض خاص",
      category: "ملابس",
      qty: 1,
      price: "149.99 ر.س",
      img: img,
    },
  ];

  const goToDetails = (id) => {
    navigate(`/shippedordersdetails`);
  };

  return (
    <div className="container neworders-page mt-5 pt-5 mb-5 pb-5">

      <div className="row pt-5 mt-3 mb-5 pb-5">

        {/* ====== الجزء اليمين (التابات) ====== */}
        <div className="col-lg-3  d-lg-block ">
          <div className="orders-right-tabs">

            <button
              className={`cright-tab cright-btn shipped-btn ${location.pathname === "/confirmedorders" ? "active" : ""}`}
              onClick={() => navigate("/confirmedorders")}
            >
              الطلبات الحالية
            </button>

            <button
              className={`cright-tab cright-btn2 ${location.pathname === "/shippedorders" ? "active" : ""}`}
              onClick={() => navigate("/shippedorders")}
            >
              الطلبات المكتملة
            </button>

            <button
              className={`cright-tab cright-btn3${location.pathname === "/canceledorders" ? "active" : ""}`}
              onClick={() => navigate("/canceledorders")}
            >
              الطلبات الملغية
            </button>

          </div>
        </div>

        {/* ====== الجزء الشمال (الكروت) ====== */}
        <div className="col-lg-9 col-12 ">

          <div className="corders-wrapper">
            {orders.map((order) => (
              <div 
                key={order.id}
                className="shippedorder-card completedorder"
                onClick={() => goToDetails(order.id)}
                style={{ cursor: "pointer" }}
              >
                <div className='left-side text-left'>
                  <div className="complstatus-tab">المكتملة</div>
                  <p className="order-price-left">{order.price}</p>
                </div>

                <div className="order-content">
                  <div className="image-side">
                    <img src={order.img} alt="product" className="order-img" />

                    <div className="text-side">
                      <h4 className="product-title pt-5 pb-1">{order.title}</h4>
                      <p className="product-desc mb-0  pb-2">{order.desc}</p>

                      <p className="categorycanceled pt-0  ">
                        <span className="qty">x{order.qty}</span>
                        <span className="type">{order.category}</span>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
