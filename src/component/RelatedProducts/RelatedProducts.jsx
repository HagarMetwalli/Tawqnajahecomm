import React from "react";
import "./RelatedProducts.css";

import item1 from "../../assets/sale-friday.jpg";
import item2 from "../../assets/winter-shirt.jpg";
import item3 from "../../assets/burger-sale.jpg";
import item4 from "../../assets/mobile.jpg";
import item5 from "../../assets/key.jpg";
import { Link } from "react-router-dom";

export default function Related() {
  const items = [
    { img: item1, title: "تخفيضات الجمعة السوداء", desc: "عروض مذهلة على المنتجات...", price: "99.99 ر.س" },
    { img: item2, title: "جاكيت شتوي", desc: "جاكيت أنيق بتخفيض خاص...", price: "149.99 ر.س" },
    { img: item3, title: "عرض البرجر", desc: "وجبة برجر شهية بسعر مميز...", price: "29.99 ر.س" },
    { img: item4, title: "هاتف ذكي", desc: "هاتف بتقنية حديثة يدعم أحدث الميزات...", price: "1999.99 ر.س" },
  ];

  return (
    <div className="related-section mt-5 mb-5 pb-5 ">
      <div className="related-header">
        <h3>ذات صلة</h3>
        {/* <button className="more-btn">رؤية المزيد</button> */}
                    <Link to="/morerelated" className="related-view-btn"> رؤية المزيد </Link>

      </div>

    <div className="related-cards " >
  {items.map((item, idx) => (
    <Link 
      to={`/product/${item.id}`}
  state={{ product: item }}
      className="related-card" 
      key={idx}
    >
      <img src={item.img} alt={item.title} />
      <h4>{item.title}</h4>
      <p className="desc">{item.desc}</p>
      <p className="price">{item.price}</p>
    </Link>
  ))}
</div>

    </div>
  );
}
