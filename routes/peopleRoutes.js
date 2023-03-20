import express from "express";
import {
    createOnePeople,
    deleteOnePeople,
    getPeoples,
    getOnePeople,
    updateOnePeople
} from "../controllers/peopleController.js";


const router = express.Router();

router.get("/", getPeoples);
router.get("/:id", getOnePeople);
router.patch("/:id", updateOnePeople);
router.post("/", createOnePeople);
router.delete("/:id", deleteOnePeople);

export default router;