var mongoose = require("mongoose")
passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = mongoose.Schema({
    username: String,
    password: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    image: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
    },
    email: String,
    firstName: String,
    lastName: String,
    team: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "team"
    }]
});

UserSchema.plugin(passportLocalMongoose);
// UserSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model("User", UserSchema);