import React, { useState } from "react";
import "./Register.css";

import registerbg from "../../assets/register-bg.png";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState("");
  const [statusCode, setStatusCode] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
const [loading, setLoading] = useState(false);
const [apiError, setApiError] = useState("");

  const validate = () => {
    let temp = {};

    if (!username.trim()) temp.username = "اسم المستخدم مطلوب";

    // ايميل صحيح
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) temp.email = "البريد الإلكتروني غير صالح";

    if (!country) temp.country = "يرجى اختيار الدولة";

    if (!phone) temp.phone = "رقم الجوال مطلوب";
    if (phone && (phone.length < 7 || phone.length > 12))
      temp.phone = "رقم الجوال يجب أن يكون بين 7 و12 رقم";

    if (!statusCode.trim()) temp.statusCode = "كود الإحالة مطلوب";

    if (!password || password.length < 6)
      temp.password = "كلمة المرور يجب أن تكون 6 أحرف على الأقل";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  setLoading(true);
  setApiError("");

  try {
    // const formData = new FormData();
    // formData.append("type", "customer");
    // formData.append("name", username);
    // formData.append("email", email);
    // formData.append("country", country);
    // formData.append("code_phone", code.replace("+", ""));
    // formData.append("phone", phone + Math.floor(Math.random() * 1000));
    // formData.append("password", password);
    // formData.append("password_confirmation", password);

    const response = await axios.post(
      "https://toknagah.viking-iceland.online/api/user/auth/register",
      // formData
      {type:"customer" ,
        username,
        email,
        code_phone:code,
        phone,
        country,
        password
      }
      
    );

    console.log("SUCCESS ", response.data);
    navigate("/login");

  } catch (error) {
    console.log("STATUS ", error.response?.status);
    console.log("DATA ", error.response?.data);
    console.log("ERRORS ", error.response?.errors);

    setApiError("فشل إنشاء الحساب");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="registeration">
      <div className="container-fluid">
        <div className="row">

          <div className="image col-12 col-md-6 p-0">
            <img src={registerbg} alt="Register" className="  login-image" style={{width:"88%"}} />
          </div>

          <div className="form col-12 col-md-6 d-flex flex-column text-end pt-1">

            <div className="mb-4 text-center">
              <img src={logo} alt="logo" />
            </div>

            {/* اسم المستخدم */}
            <label>اسم المستخدم</label>
            <input
              type="text"
              className="form-control"
              placeholder="ادخل اسم المستخدم"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <small className="text-danger">{errors.username}</small>}

            {/* البريد */}
            <label className="">البريد الإلكتروني</label>
            <input
              type="email"
              className="form-control"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}

            {/* الدولة */}
            <label>الدولة</label>
          <select
  value={country}
  onChange={(e) => setCountry(e.target.value)}
>
  <option value="">اختار الدولة</option>
  <option value="egypt">مصر</option>
  <option value="KSA">السعودية</option>
</select>

            {errors.country && <small className="text-danger">{errors.country}</small>}

            {/* رقم الجوال */}
            <label className="mt-3">رقم الجوال</label>
            <div className="d-flex gap-2">
  <select
  className="form-control phone-code-input"
  value={code}
  onChange={(e) => setCode(e.target.value)}
>
  <option value="" disabled hidden>
    اختر كود الدولة
  </option>
  <option value="+966">+966</option>
  <option value="+20">+20</option>
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

            {/* كود الإحالة */}
            <label className="pt-1 pb-3">كود الإحالة</label>
            <input
              type="text"
              className="form-control"
              placeholder="######"
              value={statusCode}
              onChange={(e) => setStatusCode(e.target.value)}
            />
            {errors.statusCode && <small className="text-danger">{errors.statusCode}</small>}

            {/* كلمة المرور */}
            <label className="">كلمة المرور</label>
            <div className="special-password-box ">
              <input
                type={showPassword ? "text" : "password"}
                className="special-password-input"
                placeholder="ادخل كلمة المرور " 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                className={`fa-regular ${showPassword ? "fa-eye" : "fa-eye-slash"} special-pass-icon`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>
            {errors.password && <small className="text-danger">{errors.password}</small>}

          <button
  className="btn w-100 text-white mt-2"
  onClick={handleSubmit}
  disabled={loading}
>
  {loading ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
</button>

            <p className="account-text mt-3 text-center fw-bold">
              تملك حساب ؟{" "}
              <span className="link" onClick={() => navigate("/login")}>
                تسجيل الدخول
              </span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
