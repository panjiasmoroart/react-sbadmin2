import React, { useRef } from "react";
import { useDropdown } from "../../../hooks/useDropdown";
import useOutsideClick from "../../../hooks/useOutsideClick";

const Modal = ({ id, title, children, footer, modalKey }) => {
  const ref = useRef();
  const { isOpen, toggle } = useDropdown(modalKey);

  // close modal, click outside
  useOutsideClick(ref, () => {
    if (isOpen) toggle();
  });

  // hide modal if not open
  if (!isOpen) return null;

  return (
    <div
      className="modal fade show"
      id={id}
      tabIndex={-1}
      role="dialog"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
      aria-modal="true"
    >
      <div className="modal-dialog" role="document" ref={ref}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              className="close"
              type="button"
              onClick={toggle}
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            {footer || (
              <>
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={toggle}
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
