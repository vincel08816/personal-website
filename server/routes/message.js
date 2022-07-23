const router = require("express").Router();
const Message = require("../models/Message");
const passport = require("passport");

// @route    GET /all
// @desc     Get all messages
// @access   Private

router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
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

/* {!} this might need some work in terms of security... 
maybe store local storage instead, but it works */

// @route    GET /guest/:id
// @desc     Get messages by guest id
// @access   Public

router.get("/guest/:id", async (req, res) => {
  try {
    const messages = await Message.find({ guestId: req.params.id });
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// @route    GET /all
// @desc     Get all messages
// @access   Private


router.post(
  "/me",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { guestId, text, emoji } = req.body;
      await new Message({ guestId, text, emoji, isGuest: false }).save();
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }
);

// @route    POST /
// @desc     Send Messages between user or group
// @access   Public

router.post("/", async (req, res) => {
  try {
    const { guestId, text, emoji } = req.body;
    await new Message({ guestId, text, emoji }).save();
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = router;
