import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
    getUsers,
    getUserFriends,
    addRemoveFriend
} from "../controllers/users.js";


const router = express.Router();

//Read
router.get("/:id", verifyToken, getUsers);
router.get("/:id", verifyToken, getUserFriends);

//Update
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
