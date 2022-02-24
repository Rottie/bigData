const User = require("../user"); // 載入 todo model
const db = require("../../config/mongoose");
db.on("error", () => {
  console.log("mongodb error!");
});
db.once("open", () => {
  console.log("mongodb connected!");
  for (let i = 0; i < 2; i++) {
    User.create({ name: "name-" + i, calories: i }); //Todo.create()  + params(name:'name‘+i）
  }
  console.log("done");
});
