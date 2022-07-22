const router = require("express").Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

const secret = process.env.SECRET;
const expiresIn = 36000;

// @route    GET /auth
// @desc     Get user by token
// @access   Private

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) =>
    await User.findById(req.user.id)
      .select("-password")
      .then((user) => res.json(user))
      .catch((err) => console.error(err) && res.sendStatus(500))
);

// @route    POST /auth/login
// @desc     Login
// @access   Public

router.post(
  "/login",
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password is required").exists(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.sendStatus(401);

    try {
      const { password } = req.body;
      const email = req.body.email.toLowerCase().replace(" ", "");
      const user = await User.findOne({ lowercaseEmail: email });
      if (!user || !(await bcrypt.compare(password, user.password)))
        return res.sendStatus(401);

      const payload = { id: user.id, email };
      jwt.sign(payload, secret, { expiresIn: 36000 }, (err, token) => {
        if (err) throw err;
        res.cookie("token", token, { httpOnly: true });
        res.json(payload);
      });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }
);

// @route    POST /users/register
// @desc     Register Auth
// @access   Public / TEST

router.post(
  "/signup",
  check("username", "username is required").notEmpty(),
  check("email", "Please include a valid email").isEmail(),
  check(
    "password",
    "Please enter a password at least 8 character and contain at least one uppercase letter, one lower case letter, and one special character."
  )
    .isLength({ min: 8 })
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ error: errors });

    try {
      const { username, email, password } = req.body;
      const lowercaseEmail = req.body.email.toLowerCase().replace(" ", "");

      if (await User.findOne({ lowercaseEmail })) return res.sendStatus(400);

      const user = new User({ username, email, password, lowercaseEmail });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(req.body.password, salt);

      await user.save();

      const payload = { id: user.id, email: lowercaseEmail };
      jwt.sign(payload, secret, { expiresIn }, (err, token) => {
        if (err) throw err;
        res.cookie("token", token, { httpOnly: true });
        res.json(payload);
      });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }
);

module.exports = router;
