const { Types, model, Schema } = require('mongoose');

const UserSchema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
);

const User = model('User', UserSchema);

module.exports = User;
