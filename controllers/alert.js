const { validationResult } = require("express-validator");
const Alert = require("../models/alert");
const api = require("../utils/API/alertApi");

exports.postCreateAlert = (req, res, next) => {
  const {
    label,
    status,
    address,
    location,
    driverId,
    carId,
    dangerPercentage,
    description,
    drivePattern
  } = req.body;
  Alert.create({
    label,
    address,
    status,
    location,
    driverId,
    carId,
    dangerPercentage,
    description,
    drivePattern
  })
    .then((response) => {
      res
        .status(200)
        .json({ message: "you create Alert Successfully", response: response });
      console.log(res);
    })
    .catch((err) => {
      res.status(401).json({ message: err });
    });
};

exports.getAllAlerts = (req, res, next) => {
  api
    .fetchAllAlerts()
    .then((response) => {
      res.status(200).json({list:response});
    })
    .catch((err) => {
      console.log(err);
      res.status(401).json({ message: err });
    });
};

exports.getAlertById = (req, res, next) => {
  const AlertId = req.params.id;
  // Website you wish to allow to connect
  api
    .fetchAlertById(AlertId)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
    });
};
