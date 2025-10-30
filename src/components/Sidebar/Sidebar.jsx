import { NavLink, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { menuItems } from "./menuItems";
import { useToggledStore } from "../../stores/useStore";

const Sidebar = ({ activeMenu, toggledMenu, toggled }) => {
  const { toggledBurgerMenu } = useToggledStore();
  const location = useLocation();

  return (
    <ul
      className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${
        toggled ? "toggled" : ""
      }`}
      id="accordionSidebar"
    >
      {/* 🔹 LOGO / BRAND AREA */}
      <Link
        to="/dashboard"
        className="sidebar-brand d-flex align-items-center justify-content-center"
      >
        <div
          className="sidebar-brand-icon rotate-n-15"
          style={{ fontSize: "2rem" }}
        >
          <FontAwesomeIcon icon={faReact} />
        </div>
        <div className="sidebar-brand-text mx-3">
          React <sup>sb admin</sup>
        </div>
      </Link>

      {/* Divider after logo */}
      {/* <hr className="sidebar-divider" /> */}

      {/* Dynamic Menu */}
      {menuItems.map((menu, i) => {
        switch (menu.type) {
          case "divider":
            return <hr key={i} className="sidebar-divider my-0" />;

          case "heading":
            return (
              <div key={i} className="sidebar-heading mt-3">
                {menu.title}
              </div>
            );

          case "link":
            return (
              <li
                key={menu.id}
                className={`nav-item ${
                  location.pathname === menu.path ? "active" : ""
                }`}
              >
                <NavLink to={menu.path} className="nav-link">
                  <i className={menu.icon} />
                  <span>{menu.title}</span>
                </NavLink>
              </li>
            );

          case "collapse":
            return (
              <li key={menu.id} className="nav-item">
                <button
                  type="button"
                  className={`nav-link btn btn-link text-start w-100 d-flex flex-column flex-md-row justify-content-md-between justify-content-center align-items-center ${
                    activeMenu === menu.id ? "" : "collapsed"
                  }`}
                  onClick={() => toggledMenu(menu.id)}
                  aria-expanded={activeMenu === menu.id}
                  style={{
                    textDecoration: "none",
                    fontWeight: activeMenu === menu.id ? 700 : 400,
                  }}
                >
                  <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                    <i
                      className={menu.icon}
                      style={{
                        color: activeMenu === menu.id ? "#fff" : "",
                      }}
                    />
                    <span className="ms-md-2 mt-1 mt-md-0">{menu.title}</span>
                  </div>

                  {/* Arrow hanya muncul untuk collapse menu */}
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className={`sidebar-arrow ${
                      activeMenu === menu.id ? "rotate" : ""
                    }`}
                    style={{ fontSize: "0.65rem", fontWeight: "bold" }}
                  />
                </button>

                <div
                  className={`collapse ${activeMenu === menu.id ? "show" : ""}`}
                >
                  <div className="bg-white py-2 collapse-inner rounded">
                    {/* === Case 1 : menu pakai header tunggal & children === */}
                    {menu.header && (
                      <>
                        <h6 className="collapse-header">{menu.header}</h6>
                        {menu.children?.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            className={({ isActive }) =>
                              "collapse-item" + (isActive ? " active" : "")
                            }
                          >
                            {child.title}
                          </NavLink>
                        ))}
                      </>
                    )}

                    {/* === Case 2 : menu pakai multiple sections === */}
                    {menu.sections &&
                      menu.sections.map((section, si) => (
                        <div key={si}>
                          <h6 className="collapse-header">{section.header}</h6>
                          {section.children.map((child) => (
                            <NavLink
                              key={child.path}
                              to={child.path}
                              className={({ isActive }) =>
                                "collapse-item" + (isActive ? " active" : "")
                              }
                            >
                              {child.title}
                            </NavLink>
                          ))}
                          {si < menu.sections.length - 1 && (
                            <div className="collapse-divider"></div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              </li>
            );

          default:
            return null;
        }
      })}

      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button
          className="rounded-circle border-0"
          id="sidebarToggle"
          onClick={toggledBurgerMenu}
        />
      </div>
      {/* Sidebar Message */}
      <div className="sidebar-card d-none d-lg-flex">
        <img
          className="sidebar-card-illustration mb-2"
          src="img/undraw_rocket.svg"
          alt="..."
        />
        <p className="text-center mb-2">
          <strong>React SB Admin</strong> is packed with premium features,
          components, and more!
        </p>
        <a className="btn btn-success btn-sm" href="#">
          Upgrade to Pro!
        </a>
      </div>
    </ul>
  );
};

export default Sidebar;
