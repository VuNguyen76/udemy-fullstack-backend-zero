const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getABC,
  getHoiDanIT,
} = require("../controllers/homeController");
router.get("/", getHomepage);

router.get("/abc", getABC);

router.get("/hoidanit", getHoiDanIT);
module.exports = router;
