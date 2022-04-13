import Property from "../../models/Property.js";
import mongoose from "mongoose";
import express from "express";

async function addProperty(req, res) {
  console.log("make a listing request received")
  
  let listedProperty = {
    imageUrlList: req.body.imageUrlList,
    locationDetails: {
      city: req.body.locationDetails.city,
      locality: req.body.locationDetails.locality,
      society: req.body.locationDetails.society,
    },
    ownership: req.body.ownership,
    price: req.body.price,
    pricePerUnitArea: req.body.pricePerUnitArea,
    propertyAmenities: req.body.propertyAmenities,
    propertyProfile: {
      ageOfProperty: req.body.propertyProfile.ageOfProperty,
      areaUnit: req.body.propertyProfile.areaUnit,
      availabilityStatus: req.body.propertyProfile.availabilityStatus,
      balconies: req.body.propertyProfile.balconies,
      bathrooms: req.body.propertyProfile.bathrooms,
      bedrooms: req.body.propertyProfile.bedrooms,
      builtUpArea: req.body.propertyProfile.builtUpArea,
      carpetArea: req.body.propertyProfile.carpetArea,
      expectedMonth: req.body.propertyProfile.expectedMonth,
      expectedYear: req.body.propertyProfile.expectedYear,
      furnishing: req.body.propertyProfile.furnishing,
      parking: req.body.propertyProfile.parking,
    },
    propertyType: req.body.propertyType,
    propertyTypeTwo: req.body.propertyTypeTwo,
  };

  console.log(myObject);

  try {
    
    await Property.create(listedProperty);
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error", error });
  }
}

export default addProperty;
