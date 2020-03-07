const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongodb://chris:coder2020@ds215988.mlab.com:15988/heroku_nb8h8m0r
// mongodb://localhost/budget
mongoose.connect(process.env.MONGODB_URI || "mongodb://chris:coder2020@ds215988.mlab.com:15988/heroku_nb8h8m0r", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});