const express = require("express");
const controller = require("../controllers/url.controller");
const redirectController = require("../controllers/redirect.controller");

//console.log(redirectController);
const router = express.Router();

router.post("/shorten", controller.shorten);

router.get("/:shortCode", redirectController.redirect);

module.exports = router;
