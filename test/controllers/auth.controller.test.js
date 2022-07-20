const AuthController = require('../../controllers/auth.controller');
const Schema = require('../../models/mongooseConnection');
const User = Schema.Users;

describe("AuthController Tests", () => {
    test("user signup", async () => {
        // arrange and act
        const mReq = {
            body: {
                username: "brij",
                email: "brij@gmail.com",
                password: "123123"
            }
        };
        const mRes = {};
        User.create = jest.fn().mockImplementation(() => {
            return Promise.resolve([]);
        });
        var result = AuthController.signup(mReq, mRes);
        expect(result)
    });

    test("user signin", async () => {
        // arrange and act
        const mReq = {
            body: {
                username: "brij",
                email: "brij@gmail.com",
                password: "123123"
            }
        };
        const mRes = {};
        User.findOne = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                username: "brij",
                email: "brij@gmail.com",
                password: "123123"
            });
        });
        const bcrypt = jest.createMockFromModule('bcryptjs');
        bcrypt.compareSync = () => true;
        var result = AuthController.signin(mReq, mRes);
        expect(result)
    });

    test("user signin - user not found", async () => {
        // arrange and act
        const mReq = {
            body: {
                username: "brij",
                email: "brij@gmail.com",
                password: "123123"
            }
        };
        const mRes = {};
        User.findOne = jest.fn().mockImplementation(() => {
            return Promise.resolve(null);
        });
        var result = AuthController.signin(mReq, mRes);
        expect(result)
    });

    test("user signin - password incorrect", async () => {
        // arrange and act
        const mReq = {
            body: {
                username: "brij",
                email: "brij@gmail.com",
                password: "123123"
            }
        };
        const mRes = {};
        User.findOne = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                username: "brij",
                email: "brij@gmail.com",
                password: "123123123"
            });
        });
        var result = AuthController.signin(mReq, mRes);
        expect(result)
    });
})