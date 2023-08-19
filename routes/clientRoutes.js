const Router = require("express");
const clientController = require("../controllers/clientController");

const router = Router();

  router.get("/", clientController.create);
  // router.post("/login", userController.login);

 
module.exports = router
