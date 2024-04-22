const moongose = require("mongoose");

const productSchema = new moongose.Schema(
  {
    title: { type: String, required: true},
    desc: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    size: { type: String },
    brand: { type: String },
    price: { type: String, required: true },
    performance: { type: String, required: true },
    occasion: { type: Array },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = moongose.model("Product", productSchema);
