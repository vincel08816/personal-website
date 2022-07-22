require("dotenv").config();

const express = require("express");
const passport = require("passport");
const cp = require("cookie-parser");

const app = express();
const path = require("path");

if (process.env.PRODUCTION === "1") {
  app.all("*", (req, res, next) => {
    if (req.headers["x-forwarded-proto"] === "https") return next();
    res.redirect("https://" + req.hostname + req.url);
  });
  app.get("/*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../build", "index.html"),
      (err) => err && console.error(err)
    );
  });
}

[
  passport.initialize(),
  cp(),
  express.json({ limit: "50mb" }),
  express.urlencoded({ extended: true, limit: "50mb" }),
  (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
    );
    next();
  },
  express.static("build"),
].forEach((item) => app.use(item));

app.use("/message", require("../routes/message"));
app.use("/auth", require("../routes/auth"));

require("./passport-config")(passport);

module.exports = app;
