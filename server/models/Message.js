const { Schema, model } = require("mongoose");

module.exports = model(
  "message",
  new Schema(
    {
      isGuest: { required: true, type: Boolean, default: true },
      guestId: { required: true, type: String },
      text: { required: true, type: String },
    },
    { timestamps: true }
  )
)
