import express from "express";
import {
    getTransports,
    getOneTransport,
    updateOneTransport,
    createOneTransport,
    deleteOneTransport,
} from "../controllers/transportController.js";

const router = express.Router();

router.get("/", getTransports);
router.get("/:id", getOneTransport);
router.patch("/:id", updateOneTransport);
router.post("/", createOneTransport);
router.delete("/:id", deleteOneTransport);

export default router;