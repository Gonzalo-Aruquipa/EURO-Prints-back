const Router = require("express");
const userController = require("../controllers/userController");

const router = Router();

  router.post("/register", userController.register);
  router.post("/login", userController.login);
  router.post("/logic/:id", userController.logicdelete);
  router.get("/users", userController.getAllusers);
  router.get("/user/:id", userController.getUserId);
  router.put("/update-user/:id", userController.updateUser);
  router.delete("/delete-user/:id", userController.deleteUser);

 
module.exports = router
