const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//require("./db/conn");
//const User = require("./model/userSchema");
app.use(express.json());
//we link our router files to make our route easy
app.use(require("./router/auth"));

//creating middlewere
const middleware = (req, res, next) => {
  console.log("hello my middleware");
  next();
};

//create route
app.get("/", (req, res) => {
  res.send("Hello form the server from app.js..");
});
app.get("/about", middleware, (req, res) => {
  res.send("Hello form the about server..");
});
// app.get("/contact", (req, res) => {
//   res.send("Hello form the contact server..");
// });
// app.get("/signup", (req, res) => {
//   res.send("Hello form the signup server..");
// });
// app.get("/signin", (req, res) => {
//   res.send("Hello form the signin server..");
// });

app.listen(port, () => {
  console.log(`connect at port ${port}`);
});
