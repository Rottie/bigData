const mongoose = require("mongoose");

const URI =
  "mongodb+srv://root:pQuizmW6VkDknJtp@cluster0.lizib.mongodb.net/default?retryWrites=true&w=majority" ||
  "mongodb://localhost/erp";
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", () => {
  console.log("mongodb error!");
});

db.once("open", () => {
  console.log("Local DB connected!");
});
module.exports = db;
// N3uXGmVrLfE38BmC
