import express from "express";
import {
    getUsers,
    getUserFriends,
    addRemoveFriend
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";


const router = express.Router();

//Read
router.get("/:id", verifyToken, getUsers);
router.get("/:id", verifyToken, getUserFriends);

//Update
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
