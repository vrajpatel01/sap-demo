const joi = require("joi");
const userModel = require("../model/user");
const upload = require('../middleware/upload')

const createUser = (req, res, next) => {
  upload(req, res, async (ree) => {
    const userSchema = joi.object({
      userName: joi.string().min(3).max(16).required(),
      firstName: joi.string().min(3).max(32).required(),
      middleName: joi.string().min(3).max(32).required(),
      lastName: joi.string().min(3).max(32).required(),
      email: joi.string().email().required(),
      phone: joi.number().min(10).required(),
      bloodGroup: joi.string().required(),
      gender: joi.string().required(),
      address: joi.string().min(10).max(255).required(),
      schoolName: joi.string().min(10).max(255).required(),
      collageName: joi.string().min(10).max(255).required(),
      about: joi.string().min(3).required(),
      hobby: joi.string().min(3).max(266).required(),
      file: joi.optional(),
      education: joi.string().min(2).max(32).required(),
      age: joi.date().required(),
      password: joi
        .string()
        .pattern(new RegExp("^[a-zA-Z0-9!@#$%^&*()_+]{5,20}$"))
        .required(),
      confirmPassword: joi.ref("password"),
    });

    const { error } = userSchema.validate(req.body);

    if (error) {
      return next(error);
    }

    const {
      userName,
      firstName,
      middleName,
      lastName,
      age,
      gender,
      bloodGroup,
      email,
      phone,
      address,
      about,
      schoolName,
      collageName,
      hobby,
      education,
      password,
    } = req.body;

    console.log(req.file);

    try {
      
    

    if (!req.file) {
      res.json({ status: "fail", error: "file needed in body" });
    } else {
      const userData = new userModel({
        userName,
        firstName,
        middleName,
        lastName,
        age,
        gender,
        bloodGroup,
        email,
        phone,
        address,
        file: req.file.filename,
        about,
        schoolName,
        collageName,
        hobby,
        education,
        password,
      });
      const user = await userData.save();

      res.json({
        message: "profile created successfully",
        user,
        status: true,
      });
    }} catch (error) {
      console.log(error);
    }
  });
};

module.exports = createUser;
