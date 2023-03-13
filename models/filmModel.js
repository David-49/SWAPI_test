import mongoose from "mongoose";

const { Schema } = mongoose;

const filmSchema = new Schema(
  {
    fields: {
      starship: [Number],
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
  },
  { collection: "films" }
);

const FilmModel = mongoose.model("Film", filmSchema);

export default FilmModel;
