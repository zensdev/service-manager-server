const mongoose = require("mongoose");
const { Schema } = mongoose;

const transactionSchema = new Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, require: true },
  diachigd: { type: String, default: "" },
  mota: { type: String, default: "" },
  danhgia: { type: String, default: "" },
  ngaybatdau: { type: Date },
  hanhoanthanh: { type: Date },
  songaygd: { type: Number },
  ketquagd: { type: String, default: "" },
  guiemail: { type: Boolean, default: false },
  tailieugiaodich: { type: String, default: "" },
  loaigd: { type: mongoose.Schema.Types.ObjectId, ref: "TransactionType" },
  trangthaigd: { type: mongoose.Schema.Types.ObjectId, ref: "TransactionStatus" },
  khachhang: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  nguoilienhe: { type: mongoose.Schema.Types.ObjectId, ref: "Contact" },
  nhanvien: { type: mongoose.Schema.Types.ObjectId, ref: "Staff" },
});

module.exports = mongoose.model("Transaction", transactionSchema);