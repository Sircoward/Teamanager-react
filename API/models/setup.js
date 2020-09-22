const Sequelize = require('sequelize');

sequelize = new Sequelize("teamanager", "root", "", {
  host: "localhost",
  port: "3306",
  dialect: 'mysql',
  pool: {
    max: 80,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const models = {
    Team: require("./team")(sequelize),
};

exports.sequelize = sequelize;
exports.models = models;
