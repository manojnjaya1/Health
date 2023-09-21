const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

const client = mongoose
  .connect("mongodb://localhost:27017/health", {
    useNewUrlParser: true,
    // useNewUrlParser: true, 
    useUnifiedTopology: true,
    family :4,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log("Error: ", error);

    return error;
  });

module.exports = client;
