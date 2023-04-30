import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 1,
            max: 75
        },
        lastName: {
            type: String,
            required: true,
            min: 1,
            max: 75
        },
        email: {
            type: String,
            required: true,
            max: 75,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: 4,
            max: 100
        },
        picturePath: {
            type: String,
            defualt: ""
        },
        bannerPath: {
            type: String,
            defualt: [] 
        },
        friends: {
            type: Array,
            required: true,
            min: 5,
            max: 100
        },
        location: String,
        status: String,
        viewedProfile: Number,
        impressions: Number
    }, {timestamps: true}
);

const User = mongoose.model("User", UserSchema);
export default User;