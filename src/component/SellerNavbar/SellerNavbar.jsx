import { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import "./SellerNavbar.css";
import { useNavigate, NavLink } from "react-router-dom";
import '../../index.css';
import { FiUser } from "react-icons/fi";
import { CiCreditCard1 } from "react-icons/ci";
import { MdLanguage } from "react-icons/md";
import { FaHeadset, FaBullhorn, FaInfoCircle, FaShieldAlt, FaFileContract } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export default function SellerNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const sidebarLinks = [
    { icon: <FiUser />, text: "معلومات الحساب", path: "/seller/sellerprofileaccount" },
    { icon: <CiCreditCard1 />, text: "الحساب البنكي", path: "/seller/sellerbankaccount" },
    // { icon: <MdLanguage />, text: "اللغة", path: "/seller/sellerlanguage" },
    // { icon: <FaHeadset />, text: "دعم التطبيق", path: "/seller/sellersupport" },
    { icon: <FaBullhorn />, text: "تسويق", path: "/seller/sellermarketing" },
    // { icon: <FaInfoCircle />, text: "من نحن", path: "/seller/sellerabout" },
    { icon: <FaShieldAlt />, text: "سياسة الخصوصية", path: "/privacy" },
    { icon: <FaFileContract />, text: "الشروط والأحكام", path: "/terms" },
  ];

  return (
    <>
      <div className="tn-nav-main">
        <Container className="tn-nav-wrapper">

          {/* الأزرار جنب بعض */}
          <div className="tn-buttons-box">
            <button className="tn-nav-app-btn" >
              تحميل التطبيق
            </button>

            <button className="tn-nav-logout-small" onClick={() => navigate("/seller/sellerlogin")}>
              تسجيل الخروج
            </button>
          </div>

          {/* Links */}
          <Nav className={`tn-nav-linkss ${menuOpen ? "open" : ""}`}>
<NavLink
  to="/seller/sellerhome"
  className="tn-nav-link"
  onClick={() => setMenuOpen(false)}
>
  الرئيسية
</NavLink>         <NavLink to="/seller/sellermystore"
  className="tn-nav-link"
  onClick={() => setMenuOpen(false)}
>
  متجري
</NavLink>

<NavLink to="/seller/sellerconfirmedorders"
  className="tn-nav-link"
  onClick={() => setMenuOpen(false)}
>
  طلباتي
</NavLink>

          </Nav>

          <button className="tn-nav-hamburger" onClick={toggleMenu}>☰</button>
        </Container>
      </div>

      {/* Overlay */}
      <div
        className={`tn-nav-overlay ${sidebarOpen ? "show" : ""}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div className={`tn-nav-sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="tn-nav-close-sidebar" onClick={() => setSidebarOpen(false)}>
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
