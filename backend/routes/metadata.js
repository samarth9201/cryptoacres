var express = require('express');
const Metadata = require('../model/metadata');
var router = express.Router();

router.get('/', async function(req, res, next){
    try {
        var objectId = req.query.objectId

        var metadata = await Metadata.findById(objectId)
        res.send(metadata)
    } catch (error) {
        res.status(404)
        res.send("Not Found")
    }
})

router.post('/', async function (req, res, next){

    try {
        var metadata = new Metadata({
            name: req.body.name,
            external_url: req.body.external_url,
            description: req.body.description,
            image: req.body.image,
            animation_url: req.body.animation_url,
            attributes:{
                type: req.body.attributes.type,
                verified: req.body.attributes.verified
            } 
        })
        await metadata.save()
        res.send(metadata)
    } catch (error) {
        res.status(500)
        res.send("Error Storing Metadata")
    }
})

module.exports = router;