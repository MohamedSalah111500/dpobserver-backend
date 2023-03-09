const dbModule = require("../utils/database");
const { DataTypes } = require("sequelize");
const Driver = require("./driver");
const Alert = require("./alert");

const Car = dbModule.connection.define(
  "cars",
  {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    version: {
      type: DataTypes.STRING,
    },
    driverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);

Alert.belongsTo(Car, {
  foreignKey: "carId",
});

Car.hasMany(Alert, {
  foreignKey: "carId",
});
module.exports = Car;
