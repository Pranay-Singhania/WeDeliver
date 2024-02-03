import React from "react";

const DropDownList = ({ options }) => {
  return (
    <>
      {options.map((option) => (
        <div className="dropdown-items" key={option.name} onClick={option.func}>
          <div className="dropdown-items-icon">{option.comp}</div>
          <div className="dropdown-items-name">{option.name}</div>
        </div>
      ))}
    </>
  );
};

export default DropDownList;
