import React from 'react'
import '../CanceledOrders/CanceledOrders.css'
import img from "../../assets/winter-shirt.jpg";
import { useNavigate, useLocation } from "react-router-dom";

export default function CanceledOrders() {

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
    navigate(`/canceledordersdetails`);
  };

  return (
    <div className="container neworders-page mt-5 pt-5  mb-5 pb-5">

      <div className="row mb-5">

        <div className="col-lg-3 d-lg-block pt-5 mt-2 mb-5 pb-5 ">
          <div className="orders-right-tabs">

            <button
                className={`cright-tab cright-btn2 ${
                  location.pathname === "/confirmedorders" ? "" : ""
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
                  location.pathname === "/canceledorders" ? "active" : ""
                }`}
                onClick={() => navigate("/canceledorders")}
              >
                الطلبات الملغية
              </button>

          </div>
        </div>

        {/* ====== الجزء الشمال (الكروت) ====== */}
        <div className="col-lg-9 col-12 mt-5 pt-3">

          <div className="corders-wrapper">
            {orders.map((order) => (
              <div 
                key={order.id}
                className="canceledorder-card  "
                onClick={() => goToDetails(order.id)}
                style={{ cursor: "pointer" }}
              >
                <div className='left-side text-left'>
                  <div className="canceledstatus-tab text-white fw-bold">الملغية</div>
                  <p className="cancelorder-price-left">{order.price}</p>
                </div>

                <div className="canceledorder-content">
                  <div className="image-side">
                    <img src={order.img} alt="product" className="order-img" />

                    <div className="text-side ">
                      <h4 className="product-title pt-5 pb-1">{order.title}</h4>
                      <p className="product-desc mb-0 pb-2">{order.desc}</p>

                      <p className="categorycanceled">
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
