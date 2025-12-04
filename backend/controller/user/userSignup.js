const userModel = require("../../model/userModel");
const { hash } = require("@node-rs/bcrypt");

async function userSignupController(req, res) {
    try {
        const { name, email, password } = req.body;

        if (!name) throw new Error("Please provide name");
        if (!email) throw new Error("Please provide email");
        if (!password) throw new Error("Please provide password");

        const userExists = await userModel.findOne({ email });
        if (userExists) throw new Error("User already exists");

        // hash password using node-rs bcrypt
        const hashedPassword = await hash(password, 10);

        if (!hashedPassword) throw new Error("Something is wrong");

        const payload = {
            ...req.body,
            role: "GENERAL",
            password: hashedPassword,
        };

        const newUser = new userModel(payload);
        const savedUser = await newUser.save();

        res.status(201).json({
            data: savedUser,
            success: true,
            error: false,
            message: "User created Successfully",
        });

    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = userSignupController;
