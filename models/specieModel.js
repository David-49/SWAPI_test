import mongoose from "mongoose";
import addLinks from "../middleware/mongoose/addLinks.js";

const { Schema } = mongoose;

const specieSchema = new Schema(
  {
    fields: {
      edited: String,
      classification: String,
      name: String,
      designation: String,
      created: String,
      eye_colors: String,
      skin_colors: String,
      language: String,
      hair_colors: String,
      homeworld: Number,
      average_lifespan: String,
      average_height: String,
      people: [Number],
    },
    model: String,
  },
  { collection: "species" }
);

addLinks(specieSchema, "people", "people");

specieSchema.set("toJSON", { virtuals: true });

const SpecieModel = mongoose.model("Specie", specieSchema);

export default SpecieModel;
