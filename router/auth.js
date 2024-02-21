const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");
router.get("/", (req, res) => {
  res.send("Hello form the server from router.js..");
});
//using promise
// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "Pls filled the field properly" });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "email already exist" });
//       }

//       const user = new User({ name, email, phone, work, password, cpassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "user registered successfully" });
//         })
//         .catch((e) => {
//           res.status.status(501).json({ error: "faield to register" });
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//using async await
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Pls filled the field properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "email already exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password are not matching" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });
      const userRegister = await user.save();
      res.status(201).json({ message: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

//login route

router.post("/signin", async (req, res) => {
  //console.log(req.body);
  //res.json({ message: "awesome" });
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "pls fill the data" });
    }
    const userLogin = await User.findOne({ email: email });
    console.log(userLogin);

    if (!userLogin) {
      res.status(400).json({ error: "User Error" });
    } else {
      res.json({ message: "user login successfull" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
