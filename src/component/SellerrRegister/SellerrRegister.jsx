import React, { useState } from "react";
import './SellerrRegister.css';

import registerbg from "../../assets/register-bg.png";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function SellerRegister() {
  const navigate = useNavigate();

  // states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [code, setCode] = useState("+966");
  const [phone, setPhone] = useState("");
  const [statusCode, setStatusCode] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});

  // validation
  const validate = () => {
    let temp = {};

    if (!username.trim()) temp.username = "اسم المستخدم مطلوب";
    if (!email.trim()) temp.email = "البريد الإلكتروني مطلوب";
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

  // submit
  const handleSubmit = () => {
    if (!validate()) return;

    console.log("Registration successful (simulation only)");

    navigate("/seller/sellerlogin");
  };

  return (
    <div className="registeration">
      <div className="container-fluid">
        <div className="row">

          {/* صورة الشمال */}
          <div className="image col-12 col-md-6 p-0">
            <img src={registerbg} alt="Register" className=" login-image" style={{width:"84%"}} />
          </div>

          {/* الفورم */}
          <div className="form col-12 col-md-6 d-flex flex-column text-end">

            <div className="mb-4 text-center">
              <img src={logo} alt="logo" />
            </div>

            {/* اسم المستخدم */}
            <label>
              اسم المحل / البائع
              </label>
            <input
              type="text"
              className="form-control"
              style={{ backgroundColor: "#fafafa", padding: "20px 5px" }}
              placeholder="   اسم المحل / البائع"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <small className="text-danger">{errors.username}</small>}

            {/* البريد الإلكتروني */}
            <label className="mt-3">البريد الإلكتروني</label>
            <input
              type="email"
              className="form-control"
              style={{ backgroundColor: "#fafafa", padding: "20px 5px" }}
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
    <label className="mt-3">رقم الجوال</label>
            <div className="d-flex gap-2">
              <select
                className="form-control keyphone"
                style={{ width: "120px", backgroundColor: "#fafafa", padding: "20px 5px" }}
                value={code}
                onChange={(e) => setCode(e.target.value)}
              >
                <option value="+966">+966</option>
                <option value="+20">+20</option>
                <option value="+971">+971</option>
              </select>

              <input
                type="text"
                className="form-control"
                style={{ backgroundColor: "#fafafa", padding: "20px 5px" }}
                placeholder="123456789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            {errors.phone && <small className="text-danger">{errors.phone}</small>}

            {/* الدولة + المدينة */}
           <div className="row mt-3">

  <div className="col-12 col-md-6">
    <label className="mt-1">المدينة / المحافظة</label>
    <input
      type="text"
      className="form-control city-input"
      style={{ backgroundColor: "#fafafa", padding: "20px 5px" }}
      placeholder="المدينة"
      value={city}
      onChange={(e) => setCity(e.target.value)}
    />
  </div>

  <div className="col-12 col-md-6 mt-3 mt-md-0">
    <label>الدولة</label>
    <select
      className="form-control"
      style={{ backgroundColor: "#fafafa", padding: "20px 5px" }}
      value={country}
      onChange={(e) => setCountry(e.target.value)}
    >
      <option value="">اختر الدولة</option>
      <option value="Saudi Arabia">السعودية</option>
      <option value="Egypt">مصر</option>
      <option value="UAE">الإمارات</option>
    </select>

    {errors.country && (
      <small className="text-danger">{errors.country}</small>
    )}
  </div>

</div>


            {/* رقم الجوال */}
        
            {/* كود الإحالة */}
            <label className="mt-3">كود الإحالة</label>
            <input
              type="text"
              className="form-control"
              style={{ backgroundColor: "#fafafa", padding: "20px 5px" }}
              placeholder="######"
              value={statusCode}
              onChange={(e) => setStatusCode(e.target.value)}
            />
            {errors.statusCode && <small className="text-danger">{errors.statusCode}</small>}
         <label className="mt-3">
        العنوان</label>
            <input
              type="text"
              className="form-control"
              style={{ backgroundColor: "#fafafa", padding: "20px 5px" }}
              placeholder="ادخل العنوان كامل"
              value={statusCode}
              onChange={(e) => setStatusCode(e.target.value)}
            />
            {errors.statusCode && <small className="text-danger">{errors.statusCode}</small>}

            {/* الباسورد */}
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
                className={`fa-regular ${showPassword ? "fa-eye" : "fa-eye-slash"} special-pass-icon`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>
            {errors.password && <small className="text-danger">{errors.password}</small>}

            {/* زر إنشاء حساب */}
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
                className="link"
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
