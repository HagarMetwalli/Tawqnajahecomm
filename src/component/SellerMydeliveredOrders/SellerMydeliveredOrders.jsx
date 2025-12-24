import React from "react";
import "../SellerMydeliveredOrders/SellerMydeliveredOrders.css";
import { Link } from "react-router-dom"; // For navigation
import wintershirt from "../../assets/winter-shirt.jpg"; // Sample image

export default function SellerMyDeliveredOrders() {
  const orders = [
    {
      id: 1,
      title: "تيشيرت شتوي",
      desc: "تيشيرت شتوي ذات عرض خاص",
      price: "1500",
      img: wintershirt,
    },
  ];

  return (
    <div className="orders-page">
      {/* ===== Sidebar (Tabs) ===== */}
      <aside className="tabs-column">
        <Link to="/seller/sellerconfirmedorders" className="tab">
          المؤكدة (1)
        </Link>

        <Link to="/seller/sellershippedorders" className="tab">
          المشحونة (1)
        </Link>

        <Link to="/seller/sellermydeliveredorders" className="tab active">
          المكتملة (1)
        </Link>
      </aside>

      {/* ===== Main Content ===== */}
      <div className="delivered-wrapper container">
        <div className="completed-box">
          <div className="completed-statusdelivered">تم التسليم</div>

          {orders.map((order) => (
            <div key={order.id} className="completed-card">
              <div className="completed-contentdelivered">
                <img src={order.img} alt="" className="completed-img" />

                <div className="completed-text-wrapper">
                  <h5 className="completed-title">{order.title}</h5>
                  <p className="completed-desc">{order.desc}</p>

                  <div className="price-center">
                    <p className="mydeliverorder-price">{order.price} ر.س</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}