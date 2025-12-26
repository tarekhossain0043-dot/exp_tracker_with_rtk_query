const routes = require("express").Router();

// controller
const controller = require("../controller/controller");

routes.route("/api/categories").get(controller.create_categories);

module.exports = routes;
