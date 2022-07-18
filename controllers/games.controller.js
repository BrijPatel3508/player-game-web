const Schema = require('../models/mongooseConnection');
const Games = Schema.Games;
// const jwt = require("jsonwebtoken");
// const config = require("../configs/auth.config");

exports.saveNewGame = (req, res) => {
    const game = req.body;
    Games.create({
        playerOneName: Object.keys(game)[0],
        playerOneScore: Object.values(game)[0],
        playerTwoName: Object.keys(game)[1],
        playerTwoScore: Object.values(game)[1]
    })
        .then(game => {
            res.send({ message: "New Game Saved successfully!" });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

exports.getGames = (req, res) => {
    const game = req.body;
    Games.find({})
        .then(games => {
            if (games.length > 0) {
                res.send({
                    message: "Games Found Successfully!",
                    games
                });
            } else {
                res.send({
                    message: "No Games Found",
                    games
                });
            }
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};
