const Shop = require("../models/shop");
const Product = require("../models/product");

exports.getAllShops = (req, res, next) => {
  Shop.find()
    .then((shops) => {
      res.render("shop/shop-list", {
        pageTitle: "Shop List",
        shops,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getShop = (req, res, next) => {
  const shopId = req.params.shopId;
  Shop.findById(shopId)
    .then((shop) => {
      res.render("shop/shop-item.ejs", {
        pageTitle: "Shop Detail",
        shop,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAddShop = (req, res, next) => {
  res.render("shop/add-shop", {
    pageTitle: "Add Shop",
  });
};

exports.getEditShop = (req, res, next) => {
  const shopId = req.params.shopId;
  Shop.findById(shopId)
    .then((shop) => {
      res.render("shop/edit", {
        pageTitle: "Edit Shop",
        shop,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postAddShop = (req, res, next) => {
  const { name } = req.body;
  const shop = new Shop({
    name,
    createdAt: Date.now(),
  });
  shop
    .save()
    .then(() => {
      res.redirect("/api/shop/all");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postEditShop = (req, res, next) => {
  const { name } = req.body;
  const shopId = req.params.shopId;
  Shop.findById(shopId)
    .then((shop) => {
      (shop.name = name), (shop.createdAt = Date.now());
      return shop.save();
    })
    .then(() => {
      res.redirect(`${shopId}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postDeleteShop = (req, res, next) => {
  const shId = req.params.shopId;
  Product.deleteMany({ shopId: shId })
    .then(
      Shop.findByIdAndRemove(shId).then(() => {
        res.redirect("/api/shop/all");
      })
    )
    .catch((err) => {
      console.log(err);
    });
};
