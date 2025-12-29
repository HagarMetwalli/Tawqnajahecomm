import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Categories.css";
import { BaseUrl } from "../../App"; 
import BuyerServicesUrl from "../../BuyerServicesUrl";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(BaseUrl + BuyerServicesUrl.GetCategory);
      setCategories(response.data.data.data);
    } catch (error) {
      console.error("حدث خطأ أثناء جلب الفئات:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>جاري تحميل الفئات...</p>;
  }

  return (
    <div className="customer-categories-section mt-5">
      <div className="container">
        <h2 className="customer-categories-title">الفئات</h2>
        <div className="customer-categories-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="customer-category-box">
              {cat.icon && (
                <img
                  src={cat.icon}
                  alt={cat.name}
                  className="customer-category-icon"
                  style={cat.name === "الكترونيات"
                    ? { width: "35px", height: "35px" }
                    : cat.name === "السوق"
                    ? { width: "45px", height: "35px", borderRadius: "6px" }
                    : {}}
                />
              )}
              <p className="customer-category-name">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
