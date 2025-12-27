const model = require("../models/model");

// post request to http server
async function create_categories(req, res) {
  const create = new model.Category({
    type: "Hello",
    color: "#ff3d5c", // DARK
  });
  try {
    await create.save();
    return res.json(create);
  } catch (err) {
    return res
      .status(400)
      .json({ message: `Error while creating category ${err}` });
  }
}

module.exports = {
  create_categories,
};
