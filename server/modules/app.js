require("dotenv").config();

const express = require("express");
const passport = require("passport");
const cp = require("cookie-parser");
const cors = require("cors");

const app = express();
const path = require("path");

app.use(passport.initialize());
require("./passport-config")(passport);

app.use(cors());
app.use(cp());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

if (process.env.PRODUCTION === "1") {
  app.all("*", (req, res, next) => {
    if (req.headers["x-forwarded-proto"] === "https") return next();
    res.redirect("https://" + req.hostname + req.url);
  });

  app.get("*", (req, res) => {
    let url = path.resolve(__dirname, "../build/index.html");
    console.log(url);
    res.sendFile(url, (err) => {
      if (err) console.log(err);
    });
  });
}

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

app.use(express.static("build"));

app.use("/message", require("../routes/message"));
app.use("/auth", require("../routes/auth"));

module.exports = app;
