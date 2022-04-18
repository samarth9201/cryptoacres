var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var crypto = require('crypto');
var mongoose = require('mongoose')
var debug = require('debug')('backend:server');
const multer = require("multer");
require('dotenv').config()
const { GridFsStorage } = require("multer-gridfs-storage");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var metadataRouter = require('./routes/metadata');
var brokerRouter = require('./routes/broker')

const url = process.env.DATABASE_URL

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/metadata', metadataRouter)
app.use('/api/broker', brokerRouter)

mongoose.connect(url).then(() =>{
  debug("Connected to Database")
})

const conn = mongoose.createConnection(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

let gfs

conn.once("open", () => {
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "uploads"
  })
})

app.post("/upload", (req, res) => {

  // Storage
  var filename
  const storage = new GridFsStorage({
    url: url,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          filename = buf.toString("hex") + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: "uploads"
          };
          resolve(fileInfo);
        });
      });
    }
  });

  const upload = multer({
    storage
  }).single("file");

  upload(req, res, (err) => {
    if (err) {
      res.send(500)
      res.send("Error Uploading File")
    }
    res.json({ filename: filename })
  })
})

app.get("/files/:filename", async (req, res) => {
  var file = gfs.find({ filename: req.params.filename }).toArray((err, files) => {
    console.log(req.params.filename)
    if (!files || files.length === 0) {
      res.status(404)
      res.send("Not Found")
    }
    gfs.openDownloadStreamByName(req.params.filename).pipe(res)
  })
})

app.delete("/files/:filename", async (req, res) => {

  try {
    var data = await conn.collection("uploads.files").find({filename: req.params.filename}).toArray()
    if(!data || data.length === 0){
      res.send("Nothing to Delete")
    }
    data.map(async(info) =>{

      var a = await conn.collection("uploads.chunks").deleteMany({files_id: info._id})
      var b = await conn.collection("uploads.files").deleteMany({filename: req.params.filename})
      res.send([a, b])
    })
  } catch (error) {

    console.log(error)
    res.status(500)
    res.send("Unable to Delete")
  }
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
