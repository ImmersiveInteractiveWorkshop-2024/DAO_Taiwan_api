const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const productionDB = process.env.DATABASE;
try {
  mongoose
    .connect(productionDB)
    .then(() => console.log("資料庫連線成功"));
} catch (error) {
  console.error("資料庫連線失敗:", error);
}
