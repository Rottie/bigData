// --------------------------------Step 1 require lib
const express = require("express");

const cors = require("cors");

//-----------------------------------------------------
const passport = require("passport");
//Atuh
const user = require("./routes/modules/user.js");

const employee = require("./routes/modules/employee.js");

const app = express();

// --> Add this

//Connect Database
require("./config/mongoose");

// -------------------------------
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

//----------------------Heroku Upload

//-----------------------------------Step 3 app yse

//

app.use(express.json());

// 將 request 導入路由器
app.use(cors());
app.use("/users", user);
app.use("/employees", employee);

//-------------------

// settting main page route
app.get("/", (req, res) => {
  res.send("hello world");
});

const PORT = process.env.PORT || 5000;

// setting port 3000
app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`);
});
