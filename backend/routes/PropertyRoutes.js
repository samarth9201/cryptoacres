import express from "express";
import addProperty from "../controllers/Property/addProperty.js";

const PropertyRoutes = express.Router();

PropertyRoutes.post("/add-property", addProperty);

export default PropertyRoutes;
