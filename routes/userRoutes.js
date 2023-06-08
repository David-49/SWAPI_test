import express from "express";
import {
  deleteOneUser,
  getUsers,
  getOneUser,
  updateOneUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getOneUser);
// pas prioritaire
router.patch("/:id", updateOneUser);
router.delete("/:id", deleteOneUser);

export default router;
