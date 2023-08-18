const User = require("../models/User")



exports.register = async (req, res) => {
const users = await User.findAll();
res.send(users)
};
