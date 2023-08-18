
const express  = require( "express");
const usuarioRoutes =require("./routes/userRoutes") ;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const  db  = require("./db.js");


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

app.listen(3000, ()=>{
  console.log("listening on port 3000")
})
