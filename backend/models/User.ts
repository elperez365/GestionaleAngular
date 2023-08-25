const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

let Users = new Schema(
  {
    nome: {
      type: String,
    },
    numero: {
      type: String,
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String,
    },
  },
  {
    collection: "authUsers",
  }
);

Users.plugin(uniqueValidator, { message: "Email already in use." });
module.exports = mongoose.model("User", Users);
