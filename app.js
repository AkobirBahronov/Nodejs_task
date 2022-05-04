const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shopRoutes = require("./routes/shop");
const productRoutes = require("./routes/product");

const MONGODB_URI =
  "mongodb+srv://Akobir:Yy0zzSNu3ObQUNTN@cluster0.7y0ax.mongodb.net/shop?retryWrites=true&w=majority";

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoutes);
app.use(productRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
