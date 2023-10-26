const router = require("express").Router();

const createUser = require("../controller/createUser");
const getUser = require("../controller/getUser");
const updateUser = require("../controller/updateUser");
const deleteUser = require("../controller/deleteUser");
const changePic = require("../controller/changePic");
const login = require("../controller/login");

router.post("/user", createUser);
router.get("/user/:userName", getUser);
router.put("/user/:userName", updateUser);
router.delete("/user/:userName", deleteUser);
router.put("/user/pic/:userName", changePic);
router.get("/login", login);

module.exports = router;
