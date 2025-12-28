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
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const validate = () => {
    let temp = {};
    if (!username.trim()) temp.username = "اسم المستخدم مطلوب";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) temp.email = "البريد الإلكتروني غير صالح";

    if (!country) temp.country = "يرجى اختيار الدولة";

    if (!phone) temp.phone = "رقم الجوال مطلوب";
    if (phone && (phone.length < 7 || phone.length > 12))
      temp.phone = "رقم الجوال يجب أن يكون بين 7 و12 رقم";

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
      const response = await axios.post(
        "https://toknagah.viking-iceland.online/api/user/auth/register",
        {
          type: "customer",
          username,
          email,
          country,
          code_phone: code.replace("+", ""),
          phone,
          password,
        }
      );

      console.log("REGISTER SUCCESS", response.data);
      navigate("/login");
    } catch (error) {
      console.log(error.response?.data);
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
            <img src={registerbg} alt="Register" className="login-image" />
          </div>

          <div className="form col-12 col-md-6 text-end">
            <div className="text-center mb-3">
              <img src={logo} alt="logo" />
            </div>

            <label>اسم المستخدم</label>
            <input
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <small className="text-danger">{errors.username}</small>}

            <label>البريد الإلكتروني</label>
            <input
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}

            <label>الدولة</label>
            <select
              className="form-control"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">اختر الدولة</option>
              <option value="Egypt">مصر</option>
              <option value="Saudi Arabia">السعودية</option>
              <option value="UAE">الإمارات</option>
            </select>
            {errors.country && <small className="text-danger">{errors.country}</small>}

            <label className="mt-2">رقم الجوال</label>
            <div className="d-flex gap-2">
              <select
                className="form-control"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              >
                <option value="">كود</option>
                <option value="+20">+20</option>
                <option value="+966">+966</option>
                <option value="+971">+971</option>
              </select>

              <input
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            {errors.phone && <small className="text-danger">{errors.phone}</small>}

            <label className="mt-2">كلمة المرور</label>
            <div className="special-password-box">
              <input
                type={showPassword ? "text" : "password"}
                className="special-password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                className={`fa-regular ${
                  showPassword ? "fa-eye" : "fa-eye-slash"
                }`}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            {errors.password && <small className="text-danger">{errors.password}</small>}

            {apiError && <p className="text-danger">{apiError}</p>}

            <button
              className="btn w-100 text-white mt-3"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
            </button>

            <p className="text-center mt-3">
              تملك حساب؟{" "}
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
