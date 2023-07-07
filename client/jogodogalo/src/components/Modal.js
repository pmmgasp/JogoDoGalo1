import React from "react";
import "./Modal.css";

function Modal({ setOpenModal, message }) {
  return (
    <div className="modal">
    <p className="text">{message}</p>
    <button className="modal-button" onClick={() => {setOpenModal(false);}}>Ok</button>
    </div>
)}

export default Modal;