const { Sequelize, DataTypes } =require("sequelize");
const  db  = require("../db");

const Product = db.define(
  "product",
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
// (async () => {
//   await db.sync({ force: true });
//   // Code here
// })();

module.exports  = Product;

