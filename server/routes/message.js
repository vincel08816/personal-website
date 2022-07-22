const router = require("express").Router();
const Message = require("../models/Message");

// @route    GET /all
// @desc     Get all messages
// @access   Private

router.get(
  "/all",
  async (req, res) => {
    try {
      const messages = await Message.find();
      res.json(messages);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }
);

// {!} 6/10 - Test this route

// @route    POST /
// @desc     Send Messages between user or group
// @access   Public

router.post(
  "/",
  async (req, res) => {
    try {
      const { guestId, text, emoji } = req.body
      await new Message({ guestId, text, emoji }).save();
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }
);

module.exports = router;
