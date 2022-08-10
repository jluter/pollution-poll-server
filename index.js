const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");

const activity = require("./routes/activityRoutes");
const waterBills = require("./routes/waterBillRoutes");

const PORT = process.env.PORT || 4444;

app.use(express.json());
app.use(cors());



app.use("/activity", activity)
app.use("/waterBills", waterBills)

app.listen(PORT, function () {
    console.log(` 🚨 Server ${PORT} Started`);
});