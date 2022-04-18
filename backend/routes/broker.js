var express = require('express');
const User = require('../model/users');
var router = express.Router();

router.post('/reserve', (req, res, next) =>{

    try {
        console.log(req.data)
        res.send("Reserve")
        
    } catch (error) {
        res.status(500)
        res.send("There was some error reserving the token for Verification")
    }
})

module.exports = router