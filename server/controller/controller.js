const model = require("../models/model");

//--post-- http://localhost:8080/api/categories
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

//--get--http://localhost:8080/api/categories
async function get_category(req, res) {
  let data = await model.Category.find({});

  // get data only of the type and color
  let dynamicData = await data.map((v) =>
    Object.assign({}, { type: v.type, color: v.color })
  );
  return res.json(dynamicData);
}

//--post--http://localhost:8080/api/transtions
async function create_transitoin(req, res) {
  if (!req.body) return res.status(400).json(`Post HTTP data not Provided`);
  let { type, name, amout } = req.body;
  const create = await new model.Transition({
    type,
    name,
    amout,
    date: new Date(),
  });
}

module.exports = {
  create_categories,
  get_category,
};
