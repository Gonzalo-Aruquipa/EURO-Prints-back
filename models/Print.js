const { Sequelize, DataTypes } =require("sequelize");
const  db  = require("../db");

const Print = db.define(
  "print",
  {
    admin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    date_a: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    date_e: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    indication: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  
);
(async () => {
  await db.sync({ force: true });
  // Code here
})();

module.exports  = Print;

