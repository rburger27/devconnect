// calls the express dependency and init the express router dependency
const express = require("express");
const router = express.Router();

// init the api route ext
// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "profile works" }));

// exports the router for use
module.exports = router;
