import express from "express";
import path from "path"

import { fileURLToPath } from "url";
import { dirname } from "path";
const route = express.Router();
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

route.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname,'../','views','shop.html'))
});
export default route;