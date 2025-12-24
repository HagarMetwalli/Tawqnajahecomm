import React from "react";
import "./SellerNewordersDetails.css";
import confirmcheck from '../../assets/confirmation.png';
import ordercheck from '../../assets/order2.png';
import delivered from '../../assets/delivered.png';

export default function SellerOrderDetails() {
  return (
    <div className="container orderdetails-page newordersdetails1 pb-5 mt-5 pt-5">

      {/* عنوان الصفحة */}
      <h1 className="page-titleneworders mt-5 pt-5  pb-3">
        تفاصيل الطلب / <span className="newordersdetails">الطلبات الجديدة</span>
      </h1>

      {/* زر الطلب */}
      <div className="buttonn mb-4">
        <button className="order-btn">الطلب</button>
      </div>

      {/* صندوق معلومات العميل */}
      <div className="customer-box">
        <div className="customer-info">

          <div className="right-side">
            <div className="icon-and-text">

              <div className="text-side">
                <h4 className="name text-dark">احمد محمد</h4>
                <p className="phone">+966 5145125</p>
                <p className="location">المملكة العربية السعودية، الرياض</p>
              </div>

              <div className="info">
                <i className="fa-solid fa-user"></i>
              </div>

            </div>
          </div>

          <div className="left-side-price">
            100 ر.س
          </div>

        </div>
      </div>

      {/* زر تفاصيل المنتج */}
      <div className="buttonn pt-1">
        <button className="product-btn">تفاصيل المنتج</button>
      </div>

      <div className="product-details-box">
        <div className="row-line">
          <span className="label">اسم المنتج</span>
          <p className="value">سترة شتوية بسعر خاص</p>
        </div>
        <div className="row-line">
          <span className="label">الكمية</span>
          <p className="value">1</p>
        </div>
        <div className="row-line">
          <span className="label">السعر</span>
          <p className="value">100 ر.س</p>
        </div>
        <div className="row-line">
          <span className="label">مصاريف الشحن</span>
          <p className="value">200 ر.س</p>
        </div>
        <div className="row-line total">
          <span className="label">الإجمالي</span>
          <p className="newordervalue">1000 ر.س</p>
        </div>
      </div>

      {/* زر حالة الطلب */}
      {/* <div className="buttonn">
        <button className="product-btncase">حالة الطلب</button>
      </div> */}

      {/* قسم الحالة */}
    {/* قسم حالة الطلب */}
<div className="order-status-box">


  <div className="status-card">
      <h3 className="status-title">حالة الطلب</h3>

    <p className="status-text">
      بتأكيدك للطلب سيتم إخطار العميل مباشرة
    </p>
  </div>

  <button className="confirm-order-btn mb-5 mt-3">
    تأكيد الطلب
  </button>

</div>


    </div>
  );
}
