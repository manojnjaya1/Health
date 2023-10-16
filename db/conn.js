require("dotenv").config();
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const client = mongoose
  .connect(process.env.MONGO_URI, {
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
