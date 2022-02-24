import React from "react";
import { residentialProperty, commercialProperty } from "./PropertyTypes";

function PropertyOptions(props) {
  let propertyOptionsArray = residentialProperty;
  if (props.propertyType === "commercial") {
    propertyOptionsArray = commercialProperty;
  }
  function handleChangePropertyTypeTwo(event) {
    props.setPropertyTypeTwo(event.target.value);
  }

  return (
    <>
      <ul className="radio-list">
        {propertyOptionsArray.map((property) => {
          return (
            <li className="radio-list-item">
              <input
                type="radio"
                value={property.label}
                name="property-type2"
                id={property.id}
                onChange={handleChangePropertyTypeTwo}
                className="radio-input"
              />
              <label className="radio-label" for={property.id}>
                {property.label}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default PropertyOptions;
