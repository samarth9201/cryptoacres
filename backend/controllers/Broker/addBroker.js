import Broker from "../../models/Broker.js";

async function addBroker(req, res) {
  try {
    const brokerObject = {
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
      propertiesToVerify: [req.body.propertiesToVerify],
      approvedProperties: [req.body.approvedProperties],
    };

    await Broker.create(brokerObject);

    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error", error });
  }
}

export default addBroker;