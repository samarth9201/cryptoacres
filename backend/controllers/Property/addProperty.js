import Property from "../../models/Property.js";
import Broker from "../../models/Broker.js";

async function addProperty(req, res) {
  try {
    const listedProperty = {
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

    console.log("listedProperty: ");
    const response = await Property.create(listedProperty);
    console.log("response : " + response);
    
    //assign a broker to verify this property
    const broker = await Broker.findOne({ "location.city": req.body.locationDetails.city });
    if(!broker) {
      console.log("No brokers available in the area");
    }
    else {
      console.log("broker found");
      console.log(broker);
    }
    

    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error", error });
  }
}

export default addProperty;
