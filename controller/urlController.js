const shortid = require("shortid");

const URL = require("../models/url");

// add url

async function addUrl(req, res) {
  if (!req.body.url) return res.status(400).json({ msg: "URL is required!" });

  try {
    const sID = shortid.generate();

    const obj = {
      shortUrl: sID,
      redirectUrl: req.body.url,
      visitedHistory: [],
    };

    await URL.create(obj);
    res.status(200).json({ id: sID });
  } catch (e) {
    res.status(500).json({ msg: "Something went wrong!" });
  }
}

// analytics

async function analyticsHandler(req, res) {
  const id = req.params.id;
  try {
    const result = await URL.findOne({ shortUrl: id });

    res.status(200).json({ totalClicks: result.visitedHistory.length });
  } catch (e) {
    res.status(500).json({ e });
  }
}

module.exports = { addUrl, analyticsHandler };
