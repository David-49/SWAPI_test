import express from "express";
import {
    createOneStarship,
    deleteOneStarship,
    getStarships,
    getOneStarship,
    updateOneStarship
} from "../controllers/starshipController.js";


const router = express.Router();

router.get("/", getStarships);
router.get("/:id", getOneStarship);
router.patch("/:id", updateOneStarship);
router.post("/", createOneStarship);
router.delete("/:id", deleteOneStarship);

export default router;