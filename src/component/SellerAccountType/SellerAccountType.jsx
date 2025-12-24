import React, { useState } from "react";
import '../AccountType/AccountType.css';
import registerbg from "../../assets/register-bg.png";
import storeimg from '../../assets/Vector1.png';
import logo from "../../assets/logo.png";
import shoppingcart from "../../assets/Vector.png";
import { useNavigate } from "react-router-dom";

export default function AccountType() {

  const navigate = useNavigate();
  const [selected, setSelected] = useState("");

  const handleNext = () => {
    if (!selected) return;

    localStorage.setItem("accountType", selected);

    if (selected === "buyer") {
      navigate("/register");          // صفحة تسجيل المشتري
    } else if (selected === "seller") {
      navigate("/sellerregister");    // صفحة تسجيل البائع
    }
  };

  return (
    <div className="registeration">
      <div className="container-fluid">
        <div className="row">

          {/* Image */}
          <div className="image account col-12 col-md-6 p-0">
            <img src={registerbg} alt="img" className=" h-100" />
          </div>

          {/* Form */}
          <div className="form col-12 col-md-6 d-flex flex-column text-end">

            <div className="mb-4 text-center">
              <img src={logo} alt="img" />
            </div>

            <h3 className="mt-3 text-center">
              اختر نوع الحساب الذي يناسب احتياجاتك.
            </h3>

            <div className="d-flex mt-4">

              {/* ===== Buyer ===== */}
              <div
                className="shopping-image"
                onClick={() => setSelected("buyer")}
                style={{
                  border: selected === "buyer"
                    ? "2px solid #1b3f87"
                    : "2px solid #cccccc",
                }}
              >
                <img className="shoppingcart" src={shoppingcart} alt="buyer" />
                <p className="mt-2 fw-bold text-white texting-buyer">مشتري</p>
              </div>

              {/* ===== Seller ===== */}
              <div
                className="sellericon"
                onClick={() => setSelected("seller")}
                style={{
                  width: "47%",
                  height: "170px",
                  border: selected === "seller"
                    ? "2px solid #1b3f87"
                    : "2px solid #cccccc",
                  borderRadius: "12px",
                  display: "flex",
                  cursor: "pointer",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={storeimg} alt="seller" />
                <p className="mt-2 fw-bold">بائع</p>
              </div>

            </div>

            <button
              className="btn text-white font-bold mt-3 w-100"
              onClick={handleNext}
              disabled={!selected}
              style={{
                background: selected ? "#1b3f87" : "#aaa",
                cursor: selected ? "pointer" : "not-allowed"
              }}
            >
              التالي
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}
