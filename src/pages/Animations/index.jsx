import { useRef } from "react";
import LayoutsApp from "../../layouts/LayoutsApp";
import { useDropdown } from "../../hooks/useDropdown";
import useOutsideClick from "../../hooks/useOutsideClick";

const UtilitiesAnimation = () => {
  const animatedGrowInRef = useRef(null);
  const animatedFadeInRef = useRef(null);
  const dropdownButtonRef = useRef(null);

  const animatedGrowIn = useDropdown("animatedGrowIn");
  const animatedFadeIn = useDropdown("animatedFadeIn");
  const dropdownButton = useDropdown("dropdownButton");

  useOutsideClick(animatedGrowInRef, () => {
    if (animatedGrowIn.isOpen) animatedGrowIn.toggle();
  });

  useOutsideClick(animatedFadeInRef, () => {
    if (animatedFadeIn.isOpen) animatedFadeIn.toggle();
  });

  useOutsideClick(dropdownButtonRef, () => {
    if (dropdownButton.isOpen) dropdownButton.toggle();
  });

  return (
    <LayoutsApp>
      <div>
        {/* Page Heading */}
        <h1 className="h3 mb-1 text-gray-800">Animation Utilities</h1>
        <p className="mb-4">
          Bootstrap's default utility classes can be found on the official{" "}
          <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a>{" "}
          page. The custom utilities below were created to extend this theme
          past the default utility classes built into Bootstrap's framework.
        </p>
        {/* Content Row */}
        <div className="row">
          {/* Grow In Utility */}
          <div className="col-lg-6">
            <div className="card position-relative">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Grow In Animation Utilty
                </h6>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <code>.animated--grow-in</code>
                </div>
                <div className="small mb-1">Navbar Dropdown Example:</div>
                <nav className="navbar navbar-expand navbar-light bg-light mb-4">
                  <a className="navbar-brand" href="#">
                    Navbar
                  </a>
                  <ul className="navbar-nav ml-auto">
                    <li
                      className={`nav-item dropdown ${
                        animatedGrowIn.isOpen ? "show" : ""
                      }`}
                      ref={animatedGrowInRef}
                    >
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded={animatedGrowIn.isOpen}
                        onClick={(e) => {
                          e.preventDefault();
                          animatedGrowIn.toggle();
                        }}
                      >
                        Dropdown
                      </a>
                      <div
                        className={`dropdown-menu dropdown-menu-right animated--grow-in ${
                          animatedGrowIn.isOpen ? "show" : ""
                        }`}
                        aria-labelledby="navbarDropdown"
                      >
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
                <p className="mb-0 small">
                  Note: This utility animates the CSS transform property,
                  meaning it will override any existing transforms on an element
                  being animated! In this theme, the grow in animation is only
                  being used on dropdowns within the navbar.
                </p>
              </div>
            </div>
          </div>
          {/* Fade In Utility */}
          <div className="col-lg-6">
            <div className="card position-relative">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Fade In Animation Utilty
                </h6>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <code>.animated--fade-in</code>
                </div>
                <div className="small mb-1">Navbar Dropdown Example:</div>
                <nav className="navbar navbar-expand navbar-light bg-light mb-4">
                  <a className="navbar-brand" href="#">
                    Navbar
                  </a>
                  <ul className="navbar-nav ml-auto">
                    <li
                      className={`nav-item dropdown ${
                        animatedFadeIn.isOpen ? "show" : ""
                      }`}
                      ref={animatedFadeInRef}
                    >
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded={animatedFadeIn.isOpen}
                        onClick={(e) => {
                          e.preventDefault();
                          animatedFadeIn.toggle();
                        }}
                      >
                        Dropdown
                      </a>
                      <div
                        className={`dropdown-menu dropdown-menu-right animated--fade-in ${
                          animatedFadeIn.isOpen ? "show" : ""
                        }`}
                        aria-labelledby="navbarDropdown"
                      >
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
                <div className="small mb-1">Dropdown Button Example:</div>
                <div
                  className={`dropdown mb-4 ${
                    dropdownButton.isOpen ? "show" : ""
                  }`}
                  ref={dropdownButtonRef}
                >
                  <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={dropdownButton.isOpen}
                    onClick={(e) => {
                      e.preventDefault();
                      dropdownButton.toggle();
                    }}
                  >
                    Dropdown
                  </button>
                  <div
                    className={`dropdown-menu animated--fade-in ${
                      dropdownButton.isOpen ? "show" : ""
                    }`}
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
                <p className="mb-0 small">
                  Note: This utility animates the CSS opacity property, meaning
                  it will override any existing opacity on an element being
                  animated!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutsApp>
  );
};

export default UtilitiesAnimation;
