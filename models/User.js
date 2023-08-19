const { Sequelize, DataTypes } =require("sequelize");
const  db  = require("../db");

const User = db.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
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
      allowNull: false,
    },
    date_u: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    }
  },
  
);
// (async () => {
//   await db.sync({ force: true });
//   Code here
// })();

module.exports  = User;

