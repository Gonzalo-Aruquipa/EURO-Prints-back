const { Sequelize, DataTypes } =require("sequelize");
const  db  = require("../db");

const Client = db.define(
  "client",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    }
  },
  
);
(async () => {
  await db.sync({ force: true });
  // Code here
})();

module.exports  = Client;

