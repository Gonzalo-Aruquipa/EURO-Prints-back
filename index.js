
const express  = require( "express");
const usuarioRoutes =require("./routes/userRoutes") ;
const clientRoutes = require("./routes/clientRoutes");
const productRoutes = require("./routes/productRoutes");
const printRoutes = require("./routes/printRoutes");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const  db  = require("./db.js");

const Print = require("./models/Print");
const User = require("./models/User");
const Client = require("./models/Client");


const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


try {
  db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.use("/user", usuarioRoutes );
app.use("/client", clientRoutes );
app.use("/product", productRoutes );
app.use("/print", printRoutes );

Print.belongsTo(Client);
Print.belongsTo(User);



app.listen(3000, ()=>{
  console.log("listening on port 3000")
})
