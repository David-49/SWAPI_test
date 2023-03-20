import express from "express";
import {
    createOneVehicle,
    deleteOneVehicle,
    getVehicles,
    getOneVehicle,
    updateOneVehicle
} from "../controllers/vehicleController.js";


const router = express.Router();

router.get("/", getVehicles);
router.get("/:id", getOneVehicle);
router.patch("/:id", updateOneVehicle);
router.post("/", createOneVehicle);
router.delete("/:id", deleteOneVehicle);

export default router;