// calling dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// calling the api routes
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

// init express
const app = express();

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//app display
app.get("/", (req, res) => res.send("Hello!"));

// Use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

// init displaying port
const port = process.env.PORT || 5000;

// console.log server running message
app.listen(port, () => console.log(`Server running on port ${port}`));
