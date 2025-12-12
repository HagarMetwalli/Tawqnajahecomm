import { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import "./Navbar.css";
import { useNavigate, NavLink } from "react-router-dom";
import '../../index.css'
import { FiUser } from "react-icons/fi";
import { CiCreditCard1 } from "react-icons/ci";
import { MdLanguage } from "react-icons/md";
import { FaHeadset, FaBullhorn } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const sidebarLinks = [
    { icon: <FiUser />, text: "معلومات الحساب", path: "/profileaccount" },
    { icon: <CiCreditCard1 />, text: "الحساب البنكي", path: "/bankaccount" },
    { icon: <MdLanguage />, text: "اللغة", path: "/language" },
    { icon: <FaHeadset />, text: "دعم التطبيق", path: "/eyesupport" },
    { icon: <FaBullhorn />, text: "تسويق", path: "/marketing" },
  ];

  return (
    <>
      {/* ===== MAIN NAVBAR ===== */}
      <div className="tn-nav-main">
        <Container className="tn-nav-wrapper">

          {/* ✅ الأزرار */}
          <div className="tn-buttons-box">
      

            {/* <button
              className="tn-nav-logout-small"
              onClick={() => navigate("/login")}
            >
              تسجيل الخروج
            </button> */}
            <button 
  className="tn-nav-logout-icon text-white" 
  onClick={() => navigate("/login")}
>
  <MdLogout />
  <span className="fw-bold text-white nav-logout">تسجيل الخروج</span>
</button>

          </div>

          {/* ✅ الروابط */}
   <Nav className={`tn-nav-links ${menuOpen ? "open" : ""}`}>
  <NavLink 
    to="/home" 
    className="tn-nav-link"
    onClick={() => setMenuOpen(false)}
  >
    الرئيسية
  </NavLink>

  <NavLink 
    to="/shopping" 
    className="tn-nav-link"
    onClick={() => setMenuOpen(false)}
  >
    التسوق
  </NavLink>

  <NavLink 
    to="/confirmedorders" 
    className="tn-nav-link"
    onClick={() => setMenuOpen(false)}
  >
    طلباتي
  </NavLink>

  <NavLink 
    to="/favorites" 
    className="tn-nav-link"
    onClick={() => setMenuOpen(false)}
  >
    المفضلة
  </NavLink>

  <NavLink 
    to="/abouttawq" 
    className="tn-nav-link"
    onClick={() => setMenuOpen(false)}
  >
    قالوا عن طوق نجاة
  </NavLink>

  <NavLink 
    to="/communitypartnerships" 
    className="tn-nav-link"
    onClick={() => setMenuOpen(false)}
  >
    الشراكات المجتمعية
  </NavLink>

  <NavLink 
    to="/marketers" 
    className="tn-nav-link"
    onClick={() => setMenuOpen(false)}
  >
    المسوّقين
  </NavLink>

  <NavLink 
    to="/sellers" 
    className="tn-nav-link"
    onClick={() => setMenuOpen(false)}
  >
    التجار
  </NavLink>

  <NavLink 
    to="/productssection" 
    className="tn-nav-link"
    onClick={() => setMenuOpen(false)}
  >
    عروض طوق نجاة
  </NavLink>
</Nav>
          {/* ✅ زر الهامبرجر */}
          <button className="tn-nav-hamburger" onClick={toggleMenu}>☰</button>

        </Container>
      </div>

      {/* ===== Overlay ===== */}
      <div
        className={`tn-nav-overlay ${sidebarOpen ? "show" : ""}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* ===== Sidebar ===== */}
      <div className={`tn-nav-sidebar ${sidebarOpen ? "open" : ""}`}>
        <button
          className="tn-nav-close-sidebar"
          onClick={() => setSidebarOpen(false)}
        >
          <IoClose size={26} />
        </button>

        <div className="tn-nav-sidebar-header">
          <h3>محمود استور</h3>
          <span className="date">تاريخ الانضمام 25/10/2025</span>
        </div>

        <ul className="tn-nav-sidebar-links">
          {sidebarLinks.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setSidebarOpen(false);
                navigate(item.path);
              }}
            >
              <span className="tn-nav-sidebar-item">
                {item.icon}
                {item.text}
              </span>
              <IoIosArrowBack />
            </li>
          ))}
        </ul>

        <button className="tn-nav-logout-btn">
          تسجيل الخروج من التطبيق <MdLogout />
        </button>
      </div>
    </>
  );
}
