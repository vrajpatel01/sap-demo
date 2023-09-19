const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const errorHandler = require("./middleware/errorHandler");
const mongoose = require("mongoose");
const path = require('path')
require("dotenv").config();

const router = require("./routes");

app.use(errorHandler);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/image/", express.static(path.join(__dirname, './upload')));

mongoose
  .connect(`${process.env.mongodbConnectionString}/user`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    console.log("Database connected successfully 😀");
  });

app.use("/api", router);

app.listen(process.env.PORT);
