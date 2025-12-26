const routes = require("express").Router();
routes
  .route("/api/categories")
  .get((req, res) => res.json("GET Request from Category"));

module.exports = routes;
