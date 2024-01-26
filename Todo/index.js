const express = require("express");
const app = express();
const dbConnect = require("./config/database");
const todoRoutes = require("./routes/todoRoutes")

require("dotenv").config();

PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server start at PORT : " + PORT);
});

app.use(express.json());

app.use("/api/v1",todoRoutes);

dbConnect();
