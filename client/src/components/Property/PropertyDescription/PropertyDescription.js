import React from "react";
import PropertyDescriptionItem from "./PropertyDescriptionItem";
import numDifferentiation from "../../../utils/NumDifferentiation";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function PropertyDescription(props) {
  const property = props.property;
  const price = "₹ " + numDifferentiation(parseInt(property.data.price.toString()));
  const pricePerUnitArea = "₹ " + property.data.pricePSF;
  const location =
    property.locationDetails.locality + ", " + property.locationDetails.city;
  let ageOfProperty = property.propertyProfile.ageOfProperty;
  if (ageOfProperty === 1) {
    ageOfProperty += " year";
  } else {
    ageOfProperty += " years";
  }
  return (
    <>
      <Paper
        style={{
          padding: 20,
          margin: 20,
        }}
        elevation={3}
      >
        <Typography
          component="h4"
          variant="h5"
          style={{ color: "#524C4C", marginBottom: 20 }}
        >
          Description
        </Typography>

        <Grid container spacing={2}>
          <PropertyDescriptionItem itemLabel="Price" itemValue={price} />
          <PropertyDescriptionItem
            itemLabel={`Price per ${property.propertyProfile.areaUnit}`}
            itemValue={pricePerUnitArea}
          />
          <PropertyDescriptionItem
            itemLabel="Carpet Area"
            itemValue={`${property.propertyProfile.carpetArea} ${property.propertyProfile.areaUnit}`}
          />
          <PropertyDescriptionItem
            itemLabel="Built-up Area"
            itemValue={`${property.propertyProfile.builtUpArea} ${property.propertyProfile.areaUnit}`}
          />
          <PropertyDescriptionItem itemLabel="Location" itemValue={location} />
          <PropertyDescriptionItem
            itemLabel="Type"
            itemValue={
              property.propertyType.charAt(0).toUpperCase() +
              property.propertyType.slice(1) +
              " " +
              property.propertyTypeTwo.charAt(0).toUpperCase() +
              property.propertyTypeTwo.slice(1)
            }
          />
          <PropertyDescriptionItem
            itemLabel="Availability Status"
            itemValue={
              property.propertyProfile.availabilityStatus
                .charAt(0)
                .toUpperCase() +
              property.propertyProfile.availabilityStatus.slice(1)
            }
          />
          {property.propertyProfile.availabilityStatus === "ready to move" && (
            <PropertyDescriptionItem
              itemLabel="Age Of Property"
              itemValue={property.propertyProfile.ageOfProperty + " years"}
            />
          )}
          {property.propertyProfile.availabilityStatus !== "ready to move" && (
            <PropertyDescriptionItem
              itemLabel="Possession by"
              itemValue={
                property.propertyProfile.expectedMonth +
                " " +
                property.propertyProfile.expectedYear
              }
            />
          )}
          <PropertyDescriptionItem
            itemLabel="Parking"
            itemValue={
              property.propertyProfile.parking.charAt(0).toUpperCase() +
              property.propertyProfile.parking.slice(1)
            }
          />
          <PropertyDescriptionItem
            itemLabel="Furnishing"
            itemValue={
              property.propertyProfile.furnishing.charAt(0).toUpperCase() +
              property.propertyProfile.furnishing.slice(1)
            }
          />
          {property.propertyType === "residential" && (
            <PropertyDescriptionItem
              itemLabel="Bedrooms"
              itemValue={property.propertyProfile.bedrooms}
            />
          )}
          {property.propertyType === "residential" && (
            <PropertyDescriptionItem
              itemLabel="Bathrooms"
              itemValue={property.propertyProfile.bathrooms}
            />
          )}
        </Grid>
      </Paper>
    </>
  );
}

export default PropertyDescription;
