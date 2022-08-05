const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");

const activity = require("./routes/activityRoutes");

const PORT = process.env.PORT || 4444;
const welcome = `Welcome to Port ${PORT}, your app is now running`;

app.use(express.json());
app.use(cors());



app.use("/activity", activity)

app.listen(PORT, function () {
    console.log(` 🚨 Server ${PORT} Started`);
  });