const mongoose = require("mongoose");
const { Schema } = mongoose;

const contractSchema = new Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  mahd: { type: String, require: true },
  giatrihd: { type: Number, require: true },
  ngaybatdau: { type: Date, require: true },
  ngayketthuc: { type: Date, require: true },
  canhbaohh: { type: Boolean, default: false },
  hinhthuctt: { type: String, default: "Trả trước" },
  loaitt: { type: String, default: "Tiền mặt" },
  sotientt: { type: Number },
  ngaytt: { type: Date },
  soquy: { type: Number },
  xacnhan: { type: Boolean, default: false },
  ghichu: { type: String, default: "" },
  guiemail: { type: Boolean, default: false },
  ghichuthuong: { type: String, default: "" },
  loadhd: { type: mongoose.Schema.Types.ObjectId, ref: "ContractType" },
  nhanvien: { type: mongoose.Schema.Types.ObjectId, ref: "Staff" },
  doanhsotinhcho: { type: mongoose.Schema.Types.ObjectId, ref: "Staff" },
  khachhang: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  donhang: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
});

module.exports = mongoose.model("Contract", contractSchema);