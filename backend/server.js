//load env variables
require("dotenv").config();

//import dependencies
const express = require("express");
const cors = require("cors");
const countryRoutes = require("./routes/countryRoutes");
const path = require('path');
//create an express app
const app = express();


app.use(express.static(path.join(__dirname + "/public")));

//enable cors
app.use(cors());

//configure express app | express can read json body now
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is working!");
});

app.use("/api", countryRoutes);

app.listen(process.env.PORT, () => {
  console.log("listening ");
});
