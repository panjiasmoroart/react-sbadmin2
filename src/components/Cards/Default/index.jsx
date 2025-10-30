import { useState, useEffect, useRef } from "react";
import { useDropdown } from "../../../hooks/useDropdown";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { useDropdownToggledStore } from "../../../stores/useStore";

const CardDefault = ({ title, children }) => {
  const dropdownRef = useRef(null);
  const revenueDropDown = useDropdown(title);
  const { closeAll } = useDropdownToggledStore();
  const [cardTitle, setCardTitle] = useState("");

  useEffect(() => {
    setCardTitle(title ? title : "Default Card Example");
  }, [title]);

  useOutsideClick(dropdownRef, () => {
    if (revenueDropDown.isOpen) closeAll();
  });

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-primary">{cardTitle}</h6>
        <div
          className={`dropdown no-arrow ${
            revenueDropDown.isOpen ? "show" : ""
          }`}
        >
          <a
            ref={dropdownRef}
            className="dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={revenueDropDown.isOpen}
            onClick={(e) => {
              e.preventDefault();
              revenueDropDown.toggle();
            }}
          >
            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
          </a>
          <div
            className={`dropdown-menu dropdown-menu-right shadow animated--fade-in ${
              revenueDropDown.isOpen ? "show" : ""
            }`}
            aria-labelledby="dropdownMenuLink"
          >
            <div className="dropdown-header">Dropdown Header:</div>
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
        </div>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default CardDefault;
