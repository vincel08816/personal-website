const router = require("express").Router();
const Message = require("../models/Message");

// @route    GET /conversations
// @desc     Get all private conversations by a single user
// @access   Private

router.get(
  "/conversations",
  async (req, res) => {
    try {
      // {?} query mongo by conversations with members including the current user

      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }
);

// @route    GET /messages
// @desc     Get all messages for a single conversation
// @access   Private

router.get(
  "/messages/",
  async (req, res) => {
    try {
      const { conversationId } = req.body;
      if (!conversationId) return res.sendStatus(400);

      const messages = await Message.find({ conversationId });

      res.json(messages);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }
);

// {!} 6/10 - Test this route
// {!} 6/10 - Update Route to include group messages

// @route    POST /message
// @desc     Send Messages between user or group
// @access   Private

router.post(
  "/message",
  async (req, res) => {
    try {
      if (!req.user?._id || !req.body?.members) return res.sendStatus(400);
      await new Message({
        senderId: req.user._id,
        text: req.body.text,
      }).save();
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }
);

router.post(
  "/createGuestId",
  async (req, res) => {
    try {
      if (!req.user?._id || !req.body?.members) return res.sendStatus(400);
      await new Message({
        senderId: req.user._id,
        text: req.body.text,
      }).save();
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }
);




module.exports = router;
