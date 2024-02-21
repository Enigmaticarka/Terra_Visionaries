const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/registration")
  .then(() => {
    console.log("Connection is successfull");
  })
  .catch((e) => {
    console.log("No connection");
  });
