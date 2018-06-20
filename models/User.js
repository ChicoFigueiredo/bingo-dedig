var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    eMail: { type: String, unique: true, index: true },
    name: String,
    useridGoogle: String,
    useridGitHub: String,
    updated_at: { type: Date, default: Date.now },
});

UserSchema.statics.findOrCreate = require("find-or-create");

module.exports = mongoose.model('User', UserSchema);