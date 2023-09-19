const mongoose = require("mongoose");

const User = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  middleName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  age: {
    type: Date,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  bloodGroup: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  file: {
    type: String,
    require: true,
  },
  about: {
    type: String,
    require: true,
  },
  schoolName: {
    type: String,
    require: true,
  },
  collageName: {
    type: String,
    require: true,
  },
  hobby: {
    type: String,
    require: true,
  },
  education: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("User", User);
