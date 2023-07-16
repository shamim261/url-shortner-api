// internal imports
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// external imports
const URL = require("./models/url");
const urlRoutes = require("./routes/urlRoutes");

const app = express();
dotenv.config();

app.use(express.json());

// mongoose connect

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected successfully!"));

// router setup

app.use("/url", urlRoutes);
app.get("/:shortUrl", async (req, res, next) => {
  const shortUrl = req.params.shortUrl;

  try {
    const result = await URL.findOneAndUpdate(
      { shortUrl: shortUrl },
      {
        $push: {
          visitedHistory: {
            timestamp: Date.now(),
          },
        },
      }
    );
    res.redirect(result.redirectUrl);
  } catch (e) {
    res.status(500).json({ e });
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Server Listening on Port ${process.env.PORT}`)
);
