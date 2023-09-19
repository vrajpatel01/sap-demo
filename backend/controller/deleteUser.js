const userModel = require("../model/user");

const deleteUser = async (req, res, next) => {
  const { userName } = req.params;

  const data = await userModel.deleteOne({ userName });
  if (data.deletedCount === 0) {
    res.json({
      message: "profile not found",
      status: "true",
    });
  } else {
    res.json({
      message: "profile deleted successfully",
      status: "true",
    });
  }
};

module.exports = deleteUser;
