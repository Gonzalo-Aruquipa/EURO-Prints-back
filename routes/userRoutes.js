const Router = require("express");
const userController = require("../controllers/userController");

const router = Router();

  router.get("/user", userController.register);
  // router.post("/login", userController.login);

 
module.exports = router
