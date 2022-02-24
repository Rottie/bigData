const mongoose = require("mongoose"); //load mongoose
const Schema = mongoose.Schema; //learn then understand more\

const employeeSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    position: {
      type: String,
    },
  },
  {
    collection: "employees",
  }
);

module.exports = mongoose.model("Employee", employeeSchema);
