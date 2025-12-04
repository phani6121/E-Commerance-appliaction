const { compare } = require("@node-rs/bcrypt");
const userModel = require("../../model/userModel");
const jwt = require("jsonwebtoken");

async function userLoginController(req, res) {
    try {
        const { email, password } = req.body;

        if (!email) throw new Error("Please provide email");
        if (!password) throw new Error("Please provide password");

        const user = await userModel.findOne({ email });
        if (!user) throw new Error("User not found");

        // compare password using node-rs bcrypt
        const checkPassword = await compare(password, user.password);

        if (checkPassword) {
            const tokenData = {
                _id: user._id,
                email: user.email,
            };

            const token = jwt.sign(
                tokenData,
                process.env.TOKEN_SECRET_KEY,
                { expiresIn: "8h" }
            );

            // ✅ Updated cookie options
            const tokenOption = {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production", // only secure in production
                sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // recommended for modern browsers
            };

            res.cookie("token", token, tokenOption)
                .status(200)
                .json({
                    message: "Login successfully",
                    data: token,
                    success: true,
                    error: false,
                });

        } else {
            throw new Error("Please check password");
        }

    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = userLoginController;
