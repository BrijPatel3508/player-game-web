const Schema = require('../models/mongooseConnection');
const User = Schema.Users;

exports.users = (req, res) => {
    User.find({})
        .then(users => {
            if (users.length === 0) {
                return res.status(404).send({ message: "Users Not found." });
            }
            res.status(200).send({
                message: "Users Found",
                status: "success",
                users
            });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};
