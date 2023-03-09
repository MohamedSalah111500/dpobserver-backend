const Alert = require("../../models/alert");
const Driver = require("../../models/driver");

exports.fetchAllAlerts = () => {
  return Alert.findAll({ include: Driver });
};

exports.fetchAlertById = (id) => {
  return Alert.findByPk(id);
};



