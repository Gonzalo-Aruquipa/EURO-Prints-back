const Client = require("../models/Client");

exports.create = async (req, res) => {
  const clien= await Client.findAll();
  res.send(clien)
  };
  
