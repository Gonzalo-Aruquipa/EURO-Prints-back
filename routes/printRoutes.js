const Router = require("express");
const printController = require("../controllers/printController");

const router = Router();

  router.get("/", printController.newPrint);
  // router.post("/login", userController.login);

 
module.exports = router
