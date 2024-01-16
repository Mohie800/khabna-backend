require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const registerRoute = require("./routes/regesterRoute");
const cityRoute = require("./routes/cityRoute");
const serviceRoute = require("./routes/serviceRoute");
const orderRoute = require("./routes/orderRoute");
const taxRoute = require("./routes/taxRoute");
const logoRoute = require("./routes/logoRoute");
const dataRoute = require("./routes/dataRoute");
const homeBannerRoute = require("./routes/homeBannerRoute");
const orderBannerRoute = require("./routes/orderBannerRoute");
const complainRoute = require("./routes/complainRoute");
const employeeRoute = require("./routes/employeeRoute");

const path = require("path");

// const parser = require("body-parser");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User = require("./model/user");

const app = express();

const cors = require("cors");
// const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());

// Register
app.post("/register", async (req, res) => {
  // our register logic goes here...
  try {
    // Get user input
    const { name, userName, password } = req.body;

    // Validate user input
    if (!(userName && password && name)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ userName });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      name,
      userName: userName.toLowerCase(), // sanitize: convert userName to lowercase
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, userName },
      process.env.TOKEN_KEY,
      {
        expiresIn: "200h",
      }
    );
    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});

// ...

// Login
app.post("/login", async (req, res) => {
  // Our login logic starts here
  try {
    // Get user input
    const { userName, password } = req.body;

    // Validate user input
    if (!(userName && password)) {
      res.status(400).send("يرجى ادخال البيانات");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ userName });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, userName },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;
      const userRes = {
        id: user._id,
        name: user.name,
        userName: user.userName,
        token: user.token,
      };

      // user
      res.status(200).json(userRes);
    } else {
      res.status(400).send("البيانات المدخلة غير صحيحة");
    }
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});

// app.use("/users", usersRouter);
app.use("/storage", express.static(path.join(__dirname, "storage")));
app.use("/register", registerRoute);
app.use("/city", cityRoute);
app.use("/service", serviceRoute);
app.use("/order", orderRoute);
app.use("/tax", taxRoute);
app.use("/logo", logoRoute);
app.use("/data", dataRoute);
app.use("/banner-home", homeBannerRoute);
app.use("/banner-order", orderBannerRoute);
app.use("/complain", complainRoute);
app.use("/employee", employeeRoute);

module.exports = app;
