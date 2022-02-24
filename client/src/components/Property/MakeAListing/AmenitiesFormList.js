import React from "react";

function AmenitiesFormList(props) {
  return (
    <>
      <ul className="checkbox-list">
        {props.list.map((option) => (
          <li className="checkbox-list-item">
            <input
              type="checkbox"
              id={option.name}
              name={option.name}
              value={option.value}
              className="checkbox-input"
            />
            <label for={option.name} className="checkbox-label">
              {" "}
              {option.value}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}

export default AmenitiesFormList;
