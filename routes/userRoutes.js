const Router = require("express");
const userController = require("../controllers/userController");

const router = Router();

  router.post("/register", userController.register);
  router.post("/login", userController.login);
  router.post("/logic/:id", userController.logicdelete);

 
module.exports = router
