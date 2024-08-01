import { useState, useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LIGHT_THEME } from "../../constants/themeConstants";
import LogoBlue from "../../assets/images/logo_blue.svg";
import LogoWhite from "../../assets/images/logo_white.svg";
import {
  MdAddLocationAlt,
  MdOutlineClose,
  MdPermContactCalendar,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineMessage,
  MdOutlinePeople,
  MdOutlineSettings,
} from "react-icons/md";
import { PiPlantDuotone, PiCalculator } from "react-icons/pi";

import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.scss";
import { SidebarContext } from "../../context/SidebarContext";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-oepn-btn"
    ) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = (path) => (event) => {
    event.preventDefault();
    setActivePath(path);
    closeSidebar();
    navigate(path);
  };

  const menuItems = [
    { path: "/", icon: <MdOutlineGridView size={18} />, text: "Dashboard" },
    {
      path: "/plantings",
      icon: <PiPlantDuotone size={20} />,
      text: "Plantings",
    },
    {
      path: "/accounting",
      icon: <PiCalculator size={20} />,
      text: "Accounting",
    },
    {
      path: "/contacts",
      icon: <MdPermContactCalendar size={18} />,
      text: "Contacts",
    },
    {
      path: "/farm-map",
      icon: <MdAddLocationAlt size={20} />,
      text: "Farm Map",
    },
    {
      path: "/customer",
      icon: <MdOutlinePeople size={20} />,
      text: "Customer",
    },
    {
      path: "/messages",
      icon: <MdOutlineMessage size={18} />,
      text: "Messages",
    },
  ];

  const bottomMenuItems = [
    {
      path: "/settings",
      icon: <MdOutlineSettings size={20} />,
      text: "Settings",
    },
    { path: "/logout", icon: <MdOutlineLogout size={20} />, text: "Logout" },
  ];

  const renderMenuItems = (items) => (
    <ul className="menu-list">
      {items.map((item) => (
        <li className="menu-item" key={item.path}>
          <Link
            to={item.path}
            className={`menu-link ${activePath === item.path ? "active" : ""}`}
            onClick={handleClick(item.path)}
          >
            <span className="menu-link-icon">{item.icon}</span>
            <span className="menu-link-text">{item.text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <img src={theme === LIGHT_THEME ? LogoBlue : LogoWhite} alt="" />
          <span className="sidebar-brand-text">DraFarm.</span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">{renderMenuItems(menuItems)}</div>
        <div className="sidebar-menu sidebar-menu2">
          {renderMenuItems(bottomMenuItems)}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
