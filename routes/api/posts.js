// calls the express dependency and init the express router dependency
const express = require("express");
const router = express.Router();

// init the api route ext
// @route   GET api/posts/test
// @desc    Test posts route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "posts works" }));

// exports the router for use
module.exports = router;
