import React from 'react'
import '../SellerCanceledOrders/SellerCanceledOrders.css'
import img from "../../assets/winter-shirt.jpg";
import { useNavigate, useLocation } from "react-router-dom";

export default function SellerCanceledOrders() {

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
    navigate(`/seller/sellercanceledordersdetails`);
  };

  return (
    <div className="container neworders-page mt-5 pt-5 mb-5 pb-5">

      <div className="row">

        {/* ====== الجزء اليمين (التابات) ====== */}
        <div className="col-lg-3  d-lg-block  mb-5 ">
          <div className="orders-right-tabs pt-5">

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
                  location.pathname === "/seller/sellershippedorders" ? "" : ""
                }`}
                onClick={() => navigate("/seller/sellershippedorders")}
              >
                الطلبات المكتملة
              </button>

              <button
                className={`cright-tab cright-btn3 ${
                  location.pathname === "/seller/sellercanceledorders" ? "active" : ""
                }`}
                onClick={() => navigate("/seller/sellercanceledorders")}
              >
                الطلبات الملغية
              </button>

          </div>
        </div>

        {/* ====== الجزء الشمال (الكروت) ====== */}
        <div className="col-lg-9 col-12 mt-5 pt-2">

          <div className="corders-wrapper ">
            {orders.map((order) => (
              <div 
                key={order.id}
                className="order-card completedorder"
                onClick={() => goToDetails(order.id)}
                style={{ cursor: "pointer" }}
              >
                <div className='left-side text-left pt-3'>
                  <div className="canceledstatus-tab text-white fw-bold">الملغية</div>
                  <p className="cancelorder-price-left">{order.price}</p>
                </div>

                <div className="order-content ">
                  <div className="image-side">
                    <img src={order.img} alt="product" className="order-img" />

                    <div className="text-side">
                      <h4 className="product-title pt-5">{order.title}</h4>
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
