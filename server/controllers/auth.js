import bcrypt from "brycpt";
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

    } catch (err) {

    }
}