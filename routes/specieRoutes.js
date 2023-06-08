import express from "express";
import {
    createOneSpecie,
    deleteOneSpecie,
    getSpecies,
    getOneSpecie,
    updateOneSpecie
} from "../controllers/specieController.js";


const router = express.Router();

router.get("/", getSpecies);
router.get("/:id", getOneSpecie);
router.patch("/:id", updateOneSpecie);
router.post("/", createOneSpecie);
router.delete("/:id", deleteOneSpecie);

export default router;