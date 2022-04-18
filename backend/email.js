const User = require("./model/users");
const nodemailer = require("nodemailer");
const fs = require("fs");
const handlebars = require("handlebars");
const OTP = require("./model/otp");

var readHTMLFile = function (path, callback) {
  fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
    if (err) {
      throw err;
      callback(err);
    } else {
      callback(null, html);
    }
  });
};

const transporter = nodemailer.createTransport({
  host: "smtp.google.com",
  port: 465,
  secure: false,
  service: "Gmail",

  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  debug: false,
  logger: true,
});

const handleMail = async (req, res, next) => {
  try {
    var publicKey = req.body.PublicKey;
    var user = await User.findOne({ PublicKey: publicKey });

    readHTMLFile(__dirname + "/public/mail.html", async (err, html) => {
      const minim = 10000;
      const maxim = 99999;
      var otp = Math.floor(Math.random() * (maxim - minim + 1)) + minim;

      var template = handlebars.compile(html);
      var replacements = {
        firstname: user.FirstName,
        otp: otp,
      };

      var htmlToSend = template(replacements);

      var mail = {
        from: process.env.EMAIL,
        subject: "CryptoAcres: One Time Pasword",
        text: "Please use the following OTP for verification",
        html: htmlToSend,
      };

      mail.to = user.Email;

      transporter.sendMail(mail, async (error) => {
        if (!error) {
          OTP.findOneAndUpdate(
            { PublicKey: user.PublicKey },
            { OTP: otp },
            async (error, result) => {
              if (!error) {
                console.log("No Error");
                if (!result) {
                  var otpdata = new OTP({
                    PublicKey: user.PublicKey,
                    Email: user.Email,
                    OTP: otp,
                  });

                  await otpdata.save();
                }
                console.log("OTP Sent");
                res.send(`Email sent to ${user.FirstName}`);
              } else {
                throw error;
              }
            }
          );
        } else {
          res.status(500);
          res.send("An error occured while sending email");
          console.log(error);
        }
      });
    });
  } catch (error) {
    res.status(500);
    res.send("Error generating OTP");
  }
};

module.exports = handleMail;
