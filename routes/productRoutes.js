const Router = require("express");
const productController = require("../controllers/productController");

const router = Router();

  router.get("/", productController.newProduct);
  // router.post("/login", userController.login);

 
module.exports = router
