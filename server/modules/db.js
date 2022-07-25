const { connect } = require("mongoose");
require("dotenv").config();

module.exports = async () => {
  await connect(process.env.MONGO_URI)
    .then(() => console.log("Successfully connected to MongoDB!"))
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });
};
