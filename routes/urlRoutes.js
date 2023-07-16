const express = require("express");

const { addUrl, analyticsHandler } = require("../controller/urlController");

const router = express.Router();

// add link route

router.post("/", addUrl);

// analytics

router.get("/analytics/:id", analyticsHandler);

module.exports = router;
