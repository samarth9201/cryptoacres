import Broker from "../../models/Broker.js";
import addProperty from "../Property/addProperty.js";

async function addBroker(req, res) {
  try {
    await Broker.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      licenceNumber: req.body.licenceNumber,
      contactNumber: req.body.contactNumber,
      email: {
        Personal: req.body.email.Personal,
        WorkCA: req.body.email.WorkCA,
      },
      password: req.body.password,
      location: {
        country: req.body.location.country,
        state: req.body.location.state,
        city: req.body.location.city,
      },
      approvedProperties: [req.body.approvedProperties],
    });
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error", error });
  }
}

export default addBroker;