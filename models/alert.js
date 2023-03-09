const dbModule = require("../utils/database");
const { DataTypes } = require("sequelize");
const Driver = require("./driver");

const Alert = dbModule.connection.define(
  "alerts",
  {
    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dangerPercentage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    driverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    carId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {}
);


Alert.belongsTo(Driver, {
  foreignKey: "driverId",
  
});

Driver.hasMany(Alert, {
  foreignKey: "driverId",
});
module.exports = Alert;
