import React from "react";
import "../ConfirmOrdersDetails/ConfirmOrdersDetails.css";


export default function ConfirmOrderDetails() {
  return (
    <div className="container orderdetails-page">

      {/* عنوان الصفحة */}
      <h1 className="page-title cancelled pt-5 pb-3 mt-5 ">
        تفاصيل الطلب / <span className="neworders"> الطلبات الملغاة</span>
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

      {/* زر تفاصيل المنتج على اليمين */}
<div className="buttonn pt-1">
  <button className="product-btn">تفاصيل المنتج</button>
</div>
<div className="product-details-box ">

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
    <p className="value">1000 ر.س</p>
  </div>

</div>
  
 <div className="buttonn mb-5">
  <button className="product-btn">حالة الطلب</button>
</div> 
{/* <div className="canceled-message text-center pt-5 pb-5">
    <p>تم إلغاء الطلب من قبل العميل</p>
</div> */}




    </div>
  );
}
