const mongoose = require("mongoose");
const schema = mongoose.Schema;

// category => field => type , color

const category_model = new schema({
  type: { type: String, default: "investment" },
  color: { type: String, default: "#FCBE44" },
});

// transitions => field => name , type ; amount

const transition_model = new schema({
  type: { type: String, default: "anonimus" },
  name: { type: String, default: "investment" },
  amout: { type: Number },
  date: { type: Date, default: Date.now },
});

const Category = mongoose.model("category", category_model);
const Transition = mongoose.model("transition", transition_model);

exports.default = Transition;
module.exports = {
  Category,
  Transition,
};
