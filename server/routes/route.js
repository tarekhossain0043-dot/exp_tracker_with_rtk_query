const routes = require("express").Router();

// controller
const controller = require("../controller/controller");

routes
  .route("/api/categories")
  .post(controller.create_categories)
  .get(controller.get_category);

module.exports = routes;
