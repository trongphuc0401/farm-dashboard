import { useState, useContext, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";

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
import { PiPlantDuotone, PiBookBookmark } from "react-icons/pi";

import "./Sidebar.scss";

import { SidebarContext } from "../../context/SidebarContext";
// import { LOGOUT } from "../../redux/actions/authActions";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  // const dispatch = useDispatch();
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

  // const handleLogout = async () => {
  //   try {
  //     localStorage.removeItem("authToken");
  //     await dispatch(LOGOUT);
  //     navigate("/login");
  //   } catch (error) {
  //     console.error("Logout failed:", error);
  //     // Xử lý lỗi ở đây, có thể hiển thị thông báo cho người dùng
  //   }
  // };

  const menuItems = [
    { path: "/", icon: <MdOutlineGridView size={18} />, text: "Dashboard" },
    {
      path: "/plantings",
      icon: <PiPlantDuotone size={20} />,
      text: "Plantings",
    },
    {
      path: "/guide",
      icon: <PiBookBookmark size={20} />,
      text: "Guide",
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
    {
      path: "/logout",
      icon: <MdOutlineLogout size={20} />,
      text: "Logout",
      // onClick: handleLogout, // Thêm này
    },
  ];

  const renderMenuItems = (items) => (
    <ul className="menu-list">
      {items.map((item) => (
        <li className="menu-item" key={item.path}>
          <Link
            to={item.path}
            className={`menu-link ${activePath === item.path ? "active" : ""}`}
            onClick={item.onClick || handleClick(item.path)} // Thay đổi này
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
