import mongoose from "mongoose";
import addLinks from "../middleware/mongoose/addLinks.js";

const { Schema } = mongoose;

const filmSchema = new Schema({
  fields: {
    starships: [Number],
    edited: String,
    vehicles: [Number],
    planets: [Number],
    producer: String,
    title: String,
    created: String,
    episode_id: Number,
    director: String,
    release_date: String,
    opening_crawl: String,
    characters: [Number],
    species: [Number],
  },
  model: String,
});

addLinks(filmSchema, "planets", "planets");
addLinks(filmSchema, "starships", "starships");
addLinks(filmSchema, "species", "species");
addLinks(filmSchema, "characters", "characters");
addLinks(filmSchema, "vehicles", "vehicles");

filmSchema.set("toJSON", { virtuals: true });

const FilmModel = mongoose.model("Film", filmSchema, "films");

export default FilmModel;
