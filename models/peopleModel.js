import mongoose from "mongoose";

const { Schema } = mongoose;

const peopleSchema = new Schema(
  {
    fields: {
      name: String,
      height: String,
      mass: String,
      hair_color: String,
      skin_color: String,
      eye_color: String,
      birth_year: String,
      gender: String,
      created: String,
      edited: String,
      homeworld: Number,
    },
    model: String,
  },
  { collection: "people" }
);

const PeopleModel = mongoose.model("People", peopleSchema);

export default PeopleModel;
