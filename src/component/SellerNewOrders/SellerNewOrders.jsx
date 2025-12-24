import React from "react";
import { Link } from "react-router-dom";
import "./SellerNewOrders.css";
import img from "../../assets/winter-shirt.jpg";

export default function SellerNewOrders() {
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
    {
      id: 2,
      title: "جاكيت شتوي",
      desc: "جاكيت أبيض - تخفيض خاص",
      category: "ملابس",
      qty: 1,
      price: "149.99 ر.س",
      img: img,
    },
  ];

  return (
    <div className="container neworders-page neworderspage  mt-5 pt-5"  >

      <h1 className="heading pt-5 mt-5 pe-5">
        الطلبات الجديدة / <span className="main">الرئيسية</span>
      </h1>

      <div className="orders-wrapper pb-5 mb-4">
        {orders.map((order) => (
          <Link to="/seller/sellernewordersdetails" key={order.id} className="order-card-link">
            <div className="order-cardnorders  pt-5">

              <p className="neworder-price-left">{order.price}</p>

              <div className="neworder-content pt-2 ">
                <div className="image-side">
                  <img src={order.img} alt="product" />

                  <div className="text-sideneworder">
                    <h4 className="product-title">{order.title}</h4>
                    <p className="product-descnorders">{order.desc}</p>

                    <p className="category">
                      <span className="qty">x{order.qty}</span>
                      <span className="typenorders">{order.category}</span>
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
