const userModel = require("../../model/userModel");

async function updateUser(req, res) {
    try {
        // Assuming req.body contains the userId, name, email, and role
        const { userId, name, email, role } = req.body;

        const payload = {
            ...(email && { email: email }),
            ...(name && { name: name }),
            ...(role && { role: role }),
        };

        // Use userId to find the user, not sessionUser
        const user = await userModel.findById(userId);  // Use userId here

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                error: true,
                success: false
            });
        }

        console.log("user.role", user.role);

        // Update user with the payload
        const updateUser = await userModel.findByIdAndUpdate(userId, payload, { new: true });

        res.json({
            data: updateUser,
            message: "userUpdated",
            success: true,
            error: false
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}
module.exports = updateUser;