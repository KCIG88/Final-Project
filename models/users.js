const mongoose = require ("mongoose");
const Schema = mongoose.Schema;


const usersSchema = new Schema({
    userName: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
    });
  
  const Users = mongoose.model("Users", usersSchema);
  
  module.exports = Users;
  