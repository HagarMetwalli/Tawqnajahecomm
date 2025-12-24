import React from 'react'
import '../SellerShippedOrders/SellerShippedOrders.css'
import img from "../../assets/winter-shirt.jpg";
import { useNavigate, useLocation } from "react-router-dom";

export default function SellerShippedOrders() {

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
    navigate(`/seller/sellershippedordersdetails`);
  };

  return (
    <div className="container neworders-page mt-5 pt-5 mb-5 pb-5">

      <div className="row">

        {/* ====== الجزء اليمين (التابات) ====== */}
        <div className="col-lg-3  d-lg-block pt-5 ">
          <div className="orders-right-tabs ">
            
           <button
                className={`cright-tab cright-btn ${
                  location.pathname === "/seller/sellerconfirmedorders" ? "active" : ""
                }`}
                onClick={() => navigate("/seller/sellerconfirmedorders")}
              >
                الطلبات الحالية
              </button>

              <button
                className={`cright-tab cright-btn2 ${
                  location.pathname === "/seller/sellershippedorders" ? "active" : ""
                }`}
                onClick={() => navigate("/seller/sellershippedorders")}
              >
                الطلبات المكتملة
              </button>

              <button
                className={`cright-tab cright-btn3 ${
                  location.pathname === "/seller/sellercanceledorders" ? "" : ""
                }`}
                onClick={() => navigate("/seller/sellercanceledorders")}
              >
                الطلبات الملغية
              </button>

          </div>
        </div>

        {/* ====== الجزء الشمال (الكروت) ====== */}
        <div className="col-lg-9 col-12 mt-5 pt-2 ">

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
                      <h4 className="product-title">{order.title}</h4>
                      <p className="product-desc">{order.desc}</p>

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
