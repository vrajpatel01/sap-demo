const userModel = require("../model/user");

const getUser = async (req, res, next) => {
  const { userName } = req.params;
  const [result] = await userModel.find({ userName: userName }).exec();

  if (result === undefined) {
    res.json({
      message: `username : ${userName} is not found`,
    });
  } else {
    res.json({ data: result });
  }
};

module.exports = getUser;
