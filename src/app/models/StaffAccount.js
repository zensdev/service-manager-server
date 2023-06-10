const mongoose = require("mongoose");
const { Schema } = mongoose;

const staffAccountSchema = new Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  username: { type: String, require: true },
  password: { type: String, require: true },
  role: { type: String, default: "nhanvien" },
  nhanvien: { type: mongoose.Schema.Types.ObjectId, ref: "Staff" },
});

module.exports = mongoose.model("StaffAccount", staffAccountSchema);