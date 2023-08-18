const { Sequelize, DataTypes } =require("sequelize");
const  db  = require("../db");

const User = db.define(
  "user",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
    },
    active: {
      type: DataTypes.BOOLEAN,
    },
    fecha: {
      type: DataTypes.DATE
    }
  },
  
);
// (async () => {
//   await db.sync({ force: true });
//   // Code here
// })();

module.exports  = User;

