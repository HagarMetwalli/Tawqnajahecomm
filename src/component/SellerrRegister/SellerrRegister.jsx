import React, { useState } from "react";
import "./SellerrRegister.css";

import registerbg from "../../assets/register-bg.png";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SellerRegister() {
  const navigate = useNavigate();

  // ===== States =====
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [code, setCode] = useState("+20");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  // ===== Validation =====
  const validate = () => {
    const temp = {};

    if (!username.trim()) temp.username = "اسم المحل مطلوب";
    if (!email.trim()) temp.email = "البريد الإلكتروني مطلوب";
    if (!phone.trim()) temp.phone = "رقم الجوال مطلوب";
    if (!country) temp.country = "يرجى اختيار الدولة";
    if (!password || password.length < 6)
      temp.password = "كلمة المرور 6 أحرف على الأقل";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  // ===== Submit =====
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const formData = new FormData();
      formData.append("type", "seller");
      formData.append("username", username);
      formData.append("email", email);
      formData.append("code_phone", code);
      formData.append("phone", phone);
      formData.append("country", country);
      formData.append("password", password);

      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      const res = await axios(
        "https://toknagah.viking-iceland.online/api/user/auth/register",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (!res.ok) {
        console.log("Server error:", data);
        alert(data.message || "فشل إنشاء الحساب");
        return;
      }

      // ===== Success =====
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.data.user));

      navigate("/seller/sellerlogin");
    } catch (error) {
      console.error(error);
      alert("مشكلة في الاتصال بالسيرفر");
    }
  };

  return (
    <div className="registeration">
      <div className="container-fluid">
        <div className="row">

          {/* image */}
          <div className="image col-12 col-md-6 p-0">
            <img
              src={registerbg}
              alt="register"
              className="login-image"
              style={{ width: "84%" }}
            />
          </div>

          {/* form */}
          <div className="form col-12 col-md-6 d-flex flex-column text-end">
            <div className="mb-4 text-center">
              <img src={logo} alt="logo" />
            </div>

            {/* username */}
            <label>اسم المحل / البائع</label>
            <input
              type="text"
              className="form-control"
              placeholder="اسم المحل / البائع"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <small className="text-danger">{errors.username}</small>}

            {/* email */}
            <label className="mt-3">البريد الإلكتروني</label>
            <input
              type="email"
              className="form-control"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}

            {/* phone */}
            <label className="mt-3">رقم الجوال</label>
            <div className="d-flex gap-2">
              <select
                className="form-control"
                style={{ width: "110px" }}
                value={code}
                onChange={(e) => setCode(e.target.value)}
              >
                <option value="+20">+20</option>
                <option value="+966">+966</option>
                <option value="+971">+971</option>
              </select>

              <input
                type="text"
                className="form-control"
                placeholder="123456789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            {errors.phone && <small className="text-danger">{errors.phone}</small>}

            {/* country */}
            <label className="mt-3">الدولة</label>
            <select
              className="form-control"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">اختر الدولة</option>
              <option value="egypt">مصر</option>
              <option value="saudi">السعودية</option>
              <option value="uae">الإمارات</option>
            </select>
            {errors.country && <small className="text-danger">{errors.country}</small>}

            {/* password */}
            <label className="mt-3">كلمة المرور</label>
            <div className="special-password-box">
              <input
                type={showPassword ? "text" : "password"}
                className="special-password-input"
                placeholder="ادخل كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                className={`fa-regular ${
                  showPassword ? "fa-eye" : "fa-eye-slash"
                } special-pass-icon`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>
            {errors.password && (
              <small className="text-danger">{errors.password}</small>
            )}

            {/* submit */}
            <button
              className="btn w-100 mt-4 text-white"
              style={{
                backgroundColor: "#1d3a77",
                borderRadius: "10px",
                padding: "12px 0",
                fontWeight: "600",
              }}
              onClick={handleSubmit}
            >
              إنشاء حساب
            </button>

            <p className="account-text mt-3 text-center fw-bold">
              تملك حساب ؟{" "}
              <span
                style={{ color: "#1d3a77", cursor: "pointer" }}
                onClick={() => navigate("/seller/sellerlogin")}
              >
                تسجيل الدخول
              </span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
