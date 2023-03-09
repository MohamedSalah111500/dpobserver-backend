const { Sequelize, DataTypes } = require("sequelize");

const connection = new Sequelize("dpobserver", "root", "010277", {
  dialect: "mysql",
});

const db = {};
db.Sequelize = Sequelize;
db.connection = connection;
db.Sequelize;

module.exports = {
  connection: connection,
  db: db,
};
