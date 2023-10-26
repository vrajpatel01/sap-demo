const userModel = require("../model/user");
const joi = require("joi");

const updateUser = async (req, res) => {
  const { userName } = req.params;
  const body = req.body;

  const userSchema = joi.object({
    userName: joi.string().min(3).max(16).optional(),
    firstName: joi.string().min(3).max(16).optional(),
    middleName: joi.string().min(3).max(16).optional(),
    lastName: joi.string().min(3).max(16).optional(),
    email: joi.string().email().optional(),
    phone: joi.number().min(10).optional(),
    bloodGroup: joi.string().optional(),
    gender: joi.string().optional(),
    address: joi.string().min(10).max(50).optional(),
    schoolName: joi.string().min(10).max(50).optional(),
    collageName: joi.string().min(10).max(50).optional(),
    about: joi.string().min(3).max(100).optional(),
    hobby: joi.string().min(3).max(16).optional(),
    education: joi.string().min(2).max(3).optional(),
    age: joi.number().min(1).optional(),
  });

  const { error } = userSchema.validate();
  if (error) {
    return next(error);
  }

  const data = await userModel.findOneAndUpdate({ userName: userName }, body, {
    new: true,
  });

  res.json({
    message: "data updated successfully",
    data,
    status: true,
  });
};

module.exports = updateUser;
