const userModel = require('../model/user');

const login = async (req, res) => {
    try {
        const { email, password } = req.query;

        const [user] = await userModel.find({ email }).exec();

        if (user !== undefined) {
            if (user.password === password) {
                res.json({
                    data: user,
                    login: true
                })
            } else {
                res.json({
                    message: "email or password dose not match please try again",
                    status: true,
                    login: false
                })
            }
        } else {
            res.json({
                message: "User not found please check your email",
                status: true,
                login: false
            })
        }

    } catch (err) {
        console.log(err);
        res.json({
            error: err
        })
    }
}

module.exports = login