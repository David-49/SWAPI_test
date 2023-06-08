import express from "express";
import {
  createOneFilm,
  deleteOneFilm,
  getFilms,
  getOneFilm,
  updateOneFilm,
} from "../controllers/filmController.js";

const router = express.Router();

router.get("/", getFilms);
router.get("/:id", getOneFilm);
router.patch("/:id", updateOneFilm);
router.post("/", createOneFilm);
router.delete("/:id", deleteOneFilm);

export default router;
