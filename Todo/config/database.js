const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  try {
    mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connection sucessfull!!");
  } catch (err) {
    console.log("Failed to connect database");
    console.log("error : ", err.message);
  }
};

module.exports = dbConnect;

