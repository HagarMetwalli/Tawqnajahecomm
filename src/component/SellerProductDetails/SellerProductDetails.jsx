import React from "react";
import "./SellerProductDetails.css";
import productImg from "../../assets/winter-shirt.jpg";

export default function SellerProductDetails() {
  return (
    <div className="seller-product-details container">

      {/* Breadcrumb */}
      <p className="breadcrumb">
        الرئيسية / ذات صلة / جاكيت شتوي
      </p>

      <div className="details-wrapper">

        {/* الصور */}
        <div className="details-image">
          <img src={productImg} alt="جاكيت شتوي" />
        </div>

        {/* البيانات */}
        <div className="details-info">
          <h2 className="product-title">جاكيت شتوي</h2>

          <p className="product-price">149.99 ر.س</p>

          <p className="product-category">
            التصنيف: <span>ملابس</span>
          </p>

          <p className="product-desc">
            جاكيت شتوي أنيق مناسب لفصل الشتاء،
            خامة عالية الجودة وتصميم عصري يناسب جميع الأذواق.
          </p>

          <div className="product-actions">
            <button className="edit-btn">تعديل المنتج</button>
            <button className="delete-btn">حذف المنتج</button>
          </div>
        </div>

      </div>
    </div>
  );
}
