const express = require("express");
const router = express.Router();

const authController = require('../controllers/auth.controller');
const usersController = require('../controllers/users.controller');
const gamesController = require('../controllers/games.controller');

const verifySignUp = require("../middleware/verifySignUp");
const authJwt = require('../middleware/authJwt');

//auth
router.post('/auth/signup', [verifySignUp.checkDuplicateUsernameOrEmail], authController.signup);
router.post('/auth/signin', authController.signin);

//users
router.get('/users', [authJwt.verifyToken], usersController.users);

//games
router.post('/saveGame', [authJwt.verifyToken], gamesController.saveNewGame);
router.get('/getGames', [authJwt.verifyToken], gamesController.getGames);

module.exports = router;