import React from "react";
import item1 from "../../assets/sale-friday.jpg";
import item2 from "../../assets/winter-shirt.jpg";
import item3 from "../../assets/burger-sale.jpg";
import item4 from "../../assets/mobile.jpg";
import "../SellerRelatedProducts/SellerRelatedProducts.css";
import { Link } from "react-router-dom";

export default function SellerRelatedProducts() {
  const items = [
    {
      id: 1,
      img: item1,
      title: "تخفيضات الجمعة السوداء",
      desc: "عروض مذهلة على المنتجات...",
      price: "99.99 ر.س",
    },
    {
      id: 2,
      img: item2,
      title: "جاكيت شتوي",
      desc: "جاكيت أنيق بتخفيض خاص...",
      price: "149.99 ر.س",
    },
    {
      id: 3,
      img: item3,
      title: "عرض البرجر",
      desc: "وجبة برجر شهية بسعر مميز...",
      price: "29.99 ر.س",
    },
    {
      id: 4,
      img: item4,
      title: "هاتف ذكي",
      desc: "هاتف بتقنية حديثة يدعم أحدث الميزات...",
      price: "1999.99 ر.س",
    },
  ];

  return (
    <div className="sellerrelated-section m-auto pb-5 pt-4">
      <div className="related-header">
        <h3 className="related-title">ذات صلة</h3>

        <Link to="/seller/sellermystore" className="related-view-btn">
          رؤية المزيد
        </Link>
      </div>

 <div className="related-cards">
  {items.map((item, index) => {
    let link = "#";

    if (index === 0) link = "/seller/sellerdiscountsdetails";
    if (index === 1) link = "/seller/winterjacketdetails";
    if (index === 2) link = "/seller/sellerburgeroffer";
    if (index === 3) link = "/seller/sellermobileoffer";

    return (
      <Link
        to={link}
        className="related-card"
        key={item.id}
      >
        <img src={item.img} alt={item.title} />
        <h4>{item.title}</h4>
        <p className="desc">{item.desc}</p>
        <p className="price">{item.price}</p>
      </Link>
    );
  })}
</div>
    </div>
  );
}
