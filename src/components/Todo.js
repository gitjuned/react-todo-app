import React from "react";
import CloseIcon from "../icons/close-icon.svg";

export default function Todo({ item, handleDelete, handleCheck }) {
  return (
    <div className="item-wrapper">
      <input
        id={item.value}
        type="checkbox"
        checked={item.isChecked}
        onChange={() => handleCheck(item.value)}
      />
      <label htmlFor={item.value}>{item.value}</label>
      <button>
        <img
          onClick={() => handleDelete(item.value)}
          src={CloseIcon}
          alt="close-icon"
        />
      </button>
    </div>
  );
}
