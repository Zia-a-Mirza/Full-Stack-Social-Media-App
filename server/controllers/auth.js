import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

//User Registration
export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, friends, location, bio } =
      req.body;

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
      bio,
      viewedProfile: Math.floor(Math.random() * 50),
      impressions: Math.floor(Math.random() * 50),
    });

    const savedUser = await newUser.save();
    //Send a request succeeded status
    res.status(201).json(savedUser);
  } catch (err) {
    //Send an internal server error
    res.status(500).json({ error: err.message });
  }
};

//User Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
