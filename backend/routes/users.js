var express = require('express');
const handleMail = require('../email');
const OTP = require('../model/otp');
const User = require('../model/users');
var router = express.Router();

/* GET users listing. */
router.post('/', async function (req, res, next) {

  console.log(req.body)
  var user= await User.findOne({"PublicKey": req.body.PublicKey})

  if(user === null){
    res.send({
      found: false,
      message: "User Not Found"
    })
  }else{
    res.send({
      found: true,
      user: user
    });
  }
});

router.post('/signup', async function (req, res, next) {

  try {
    console.log(req.body)
    const newUser = new User({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      PublicKey: req.body.PublicKey,
      Email: req.body.Email,
      Username: req.body.Username
    })

    await newUser.save()
    res.send(newUser)
  } catch (error) {
    console.log(error)
    res.status(409)
    res.send(error)
  }
});

router.post('/signup/sendotp', async function(req, res, next){

  try {

    await handleMail(req, res, next)
    
  } catch (error) {
    res.status(500)
    res.send("Unable to Send OTP")
  }
})

router.post('/signup/verify', async function(req, res, next){
  try {

    var otp = await OTP.findOne({PublicKey: req.body.PublicKey})
    var now = Date.now()
    var valid = (now - otp.updatedAt) <= (15 * 60 * 1000) ? true : false

    if(valid){
      console.log(otp.OTP.toString() === req.body.otp)
      if(otp.OTP.toString() === req.body.otp){

        await User.findOneAndUpdate({PublicKey: req.body.PublicKey}, {Verified: true})
        await OTP.findOneAndDelete({PublicKey: req.body.PublicKey})

        res.status(200)
        res.send("Account Verified")
      }else{
        res.status(400)
        res.send("Invalid OTP")
      }
    }
  } catch (error) {
    res.status(500)
    res.send("Invalid OT")
    console.log(error)
  }
})

module.exports = router;
