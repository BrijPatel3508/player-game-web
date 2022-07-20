const gamesController = require('../../controllers/games.controller');
const Schema = require('../../models/mongooseConnection');
const Games = Schema.Games;

describe("GamesController Tests", () => {
    test("get all games with empty array", async () => {
        // arrange and act
        const mReq = {};
        const mRes = {};
        Games.find = jest.fn().mockImplementation(() => {
            return Promise.resolve([]);
        });
        var result = gamesController.getGames(mReq, mRes);
        expect(result)
    });
    test("get all games", async () => {
        // arrange and act
        const mReq = {};
        const mRes = {};
        Games.find = jest.fn().mockImplementation(() => {
            return Promise.resolve([
                {
                    "playerOneName": "yash",
                    "playerOneScore": "4",
                    "playerTwoName": "brij",
                    "playerTwoScore": "6",
                    "__v": 0
                }
            ]);
        });
        var result = gamesController.getGames(mReq, mRes);
        expect(result)
    });

    test("save game", async () => {
        // arrange and act
        const mReq = {
            body: {
                "playerOneName": "yash",
                "playerOneScore": "4",
                "playerTwoName": "brij",
                "playerTwoScore": "6",
                "__v": 0
            }
        };
        const mRes = {};
        Games.create = jest.fn().mockImplementation(() => {
            return Promise.resolve({ message: "New Game Saved successfully!" });
        });
        var result = gamesController.saveNewGame(mReq, mRes);
        expect(result)
    });
})