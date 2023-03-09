const dbModule = require("../utils/database");
const { DataTypes } = require("sequelize");

const Driver = dbModule.connection.define(
  "drivers",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    licenseType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    driverId: {
      type: DataTypes.INET,
      allowNull: false,

    },
    
  },
  {}
);


module.exports = Driver;
