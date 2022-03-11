import Property from "../../models/Property.js";
import mongoose from "mongoose";
import express from "express";

async function addProperty(req, res) {
  try {
    await Property.create({
      imageUrlList: [req.body.imageUrlList],
      length: req.body.length,
      locationDetails: {
        city: req.body.locationDetails.city,
        locality: req.body.locationDetails.locality,
        society: req.body.locationDetails.society,
      },
      ownership: req.body.ownership,
      price: req.body.price,
      pricePerUnitArea: req.body.pricePerUnitArea,
      propertyAmenities: [req.body.propertyAmenities],
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
        expectedYear: req.body.propertyProfile.expectedMonth,
        furnishing: req.body.propertyProfile.furnishing,
        parking: req.body.propertyProfile.parking,
      },
      propertyType: req.body.propertyType,
      propertyTypeTwo: req.body.propertyTypeTwo,
    });
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error", error });
  }
}

export default addProperty;
