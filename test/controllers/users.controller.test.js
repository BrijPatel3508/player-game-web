const UsersContoller = require('../../controllers/users.controller');
const Schema = require('../../models/mongooseConnection');
const User = Schema.Users;

describe("UsersContoller Tests", () => {
    test("Addition of 2 numbers", async () => {
        // arrange and act
        const mReq = {};
        const mRes = {};
        User.find = jest.fn().mockImplementation(() => {
            return ([]);
        })
        var result = UsersContoller.users(mReq, mRes);
        expect(result)
    });
})