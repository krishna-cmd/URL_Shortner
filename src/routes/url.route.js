const express = require("express");
const controller = require("../controllers/url.controller");
const redirectController = require("../controllers/redirect.controller");
const rateLimiter = require("../middleware/ratelimiter");

//console.log(redirectController);
const router = express.Router();

router.post("/shorten", controller.shorten);

router.get("/:shortCode", rateLimiter, redirectController.redirect);

module.exports = router;
