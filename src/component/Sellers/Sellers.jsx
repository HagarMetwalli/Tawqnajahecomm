import { useNavigate } from "react-router-dom";
import "./Sellers.css";

import seller1 from "../../assets/seller1.jpg";
import seller2 from "../../assets/seller2.jpg";
import seller3 from "../../assets/seller3.jpg";
import seller4 from "../../assets/seller4.jpg";

export default function Sellers() {
  const navigate = useNavigate();

  const sellers = [
    {
      id: 1,
      name: "Electronics Store",
      type: "إلكترونيات",
      desc: "بيع جميع الأجهزة الإلكترونية الحديثة",
      img: seller1,
    },
    {
      id: 2,
      name: "Games Store",
      type: "ألعاب",
      desc: "أحدث الألعاب والإكسسوارات",
      img: seller2,
    },
    {
      id: 3,
      name: "Furniture Store",
      type: "أثاث",
      desc: "أثاث عصري لجميع المنازل",
      img: seller3,
    },
    {
      id: 4,
      name: "Clothes Store",
      type: "ملابس",
      desc: "أحدث أنواع الملابس الشتوية والصيفية",
      img: seller4,
    },
  ];

  return (
    <div className="sellers-page mt-5 mb-5">
      <h2 className="sellers-title pt-4 mt-5 ">جميع التجار</h2>

      <div className="sellers-grid mb-5 pb-5 ">
        {sellers.map((seller) => (
          <div
            key={seller.id}
            className="seller-card"
            onClick={() => navigate(`/sellersdetails/${seller.id}`)}
          >
            <img src={seller.img} alt={seller.name} />
            <h4>{seller.name}</h4>
            <p>{seller.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
