import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { showModal } from "../../store/modalSlice";
import "./_index.scss";

const Modale = ({ children }) => {
  let dispatch = useDispatch();
  let menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef?.current?.contains(event.target)) {
        dispatch(showModal(false));
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="modal">
      <div ref={menuRef} className="modal-content">
        {children}
      </div>
    </div>
  );
};

export default Modale;
