const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    profilePic: String,
    role: String
}, {
    timestamps: true

    // What does timestamps: true do?
    // createdAt: This field stores the timestamp of when the document was first created.
    // updatedAt: This field stores the timestamp of the most recent update to the document.

})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel;