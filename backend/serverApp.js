const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

require("dotenv").config();
const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.json());
app.use(cors());
app.use("/user", userRoutes);

// "mongodb+srv://parthjtdev:aZhEeVs2ypG37LFH@cluster0.8kv0o0e.mongodb.net/demoreactnative"
mongoose.connect('mongodb+srv://parthjtdev:aZhEeVs2ypG37LFH@cluster0.8kv0o0e.mongodb.net/demoreactnative')
    .then(() => {
        console.log("Connected to the database");
        app.listen(5000, () => {
            console.log(`Server listening on port ${5000}`);
        });
    })
    .catch((err) => {
        console.error("Error connecting to the database:", err);
    });