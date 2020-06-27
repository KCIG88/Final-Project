const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const usersSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  balance: { type: Number, require: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const users = mongoose.model('users', usersSchema);

module.exports = users;
