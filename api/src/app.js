const express = require('express');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const morgan = require('morgan');
const routes = require('./routes');
const cors = require('cors');
require('./db.js');

//puerto
const PORT = process.env.PORT || 4000;

//url front
console.log("Front URL ", process.env.FRONT_URL);

//app
const app = express();

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// server.use(cookieParser());

// server.use(morgan('dev'));

//cors
var corsOptions = {
  origin: "*",
  // origin: process.env.FRONT_URL,
  // credentials: true,
};

app.use(cors(corsOptions));

//Routes
app.use("/", routes);

app.get("/", (req, res) => {
  res.send("Welcome API dev!");
});

//Listen port
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

module.exports = app;
