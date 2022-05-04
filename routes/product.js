const express = require("express");
const {
  getAllProducts,
  getAddProduct,
  getProduct,
  postAddProduct,
  getProductsByShopId,
} = require("../controllers/product");

const router = express.Router();

router.get("/api/product/all", getAllProducts);

router.get("/api/product/create", getAddProduct);

router.get("/api/product/:productId", getProduct);

router.get("/api/product/filter/:shopId", getProductsByShopId);

router.post("/api/product/create", postAddProduct);

module.exports = router;
