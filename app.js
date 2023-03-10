const express = require("express");
const app = express();

const dbModule = require("./utils/database");
const bodyParser = require("body-parser");
const driversRouts = require("./routes/drivers");
const carsRouts = require("./routes/cars");
const usersRouts = require("./routes/users");
const alertsRouts = require("./routes/alerts");

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});

app.use("/driver", driversRouts);
app.use("/car", carsRouts);
app.use("/users", usersRouts);
app.use("/alert", alertsRouts);



dbModule.connection
  .sync()
  .then((res) => {
    console.log(res);
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
