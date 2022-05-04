const Product = require("../models/product");
const Shop = require("../models/shop");

exports.getAllProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.render("product/product-list", {
        pageTitle: "Product List",
        products,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.findById(productId)
    .then((product) => {
      const shopId = product.shopId;
      Shop.findById(shopId)
        .then((shop) => {
          res.render("product/product-item.ejs", {
            pageTitle: "Product Detail",
            product,
            shop,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAddProduct = (req, res, next) => {
  Shop.find()
    .then((shops) => {
      res.render("product/add-product", {
        pageTitle: "Add Product",
        shops,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProductsByShopId = (req, res, next) => {
  const shId = req.params.shopId;
  Product.find({ shopId: shId })
    .then((products) => {
      Shop.findById(shId)
        .then((shop) => {
          res.render("product/product-list", {
            pageTitle: `${shId} Products`,
            products,
            shop,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postAddProduct = (req, res, next) => {
  const { name, description, shopId } = req.body;
  const product = new Product({
    name,
    description,
    createdAt: Date.now(),
    shopId,
  });
  product
    .save()
    .then(() => {
      res.redirect("/api/product/all");
    })
    .catch((err) => {
      console.log(err);
    });
};
