import express from "express";
import addBroker from "../controllers/Broker/addBroker.js";

const BrokerRoutes = express.Router();

BrokerRoutes.post("/add-broker", addBroker);

export default BrokerRoutes;