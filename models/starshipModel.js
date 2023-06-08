import mongoose from "mongoose";
import addLinks from "../middleware/mongoose/addLinks.js";

const { Schema } = mongoose;

const starshipSchema = new Schema(
  {
    fields: {
      MGLT: String,
      starship_class: String,
      hyperdrive_rating: String,
      pilots: [String],
    },
    model: String,
  },
  { collection: "starships" }
);

addLinks(starshipSchema, "pilots", "pilots");

starshipSchema.set("toJSON", { virtuals: true });

const StarshipModel = mongoose.model("Starship", starshipSchema);

export default StarshipModel;
