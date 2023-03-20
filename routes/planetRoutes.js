import express from "express";
import {
    createOnePlanet,
    deleteOnePlanet,
    getPlanets,
    getOnePlanet,
    updateOnePlanet
} from "../controllers/planetController.js";


const router = express.Router();

router.get("/", getPlanets);
router.get("/:id", getOnePlanet);
router.patch("/:id", updateOnePlanet);
router.post("/", createOnePlanet);
router.delete("/:id", deleteOnePlanet);

export default router;