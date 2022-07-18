const mongoose = require("mongoose");
const usersSchemaJson = require("../schemas/usersSchema.json");
const gameSchemaJson = require("../schemas/gameSchema.json");

mongoose.connect("mongodb://localhost:27017/app").then(() => {
    console.log("DB connection successfull");
});

const usersSchema = new mongoose.Schema(usersSchemaJson);
const gameSchema = new mongoose.Schema(gameSchemaJson);

exports.Users = mongoose.model('users', usersSchema);
exports.Games = mongoose.model('games', gameSchema);