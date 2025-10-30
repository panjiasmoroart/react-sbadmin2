import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { menuItems } from "../components/Sidebar/menuItems";
import Topbar from "../components/Topbar";
import { useToggledStore } from "../stores/useStore";
import Modal from "../components/Modal/Default";
import { useDropdown } from "../hooks/useDropdown";

const LayoutsApp = ({ children }) => {
  const location = useLocation();
  const { toggled, toggledBurgerMenu } = useToggledStore();
  const logoutModal = useDropdown("logoutModal");

  const [showTopBtn, setShowTopBtn] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  // === Handle Collapse Menu Active State ===
  const toggledMenu = (id) => {
    setActiveMenu((prev) => (prev === id ? "" : id));
  };

  useEffect(() => {
    menuItems.forEach((menu) => {
      if (
        menu.type === "collapse" &&
        (menu.children?.some((child) =>
          location.pathname.startsWith(child.path)
        ) ||
          menu.sections?.some((section) =>
            section.children?.some((child) =>
              location.pathname.startsWith(child.path)
            )
          ))
      ) {
        setActiveMenu(menu.id);
      }
    });
  }, [location]);

  // === Handle Scroll ArrowUp ===

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // console.log("Logout modal state (Layout):", logoutModal.isOpen);

  return (
    <div>
      {/* Page Wrapper */}
      <div id="wrapper">
        {/* Sidebar */}
        <Sidebar
          activeMenu={activeMenu}
          toggledMenu={toggledMenu}
          toggled={toggled}
        />
        {/* End of Sidebar */}

        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <Topbar toggledBurgerMenu={toggledBurgerMenu} />
            {/* End of Topbar */}
            {/* Begin Page Content */}
            <div className="container-fluid">{children}</div>
            {/* /.container-fluid */}
          </div>
          {/* End of Main Content */}

          {/* Footer */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; React SB Admin 2025</span>
              </div>
            </div>
          </footer>
          {/* End of Footer */}
        </div>
        {/* End of Content Wrapper */}
      </div>
      {/* End of Page Wrapper */}

      {/* Scroll to Top Button*/}
      {showTopBtn && (
        <a className="scroll-to-top rounded d-inline" onClick={goTop}>
          <i className="fas fa-angle-up" />
        </a>
      )}

      {/* Logout Modal */}
      {logoutModal.isOpen && (
        <Modal
          id="logoutModal"
          modalKey="logoutModal"
          title="Ready to Leave?"
          footer={
            <>
              <button
                className="btn btn-secondary"
                onClick={() => logoutModal.toggle()}
              >
                Cancel
              </button>

              <Link className="btn btn-primary" to="/login">
                Logout
              </Link>
            </>
          }
        >
          Select "Logout" below if you are ready to end your current session.
        </Modal>
      )}
    </div>
  );
};

export default LayoutsApp;
