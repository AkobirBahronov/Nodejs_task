const express = require("express");
const {
  getAllShops,
  postAddShop,
  getAddShop,
  getShop,
  postEditShop,
  getEditShop,
  postDeleteShop,
} = require("../controllers/shop");

const router = express.Router();

router.get("/api/shop/all", getAllShops);

router.get("/api/shop/create", getAddShop);

router.get("/api/shop/:shopId", getShop);

router.get("/api/shop/edit/:shopId", getEditShop);

router.post("/api/shop/create", postAddShop);

router.post("/api/shop/:shopId", postEditShop);

router.post("/api/shop/delete-shop/:shopId", postDeleteShop);

module.exports = router;
