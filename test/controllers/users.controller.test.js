const UsersContoller = require('../../controllers/users.controller');
const Schema = require('../../models/mongooseConnection');
const User = Schema.Users;

describe("UsersContoller Tests", () => {
    test("find users with empty array", async () => {
        // arrange and act
        const mReq = {};
        const mRes = {};
        User.find = jest.fn().mockImplementation(() => {
            return Promise.resolve([]);
        });
        let result = UsersContoller.users(mReq, mRes);
        expect(result);
    });

    test("find user", async () => {
        // arrange and act
        const mReq = {};
        const mRes = {};
        User.find = jest.fn().mockImplementation(() => {
            return Promise.resolve([
                {
                    "username": "arjun",
                    "email": "arjun@gmail.com",
                    "password": "$2a$08$CYzW0B/BXrgqPZrURAn7x.O4AQ5tklkCO2yNr9uJ5eYNx/e9NXndq",
                    "__v": 0
                }
            ]);
        });
        var result = UsersContoller.users(mReq, mRes);
        expect(result);
    });
})