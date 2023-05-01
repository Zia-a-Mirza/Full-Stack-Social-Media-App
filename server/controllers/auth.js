import bcrypt from "bycpt";
import jwt from "jsonwebtoken";
import User from "../models/User.js"

//User Registration
export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            friends,
            location,
            status,
        } = req.body;

        //Encrypt passwords
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            friends,
            location,
            status,
            viewedProfile: Math.floor(Math.random() * 50),
            impressions: Math.floor(Math.random() * 50)
        });

        const savedUser = await newUser.save();
        //Send a request succeeded status
        res.status(201).json(savedUser);

    } catch (err) {
        //Send an internal server error
        res.status(500).json({ error: err.message});
    }
}