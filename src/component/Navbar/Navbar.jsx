import { useState, useEffect, useRef } from "react";
import { Container, Nav } from "react-bootstrap";
import "./Navbar.css";
import { useNavigate, NavLink, Link } from "react-router-dom";
import '../../index.css'
import { FiUser } from "react-icons/fi";
import { CiCreditCard1 } from "react-icons/ci";
import { MdLanguage } from "react-icons/md";
import { FaHeadset, FaBullhorn, FaHome, FaShoppingCart, FaClipboardList, FaHeart, FaComments, FaHandshake, FaUsers, FaStore, FaGift } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target) && !e.target.closest('.tn-nav-hamburger')) {
        setMenuOpen(false);
      }
    }

    function handleScroll() {
      setMenuOpen(false);
    }

    document.addEventListener("click", handleClickOutside);

    const menuElement = menuRef.current;
    if (menuElement) {
      menuElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      if (menuElement) {
        menuElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const sidebarLinks = [
    { icon: <FaHome />, text: "الرئيسية", path: "/home" },
    { icon: <FaShoppingCart />, text: "التسوق", path: "/shopping" },
    { icon: <FaClipboardList />, text: "طلباتي", path: "/confirmedorders" },
    { icon: <FaHeart />, text: "المفضلة", path: "/favorites" },
    { icon: <FaComments />, text: "قالوا عن طوق نجاة", path: "/abouttawq" },
    { icon: <FaHandshake />, text: "الشراكات المجتمعية", path: "/communitypartnerships" },
    { icon: <FaUsers />, text: "المسوّقين", path: "/marketers" },
    { icon: <FaStore />, text: "التجار", path: "/sellers" },
    { icon: <FaGift />, text: "عروض طوق نجاة", path: "/productssection" },
    { icon: <FiUser />, text: "معلومات الحساب", path: "/profileaccount" },
    { icon: <CiCreditCard1 />, text: "الحساب البنكي", path: "/bankaccount" },
    { icon: <MdLanguage />, text: "اللغة", path: "/language" },
    { icon: <FaHeadset />, text: "دعم التطبيق", path: "/eyesupport" },
    { icon: <FaBullhorn />, text: "تسويق", path: "/marketing" },
  ];

  return (
    <>
      {/* ===== MAIN NAVBAR ===== */}
   <div className="buyertn-nav-main">
  <div className="buyertn-nav-wrapper">

    {/* LEFT */}
    <div className="tn-nav-left">
      <Link
        to="#"
        className="tn-nav-download-app"
        onClick={() => window.open("#", "_blank")}
      >
        تحميل التطبيق <i className="fa fa-download"></i>
      </Link>
    </div>

    {/* CENTER */}
    <Nav className="tn-nav-links">
      <NavLink to="/home" className="tn-nav-link">الرئيسية</NavLink>
      <NavLink to="/shopping" className="tn-nav-link">التسوق</NavLink>
      <NavLink to="/confirmedorders" className="tn-nav-link">طلباتي</NavLink>
      <NavLink to="/favorites" className="tn-nav-link">المفضلة</NavLink>
      <NavLink to="/abouttawq" className="tn-nav-link">قالوا عن طوق نجاة</NavLink>
      <NavLink to="/communitypartnerships" className="tn-nav-link">الشراكات المجتمعية</NavLink>
      <NavLink to="/marketers" className="tn-nav-link">المسوّقين</NavLink>
      <NavLink to="/sellers" className="tn-nav-link">التجار</NavLink>
      <NavLink to="/offerstawqnajah" className="tn-nav-link">عروض طوق نجاة</NavLink>
    </Nav>

    {/* RIGHT */}
    <button
      className="tn-nav-hamburger"
      onClick={toggleMenu}
    >
      ☰
    </button>

  </div>
</div>

    </>
  );
}
