const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

const app = express();
const PORT = process.env.PORT | 5000;

const routes = require("./routes/routes");

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb Connected..."))
  .catch((err) => console.error(err));

app.use(routes);

app.listen(PORT, () => console.log("Server running on port " + PORT));
