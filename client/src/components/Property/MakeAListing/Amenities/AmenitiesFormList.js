import React from "react";

function AmenitiesFormList(props) {
  return (
    <>
      <ul className="checkbox-list">
        {props.list.map((option, id) => (
          <li key={id} className="checkbox-list-item">
            <input
              type="checkbox"
              id={option.name}
              name={option.name}
              value={option.value}
              className="checkbox-input"
              inputProps={{ style: { fontFamily: "Montserrat" } }} // font size of input text
              InputLabelProps={{ style: { fontFamily: "Montserrat" } }}
            />
            <label htmlFor={option.name} className="checkbox-label">
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
