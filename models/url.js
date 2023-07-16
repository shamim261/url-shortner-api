const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortUrl: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    visitedHistory: [
      {
        timestamp: { type: Number },
      },
      {
        timestamps: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const URL = mongoose.model("URL", urlSchema);

module.exports = URL;
