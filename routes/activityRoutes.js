const express = require('express')
const router = express.Router()
const fs = require('fs')
const app = express();
const cors = require("cors");
const { v4: uuid } = require("uuid");

app.use(cors());
app.use(express.json());

router.get("/", (req, res) => {
    const activities = JSON.parse(fs.readFileSync("./data/activities.json"));

    if (activities) {
        res.status(201).send(activities);
      } else {
        res.status(400).send("Something went wrong");
      }
})

module.exports = router;