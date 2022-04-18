var express = require('express');
var multer = require('multer')
var path = require('path')
var router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(__dirname)
        cb(null, path.join(__dirname + '/../public/uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage }).single('file')

router.post('/', async function (req, res, next) {
    try {
        upload(req, res, (err) => {
            if (err) {
                console.log(err)
                res.status(500)
                res.send("Error Uploading File")
            } else {
                res.send("File Uploaded")
            }
        })

    } catch (error) {
        console.log(error)
        res.status(500)
        res.send("Error Uploading File" + error)
    }
})

module.exports = router;