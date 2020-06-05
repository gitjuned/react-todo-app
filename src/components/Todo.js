import React from "react";
import CloseIcon from "../icons/close-icon.svg";

export default function Todo({ item, handleDelete }) {
  return (
    <div className="item-wrapper">
      <span>{item}</span>
      <button>
        <img
          onClick={() => handleDelete(item)}
          src={CloseIcon}
          alt="close-icon"
        />
      </button>
    </div>
  );
}
