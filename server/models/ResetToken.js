const { Schema, model } = require("mongoose");

module.exports = model(
  "ResetToken",
  new Schema({
    createdAt: { type: Date, expires: 1800, default: Date.now() },
    token: { type: String, required: true },
  })
);
