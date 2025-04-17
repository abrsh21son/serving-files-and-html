import express from "express";
import path from "path"
import { fileURLToPath } from "url";
import { dirname } from "path";

const route = express.Router();
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

route.get("/add-product", (req, res, next) => {
  console.log("file name :",__filename);
    console.log("direname :", __dirname);
  console.log("joined path :",path.join(__dirname, "../", "views", "shop.html"));
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});
route.post("/add-product", (req, res, next) => {
  res.redirect("/");
});
export default route;
