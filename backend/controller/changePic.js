const fs = require("fs");
const userModel = require("../model/user");
const upload = require("../middleware/upload");

const changePic = (req, res, next) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error(err);
    }
    const { userName } = req.params;
    try {
      if (!req.file) {
        res.json({ status: "fail", error: "file needed in body" });
      } else {
        const user = await userModel.find({ userName });
        fs.unlink(user[0].file, (err) => {
          console.log(err);
        });

        const updateUser = await userModel.findOneAndUpdate(
          { userName },
          { file: req.file.path },
          {
            new: true,
          }
        );

        res.json({
          message: "profile pic updated successfully",
          file: req.file,
          data: updateUser.file,
          status: true,
        });
      }
    } catch (error) {
      console.error(error);
      res.json({ error: error });
    }
  });
};

module.exports = changePic;
