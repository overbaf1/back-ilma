require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(require("./routes/comments.route"));

mongoose
  .connect(process.env.MONGO_SERVER)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Server started successfully on http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((e) => console.log("Error connecting to MongoDB server" + e.message));
